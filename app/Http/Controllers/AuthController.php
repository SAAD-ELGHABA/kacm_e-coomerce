<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Env;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function index()
    {
        return inertia('Auth');
    }
    public function store(Request $request){
        $data = $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:3',
        ]);
        // dd($request->email."  ".$request->password);
        if($request->email=='Admin@gmail.com' && $request->password=='Admin'){
            return redirect()->route('Admin');
        }elseif(Auth::attempt($data)){
            return inertia('Home');
        }
        // else{
        //     abort(401);
        // }
    }
}
