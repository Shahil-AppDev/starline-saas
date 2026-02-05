<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ToolsCatalog extends Model
{
    protected $table = 'tools_catalog';

    protected $fillable = [
        'name',
        'slug',
        'description',
        'category',
        'icon',
        'download_url',
        'is_public',
        'is_active',
        'downloads_count',
    ];

    protected $casts = [
        'is_public' => 'boolean',
        'is_active' => 'boolean',
        'downloads_count' => 'integer',
    ];
}
