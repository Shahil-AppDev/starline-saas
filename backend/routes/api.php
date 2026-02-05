<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\PublicController;
use App\Http\Controllers\Api\AppController;

// Public routes
Route::get('/health', [PublicController::class, 'health']);
Route::post('/public/join-lead', [PublicController::class, 'submitJoinLead']);
Route::get('/public/tools', [PublicController::class, 'getTools']);
Route::get('/public/trainings', [PublicController::class, 'getTrainings']);
Route::get('/public/creators', [PublicController::class, 'getCreators']);

// Auth routes
Route::post('/auth/register', [AuthController::class, 'register']);
Route::post('/auth/login', [AuthController::class, 'login']);

// Protected routes
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/auth/logout', [AuthController::class, 'logout']);
    Route::get('/auth/me', [AuthController::class, 'me']);
    
    // App routes
    Route::prefix('app')->group(function () {
        Route::get('/dashboard', [AppController::class, 'getDashboard']);
        Route::get('/tools', [AppController::class, 'getTools']);
        Route::get('/trainings', [AppController::class, 'getTrainings']);
        Route::patch('/trainings/{id}/progress', [AppController::class, 'updateTrainingProgress']);
        Route::get('/support', [AppController::class, 'getSupportTickets']);
        Route::post('/support', [AppController::class, 'createSupportTicket']);
    });
});

Route::prefix('creator-hub')->group(function () {
    Route::get('/trainings', [AppController::class, 'getTrainings']);
    Route::patch('/trainings/{id}/progress', [AppController::class, 'updateTrainingProgress']);
    Route::get('/support', [AppController::class, 'getSupportTickets']);
    Route::post('/support', [AppController::class, 'createSupportTicket']);
});
