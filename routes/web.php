<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CustomersController;
use App\Http\Controllers\ElementController;
use App\Http\Controllers\GuestController;
use App\Http\Controllers\productController;
use App\Http\Controllers\ProfileController;
use App\Http\Middleware\AdminMiddleware;
use App\Models\Admin;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/', [ElementController::class, 'showHome']);
Route::get('/Store', [ElementController::class, 'showStore']);

// Route::get('/Admin/elements', [ElementController::class, "showHomeAdmin"])->name('Admin');

// Route::match(['get', 'post'], '/Admin', [AuthController::class, 'create']);
Route::get('/login', function () {
    return inertia('LogIn');
});
Route::post('/login', function () {
    return inertia('LogIn');
})->name('login');


Route::get('/users/{status}', [AuthController::class, 'index']);
Route::post('/users/{status}', [AuthController::class, 'Auth']);


Route::middleware(['admin', 'auth'])->group(function () {
    Route::get('/Admin', [AdminController::class, 'index']);
    Route::get('/Admin/logout', [AdminController::class, 'logout']);
    Route::post('/product/AddProduct', [productController::class, 'store']);
    Route::post('/addUser',[CustomersController::class,'store']);
});

Route::get('/store', [productController::class, 'index']);


Route::fallback(function () {
    return redirect('/');
});

Route::get('/forgot-password', [GuestController::class, 'forgetPassword'])->middleware('guest');
Route::post('/forget-password', [GuestController::class, 'sendResetLinkEmail'])->middleware('guest');


Route::get('/reset-password/{token}', [GuestController::class, 'resetpassword'])->middleware('guest')->name('password.reset');
Route::post('/reset-password', [GuestController::class, 'reset'])->middleware('guest');



// Route::get('/send-test-email', function () {
//     Mail::raw('This is a test email using Gmail SMTP.', function ($message) {
//         $message->to('purposefulwebsite@gmail.com')
//             ->subject('Gmail SMTP Test');
//     });

//     return 'Test email has been sent!';
// });
