<?php

namespace App\Http\Middleware;

use App\Models\User as ModelsUser;
use Closure;
// use Illuminate\Container\Attributes\Auth;
use Illuminate\Foundation\Auth\User as AuthUser;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use User;
use Illuminate\Support\Facades\Auth;
class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {   
        // if (Auth::check() && Auth::user()->user_type === 'admin') {
        return $next($request); // Allow access
        // }

        // // Redirect or abort if the user is not an admin
        // return redirect('/')->with('error', 'Unauthorized access');
        // return inertia('Contact');
   }
}
