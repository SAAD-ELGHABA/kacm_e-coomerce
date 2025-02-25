<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Env;
use Illuminate\Support\Facades\Auth;
use Mockery\Generator\StringManipulation\Pass\Pass;

class AuthController extends Controller
{
    public function index($status)
    {
        if ($status === 'login') {
            return inertia('LogIn');
        } elseif ($status === 'register') {
            return inertia('Register');
        } elseif ($status === 'logout') {
            Auth::logout();
            return redirect('/users/login');
        }
    }


    public function Auth(Request $request, $status)
    {
        if (Auth::check() && $status === 'login' || Auth::check() && $status === 'register') {
            return redirect('/')->with('error', 'You are already logged in');
        } 
        elseif (Auth::check() && $status === 'logout') {
            Auth::logout();
            return redirect('/users/login')->with('success', 'Logged out successfully');
        }
        elseif ($status === 'login') {
            $data = $request->validate([
                'email' => ['required', 'email'],
                'password' => ['required', 'min:3'],
            ]);
            $credentials = $request->only('email', 'password');
            if (Auth::attempt($credentials)) {
                $user = Auth::user();
                if ($user->user_type === 'admin') {
                    return redirect('/Admin');
                } elseif ($user->user_type === 'user') {
                    $token = $user->createToken($user->email)->plainTextToken;
                    return redirect('/')->with([
                        'success' => 'Welcome back',
                        'token' => $token,
                    ]);
                } else {
                    return redirect('/users/login')->with('error', 'Invalid credentials');
                }
            }
            return back()->with('error', 'Invalid credentials');
        } elseif ($status === 'register') {
            $data = $request->validate([
                'firstname' => 'required',
                'lastname' => 'required',
                'email' => 'required|email',
                'password' => 'required|min:3|confirmed',
            ]);

            $user = User::create([
                'firstname' => $data['firstname'],
                'lastname' => $data['lastname'],
                'email' => $data['email'],
                'password' => $data['password'],
            ]);
            if (!$user) {
                return back()->with('error', 'Account not created');
            } else {
                $token = $user->createToken($user->email)->plainTextToken;
            }
            return redirect('/users/login')->with(
                [
                    'success' => 'Account created successfully',
                    'token' => $token,
                ]
            );
        }
    }
}
