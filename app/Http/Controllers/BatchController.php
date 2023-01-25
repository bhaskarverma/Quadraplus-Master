<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Batch;
use App\Models\BatchGroup;
use App\Models\Course;
use App\Models\CourseGroup;
use App\Models\Lead;
use App\Models\BatchSchedule;
use App\Models\BatchAttendance;
use App\Models\User;
use App\Models\BatchPaymentHistory;
use App\Models\BatchType;

class BatchController extends Controller
{
    public function createBatch(Request $request)
    {
        $batch = new Batch();
        $batch->location = $request->location;
        $batch->start_date = $request->start_date;
        $batch->course_id = $request->course_id;
        $batch->batch_type_id = $request->batch_type;
        $batch->trainer_id = $request->trainer_id;
        $batch->mode = $request->mode;
        $batch->save();

        $schedule_done = $this->generateScheduleForBatch($batch);

        if($schedule_done) {
            return response()->json([
                'message' => 'Batch created successfully',
                'status' => 'success'
            ], 201);
        } else {
            $batch->delete();
            return response()->json([
                'message' => 'Cannot Create Batch. Too Many Conflict in Schedule Creation',
                'status' => 'error'
            ], 201);
        }

    }

    private function getHolidays()
    {
        $api_endpoint = "https://calendarific.com/api/v2/holidays";
        $api_key = "f7a1b49a6d279ce35515dbeb88f5f95631e67eb8";
        $country = "AE";

        $current_year = date('Y');
        $next_year = date('Y', strtotime('+1 year'));

        // Send a curl request to the API endpoint to get the holidays for the current month
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $api_endpoint . "/?api_key=" . $api_key . "&country=" . $country . "&year=" . $current_year);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $output = curl_exec($ch);
        curl_close($ch);

        $holidays_curr_year = json_decode($output, true);

        // Send a curl request to the API endpoint to get the holidays for the next month
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $api_endpoint . "/?api_key=" . $api_key . "&country=" . $country . "&year=" . $next_year);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $output = curl_exec($ch);
        curl_close($ch);

        $holidays_next_year = json_decode($output, true);

        // Return data format
        // {
            //     "meta": {
                //         "code": 200
                //     },
                //     "response": {
                    //         "holidays": [
                        //             {
                            //                 "name": "Name of holiday goes here",
                            //                 "description": "Description of holiday goes here",
                            //                 "date": {
                                //                     "iso": "2018-12-31",
                                //                     "datetime": {
                                    //                         "year": 2018,
                                    //                         "month": 12,
                                    //                         "day": 31
                                    //                     }
        //                 },
        //                 "type": [
            //                     "Type of Observance goes here"
            //                 ]
            //             }
            //         ]
            //     }
            // }

            // Return an array of dates of holidays
            $holidays_array = [];

            foreach($holidays_curr_year['response']['holidays'] as $holiday) {
                $holidays_array[] = $holiday['date']['iso'];
            }

            foreach($holidays_next_year['response']['holidays'] as $holiday) {
                $holidays_array[] = $holiday['date']['iso'];
            }

            return $holidays_array;
        }

        private function generateScheduleForBatch($batch)
        {
            error_log("Generating Schedule");
            $batch_type = BatchType::find($batch->batch_type_id);
            $batch_hours = Course::find($batch->course_id)->duration_in_hours;
        $start_date = date('Y-m-d', strtotime($batch->start_date));
        $start_time = $batch_type->start_time;
        $end_time = $batch_type->end_time;
        $days_of_week = $batch_type->days;
        $days_of_week_array = explode('/', $days_of_week);
        // Daily Hours is end time - start time in hours
        $daily_hours = (strtotime($end_time) - strtotime($start_time)) / 3600;

        // Rules for schedule creation
        // 1. Batch should not be created on a holiday, Saturday or Sunday. Holidays are standard UAE holidays
        // 2. Batch should not be created when a trainer is already assigned to another batch at the same time
        // 3. Batch should not be created when a batch is already assigned to a trainer at the same time

        //Create schedule for the batch
        $schedule = [];
        $schedule_date = $start_date;
        $schedule_time = $start_time;

        $holidays = $this->getHolidays();

        $schedule_conflict = false;

        error_log(implode(',', $days_of_week_array));

        while($batch_hours > 0) {
            // Check if the schedule date is a holiday
            if(in_array($schedule_date, $holidays)) {
                $schedule_date = date('Y-m-d', strtotime($schedule_date . ' +1 day'));
                error_log("Holiday");
                continue;
            }

            // // Check if the schedule date is a Saturday or Sunday
            // if(date('N', strtotime($schedule_date)) > 5) {
            //     $schedule_conflict = true;
            //     break;
            // }

            // Check if the schedule date is a day of the week for the batch
            if(!in_array(date('l', strtotime($schedule_date)), $days_of_week_array)) {
                error_log(date('l', strtotime($schedule_date)));
                $schedule_date = date('Y-m-d', strtotime($schedule_date . ' +1 day'));
                error_log("Not a day of the week");
                continue;
            }

            // Check for Trainer Schedule Conflict
            // Fetch all batches for the trainer
            $trainer_batches = Batch::where('trainer_id', $batch->trainer_id)->get();

            // Loop through all batches and check if trainer's other batch is overlapping with the current batch
            // Overlapping examples
            // 1. Batch 1: 9:00 AM - 11:00 AM and Batch 2: 10:00 AM - 12:00 PM - Overlapping
            // 2. Batch 1: 9:00 AM - 11:00 AM and Batch 2: 11:00 AM - 13:00 AM - Not Overlapping
            // 3. Batch 1: 9:00 AM - 11:00 AM and Batch 2: 8:00 AM - 10:00 AM - Overlapping
            foreach($trainer_batches as $trainer_batch) {
                $trainer_batch_schedule = BatchSchedule::where('batch_id', $trainer_batch->id)->get();
                // Batch Schedule Properties -> batch_id, class_datetime, class_end_datetime
                foreach($trainer_batch_schedule as $trainer_batch_schedule_item) {
                    if($schedule_date == date('Y-m-d', strtotime($trainer_batch_schedule_item->class_datetime))) {
                        if($schedule_time >= date('H:i:s', strtotime($trainer_batch_schedule_item->class_datetime)) && $schedule_time < date('H:i:s', strtotime($trainer_batch_schedule_item->class_end_datetime))) {
                            $schedule_conflict = true;
                            break;
                        }

                        if($end_time > date('H:i:s', strtotime($trainer_batch_schedule_item->class_datetime)) && $end_time <= date('H:i:s', strtotime($trainer_batch_schedule_item->class_end_datetime))) {
                            $schedule_conflict = true;
                            break;
                        }

                        if($schedule_time < date('H:i:s', strtotime($trainer_batch_schedule_item->class_datetime)) && $end_time > date('H:i:s', strtotime($trainer_batch_schedule_item->class_datetime))) {
                            $schedule_conflict = true;
                            break;
                        }
                    }
                }
            }

            if($schedule_conflict)
            {
                break;
            }
            if($daily_hours == $batch_hours - 1)
            {
                $schedule[] = [
                    'batch_id' => $batch->id,
                    'class_datetime' => $schedule_date . ' ' . $schedule_time,
                    'class_end_datetime' => $schedule_date . ' ' . date('H:i:s', strtotime($end_time . ' +1 hour'))
                ];

                $batch_hours = $batch_hours - $daily_hours - 1;
            }
            else
            {
                if($batch_hours < $daily_hours)
                {
                    $schedule[] = [
                        'batch_id' => $batch->id,
                        'class_datetime' => $schedule_date . ' ' . $schedule_time,
                        'class_end_datetime' => $schedule_date . ' ' . date('H:i:s', strtotime($schedule_time . ' +' . $batch_hours . ' hours'))
                    ];

                    $batch_hours = 0;
                }
                else
                {
                    $schedule[] = [
                        'batch_id' => $batch->id,
                        'class_datetime' => $schedule_date . ' ' . $schedule_time,
                        'class_end_datetime' => $schedule_date . ' ' . $end_time
                    ];

                    $batch_hours = $batch_hours - $daily_hours;
                }
            }

            $schedule_date = date('Y-m-d', strtotime($schedule_date . ' +1 day'));
        }

        if($schedule_conflict)
        {
            return false;
        }

        foreach($schedule as $schedule_item) {
            $batchSchedule = new BatchSchedule;
            $batchSchedule->batch_id = $schedule_item['batch_id'];
            $batchSchedule->class_datetime = $schedule_item['class_datetime'];
            $batchSchedule->class_end_datetime = $schedule_item['class_end_datetime'];
            $batchSchedule->save();
        }

        return true;
    }

    public function deleteBatchType(Request $request)
    {
        $batch_type = BatchType::find($request->id);
        $batch_type->delete();

        return response()->json([
            'success' => true,
            'message' => 'Batch Type Deleted Successfully'
        ]);
    }

    public function addBatchType(Request $request)
    {
        $batch_type = new BatchType();
        $batch_type->name = $request->name;

        $days = '';
        foreach($request->days as $day) {
            $days .= $day . '/';
        }
        $days = rtrim($days, '/');

        $batch_type->days = $days;

        $batch_type->start_time = $request->start;
        $batch_type->end_time = $request->end;
        $batch_type->save();

        return response()->json([
            'message' => 'Batch Type Added Successfully',
            'status' => 'success'
        ]);
    }

    public function getBatchTypes()
    {
        $batch_types = BatchType::all();

        return response()->json([
            'message' => 'Batch Types Fetched Successfully',
            'status' => 'success',
            'data' => $batch_types
        ]);
    }

    public function getActiveBatches()
    {
        // Active Batches are the batches whose last batch schedule's class end datetime is greater than current datetime
        // And whose first batch schedule's class datetime is less than current datetime
        $batches = Batch::whereHas('batchSchedules', function($query) {
            $query->where('class_end_datetime', '>', now());
        })->whereHas('batchSchedules', function($query) {
            $query->where('class_datetime', '<', now());
        })->get();

        // Add Course Name and Batch Type Name to the batch object
        foreach($batches as $batch) {
            $batch->course_name = Course::find($batch->course_id)->name;
            $batch->batch_type = BatchType::find($batch->batch_type_id)->name;
        }

        return response()->json([
            'message' => 'Active Batches Fetched Successfully',
            'status' => 'success',
            'batches' => $batches
        ]);
    }

    public function downloadBatchSchedule($batch_id)
    {
        // Get the batch schedule by batch_id
        $batch_schedule = BatchSchedule::where('batch_id', $batch_id)->get();

        // Create a CSV file with the batch schedule
        $file = fopen('php://output', 'w');
        fputcsv($file, ['Class Date', 'Class Time', 'Class End Time']);

        foreach ($batch_schedule as $schedule) {
            fputcsv($file, [
                date('d-m-Y', strtotime($schedule->class_datetime)),
                date('H:i', strtotime($schedule->class_datetime)),
                date('H:i', strtotime($schedule->class_end_datetime))
            ]);
        }

        fclose($file);

        // Set the headers for the CSV file
        $headers = [
            'Content-Type' => 'text/csv',
            'Content-Disposition' => 'attachment; filename="batch_schedule.csv"',
        ];

        return response()->streamDownload(function () use ($file) {
            fpassthru($file);
        }, 'batch_schedule.csv', $headers);
    }

    public function deleteBatch(Request $request)
    {
        $batch = Batch::find($request->id);
        $batch->delete();
        return response()->json(['success' => true, 'message' => 'Batch deleted successfully']);
    }

    public function batchAttendance(Request $request)
    {
        $batch_id = $request->batch_id;
        $attendance = $request->attendance;

        // Remove all the previous attendance
        BatchAttendance::where('batch_id', $batch_id)->delete();

        // Add the attendance
        foreach($attendance as $a)
        {
            $ba = new BatchAttendance;
            $ba->batch_id = $batch_id;
            $ba->participant_id = $a['participant'];
            $ba->present = $a['present'];
            $ba->save();
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Attendance Recorded Successfully'
        ]);
    }

    public function fetchAttendance($batchId)
    {
        $ba = BatchAttendance::where('batch_id', $batchId)->get();

        return response()->json([
            'status' => 'success',
            'data' => $ba
        ]);
    }

    public function getTrainers()
    {
        $trainers = User::where('type', 'trainer')->get();

        return response()->json([
            'status' => 'success',
            'data' => $trainers
        ]);
    }

    public function getBatchesForCourse(Request $request)
    {
        $start_date = $request->start_date;
        $end_date = $request->end_date;
        $batches = Batch::where('course_id', $request->course_id)->whereBetween('start_date', [$start_date, $end_date])->get();

        foreach($batches as $batch) {
            $batch->course_name = Course::find($batch->course_id)->name;
        }

        return response()->json(['success' => true, 'batches' => $batches]);
    }

    public function fetchAvailableBatches(Request $request)
    {
        $course_id = $request->course_id;

        $batch_id = $request->batch_id;

        // Fetch all batches where the course_id is equal to the course_id passed in the request and the start_date is greater than the current datetime
        // $batches = Batch::where('course_id', $course_id)->where('start_date', '>', now())->get();

        // Fetch all unique batches where batch schedule's class datetime is greater than the current datetime
        $batches = Batch::whereHas('batchSchedules', function($query) {
            $query->where('class_datetime', '>', now());
        })->get();

        // remove duplicate batches
        $batches = $batches->unique('id');

        //If batch_id is present, then remove the batch from the batches array
        if($batch_id) {
            $batches = $batches->reject(function($batch) use ($batch_id) {
                return $batch->id == $batch_id;
            });
        }

        foreach($batches as $batch) {
            $batch->course_name = Course::find($batch->course_id)->name;
        }

        return response()->json(['success' => true, 'batches' => array_values($batches->toArray())]);
    }

    public function getAllBatches(Request $request)
    {
        $start_date = $request->start_date;
        $end_date = $request->end_date;
        $batches = Batch::whereBetween('start_date', [$start_date, $end_date])->get();

        foreach($batches as $batch) {
            $batch->course_name = Course::find($batch->course_id)->name;
            $batch->trainer_name = User::find($batch->trainer_id)->name;
            $batch->batch_type = BatchType::find($batch->batch_type_id)->name;
        }

        return response()->json(['success' => true, 'batches' => $batches]);
    }

    public function updateBatch(Request $request)
    {
        $batch = Batch::find($request->id);
        $batch->location = $request->location;
        $batch->start_date = $request->start_date;
        $batch->course_id = $request->course_id;
        $batch->save();
        return response()->json(['success' => true, 'message' => 'Batch updated successfully']);
    }

    public function getBatchGroups(Request $request)
    {
        $batchGroups = BatchGroup::where('batch_id', $request->batch_id)->get();

        foreach($batchGroups as $batchGroup) {
            $batchGroup->participant = Lead::find($batchGroup->participant_id)->name;
            // total_amt = quoted price in Lead - Referral Discount from BatchPaymentHistory where payment_mode = 'Referral'
            $batchGroup->total_amt = Lead::find($batchGroup->participant_id)->quoted_price - BatchPaymentHistory::where('batch_group_id', $batchGroup->id)->where('payment_mode', 'Referral')->sum("amount");
            // paid_amt = Sum of all amount in BatchPaymentHistory for this batch_group_id except when payment_type = 'Referral'
            $batchGroup->paid_amt = BatchPaymentHistory::where('batch_group_id', $batchGroup->id)->where('payment_mode', '!=', 'Referral')->sum('amount');
            $batchGroup->payment_status = $batchGroup->paid_amt == $batchGroup->total_amt ? 'Paid Completely' : 'Partial Payment';
            $batchGroup->paymentDetails = BatchPaymentHistory::where('batch_group_id', $batchGroup->id)->get();
        }

        return response()->json(['success' => true, 'groups' => $batchGroups]);
    }

    public function addToBatch(Request $request)
    {
        $batchGroup = new BatchGroup();
        $batchPayment = new BatchPaymentHistory();
        $batchGroup->batch_id = $request->batch_id;
        $batchGroup->participant_id = $request->participant_id;
        $batchGroup->save();
        $batchPayment->batch_group_id = $batchGroup->id;
        $batchPayment->amount = $request->paid_amt;
        $batchPayment->payment_mode = $request->payment_method;
        $batchPayment->save();
        return response()->json(['success' => true, 'message' => 'Participant added to batch successfully']);
    }

    public function addToBatchMultiple(Request $request)
    {
        $batchIds = $request->batch_id;
        $participantId = $request->participant_id;

        $batchGroup = new BatchGroup();
        $batchPayment = new BatchPaymentHistory();

        $batchGroup->batch_id = $batchIds[0];
        $batchGroup->participant_id = $participantId;
        $batchPayment->batch_group_id = $batchGroup->id;
        $batchPayment->amount = $request->paid_amt;
        $batchPayment->payment_mode = $request->payment_method;

        $batchGroup->save();
        $batchPayment->save();

        $count = count($batchIds);

        $lead = Lead::find($participantId);

        // duplicate the lead and create a new lead for each batch
        for($i = 1; $i < $count; $i++) {
            $newLead = $lead->replicate();
            $newLead->save();

            $batchGroup = new BatchGroup();
            $batchGroup->batch_id = $batchIds[$i];
            $batchGroup->participant_id = $newLead->id;
            $batchGroup->save();
        }

        return response()->json(['success' => true, 'message' => 'Participant added to batch(es) successfully']);
    }

    public function changeBatch(Request $request)
    {
        $batchGroup = BatchGroup::find($request->batch_group_id);
        $batchGroup->batch_id = $request->batch_id;
        $batchGroup->save();
        return response()->json(['success' => true, 'message' => 'Batch changed successfully']);
    }

    public function removeFromBatch(Request $request)
    {
        $batchGroup = BatchGroup::find($request->batch_group_id);
        $batchGroup->delete();
        return response()->json(['success' => true, 'message' => 'Participant removed from batch successfully']);
    }

    public function getLeadsRemainingInBatch($batchId)
    {
        // Remaining Leads are the Converted leads currently not assigned to the batch with the batch id
        $remainingLeads = Lead::where('status', 'Converted')->whereNotIn('id', function($query) use ($batchId) {
            $query->select('participant_id')->from('batch_groups')->where('batch_id', $batchId);
        })->get();

        return response()->json(['success' => true, 'leads' => $remainingLeads]);
    }

    public function addPayment(Request $request)
    {
        $batchPayment = new BatchPaymentHistory();
        $batchPayment->batch_group_id = $request->batch_group_id;
        $batchPayment->amount = $request->paid_amt;
        $batchPayment->payment_mode = $request->payment_method;
        $batchPayment->save();
        return response()->json(['success' => true, 'message' => 'Payment added successfully']);
    }

}
