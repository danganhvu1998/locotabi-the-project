<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Feedback;

use Illuminate\Http\Request;

class FeedbackController extends Controller
{
    public function feedbackAnonymous(Request $request) {
        return Feedback::create([
            'name' => 'anonymous',
            'email' => 'anonymous',
            'message' => $request->message
        ]);
    }

    public function feedbackUser(Request $request) {
        return Feedback::create([
            'name' => Auth::user()->name,
            'email' => Auth::user()->email,
            'message' => $request->message
        ]);
    }
}
