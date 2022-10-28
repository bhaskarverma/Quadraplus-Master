<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

use App\Models\User;
use App\Models\Course;
use App\Models\CourseGroup;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only(['username', 'password']);
        if(auth()->attempt($credentials))
        {
            $user = auth()->user();

            // Delete all the tokens
            $user->tokens()->delete();

            // Create a new Bearer token
            $token = $user->createToken('authToken')->plainTextToken;

            $response = [
                'status' => 'success',
                'accessToken' => $token
            ];

            return response()->json($response);
        }

        return response()->json([
            'status' => 'error',
            'message' => 'Invalid Credentials'
        ], 401);
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();
        return response()->json([
            'status' => 'success',
            'message' => 'Logged Out Successfully'
        ]);
    }

    public function listUsers()
    {
        $users = User::all();

        foreach($users as $user)
        {
            $courses = CourseGroup::where('user_id', $user->id)->get();

            $user->course = $courses->map(function($course) {
                return Course::find($course->course_id)->name;
            })->implode('/');
        }

        return response()->json([
            'status' => 'success',
            'users' => $users
        ]);
    }

    public function userDetails()
    {
        $user = auth()->user();

        $response = [
            'status' => 'success',
            'userData' => $user,
        ];
        return response()->json($response, 200);
    }

    public function createUser(Request $request)
    {
        // Check if user type is admin, then allow the user to create a user, else return error
        $user = auth()->user();
        if(!($user->type == 'admin'))
        {
            return response()->json([
                'status' => 'error',
                'message' => 'You are not authorized to create a user'
            ], 401);
        }

        // Search if email is already taken
        // $user = User::where('email', $request->email)->first();
        // if($user)
        // {
        //     return response()->json([
        //         'status' => 'error',
        //         'message' => 'Email already taken'
        //     ], 401);
        // }

        // Search if username is already taken
        $user = User::where('username', $request->username)->first();
        if($user)
        {
            return response()->json([
                'status' => 'error',
                'message' => 'Username already taken'
            ], 401);
        }

        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->username = $request->username;
        $user->password = Hash::make('QP@123');
        $user->type = $request->type;
        $user->is_initial_password_changed = false;
        $user->save();

        return response()->json([
            'status' => 'success',
            'message' => 'User Created Successfully'
        ]);
    }

    public function passwordChange(Request $request)
    {
        $user = auth()->user();

        $currentPassword = $request->currentPassword;
        $newPassword = $request->newPassword;

        if (Hash::check($currentPassword, $user->password)) {
            $user->password = Hash::make($newPassword);
            $user->save();

            $response = [
                'status' => 'success',
                'message' => 'Password changed successfully',
            ];
            return response()->json($response, 200);
        }
        else {
            $response = [
                'status' => 'error',
                'message' => 'Invalid current password',
            ];
            return response()->json($response, 200);
        }
    }
}
