<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('creators_showcase', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('tiktok_handle');
            $table->string('niche');
            $table->string('avatar')->nullable();
            $table->text('bio')->nullable();
            $table->integer('followers_count')->default(0);
            $table->integer('diamonds_earned')->default(0);
            $table->boolean('is_featured')->default(false);
            $table->integer('order')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('creators_showcase');
    }
};
