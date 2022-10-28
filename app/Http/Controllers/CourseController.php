<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Course;
use App\Models\CourseGroup;
use App\Models\User;
use App\Models\Batch;

class CourseController extends Controller
{
    public function createCourse(Request $request)
    {
        if(!(auth()->user()->type == 'admin'))
        {
            return response()->json([
                'status' => 'error',
                'message' => 'You are not authorized to perform this action'
            ]);
        }

        $course = new Course;
        $course->name = $request->name;
        $course->price = $request->price;
        $course->duration_in_hours = $request->duration_in_hours;
        $course->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Course Created Successfully'
        ]);
    }

    public function updateCourse(Request $request)
    {
        if(!(auth()->user()->type == 'admin'))
        {
            return response()->json([
                'status' => 'error',
                'message' => 'You are not authorized to perform this action'
            ]);
        }
        $course = Course::find($request->id);
        $course->name = $request->name;
        $course->price = $request->price;
        $course->save();
        return response()->json([
            'status' => 'success',
            'message' => 'Course Updated Successfully'
        ]);
    }

    public function getCourseIdByBatchId($batchId)
    {
        $courseId = Batch::find($batchId)->course_id;

        return response()->json([
            'status' => 'success',
            'courseId' => $courseId
        ]);
    }

    public function delete(Request $request)
    {
        if(!(auth()->user()->type == 'admin'))
        {
            return response()->json([
                'status' => 'error',
                'message' => 'You are not authorized to perform this action'
            ]);
        }

        Course::find($request->course_id)->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Course Deleted Successfully'
        ]);
    }

    public function list()
    {
        $courses = Course::all();

        // Remove created_at and updated_at fields from the response
        $courses = $courses->map(function($course) {
            unset($course->created_at);
            unset($course->updated_at);
            return $course;
        });

        return response()->json([
            'status' => 'success',
            'courses' => $courses
        ]);
    }

    public function listAssociatesForCourse($courseId)
    {
        // Check if Course exists with the given id, if not return error
        $course = Course::find($courseId);
        if(!$course)
        {
            return response()->json([
                'status' => 'error',
                'message' => 'Course not found'
            ]);
        }

        $course = CourseGroup::where('course_id', $courseId)->get();

        //loop through the course groups and get the user_id, then return the list of users with those ids
        $users = [];
        foreach ($course as $group) {
            $users[] = $group->user_id;
        }
        $users = array_unique($users);
        $users = User::whereIn('id', $users)->get();
        return response()->json([
            'status' => 'success',
            'users' => $users
        ]);
    }

    public function assignUserToCourse(Request $request)
    {
        if(!(auth()->user()->type == 'admin'))
        {
            return response()->json([
                'status' => 'error',
                'message' => 'You are not authorized to perform this action'
            ]);
        }

        // Check if Course Group already exists for the given course_id and user_id, if yes return error
        $courseGroup = CourseGroup::where('course_id', $request->course_id)->where('user_id', $request->user_id)->first();
        if($courseGroup)
        {
            return response()->json([
                'status' => 'error',
                'message' => 'User already assigned to Course'
            ]);
        }

        $courseGroup = new CourseGroup;
        $courseGroup->course_id = $request->course_id;
        $courseGroup->user_id = $request->user_id;
        $courseGroup->save();

        return response()->json([
            'status' => 'success',
            'message' => 'User Assigned To Course'
        ]);
    }

    public function removeUserFromCourse(Request $request)
    {
        if(!(auth()->user()->type == 'admin'))
        {
            return response()->json([
                'status' => 'error',
                'message' => 'You are not authorized to perform this action'
            ]);
        }

        $res = CourseGroup::where(['user_id' => $request->user_id,'course_id' => $request->course_id])->delete();

        if($res)
        {
            return response()->json([
                'status' => 'success',
                'message' => 'User Removed Successfully'
            ]);
        }

        return response()->json([
            'status' => 'failure',
            'message' => 'Problem Encountered When Removing'
        ]);
    }
}
