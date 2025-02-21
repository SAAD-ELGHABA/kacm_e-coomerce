<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {   
        // return response()->json(['message' => 'Admin Controller']);
        return inertia('Admin/index');
    }
    public function logout(){
        Auth::logout();
        return redirect('users/login');
    }
}
