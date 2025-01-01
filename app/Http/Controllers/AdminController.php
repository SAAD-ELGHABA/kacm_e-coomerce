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
        return inertia('Admin/index');
        // $admin = session()->get('Admin');
        // if (session()->has('Admin') && $admin == true) {
        //     return inertia('Admin/index', ['name' => 'saad']);
        // } else {
        //     return inertia('Auth');
        // }
        // dd(session()->all());
    }
}
