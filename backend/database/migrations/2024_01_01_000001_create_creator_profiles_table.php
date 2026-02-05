<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('creator_profiles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('tiktok_handle')->nullable();
            $table->string('niche')->nullable();
            $table->text('goals')->nullable();
            $table->integer('weekly_hours_available')->default(0);
            $table->string('phone')->nullable();
            $table->json('social_links')->nullable();
            $table->enum('status', ['pending', 'approved', 'active', 'suspended'])->default('pending');
            $table->integer('total_live_minutes')->default(0);
            $table->integer('diamonds_earned')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('creator_profiles');
    }
};
