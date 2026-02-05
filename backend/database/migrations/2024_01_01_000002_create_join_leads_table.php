<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('join_leads', function (Blueprint $table) {
            $table->id();
            $table->string('tiktok_handle');
            $table->string('email');
            $table->string('phone')->nullable();
            $table->string('niche')->nullable();
            $table->text('goals')->nullable();
            $table->integer('weekly_hours_available')->nullable();
            $table->json('social_links')->nullable();
            $table->enum('status', ['new', 'contacted', 'approved', 'rejected'])->default('new');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('join_leads');
    }
};
