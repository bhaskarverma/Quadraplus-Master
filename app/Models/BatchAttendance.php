<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BatchAttendance extends Model
{
    use HasFactory;

    public $fillable = [
        'batch_id',
        'participant_id',
        'present'
    ];
}
