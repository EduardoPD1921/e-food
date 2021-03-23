<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

use App\Models\Restaurant;
use Exception;

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

    public function update(Request $request) {
        $data = $request->all();

        $validator = Validator::make($data, [
            'name' => 'required|string',
            'street' => 'required|string',
            'number' => 'required|integer',
            'city' => 'required|string',
            'state' => 'required|string',
            'phone_number' => 'required|string'
        ]);

        if ($validator->fails()) {
            $error = $validator->errors();

            return response($error, 400);
        }

        try {
            Restaurant::findOrFail($request->user()->id)->update($data);

            return response('account-updated', 200);
        } catch(Exception $ex) {
            return response('unauthenticated-account', 401);
        }
    }

    public function updateEmail(Request $request) {
        $validator = Validator::make($request->all(), [
            'lastEmail' => 'required|email',
            'newEmail' => 'required|email'
        ]);

        if ($validator->fails()) {
            $error = $validator->errors();

            return response($error, 400);
        }

        $lastEmail = $request->lastEmail;
        $newEmail = $request->newEmail;

        $restaurant = Restaurant::findOrFail($request->user()->id);

        if ($restaurant->email !== $lastEmail) {
            return response('wrong-last-email', 400);
        }

        $checkEmail = Restaurant::where('email', $newEmail)->first();

        if ($checkEmail) {
            if ($checkEmail->id === $request->user()->id) {
                return response('this-email-is-already-yours', 400);
            }

            return response('email-has-already-been-taken', 400);
        }

        $restaurant->email = $newEmail;
        $restaurant->save();

        return response('email-changed-successfully', 200);
    }

    public function allRestaurants() {
        
        $restaurants = Restaurant::all();

        return response($restaurants, 200);
    }

    public function getProfileInfo(Request $request) {
        return $request->user();
    }
}
