<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ToolsCatalog;
use App\Models\TrainingsCatalog;
use App\Models\TrainingProgress;
use App\Models\SupportTicket;
use Illuminate\Http\Request;

class AppController extends Controller
{
    public function getDashboard(Request $request)
    {
        $user = $request->user()->load('creatorProfile');
        $profile = $user->creatorProfile;

        $completedTrainings = TrainingProgress::where('user_id', $user->id)
            ->where('status', 'completed')
            ->count();

        $totalTrainings = TrainingsCatalog::where('is_active', true)->count();

        return response()->json([
            'user' => $user,
            'stats' => [
                'total_live_minutes' => $profile->total_live_minutes ?? 0,
                'diamonds_earned' => $profile->diamonds_earned ?? 0,
                'trainings_completed' => $completedTrainings,
                'trainings_total' => $totalTrainings,
                'status' => $profile->status ?? 'pending',
            ],
        ]);
    }

    public function getTools()
    {
        $tools = ToolsCatalog::where('is_active', true)
            ->orderBy('category')
            ->orderBy('name')
            ->get();

        return response()->json($tools);
    }

    public function getTrainings(Request $request)
    {
        $user = $request->user();
        
        $trainings = TrainingsCatalog::where('is_active', true)
            ->orderBy('order')
            ->get()
            ->map(function ($training) use ($user) {
                $progress = TrainingProgress::where('user_id', $user->id)
                    ->where('training_id', $training->id)
                    ->first();

                return [
                    'id' => $training->id,
                    'title' => $training->title,
                    'slug' => $training->slug,
                    'description' => $training->description,
                    'level' => $training->level,
                    'category' => $training->category,
                    'duration_minutes' => $training->duration_minutes,
                    'thumbnail' => $training->thumbnail,
                    'progress' => $progress ? [
                        'status' => $progress->status,
                        'percentage' => $progress->progress_percentage,
                        'started_at' => $progress->started_at,
                        'completed_at' => $progress->completed_at,
                    ] : null,
                ];
            });

        return response()->json($trainings);
    }

    public function updateTrainingProgress(Request $request, $id)
    {
        $validated = $request->validate([
            'status' => 'required|in:not_started,in_progress,completed',
            'progress_percentage' => 'nullable|integer|min:0|max:100',
        ]);

        $progress = TrainingProgress::updateOrCreate(
            [
                'user_id' => $request->user()->id,
                'training_id' => $id,
            ],
            [
                'status' => $validated['status'],
                'progress_percentage' => $validated['progress_percentage'] ?? 0,
                'started_at' => $validated['status'] === 'in_progress' ? now() : null,
                'completed_at' => $validated['status'] === 'completed' ? now() : null,
            ]
        );

        return response()->json($progress);
    }

    public function getSupportTickets(Request $request)
    {
        $tickets = SupportTicket::where('user_id', $request->user()->id)
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json($tickets);
    }

    public function createSupportTicket(Request $request)
    {
        $validated = $request->validate([
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
            'priority' => 'nullable|in:low,medium,high',
        ]);

        $ticket = SupportTicket::create([
            'user_id' => $request->user()->id,
            'subject' => $validated['subject'],
            'message' => $validated['message'],
            'priority' => $validated['priority'] ?? 'medium',
            'status' => 'open',
        ]);

        return response()->json($ticket, 201);
    }
}
