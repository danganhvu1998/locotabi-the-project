<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Feedback;

use Illuminate\Http\Request;

class FeedbackController extends Controller
{
    public function feedback(Request $request) {
        if (Auth::check()) {
            // The user is logged in...
            return Feedback::create([
                'name' => Auth::user()->name,
                'email' => Auth::user()->email,
                'message' => $request->message
            ]);
        }
        
        return Feedback::create([
            'name' => 'anonymous',
            'email' => 'anonymous',
            'message' => $request->message
        ]);
        // return response()->json('Your message is sent successfully.', 200);
    }
}
