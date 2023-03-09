<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lead;
use App\Models\User;
use App\Models\Course;
use App\Models\CourseGroup;
use App\Models\BatchGroup;
use App\Models\BatchPaymentHistory;
use App\Models\LeadFollowup;

use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function TotalLeadsData()
    {
        // get all leads from 1st of this month to current date
        $leads = Lead::whereMonth('created_at', date('m'))
            ->whereYear('created_at', date('Y'))
            ->get();

        // $res is a 3 dimensional array => [associate_id => [course_id => [count => cnt, leadCountForEachDay => [day1, day2, ...]]]]
        $res = [];

        //$res['total'] = $leads->count();

        //return response()->json($res);

        // Loop through all leads and add to $res
        foreach($leads as $lead)
        {
            // If associate_id is not present in $res, add it
            if(!array_key_exists($lead->assigned_to, $res))
            {
                if($lead->assigned_to == null)
                {
                    $lead->assigned_to = 0;
                }

                $res[$lead->assigned_to] = [];
            }

            // If course_id is not present in $res[associate_id], add it
            if(!array_key_exists($lead->course_id, $res[$lead->assigned_to]))
            {
                $res[$lead->assigned_to][$lead->course_id] = [];
                $res[$lead->assigned_to][$lead->course_id]['count'] = 0;
            }

            // Increment the count for $res[associate_id][course_id]
            $res[$lead->assigned_to][$lead->course_id]['count']++;
        }

        // Loop through all the dates from start to current inclusive,
        // Fetch all the leads for that date in current month and add to array

        $start_date = 1;
        $current_date = idate('d');

        foreach($res as $assigned_to => $data)
        {
            foreach($data as $course_id => $data1)
            {
                $res[$assigned_to][$course_id]['leadCount'] = [];

                $assigned_to_new = $assigned_to == 0 ? null : $assigned_to;

                for ($i = $start_date; $i <= $current_date; $i++) {
                    $res[$assigned_to][$course_id]['leadCount'][] = Lead::where('assigned_to', $assigned_to_new)
                        ->where('course_id', $course_id)
                        ->whereMonth('created_at', date('m'))
                        ->whereYear('created_at', date('Y'))
                        ->whereDay('created_at', $i)
                        ->count();
                }
            }
        }

        return response()->json($res);
    }

    public function TotalSales()
    {
        $start_date = 1;
        $current_date = idate('d');

        $total_sales = [];
        $total_sales_amount = 0;

        // Loop through all the dates from start to current inclusive,
        // Fetch all the converted lead for that date in current month and add to array
        // Converted leads are those leads with status = 'Converted' and updated_at is the date
        for ($i = $start_date; $i <= $current_date; $i++) {
            $total_sales[] = Lead::where('status', 'Converted')
                ->whereMonth('updated_at', date('m'))
                ->whereDay('updated_at', $i)
                ->count();
        }

        $total_sales_amount = Lead::where('status', 'Converted')
            ->whereMonth('updated_at', date('m'))
            ->sum('quoted_price');

        return response()->json([
            'sales_data' => $total_sales,
            'total_sales' => $total_sales_amount
        ]);
    }

    public function TotalSalesLastMonth()
    {
        $start_date = 1;
        $last_date_of_last_month = date('t', strtotime('last month'));

        $total_sales = [];
        $total_sales_amount = 0;

        // Loop through all the dates from start to last date inclusive,
        // Fetch all the converted lead for that date in current month and add to array
        // Converted leads are those leads with status = 'Converted' and updated_at is the date
        for ($i = $start_date; $i <= $last_date_of_last_month; $i++) {
            $total_sales[] = Lead::where('status', 'Converted')
                ->whereMonth('updated_at', date('m', strtotime('last month')))
                ->whereDay('updated_at', $i)
                ->count();
        }

        $total_sales_amount = Lead::where('status', 'Converted')
            ->whereMonth('updated_at', date('m', strtotime('last month')))
            ->sum('quoted_price');

        return response()->json([
            'sales_data' => $total_sales,
            'total_sales' => $total_sales_amount
        ]);
    }

    public function SalesOverview()
    {
        $sales_overview_data = [];

        // Fetch total quoted amount for all converted leads this month
        // Converted leads are those whose status = 'Converted'
        // Add to sales_overview_data as [associate => 'associate name', amount => total_quoted_amount]
        $all_associates = User::where('type', 'associate')->orWhere('type', 'manager')->get();

        // Loop through all associates and find the total converted leads
        foreach($all_associates as $associate)
        {
            $converted_leads = Lead::where('assigned_to', $associate->id)
                ->where('status', 'Converted')
                ->whereMonth('updated_at', date('m'))
                ->get();

            $total_quoted_amount = 0;

            // Loop through all converted leads and add the quoted price to total_quoted_amount
            foreach($converted_leads as $lead)
            {
                $total_quoted_amount += $lead->quoted_price;
            }

            $sales_overview_data[] = [
                'associate' => $associate->name,
                'amount' => $total_quoted_amount
            ];
        }

        $total_quoted_amount_this_month = Lead::where('status', 'Converted')
            ->whereMonth('updated_at', date('m'))
            ->sum('quoted_price');

        $total_quoted_amount_last_month = Lead::where('status', 'Converted')
            ->whereMonth('updated_at', date('m') - 1)
            ->sum('quoted_price');

        return response()->json([
            'sales_overview_data' => $sales_overview_data,
            'total_quoted_amount_this_month' => $total_quoted_amount_this_month,
            'total_quoted_amount_last_month' => $total_quoted_amount_last_month
        ]);
    }

    public function CollectionOverview()
    {
        // Same as SalesOverview() but for payments
        // Payments are those whose status = 'Paid'
        $collection_overview_data = [];

        $all_associates = User::where('type', 'associate')->orWhere('type', 'manager')->get();
        $total_paid_amount_this_month = 0;
        $total_paid_amount_last_month = 0;

        foreach($all_associates as $associate)
        {
            $paid_leads = Lead::where('assigned_to', $associate->id)
                ->where('status', 'Converted')
                ->whereMonth('updated_at', date('m'))
                ->get();

            $total_paid_amount = 0;

            foreach($paid_leads as $paid_lead)
            {
                $batch_group = BatchGroup::where('participant_id', $paid_lead->id)
                    ->first();


                if($batch_group)
                {
                    $batch_payment_history = BatchPaymentHistory::where('batch_group_id', $batch_group->id)
                    ->get();

                    foreach($batch_payment_history as $payment)
                    {
                        if($payment->payment_mode == 'Referral')
                        {
                            continue;
                        }

                        $total_paid_amount += $payment->amount;
                        $total_paid_amount_this_month += $payment->amount;
                    }
                }
            }


            $collection_overview_data[] = [
                'associate' => $associate->name,
                'amount' => $total_paid_amount
            ];
        }

        return response()->json([
            'collection_overview_data' => $collection_overview_data,
            'total_collected_amount_this_month' => $total_paid_amount_this_month,
            'total_collected_amount_last_month' => $total_paid_amount_last_month
        ]);
    }

    public function ReferralOverview()
    {
        // Same as SalesOverview() but for payments
        // Payments are those whose status = 'Paid'
        $referral_overview_data = [];

        $all_associates = User::where('type', 'associate')->orWhere('type', 'manager')->get();
        $total_paid_amount_this_month = 0;
        $total_paid_amount_last_month = 0;

        foreach($all_associates as $associate)
        {
            $paid_leads = Lead::where('assigned_to', $associate->id)
                ->where('status', 'Converted')
                ->whereMonth('updated_at', date('m'))
                ->get();

            $total_paid_amount = 0;

            foreach($paid_leads as $paid_lead)
            {
                $batch_group = BatchGroup::where('participant_id', $paid_lead->id)
                    ->first();


                if($batch_group)
                {
                    $batch_payment_history = BatchPaymentHistory::where('batch_group_id', $batch_group->id)
                    ->get();

                    foreach($batch_payment_history as $payment)
                    {
                        if($payment->payment_mode != 'Referral')
                        {
                            continue;
                        }

                        $total_paid_amount += $payment->amount;
                        $total_paid_amount_this_month += $payment->amount;
                    }
                }
            }


            $referral_overview_data[] = [
                'associate' => $associate->name,
                'amount' => $total_paid_amount
            ];
        }

        return response()->json([
            'referral_overview_data' => $referral_overview_data,
            'total_referral_amount_this_month' => $total_paid_amount_this_month,
            'total_referral_amount_last_month' => $total_paid_amount_last_month
        ]);
    }

    public function RegistrationOverview()
    {
        // fetch the total number of leads registered for the current month of the current year only group by assigned_to
        $registration_overview_data = [];

        $all_associates = User::where('type', 'associate')->orWhere('type', 'manager')->get();

        foreach($all_associates as $associate)
        {
            $total_leads = Lead::where('assigned_to', $associate->id)
                ->whereYear('updated_at', date('Y'))
                ->whereMonth('updated_at', date('m'))
                ->where('status', 'Converted')
                ->count();

            $registration_overview_data[] = [
                'associate' => $associate->name,
                'total_leads' => $total_leads
            ];
        }

        // find the total of all the leads registered for the current month of the current year
        $total_leads_this_month = Lead::whereYear('updated_at', date('Y'))
            ->whereMonth('updated_at', date('m'))
            ->where('status', 'Converted')
            ->count();

        return response()->json([
            'data' => $registration_overview_data,
            'total_leads' => $total_leads_this_month
        ]);
    }

    public function MeetingDetails()
    {
        // Fetch all the Lead Followups where date_of_next_action is today
        // Lead Followups are those whose date_of_next_action is today
        $today = date('Y-m-d');

        $meetings = LeadFollowup::where('date_of_next_action', $today)->get();

        // Prepare Response
        $response = [];

        // Response to be in the format:
        // title: '<associate_name>'s Call With <lead_name>',
        // date: '<date_of_next_action>' in format '24 Jul'
        // type: '<lead_type>'

        foreach($meetings as $meeting)
        {
            $lead = Lead::find($meeting->lead_id);
            $associate = User::find($lead->assigned_to);

            if(!$associate)
            {
                continue;
            }

            $response[] = [
                'title' => $associate->name . "'s Call With " . $lead->name,
                'date' => date('d M', strtotime($meeting->date_of_next_action)),
                'type' => $lead->type,
                'color' => $lead->type == 'high' ? 'success' : ($lead->type == 'medium' ? 'warning' : 'error')
            ];
        }

        return response()->json($response);
    }

    public function TransactionDetails()
    {
        // Transaction Types: Cash, Online, Credit Card, Bank Deposit, Bank Transfer
        // Fetch all the Batch Payment History where month is current month
        // Calculate the total amount for each transaction type
        $batch_payment_history = BatchPaymentHistory::whereMonth('created_at', date('m'))->get();

        $cash = 0;
        $online = 0;
        $credit_card = 0;
        $bank_deposit = 0;
        $bank_transfer = 0;

        foreach($batch_payment_history as $payment)
        {
            if($payment->payment_mode == 'Cash')
            {
                $cash += $payment->amount;
            }
            else if($payment->payment_mode == 'Online')
            {
                $online += $payment->amount;
            }
            else if($payment->payment_mode == 'Credit Card')
            {
                $credit_card += $payment->amount;
            }
            else if($payment->payment_mode == 'Bank Deposit')
            {
                $bank_deposit += $payment->amount;
            }
            else if($payment->payment_mode == 'Bank Transfer')
            {
                $bank_transfer += $payment->amount;
            }
        }

        // Return response is an array of format:
            // transaction_type: <transaction_type>
            // amount: <amount>

        return response()->json([
            [
                'transaction_type' => 'Cash',
                'amount' => $cash
            ],
            [
                'transaction_type' => 'Online',
                'amount' => $online
            ],
            [
                'transaction_type' => 'Credit Card',
                'amount' => $credit_card
            ],
            [
                'transaction_type' => 'Bank Deposit',
                'amount' => $bank_deposit
            ],
            [
                'transaction_type' => 'Bank Transfer',
                'amount' => $bank_transfer
            ]
        ]);
    }

    public function AssociateEffortBetweenDates(Request $request)
    {
        $start_date = $request->start_dt . ' 00:00:00';
        $end_date = $request->end_dt . ' 23:59:59';

        // Get all the leads between the dates
        $leads = Lead::whereBetween('updated_at', [$start_date, $end_date])->where('status', '!=', 'In The Pool')->get();

        // Loop through the leads
        // Calculate the effort for each associate
        // Effort is total number of leads, total number of leads where status is 'Converted', total number of leads where status is 'Failed' and No of remaining leads
        // Associate can be identified by assigned_to column

        //DEBUG
        $debug = [];
        //END DEBUG

        $associates = [];

        foreach ($leads as $lead) {
            $associate = $lead->assigned_to;
            $associates[$associate] = $associates[$associate] ?? [];
            $associates[$associate]['total_leads'] = $associates[$associate]['total_leads'] ?? 0;
            $associates[$associate]['converted_leads'] = $associates[$associate]['converted_leads'] ?? 0;
            $associates[$associate]['failed_leads'] = $associates[$associate]['failed_leads'] ?? 0;
            $associates[$associate]['remaining_leads'] = $associates[$associate]['remaining_leads'] ?? 0;
            $associates[$associate]['total_leads']++;
            if ($lead->status == 'Converted') {
                $associates[$associate]['converted_leads']++;
            } else if ($lead->status == 'Failed') {
                $associates[$associate]['failed_leads']++;
            } else {
                $associates[$associate]['remaining_leads']++;
            }
        }

        // Convert the associates array to an array of table rows
        // Columns of this table is 'Associate', 'Total Leads', 'Converted Leads', 'Failed Leads', 'Remaining Leads', 'Efficiency'
        // Efficiency can be defined as (Converted Leads / Total Leads) * 100

        $associates_table = [];

        foreach ($associates as $associate => $associate_data) {
            if($associate_data['total_leads'] == 0)
            {
                $efficiency = 0;
            }
            else{
                $efficiency = ($associate_data['converted_leads'] / $associate_data['total_leads']) * 100;
            }

            $associates_table[] = [
                'id' => $associate,
                'associate' => User::find($associate)->name,
                'total_leads' => $associate_data['total_leads'],
                'converted_leads' => $associate_data['converted_leads'],
                'failed_leads' => $associate_data['failed_leads'],
                'remaining_leads' => $associate_data['remaining_leads'],
                'efficiency' => $efficiency
            ];
        }

        $all_associates = User::where('type', 'associate')->get();
        foreach ($all_associates as $associate) {
            $associate_exists = false;
            foreach ($associates_table as $associate_table) {
                if ($associate->id == $associate_table['id']) {
                    $associate_exists = true;
                }
            }
            if (!$associate_exists) {
                $associates_table[] = [
                    'id' => $associate->id,
                    'associate' => $associate->name,
                    'total_leads' => 0,
                    'converted_leads' => 0,
                    'failed_leads' => 0,
                    'remaining_leads' => 0,
                    'efficiency' => 0
                ];
            }
        }

        // Creating the Detailed Data
        $detailed_data = [];

        // Fetch all the users
        $users = User::where('type', 'associate')->orWhere('type', 'manager')->get();

        // Loop through the users and fetch all their assigned courses
        foreach($users as $user)
        {
            $userId = $user->id;

            $userData = [];
            $userData['associate_id'] = $userId;
            $userData['data'] = [];

            $courses = CourseGroup::where('user_id', $userId)->get();

            foreach($courses as $course)
            {
                $leads = Lead::where('course_id', $course->course_id)->whereBetween('created_at', [$start_date, $end_date])->where('assigned_to', $userId)->get();

                $courseData = [];
                $courseData['id'] = $course->course_id;
                $courseData['course_name'] = Course::find($course->course_id)->name;
                $courseData['total_leads'] = $leads->count();
                $courseData['converted_leads'] = $leads->where('status', 'Converted')->count();
                $courseData['failed_leads'] = $leads->where('status', 'Failed')->count();
                $courseData['remaining_leads'] = $leads->where('status', 'Pending')->count();

                if($courseData['total_leads'] == 0)
                {
                    $efficiency = 0;
                }
                else
                {
                    $efficiency = ($courseData['converted_leads'] / $courseData['total_leads']) * 100;
                }

                $courseData['efficiency'] = $efficiency;
                array_push($userData['data'], $courseData);
            }

            array_push($detailed_data, $userData);
        }

        return response()->json([
            'status' => 'success',
            'data' => $associates_table,
            'detailed_data' => $detailed_data
        ]);
    }

    public function CourseBasedEffortBetweenDates(Request $request)
    {
        // This method is same as AssociateEffortBetweenDates except that it is based on course instead of associate
        $start_date = $request->start_dt . ' 00:00:00';
        $end_date = $request->end_dt . ' 23:59:59';

        // $start_date = '2022-06-01';
        // $end_date = '2022-09-01';

        // Get all the leads between the dates
        $leads = Lead::whereBetween('updated_at', [$start_date, $end_date])->get();
        $courses = [];

        foreach ($leads as $lead) {
            $course = $lead->course_id;
            $courses[$course] = $courses[$course] ?? [];
            $courses[$course]['total_leads'] = $courses[$course]['total_leads'] ?? 0;
            $courses[$course]['converted_leads'] = $courses[$course]['converted_leads'] ?? 0;
            $courses[$course]['failed_leads'] = $courses[$course]['failed_leads'] ?? 0;
            $courses[$course]['remaining_leads'] = $courses[$course]['remaining_leads'] ?? 0;
            $courses[$course]['total_leads']++;
            if ($lead->status == 'Converted') {
                $courses[$course]['converted_leads']++;
            } else if ($lead->status == 'Failed') {
                $courses[$course]['failed_leads']++;
            } else {
                $courses[$course]['remaining_leads']++;
            }
        }

        $courses_table = [];

        foreach ($courses as $course => $course_data) {

            if($course_data['total_leads'] == 0)
            {
                $efficiency = 0;
            }
            else{
                $efficiency = ($course_data['converted_leads'] / $course_data['total_leads']) * 100;
            }

            $courses_table[] = [
                'id' => $course,
                'course' => Course::find($course)->name,
                'total_leads' => $course_data['total_leads'],
                'converted_leads' => $course_data['converted_leads'],
                'failed_leads' => $course_data['failed_leads'],
                'remaining_leads' => $course_data['remaining_leads'],
                'efficiency' => $efficiency
            ];
        }

        // Add all the courses that are not present in the table with 0 values
        $all_courses = Course::all();
        foreach ($all_courses as $course) {
            $course_exists = false;
            foreach ($courses_table as $course_table) {
                if ($course->id == $course_table['id']) {
                    $course_exists = true;
                }
            }
            if (!$course_exists) {
                $courses_table[] = [
                    'id' => $course->id,
                    'course' => $course->name,
                    'total_leads' => 0,
                    'converted_leads' => 0,
                    'failed_leads' => 0,
                    'remaining_leads' => 0,
                    'efficiency' => 0
                ];
            }
        }

        return response()->json([
            'status' => 'success',
            'data' => $courses_table
        ]);
    }

    public function SourceBasedEffortBetweenDates(Request $request)
    {
        $all_source_list = ['WhatsApp', 'Email', 'Landline Call', 'Mobile Call', 'Referral', 'Live Chat', 'Website - Enquiry Form', 'Website - Contact Form', 'Facebook', 'Walk-In'];
        // This method is same as AssociateEffortBetweenDates except that it is based on source instead of associate
        $start_date = $request->start_dt . ' 00:00:00';
        $end_date = $request->end_dt . ' 23:59:59';
        // $start_date = '2022-06-01';
        // $end_date = '2022-09-01';
        $sources = [];
        $leads = Lead::whereBetween('updated_at', [$start_date, $end_date])->get();
        foreach ($leads as $lead) {
            $source = $lead->source;
            $sources[$source] = $sources[$source] ?? [];
            $sources[$source]['total_leads'] = $sources[$source]['total_leads'] ?? 0;
            $sources[$source]['converted_leads'] = $sources[$source]['converted_leads'] ?? 0;
            $sources[$source]['failed_leads'] = $sources[$source]['failed_leads'] ?? 0;
            $sources[$source]['remaining_leads'] = $sources[$source]['remaining_leads'] ?? 0;
            $sources[$source]['total_leads']++;
            if ($lead->status == 'Converted') {
                $sources[$source]['converted_leads']++;
            } else if ($lead->status == 'Failed') {
                $sources[$source]['failed_leads']++;
            } else {
                $sources[$source]['remaining_leads']++;
            }
        }
        $sources_table = [];

        foreach ($sources as $source => $source_data) {

            if($source_data['total_leads'] == 0)
            {
                $efficiency = 0;
            }
            else{
                $efficiency = ($source_data['converted_leads'] / $source_data['total_leads']) * 100;
            }

            $sources_table[] = [
                'id' => $source,
                'source' => $source,
                'total_leads' => $source_data['total_leads'],
                'converted_leads' => $source_data['converted_leads'],
                'failed_leads' => $source_data['failed_leads'],
                'remaining_leads' => $source_data['remaining_leads'],
                'efficiency' => $efficiency
            ];
        }

        // Add all the sources that are not present in the table with 0 values
        foreach ($all_source_list as $source) {
            $source_exists = false;
            foreach ($sources_table as $source_table) {
                if ($source == $source_table['id']) {
                    $source_exists = true;
                }
            }
            if (!$source_exists) {
                $sources_table[] = [
                    'id' => $source,
                    'source' => $source,
                    'total_leads' => 0,
                    'converted_leads' => 0,
                    'failed_leads' => 0,
                    'remaining_leads' => 0,
                    'efficiency' => 0
                ];
            }
        }
        return response()->json([
            'status' => 'success',
            'data' => $sources_table
        ]);

    }

}
