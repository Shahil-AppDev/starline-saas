<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JoinLead extends Model
{
    protected $fillable = [
        'tiktok_handle',
        'email',
        'phone',
        'niche',
        'goals',
        'weekly_hours_available',
        'social_links',
        'status',
    ];

    protected $casts = [
        'social_links' => 'array',
        'weekly_hours_available' => 'integer',
    ];
}
