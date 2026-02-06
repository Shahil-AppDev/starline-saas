<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\PublicController;
use App\Http\Controllers\Api\AppController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\LeadController;
use App\Http\Controllers\ToolController;
use App\Http\Controllers\TrainingController;
use App\Http\Controllers\CreatorController;

// Public routes
Route::get('/health', function () {
    return response()->json(['status' => 'ok']);
});

Route::post('/public/join-lead', [LeadController::class, 'store']);
Route::get('/public/tools', [ToolController::class, 'index']);
Route::get('/public/trainings', [TrainingController::class, 'index']);
Route::get('/public/creators', [CreatorController::class, 'index']);

// Blog routes
Route::prefix('public/blog')->group(function () {
    Route::get('/articles', [ArticleController::class, 'index']);
    Route::get('/articles/latest', [ArticleController::class, 'latest']);
    Route::get('/articles/{slug}', [ArticleController::class, 'show']);
    Route::get('/articles/{slug}/related', [ArticleController::class, 'related']);
    Route::get('/categories', [ArticleController::class, 'categories']);
    Route::get('/tags', [ArticleController::class, 'tags']);
});

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
