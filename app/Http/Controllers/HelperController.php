<?php

namespace App\Http\Controllers;

use App\Models\Batch;
use App\Models\BatchGroup;
use App\Models\BatchPaymentHistory;
use App\Models\BatchSchedule;
use App\Models\BatchType;
use App\Models\Course;
use App\Models\CourseGroup;
use App\Models\LeadFollowup;
use Illuminate\Http\Request;

use App\Models\Lead;
use App\Models\User;

class HelperController extends Controller
{

    private function downloadAsCSV($fileName, $headings, $data, $headings2 = [], $data2 = []) {

        header('Content-Type: text/csv; charset=utf-8');
        header('Content-Disposition: attachment; filename='.$fileName);

        $output = fopen('php://output', 'w');

        fputcsv($output, $headings);

        foreach($data as $row) {
            fputcsv($output, $row);
        }

        if(count($headings2) > 0) {
            fputcsv($output, $headings2);

            foreach($data2 as $row) {
                fputcsv($output, $row);
            }
        }

        fclose($output);
    }

    private function convertContactToInternational($number) {
        // strip all spaces around and inside the number
        // strip all - around and inside the number
        // strip all ( around and inside the number
        // strip all ) around and inside the number

        if($number == '') {
            return '';
        }

        $number = str_replace(' ', '', $number);
        $number = str_replace('-', '', $number);
        $number = str_replace('(', '', $number);
        $number = str_replace(')', '', $number);
        $number = trim($number);

        if(substr($number, 0, 1) == '+') {
            return $number;
        }

        // if the number starts with 0, then remove all the starting 0s
        if(substr($number, 0, 1) == '0') {
            $number = ltrim($number, '0');
        }

        // if the number starts with 971, then add + to the number
        if(substr($number, 0, 3) == '971') {
            $number = '+'.$number;
        }

        //  add +971 to the number
        $number = '+971'.$number;

        return $number;
    }

    public function users() {

        $allUsers = User::all();

        $headings = [
            'id',
            'name',
            'username',
            'email',
            'password',
            'role',
            'location',
            'createdAt',
            'updatedAt'
        ];

        $arr = [];

        foreach($allUsers as $user) {
            $userArr = [];

            $userArr['id'] = trim($user->id);
            $userArr['name'] = trim($user->name);
            $userArr['username'] = trim($user->username);
            $userArr['email'] = trim($user->email);
            $userArr['password'] = 'password';
            $userArr['role'] = trim($user->type);
            $userArr['location'] = 'Dubai';
            $userArr['createdAt'] = trim($user->created_at);
            $userArr['updatedAt'] = trim($user->updated_at);

            $arr[] = $userArr;

        }

        $this->downloadAsCSV('users.csv', $headings, $arr);
    }

    public function course() {

        $headings = [
            'id',
            'name',
            'price',
            'durationInHours',
            'createdAt',
            'updatedAt'
        ];

        $courses = Course::all();

        $arr = [];

        foreach($courses as $course) {
            $courseArr = [];

            $courseArr['id'] = trim($course->id);
            $courseArr['name'] = trim($course->name);
            $courseArr['price'] = trim($course->price);
            $courseArr['durationInHours'] = trim($course->duration_in_hours);
            $courseArr['createdAt'] = trim($course->created_at);
            $courseArr['updatedAt'] = trim($course->updated_at);

            $arr[] = $courseArr;
        }

        $this->downloadAsCSV('courses.csv', $headings, $arr);
    }

    public function courseGroup() {
        $headings = [
            'id',
            'courseId',
            'salesmanId',
            'createdAt',
            'updatedAt'
        ];

        $courses = CourseGroup::all();
        $arr = [];

        foreach($courses as $course) {
            $courseArr = [];

            $courseArr['id'] = trim($course->id);
            $courseArr['courseId'] = trim($course->course_id);
            $courseArr['salesmanId'] = trim($course->user_id);
            $courseArr['createdAt'] = trim($course->created_at);
            $courseArr['updatedAt'] = trim($course->updated_at);

            $arr[] = $courseArr;
        }

        $this->downloadAsCSV('courseGroup.csv', $headings, $arr);
    }

    public function leads() {
        $headingsLead = [
            'id',
            'customerId',
            'courseId',
            'otherCourse',
            'status',
            'assignedTo',
            'closingRemarks',
            'probability',
            'source',
            'quotedPrice',
            'createdAt',
            'updatedAt'
        ];

        $headingsCustomer = [
            'id',
            'name',
            'contactNo',
            'whatsappNo',
            'email',
            'company',
            'type',
            'addressLine1',
            'addressLine2',
            'city',
            'state',
            'pincode',
            'country',
            'assignedAssociateId',
            'createdAt',
            'updatedAt'
        ];

        $allLeads = Lead::all();

        $arrLeads = [];
        $arrCustomers = [];

        $customerIdCounter = 1;

        // extract customer details from leads and save them to customers array
        // generate a cuid for the customer and use customerId in the leads array to connect them
        // customer will be unique based on email and contactNo
        // if email and contactNo are same, then the customer is same
        // a customer can have multiple leads
        // a lead can have only one customer

        foreach($allLeads as $lead) {

            $customerEmail = trim($lead->email);
            $customerContactNo = trim($lead->contact_no);

            // check if customer exists in the customers array
            // if yes, then use that customer id
            // if no, then create a new customer and use that customer id

            $customerExists = false;
            $customerId = null;

            foreach($arrCustomers as $customer) {
                if(trim($customer['email']) == $customerEmail && trim($customer['contactNo']) == $customerContactNo) {
                    $customerExists = true;
                    $customerId = $customer['id'];
                    break;
                }
            }

            if(!$customerExists) {
                $customer = [];

                $customer['id'] = $customerIdCounter;
                $customer['name'] = trim($lead->name);
                $customer['contactNo'] = trim($lead->contact_no);
                $customer['whatsappNo'] = '';
                $customer['email'] = trim($lead->email);
                $customer['company'] = trim($lead->company);
                $customer['type'] = 'Individual';
                $customer['addressLine1'] = '';
                $customer['addressLine2'] = '';
                $customer['city'] = '';
                $customer['state'] = '';
                $customer['pincode'] = '';
                $customer['country'] = '';
                $customer['assignedAssociateId'] = trim($lead->assigned_to);
                $customer['createdAt'] = trim($lead->created_at);
                $customer['updatedAt'] = trim($lead->updated_at);

                $customerId = $customer['id'];

                $arrCustomers[] = $customer;

                $customerIdCounter++;
            }

            $leadArr = [];

            $leadArr['id'] = trim($lead->id);
            $leadArr['customerId'] = $customerId;
            $leadArr['courseId'] = trim($lead->course_id);
            $leadArr['otherCourse'] = trim($lead->other_course);
            $leadArr['status'] = trim($lead->status);
            $leadArr['assignedTo'] = trim($lead->assigned_to);
            $leadArr['closingRemarks'] = trim($lead->closing_remark);
            $leadArr['probability'] = trim($lead->type);
            $leadArr['source'] = trim($lead->source);
            $leadArr['quotedPrice'] = trim($lead->quoted_price);
            $leadArr['createdAt'] = trim($lead->created_at);
            $leadArr['updatedAt'] = trim($lead->updated_at);

            $arrLeads[] = $leadArr;
        }

        $this->downloadAsCSV('leadsAndCustomers.csv', $headingsLead, $arrLeads, $headingsCustomer, $arrCustomers);
    }

    public function batch() {
        $headings = [
            'id',
            'location',
            'startDate',
            'courseId',
            'trainerId',
            'mode',
            'days',
            'startTime',
            'endTime',
            'minimumBatchSize',
            'createdAt',
            'updatedAt'
        ];

        $allBatches = Batch::all();
        $allBatchTypes = BatchType::all();

        $arr = [];

        foreach($allBatches as $batch) {
            $batchArr = [];

            $batchArr['id'] = trim($batch->id);
            $batchArr['location'] = trim($batch->location);
            $batchArr['startDate'] = trim($batch->start_date);
            $batchArr['courseId'] = trim($batch->course_id);
            $batchArr['trainerId'] = trim($batch->trainer_id);
            $batchArr['mode'] = trim($batch->mode);

            $batchType = $allBatchTypes->where('id', $batch->batch_type_id)->first();

            $batchArr['days'] = trim($batchType->days);
            $batchArr['startTime'] = trim($batchType->start_time);
            $batchArr['endTime'] = trim($batchType->end_time);
            $batchArr['minimumBatchSize'] = '';
            $batchArr['createdAt'] = trim($batch->created_at);
            $batchArr['updatedAt'] = trim($batch->updated_at);

            $arr[] = $batchArr;
        }

        $this->downloadAsCSV('batches.csv', $headings, $arr);
    }

    public function batchGroup() {
        $headings = [
            'id',
            'batchId',
            'studentId',
            'createdAt',
            'updatedAt'
        ];

        $allBatchGroups = BatchGroup::all();

        $arr = [];

        foreach($allBatchGroups as $batchGroup) {
            $batchGroupArr = [];

            $batchGroupArr['id'] = trim($batchGroup->id);
            $batchGroupArr['batchId'] = trim($batchGroup->batch_id);
            $batchGroupArr['studentId'] = trim($batchGroup->participant_id);
            $batchGroupArr['createdAt'] = trim($batchGroup->created_at);
            $batchGroupArr['updatedAt'] = trim($batchGroup->updated_at);

            $arr[] = $batchGroupArr;
        }

        $this->downloadAsCSV('batchGroups.csv', $headings, $arr);
    }

    public function batchPaymentHistory() {
        $headings = [
            'id',
            'batchGroupId',
            'paymentMode',
            'amount',
            'createdAt',
            'updatedAt'
        ];

        $allBatchPaymentHistories = BatchPaymentHistory::all();

        $arr = [];

        foreach($allBatchPaymentHistories as $batchPaymentHistory) {
            $batchPaymentHistoryArr = [];

            $batchPaymentHistoryArr['id'] = trim($batchPaymentHistory->id);
            $batchPaymentHistoryArr['batchGroupId'] = trim($batchPaymentHistory->batch_group_id);
            $batchPaymentHistoryArr['paymentMode'] = trim($batchPaymentHistory->payment_mode);
            $batchPaymentHistoryArr['amount'] = trim($batchPaymentHistory->amount);
            $batchPaymentHistoryArr['createdAt'] = trim($batchPaymentHistory->created_at);
            $batchPaymentHistoryArr['updatedAt'] = trim($batchPaymentHistory->updated_at);

            $arr[] = $batchPaymentHistoryArr;
        }

        $this->downloadAsCSV('batchPaymentHistory.csv', $headings, $arr);
    }

    public function batchSchedule() {
        $headings = [
            'id',
            'batchId',
            'startDate',
            'endDate',
            'startTime',
            'endTime',
            'createdAt',
            'updatedAt'
        ];

        $allSchedules = BatchSchedule::all();

        $arr = [];

        foreach($allSchedules as $schedule) {
            $scheduleArr = [];

            $startDateTime = trim($schedule->class_datetime);
            $endDateTime = trim($schedule->class_end_datetime);

            $startDate = explode(' ', $startDateTime)[0];
            $startTime = explode(' ', $startDateTime)[1];
            $endDate = explode(' ', $endDateTime)[0];
            $endTime = explode(' ', $endDateTime)[1];

            $scheduleArr['id'] = trim($schedule->id);
            $scheduleArr['batchId'] = trim($schedule->batch_id);
            $scheduleArr['startDate'] = $startDate;
            $scheduleArr['endDate'] = $endDate;
            $scheduleArr['startTime'] = $startTime;
            $scheduleArr['endTime'] = $endTime;
            $scheduleArr['createdAt'] = trim($schedule->created_at);
            $scheduleArr['updatedAt'] = trim($schedule->updated_at);

            $arr[] = $scheduleArr;
        }

        $this->downloadAsCSV('batchSchedule.csv', $headings, $arr);
    }

    public function leadFollowups() {
        $headings = [
            'id',
            'leadId',
            'remarks',
            'nextActionDateTime',
            'createdAt',
            'updatedAt'
        ];

        $allLeadFollowups = LeadFollowup::all();

        $arr = [];

        foreach($allLeadFollowups as $leadFollowup) {
            $leadFollowupArr = [];

            $leadFollowupArr['id'] = trim($leadFollowup->id);
            $leadFollowupArr['leadId'] = trim($leadFollowup->lead_id);
            $leadFollowupArr['remarks'] = trim($leadFollowup->remarks);
            $leadFollowupArr['nextActionDateTime'] = trim($leadFollowup->date_of_next_action);
            $leadFollowupArr['createdAt'] = trim($leadFollowup->created_at);
            $leadFollowupArr['updatedAt'] = trim($leadFollowup->updated_at);

            $arr[] = $leadFollowupArr;
        }

        $this->downloadAsCSV('leadFollowups.csv', $headings, $arr);
    }
}
