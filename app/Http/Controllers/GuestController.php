<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;

class GuestController extends Controller
{
    public function forgetPassword()
    {
        return inertia('ForgetPassword');
    }
    public function sendResetLinkEmail(Request $request)
    {
        $request->validate(['email' => 'required|email']);

        $status = Password::sendResetLink(
            $request->only('email')
        );
        return $status === Password::RESET_LINK_SENT
            ? back()->with(['status' => __($status)])
            : back()->withErrors(['email' => __($status)]);
    }

    public function resetpassword(string $token)
    {
        return inertia('ResetPassword', ['token' => $token]);
    }

    public function reset(Request $request){
        $request->validate([
            'token' => 'required',
            'password' => 'required|confirmed',
            'email' => 'required|email'
        ]);
        $status = Password::reset(
            $request->only('email','password', 'password_confirmation', 'token'),
            function (User $user, string $password) {
                $user->forceFill([
                    'password' => Hash::make($password)
                ])->setRememberToken(Str::random(60));
     
                $user->save();
     
                event(new PasswordReset($user));
            }
        );
        // dd('done');
        return $status === Password::PASSWORD_RESET
            ? redirect('/users/login')->with('status', __($status))
            : back()->with('status', __($status));
    }
}
