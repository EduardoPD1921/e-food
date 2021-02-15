<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

use App\Models\User;

class UserController extends Controller
{
    public function store(Request $request) {

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            $failedRules = $validator->failed();

            $error = $validator->errors();
            return $error;
        }

        // if ($validator->fails()) {
        //     $failedRules = $validator->failed();

        //     switch($failedRules) {
        //         case isset($failedRules['name']):
        //             return response('invalid name', 400);
        //         case isset($failedRules['email']):
        //             return response('invalid email', 400);
        //         case isset($failedRules['password']):
        //             return response('invalid password', 400);
        //     }
        // }

        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();

        return response('User registered', 200);
    }

    public function login(Request $request) {

        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return response('Invalid inputs', 400);
        }

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response('The provided credentials are incorrect', 400);
        }

        $token = $user->createToken($request->email)->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
    }

    public function returnAllUsers(Request $request) {

        $users = User::all();

        return response($users, 200);
    }
}
