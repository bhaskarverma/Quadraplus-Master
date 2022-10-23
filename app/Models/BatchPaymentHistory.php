<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BatchPaymentHistory extends Model
{
    use HasFactory;

    protected $fillable = [
        'batch_group_id', 'amount', 'payment_mode'
    ];
}
