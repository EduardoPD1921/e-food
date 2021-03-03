<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Restaurant;

class RestaurantController extends Controller
{
    public function store(Request $request) {
        $restaurant = new Restaurant;

        $restaurant->name = $request->name;
        $restaurant->street = $request->street;

        $restaurant->save();

        return response($restaurant, 200);
    }
}
