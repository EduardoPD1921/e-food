<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

use App\Models\Restaurant;

class RestaurantController extends Controller
{
    public function store(Request $request) {
        
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|unique:restaurants',
            'name' => 'required|string',
            'password' => 'required|string',
            'street' => 'required|string',
            'number' => 'required|integer',
            'cep' => 'required|string',
            'city' => 'required|string',
            'state' => 'required|string',
            'phone_number' => 'required|string'
        ]);

        if ($validator->fails()) {
            $error = $validator->errors();

            return response($error, 400);
        }

        $restaurant = new Restaurant;
        $restaurant->email = $request->email;
        $restaurant->name = $request->name;
        $restaurant->password = Hash::make($request->password);
        $restaurant->street = $request->street;
        $restaurant->number = $request->number;
        $restaurant->cep = $request->cep;
        $restaurant->city = $request->city;
        $restaurant->state = $request->state;
        $restaurant->phone_number = $request->phone_number;

        $restaurant->save();

        return response($restaurant, 201);
    }

    public function login(Request $request) {

        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string'
        ]);

        if ($validator->fails()) {
            $error = $validator->errors();

            return response($error, 400);
        }

        $restaurant = Restaurant::where('email', $request->email)->first();

        if (!$restaurant) {
            return response('email-not-found', 400);
        }

        if (!Hash::check($request->password, $restaurant->password)) {
            return response('wrong-password', 400);
        }

        $token = $restaurant->createToken($request->email)->plainTextToken;

        $response = [
            'restaurant' => $restaurant,
            'token' => $token
        ];

        return response($response, 201);
    }
}
