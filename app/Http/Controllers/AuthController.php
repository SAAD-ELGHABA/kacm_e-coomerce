<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Env;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function index($status)
    {
        if ($status === 'login') {
            return inertia('LogIn');
        } elseif ($status === 'register') {
            return inertia('Register');
        }
    }


    public function Auth(Request $request, $status)
    {
        try {
            if ($status === 'login') {
                $data = $request->validate([
                    'email' => 'required|email',
                    'password' => 'required|min:3',
                ]);
                $credentials = $request->only('email', 'password'); 
                if (Auth::attempt($credentials)) {
                    $user = Auth::user();
                    if ($user->user_type === 'admin') {
                        return redirect('/Admin');
                    } else {
                        return redirect('users/login'); // Redirect to login if not admin
                    }
                }

                return back()->with('error', 'Invalid credentials');
            } elseif ($status === 'register') {
                $data = $request->validate([
                    'firstname' => 'required',
                    'lastname' => 'required',
                    'email' => 'required|email',
                    'password' => 'required|min:3',
                ]);
                // $request->session()->put('_token', $token);
                // $data['password'] = bcrypt($data['password']);
                User::create([
                    'firstname' => $data['firstname'],
                    'lastname' => $data['lastname'],
                    'email' => $data['email'],
                    'password' => bcrypt($data['password']),
                    'user_type' => 'user',
                    // 'remember_token' => $token,
                ])->createToken('remember_token')->plainTextToken;
                dd($data);
                return response()->json(['message' => 'User created successfully']);
            }elseif ($status === 'logout') {
                dd($status);
                Auth::logout();
                return redirect()->route('users/login');
            }
        } catch (Exception $e) {
            return redirect('users/login');
        }
        // return redirect()->route('Admin');
        // } elseif (Auth::attempt($data)) {

    }
}
