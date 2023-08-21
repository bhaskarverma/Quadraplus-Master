<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lead;
use App\Models\Course;
use App\Models\CourseGroup;
use Illuminate\Support\Facades\Log;

class WebhookController extends Controller
{
    public function liveChat(Request $request) {
        $survey = $request->pre_chat_survey; // Get the survey data from webhook request of LiveChat.com

        $name = '';
        $contact_no = '';
        $email = '';
        $company = '';
        $course = null;
        $course_other = '';
        $source = 'Live Chat';
        $type = 'medium';

        foreach($survey as $question) {
            if($question['label'] == 'Name:') {
                $name = $question['answer'];
            }

            if($question['label'] == 'Contact No:') {
                $contact_no = $question['answer'];
            }

            if($question['label'] == 'Course:') {
                $answers = $question['answers'];

                foreach($answers as $answer) {
                    if($answer['chosen'] == true) {
                        $course = $answer['label'];
                    }
                }
            }

            if($question['label'] == 'Other Course:') {
                $course_other = $question['answer'];
            }

            if($question['label'] == 'Email:') {
                $email = $question['answer'];
            }
        }

        // check if course is present in database
        if($course != '') {
            $course_id = Course::where('name', $course)->first()->id;
        } else {
            $course_id = null;
        }

        $lead = new Lead;
        $lead->name = $name;
        $lead->contact_no = $contact_no;
        $lead->email = $email;
        $lead->company = $company;
        $lead->course_id = $course_id;
        $lead->other_course = $course_other;
        $lead->status = 'In The Pool';
        $lead->assigned_to = null;
        $lead->type = $type;
        $lead->source = $source;

        $lead->save();

        $this->assignLeadToUser($lead);

        return response()->json([
            'status' => 'success',
            'message' => 'Lead Added Successfully'
        ]);
    }

    private function assignLeadToUser(Lead $lead)
    {
        // Get the course_id from lead
        $course_id = $lead->course_id;

        $source = $lead->source;

        if(!$course_id)
        {
            return;
        }

        if($source != 'Facebook')
        {
            $users = CourseGroup::where('course_id', $course_id)->orderBy('user_id', 'asc')->get();

            if (count($users) == 0) {
                return;
            }

            $user_count = count($users);

            if($user_count == 1)
            {
                $lead->assigned_to = $users[0]->user_id;
            }
            else
            {
                // where source is not faceboook
                $latest_lead = Lead::where('course_id', $course_id)->where('source', '!=', 'Facebook')->orderBy('id', 'desc')->skip(1)->first();
                $last_assigned_user = $latest_lead->assigned_to;
                $last_assigned_user_index = 0;
                for($i = 0; $i < $user_count; $i++)
                {
                    if($users[$i]->user_id == $last_assigned_user)
                    {
                        $last_assigned_user_index = $i;
                        break;
                    }
                }

                $lead->assigned_to = $users[($last_assigned_user_index + 1) % $user_count]->user_id;
            }
        }
        else
        {
            // Sort asc by ID
            $users = CourseGroup::where('course_id', $course_id)->orderBy('user_id', 'asc')->get();

            if (count($users) == 0) {
                return;
            }

            $user_count = count($users);

            if($user_count == 1)
            {
                $lead->assigned_to = $users[0]->user_id;
            }
            else
            {
                $latest_lead = Lead::where('course_id', $course_id)->where('source', 'Facebook')->orderBy('id', 'desc')->skip(1)->first();
                $last_assigned_user = $latest_lead->assigned_to;
                $last_assigned_user_index = 0;
                for($i = 0; $i < $user_count; $i++)
                {
                    if($users[$i]->user_id == $last_assigned_user)
                    {
                        $last_assigned_user_index = $i;
                        break;
                    }
                }

                $lead->assigned_to = $users[($last_assigned_user_index + 1) % $user_count]->user_id;
            }
        }

        $lead->status = 'Assigned To Associate';
        $lead->save();

        return;
    }

    public function createLeadWhatsapp(Request $request) {

        // print complete request to log file

        Log::info($request);

        $name = $request->name;
        $contact_no = $request->phone;
        $email = $request->email;
        $course = null;
        $course_other = $request->course;
        $company = $request->company;
        $source = 'Whatsapp';
        $type = 'high';

        $lead = new Lead;
        $lead->name = $name;
        $lead->contact_no = $contact_no;
        $lead->email = $email;
        $lead->company = $company;
        $lead->course_id = $course;
        $lead->other_course = $course_other;
        $lead->status = 'In The Pool';
        $lead->assigned_to = null;
        $lead->type = $type;
        $lead->source = $source;

        $lead->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Lead Added Successfully'
        ]);
    }

}
