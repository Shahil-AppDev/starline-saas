<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class TrainingsCatalog extends Model
{
    protected $table = 'trainings_catalog';

    protected $fillable = [
        'title',
        'slug',
        'description',
        'level',
        'category',
        'duration_minutes',
        'thumbnail',
        'content',
        'is_public',
        'is_active',
        'order',
    ];

    protected $casts = [
        'is_public' => 'boolean',
        'is_active' => 'boolean',
        'duration_minutes' => 'integer',
        'order' => 'integer',
    ];

    public function progress(): HasMany
    {
        return $this->hasMany(TrainingProgress::class, 'training_id');
    }
}
