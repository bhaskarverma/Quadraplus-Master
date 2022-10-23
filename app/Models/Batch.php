<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Batch extends Model
{
    use HasFactory;

    protected $fillable = [
        'location', 'start_date', 'course_id', 'batch_type', 'trainer_id', 'mode'
    ];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    public function batchGroups()
    {
        return $this->hasMany(BatchGroup::class);
    }

    public function batchSchedules()
    {
        return $this->hasMany(BatchSchedule::class);
    }

    public function trainer()
    {
        return $this->belongsTo(User::class);
    }
}
