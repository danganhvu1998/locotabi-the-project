<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Feedback;

use Illuminate\Http\Request;

class FeedbackController extends Controller
{
    public function feedback(Request $request) {
        return Feedback::create([
            'name' => Auth::user()->name,
            'email' => Auth::user()->email,
            'message' => $request->message
        ]);
        // return response()->json('Your message is sent successfully.', 200);
    }
}
