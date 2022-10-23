<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BatchChangeHistory extends Model
{
    use HasFactory;

    protected $fillable = [
        'lead_id', 'batch_id'
    ];
}
