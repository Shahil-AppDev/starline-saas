<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TrainingProgress extends Model
{
    protected $table = 'training_progress';

    protected $fillable = [
        'user_id',
        'training_id',
        'status',
        'progress_percentage',
        'started_at',
        'completed_at',
    ];

    protected $casts = [
        'progress_percentage' => 'integer',
        'started_at' => 'datetime',
        'completed_at' => 'datetime',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function training(): BelongsTo
    {
        return $this->belongsTo(TrainingsCatalog::class, 'training_id');
    }
}
