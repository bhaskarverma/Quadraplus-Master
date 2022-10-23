<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lead extends Model
{
    use HasFactory;

    public $fillable = [
        'name',
        'contact_no',
        'email',
        'company',
        'course_id',
        'status',
        'assigned_to',
        'closing_remark',
        'type',
        'source',
        'quoted_price'
    ];

    public function course()
    {
        return $this->belongsTo(Course::class, 'course_id');
    }

    public function leadFollowups()
    {
        return $this->hasMany(leadFollowups::class, 'lead_id');
    }

    public function assignedTo()
    {
        return $this->belongsTo(User::class, 'assigned_to');
    }
}
