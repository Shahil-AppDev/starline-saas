<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\JoinLead;
use App\Models\ToolsCatalog;
use App\Models\TrainingsCatalog;
use App\Models\CreatorsShowcase;
use Illuminate\Http\Request;

class PublicController extends Controller
{
    public function submitJoinLead(Request $request)
    {
        $validated = $request->validate([
            'tiktok_handle' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:50',
            'niche' => 'nullable|string|max:255',
            'goals' => 'nullable|string',
            'weekly_hours_available' => 'nullable|integer|min:0',
            'social_links' => 'nullable|array',
        ]);

        $lead = JoinLead::create($validated);

        return response()->json([
            'message' => 'Votre candidature a été envoyée avec succès !',
            'lead' => $lead,
        ], 201);
    }

    public function getTools()
    {
        $tools = ToolsCatalog::where('is_public', true)
            ->where('is_active', true)
            ->orderBy('name')
            ->get();

        return response()->json($tools);
    }

    public function getTrainings()
    {
        $trainings = TrainingsCatalog::where('is_public', true)
            ->where('is_active', true)
            ->orderBy('order')
            ->get();

        return response()->json($trainings);
    }

    public function getCreators()
    {
        $creators = CreatorsShowcase::orderBy('is_featured', 'desc')
            ->orderBy('order')
            ->get();

        return response()->json($creators);
    }

    public function health()
    {
        return response()->json([
            'status' => 'ok',
            'service' => 'Starline Creator Hub API',
            'timestamp' => now()->toIso8601String(),
        ]);
    }
}
