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

Route::middleware('auth:api')->post("/edit_username", "AuthController@editUsername")->name("edit_username");

Route::middleware('auth:api')->post("/edit_language", "AuthController@editLanguage")->name("edit_language");

Route::middleware('auth:api')->post("/edit_password", "AuthController@editPassword")->name("edit_password");

Route::middleware('auth:api')->post("/edit_self_intro", "AuthController@editSelfIntro")->name("edit_self_intro");

Route::middleware('auth:api')->post("/edit_currency", "AuthController@editCurrency")->name("edit_currency");
