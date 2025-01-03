<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\AppointmentController;

Route::get('/', function () {
    return view('welcome');
})->name('home');
Route::get('services', function () {
    return view('services');
})->name('services');

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/dashboard', [DoctorController::class, 'dashboard'])->middleware('auth')->name('dashboard');
Route::post('/appointments', [AppointmentController::class, 'store'])->middleware('auth')->name('appointments.store');
Route::delete('/appointments/{id}', [AppointmentController::class, 'destroy'])->middleware('auth')->name('appointments.destroy');

require __DIR__ . '/auth.php';
