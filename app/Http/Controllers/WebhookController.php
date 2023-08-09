<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WebhookController extends Controller
{
    public function liveChat(Request $request) {
        $survey = $request->pre_chat_survey; // Get the survey data from webhook request of LiveChat.com

        $name = '';
        $contact_no = '';
        $email = '';
        $company = '';
        $course = '';
        $course_other = '';
        $source = 'Live Chat';
        $type = 'medium';

        foreach($survey as $question) {
            if($question['label'] == 'Name:') {
                $name = $question['value'];
            }

            if($question['label'] == 'Contact No:') {
                $contact_no = $question['value'];
            }

            if($question['label'] == 'Course:') {
                $course = $question['value'];
            }

            if($question['label'] == 'Other Course:') {
                $course_other = $question['value'];
            }

            if($question['label'] == 'Email:') {
                $email = $question['value'];
            }
        }

        // log the data
        $info_string = "Name: $name, Contact No: $contact_no, Email: $email, Course: $course, Other Course: $course_other, Source: $source, Type: $type";

        error_log($info_string);
    }
}
