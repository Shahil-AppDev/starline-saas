<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CreatorProfile extends Model
{
    protected $fillable = [
        'user_id',
        'tiktok_handle',
        'niche',
        'goals',
        'weekly_hours_available',
        'phone',
        'social_links',
        'status',
        'total_live_minutes',
        'diamonds_earned',
    ];

    protected $casts = [
        'social_links' => 'array',
        'weekly_hours_available' => 'integer',
        'total_live_minutes' => 'integer',
        'diamonds_earned' => 'integer',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
