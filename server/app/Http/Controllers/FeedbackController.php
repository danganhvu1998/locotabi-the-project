<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Feedback;

use Illuminate\Http\Request;

class FeedbackController extends Controller
{
    public function feedback(Request $request) {
        return response()->json('Your feedback is sent successfully.', 200);
    }
}
