<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ElementController;
use App\Http\Controllers\ProfileController;
use App\Http\Middleware\AdminMiddleware;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/', [ElementController::class ,'showHome']);
Route::get('/Store', [ElementController::class ,'showStore']);

Route::get('/Admin', [ElementController::class, "showHomeAdmin"])->name('Admin');

// Route::match(['get', 'post'], '/Admin', [AuthController::class, 'create']);

Route::resource('users', AuthController::class)->except('Home');
Route::resource('element', ElementController::class);
