<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    public $fillable = [
        'name',
        'price',
        'duration_in_hours'
    ];

    public function leads()
    {
        return $this->hasMany(Lead::class, 'course_id');
    }
}
