<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Lead;
use App\Models\LeadFollowup;
use App\Models\Course;
use App\Models\CourseGroup;
use App\Models\User;

class LeadController extends Controller
{
    public function newLead(Request $request)
    {
        $name = $request->name;

        if($name == null || $name == "") {
            $name = "N/A";
        }

        $lead = new Lead;
        $lead->name = $name;
        $lead->contact_no = $request->contact_no;
        $lead->email = $request->email;
        $lead->company = $request->company;
        $lead->course_id = $request->course_id;
        $lead->status = 'In The Pool';
        $lead->assigned_to = null;
        $lead->type = $request->type;
        $lead->source = $request->source;

        $lead->save();

        $this->assignLeadToUser($lead);

        return response()->json([
            'status' => 'success',
            'message' => 'Lead Added Successfully'
        ]);
    }

    public function assignQuotedPrice(Request $request)
    {
        $lead = Lead::find($request->lead_id);
        $lead->quoted_price = $request->quoted_price;
        $lead->save();
        return response()->json([
            'status' => 'success',
            'message' => 'Quote Price Assigned Successfully'
        ]);
    }

    public function getLeads(Request $request)
    {
        // Start and End Date
        $startDate = $request->start_date . ' 00:00:00';
        $endDate = $request->end_date . ' 23:59:59';

        // Get all the leads assigned to the user and between the start and end date
        $leads = Lead::where('assigned_to', auth()->user()->id)
            ->whereBetween('created_at', [$startDate, $endDate])
            ->get();

        // Add Course Field to the leads
        foreach($leads as $lead)
        {
            $lead->course_name = Course::find($lead->course_id)->name;

            // Add Next Update Field
            $lead_followups = LeadFollowup::where('lead_id', $lead->id)->latest()->first();

            if(!$lead_followups)
            {
                $lead->next_update = 'Nothing Found';
            }
            else
            {
                $lead->next_update = $lead_followups->date_of_next_action;
            }
        }

        return response()->json([
            'status' => 'success',
            'leads' => $leads
        ]);
    }

    public function getActiveLeads()
    {
        // Get all the leads assigned to the user where the status is not Converted or Failed
        $leads = Lead::where('assigned_to', auth()->user()->id)->whereNotIn('status', ['Converted', 'Failed'])->get();

        // Add Course Field to the leads
        foreach($leads as $lead)
        {
            $lead->course_name = Course::find($lead->course_id)->name;

            // Add Next Update Field
            $lead_followups = LeadFollowup::where('lead_id', $lead->id)->latest()->first();

            if(!$lead_followups)
            {
                $lead->next_update = 'Nothing Found';
            }
            else
            {
                $lead->next_update = $lead_followups->date_of_next_action;
            }
        }

        return response()->json([
            'status' => 'success',
            'leads' => $leads
        ]);
    }

    public function getAllLeads()
    {
        // Start and End Date
        $startDate = request()->start_date . ' 00:00:00';
        $endDate = request()->end_date . ' 23:59:59';

        // Check if the user is a admin, then only show all the leads
        if(!(auth()->user()->type == 'admin'))
        {
            return response()->json([
                'status' => 'failure',
                'message' => 'You are not authorized to view all the leads'
            ]);
        }

        // Get all leads between the start and end date
        $leads = Lead::whereBetween('created_at', [$startDate, $endDate])->get();

        foreach($leads as $lead)
        {
            $user = User::find($lead->assigned_to);
            if($user)
            {
                $lead->assigned_to_name = $user->name;
            }
            else
            {
                $lead->assigned_to_name = 'Not Assigned';
            }
        }

        // Add Course Field to the leads
        foreach($leads as $lead)
        {
            $lead->course_name = Course::find($lead->course_id)->name;

            // Add Next Update Field
            $lead_followups = LeadFollowup::where('lead_id', $lead->id)->latest()->first();

            if(!$lead_followups)
            {
                $lead->next_update = 'Nothing Found';
            }
            else
            {
                $lead->next_update = $lead_followups->date_of_next_action;
            }
        }

        return response()->json([
            'status' => 'success',
            'leads' => $leads
        ]);
    }

    public function getFollowupDetails($leadId)
    {
        $lead = Lead::find($leadId);
        $lead->course_name = Course::find($lead->course_id)->name;
        $lead->assigned_to_name = User::find($lead->assigned_to)->name;
        $lead->followups = LeadFollowup::where('lead_id', $leadId)->get();
        return response()->json([
            'status' => 'success',
            'lead' => $lead
        ]);
    }

    public function followupDetails($lead_id)
    {
        $lead_followups = LeadFollowup::where('lead_id', $lead_id)->get();

        return response()->json([
            'status' => 'success',
            'lead_followups' => $lead_followups
        ]);
    }

    public function leadFollowUp(Request $request)
    {
        $followup = new LeadFollowup;
        $followup->lead_id = $request->lead_id;
        $followup->remarks = $request->remarks;
        $followup->date_of_next_action = $request->date_of_next_action;

        $followup->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Followup Added Successfully'
        ]);
    }

    public function markLeadAsClosed(Request $request)
    {
        $lead = Lead::find($request->lead_id);
        $lead->status = $request->status;
        $lead->closing_remark = $request->closing_remark;
        $lead->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Lead Marked as Closed Successfully'
        ]);
    }

    public function updateLeadType(Request $request)
    {
        $lead = Lead::find($request->lead_id);
        $lead->type = $request->type;
        $lead->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Lead Type Updated Successfully'
        ]);
    }

    public function unAssignSelfFromLead(Request $request)
    {
        $lead = Lead::find($request->lead_id);

        // Check if the lead is assigned to the user, if yes then unassign the lead from the user, if not then return error
        if($lead->assigned_to == auth()->user()->id)
        {
            $lead->assigned_to = null;
            $lead->status = 'In The Pool';
            $lead->save();

            return response()->json([
                'status' => 'success',
                'message' => 'Lead Unassigned Successfully'
            ]);
        }
        else
        {
            return response()->json([
                'status' => 'error',
                'message' => 'Lead is not assigned to you'
            ], 401);
        }
    }

    public function manuallyAssignLeadToUser(Request $request)
    {
        if(!(auth()->user()->type == 'admin'))
        {
            return response()->json([
                'status' => 'failure',
                'message' => 'You are not authorized to assign leads to users'
            ]);
        }

        $lead = Lead::find($request->lead_id);
        $lead->assigned_to = $request->assign_to;
        $lead->status = 'Assigned To Associate';
        $lead->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Lead Assigned Successfully'
        ]);
    }

    public function listTodayFollowups()
    {
        // Find the list of active leads assigned to the user
        $leads = Lead::where('assigned_to', auth()->user()->id)->where('status', 'Assigned To Associate')->get();

        $leads_to_return = [];
        // For each lead, find is the latest followup and check if the date of next action is today
        foreach($leads as $lead)
        {
            $lead_followups = LeadFollowup::where('lead_id', $lead->id)->latest()->first();
            if($lead_followups)
            {
                if($lead_followups->date_of_next_action == date('Y-m-d'))
                {
                    $lead->course_name = Course::find($lead->course_id)->name;
                    $lead->next_update = $lead_followups->date_of_next_action;
                    $leads_to_return[] = $lead;
                }
            }
        }

        return response()->json([
            'status' => 'success',
            'followups' => $leads_to_return
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
            $users = CourseGroup::where('course_id', $course_id)->get();

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
                $last_assigned_user = Lead::where('course_id', $course_id)->latest()->first()->assigned_to;
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
            $users = CourseGroup::where('course_id', $course_id)->orderBy('id', 'asc')->get();

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
                $last_assigned_user = Lead::where('course_id', $course_id)->where('source', 'Facebook')->latest()->first()->assigned_to;
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
}
