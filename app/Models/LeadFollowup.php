<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LeadFollowup extends Model
{
    use HasFactory;

    public $fillable = [
        'lead_id',
        'remarks',
        'date_of_next_action'
    ];

    public function lead()
    {
        return $this->belongsTo(Lead::class, 'lead_id');
    }
}
