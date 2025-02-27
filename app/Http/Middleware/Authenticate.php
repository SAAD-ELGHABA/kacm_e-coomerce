<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class Authenticate
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (!$request->expectsJson()) {
            return redirect('users/login'); // Redirect to React login page
        }
    }
    protected function redirectTo($request)
    {
        if (!$request->expectsJson()) {
            return redirect('users/login'); // Ensure this matches your React Inertia login page
        }
    }
}
