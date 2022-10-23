<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BatchSchedule extends Model
{
    use HasFactory;

    protected $fillable = [
        'batch_id', 'class_datetime', 'class_end_datetime'
    ];

    public function batch()
    {
        return $this->belongsTo(Batch::class);
    }
}
