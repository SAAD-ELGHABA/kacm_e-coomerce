<?php

namespace App\Providers;

use App\Models\Product;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);
        Inertia::share([
            'auth' => function () {
                return [
                    'user' => Auth::check() ? Auth::user() : null,
                ];
            },
        ]);
        Inertia::share([
            'users' => function () {
                return [
                    'users' => Auth::check() && Auth::user()->user_type === 'admin'  ? User::all() : null,
                ];
            },
        ]);
        Inertia::share([
            'products'=>Product::all()
        ]);
    }
}
