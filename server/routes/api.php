<?php

use Illuminate\Http\Request;

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

Route::post("/login", "AuthController@login")->name("login");

Route::post("/register", "AuthController@register")->name("register");

Route::post("/feedback/anonymous", "FeedbackController@feedbackAnonymous")->name("feedbackAnonymous");

Route::middleware('auth:api')->post("/logout_current", "AuthController@logoutCurrent")->name("logout_current");

Route::middleware('auth:api')->post("/logout_all", "AuthController@logoutAll")->name("logout_all");

Route::middleware('auth:api')->post("/feedback/user", "FeedbackController@feedbackUser")->name("feedbackUser");

Route::middleware('auth:api')->post("/edit_info", "AuthController@editInfo")->name("edit_info");
