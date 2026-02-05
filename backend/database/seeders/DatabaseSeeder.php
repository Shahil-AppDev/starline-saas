<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\CreatorProfile;
use App\Models\ToolsCatalog;
use App\Models\TrainingsCatalog;
use App\Models\CreatorsShowcase;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Admin user
        $admin = User::create([
            'name' => 'Starline Admin',
            'email' => 'admin@starline-agency.xyz',
            'password' => Hash::make('Starline2026Admin!'),
        ]);

        CreatorProfile::create([
            'user_id' => $admin->id,
            'tiktok_handle' => '@starline_official',
            'status' => 'active',
        ]);

        // Demo creator
        $creator = User::create([
            'name' => 'Demo Creator',
            'email' => 'demo@starline-agency.xyz',
            'password' => Hash::make('Demo2026!'),
        ]);

        CreatorProfile::create([
            'user_id' => $creator->id,
            'tiktok_handle' => '@demo_creator',
            'niche' => 'Gaming',
            'status' => 'active',
            'total_live_minutes' => 1250,
            'diamonds_earned' => 45000,
        ]);

        // Tools catalog
        $tools = [
            [
                'name' => 'Pack OBS FX Premium',
                'slug' => 'obs-fx-premium',
                'description' => 'Pack complet d\'overlays et animations pour OBS Studio. Inclut 50+ scènes, transitions et effets.',
                'category' => 'OBS',
                'icon' => '🎬',
                'download_url' => '/downloads/obs-fx-premium.zip',
                'is_public' => true,
            ],
            [
                'name' => 'TikFinity Presets V2',
                'slug' => 'tikfinity-presets-v2',
                'description' => 'Configurations optimisées pour TikFinity. Boost tes lives avec des presets pro.',
                'category' => 'TikFinity',
                'icon' => '⚡',
                'download_url' => '/downloads/tikfinity-presets.json',
                'is_public' => true,
            ],
            [
                'name' => 'Streamer.bot Pack FX',
                'slug' => 'streamerbot-fx',
                'description' => 'Actions et commandes Streamer.bot prêtes à l\'emploi. Automatise ton stream.',
                'category' => 'Automation',
                'icon' => '🤖',
                'download_url' => '/downloads/streamerbot-pack.sb',
                'is_public' => true,
            ],
            [
                'name' => 'Backstage KPI Viewer',
                'slug' => 'backstage-kpi',
                'description' => 'Dashboard temps réel pour suivre tes KPI TikTok Live depuis Backstage.',
                'category' => 'Analytics',
                'icon' => '📊',
                'download_url' => '/downloads/backstage-kpi.html',
                'is_public' => false,
            ],
            [
                'name' => 'Auto-Posting Templates',
                'slug' => 'auto-posting',
                'description' => 'Templates de posts automatiques pour TikTok. Garde ton audience engagée 24/7.',
                'category' => 'Marketing',
                'icon' => '📱',
                'download_url' => '/downloads/auto-posting.zip',
                'is_public' => false,
            ],
        ];

        foreach ($tools as $tool) {
            ToolsCatalog::create($tool);
        }

        // Trainings catalog
        $trainings = [
            [
                'title' => 'Setup Live TikTok : Les Bases',
                'slug' => 'setup-live-basics',
                'description' => 'Apprends à configurer ton premier live TikTok comme un pro. OBS, audio, overlays.',
                'level' => 'starter',
                'category' => 'Setup',
                'duration_minutes' => 45,
                'is_public' => true,
                'order' => 1,
            ],
            [
                'title' => 'Maîtriser TikFinity',
                'slug' => 'master-tikfinity',
                'description' => 'Guide complet pour exploiter TikFinity à 100%. Configurations avancées et astuces.',
                'level' => 'pro',
                'category' => 'Tools',
                'duration_minutes' => 60,
                'is_public' => true,
                'order' => 2,
            ],
            [
                'title' => 'IA pour Créateurs : ChatGPT & Co',
                'slug' => 'ai-for-creators',
                'description' => 'Utilise l\'IA pour créer du contenu, automatiser et booster ta productivité.',
                'level' => 'pro',
                'category' => 'AI',
                'duration_minutes' => 90,
                'is_public' => false,
                'order' => 3,
            ],
            [
                'title' => 'Tunnels de Vente Live',
                'slug' => 'sales-funnels',
                'description' => 'Construis des tunnels de vente efficaces pendant tes lives. Monétise intelligemment.',
                'level' => 'elite',
                'category' => 'Business',
                'duration_minutes' => 120,
                'is_public' => false,
                'order' => 4,
            ],
            [
                'title' => 'Automation Streamer.bot',
                'slug' => 'automation-streamerbot',
                'description' => 'Automatise ton stream avec Streamer.bot. Commandes, triggers, intégrations.',
                'level' => 'pro',
                'category' => 'Automation',
                'duration_minutes' => 75,
                'is_public' => false,
                'order' => 5,
            ],
            [
                'title' => 'Analytics & KPI Backstage',
                'slug' => 'analytics-kpi',
                'description' => 'Comprends et optimise tes KPI TikTok. Data-driven growth.',
                'level' => 'elite',
                'category' => 'Analytics',
                'duration_minutes' => 60,
                'is_public' => false,
                'order' => 6,
            ],
        ];

        foreach ($trainings as $training) {
            TrainingsCatalog::create($training);
        }

        // Creators showcase
        $creators = [
            [
                'name' => 'Alex Gaming',
                'tiktok_handle' => '@alex_gaming_pro',
                'niche' => 'Gaming',
                'bio' => 'Streamer gaming passionné. 2M+ followers. Spécialiste Fortnite & Valorant.',
                'followers_count' => 2100000,
                'diamonds_earned' => 850000,
                'is_featured' => true,
                'order' => 1,
            ],
            [
                'name' => 'Sophie Lifestyle',
                'tiktok_handle' => '@sophie_lifestyle',
                'niche' => 'Lifestyle',
                'bio' => 'Créatrice lifestyle & bien-être. Partage mes routines et astuces quotidiennes.',
                'followers_count' => 1500000,
                'diamonds_earned' => 620000,
                'is_featured' => true,
                'order' => 2,
            ],
            [
                'name' => 'Max Fitness',
                'tiktok_handle' => '@max_fitness_coach',
                'niche' => 'Fitness',
                'bio' => 'Coach sportif certifié. Transforme ton corps en 90 jours.',
                'followers_count' => 980000,
                'diamonds_earned' => 450000,
                'is_featured' => false,
                'order' => 3,
            ],
            [
                'name' => 'Luna Music',
                'tiktok_handle' => '@luna_music_live',
                'niche' => 'Music',
                'bio' => 'Chanteuse & compositrice. Lives acoustiques tous les soirs.',
                'followers_count' => 750000,
                'diamonds_earned' => 380000,
                'is_featured' => false,
                'order' => 4,
            ],
            [
                'name' => 'Tom Tech',
                'tiktok_handle' => '@tom_tech_reviews',
                'niche' => 'Tech',
                'bio' => 'Reviews tech & tutoriels. Toute l\'actu high-tech en direct.',
                'followers_count' => 1200000,
                'diamonds_earned' => 520000,
                'is_featured' => false,
                'order' => 5,
            ],
            [
                'name' => 'Emma Art',
                'tiktok_handle' => '@emma_art_studio',
                'niche' => 'Art',
                'bio' => 'Artiste digitale. Créations en direct & tutoriels dessin.',
                'followers_count' => 650000,
                'diamonds_earned' => 290000,
                'is_featured' => false,
                'order' => 6,
            ],
        ];

        foreach ($creators as $creator) {
            CreatorsShowcase::create($creator);
        }
    }
}
