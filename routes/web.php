<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ElementController;
use App\Http\Controllers\productController;
use App\Http\Controllers\ProfileController;
use App\Http\Middleware\AdminMiddleware;
use App\Models\Admin;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/', [ElementController::class, 'showHome']);
Route::get('/Store', [ElementController::class, 'showStore']);

// Route::get('/Admin/elements', [ElementController::class, "showHomeAdmin"])->name('Admin');

// Route::match(['get', 'post'], '/Admin', [AuthController::class, 'create']);

Route::get('/users/{status}', [AuthController::class,'index']);
Route::post('/users/{status}', [AuthController::class,'Auth']);

// Route::resource('element', ElementController::class);

// Route::resource('product', productController::class);

// Route::get('/Admin/products', [ProductController::class, 'show']);

// Route::get('/Admin', [AdminController::class, 'index'])->middleware(AdminMiddleware::class);

Route::middleware(['admin', 'auth'])->group(function () {
    Route::get('/Admin', [AdminController::class, 'index']);
    Route::get('/Admin/logout',[AdminController::class, 'logout']);
});




Route::fallback(function () {
    return redirect('/');
});
