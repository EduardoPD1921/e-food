<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\RestaurantController;
use App\Models\Restaurant;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'auth:sanctum'], function() {
    // Protected URL's
    Route::get('/user/all', [UserController::class, 'returnAllUsers']);
    Route::get('/restaurant/getProfileInfo', [RestaurantController::class, 'getProfileInfo']);
    Route::put('/restaurant/updateProfile', [RestaurantController::class, 'update']);
});

// UserController
Route::post('/user/register', [UserController::class, 'store']);
Route::post('/user/login', [UserController::class, 'login']);

// RestaurantController
Route::post('/restaurant/register', [RestaurantController::class, 'store']);
Route::post('/restaurant/login', [RestaurantController::class, 'login']);
Route::get('/restaurant/all', [RestaurantController::class, 'allRestaurants']);

// Route::post('/test', [RestaurantController::class, 'test']);