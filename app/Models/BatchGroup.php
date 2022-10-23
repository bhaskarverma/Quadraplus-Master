<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BatchGroup extends Model
{
    use HasFactory;

    protected $fillable = [
        'batch_id', 'participant_id'
    ];

    public function batch()
    {
        return $this->belongsTo(Batch::class);
    }

    public function participant()
    {
        return $this->belongsTo(Lead::class, 'participant_id');
    }
}
