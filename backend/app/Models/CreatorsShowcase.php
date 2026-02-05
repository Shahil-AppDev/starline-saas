<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CreatorsShowcase extends Model
{
    protected $table = 'creators_showcase';

    protected $fillable = [
        'name',
        'tiktok_handle',
        'niche',
        'avatar',
        'bio',
        'followers_count',
        'diamonds_earned',
        'is_featured',
        'order',
    ];

    protected $casts = [
        'followers_count' => 'integer',
        'diamonds_earned' => 'integer',
        'is_featured' => 'boolean',
        'order' => 'integer',
    ];
}
