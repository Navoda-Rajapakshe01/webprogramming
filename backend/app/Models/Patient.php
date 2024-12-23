<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;

    protected $fillable = [
        'health_care_number',
        'first_name',
        'last_name',
        'sex',
        'dob',
        'phone_number',
        'email',
        'address',
        'marital_status',
        'is_under_18',
        'emergency_contact',
        'family_doctor',
        'preferred_pharmacy',
        'health_history',
        'medications',
        'insurance'
    ];

    protected $casts = [
        'emergency_contact' => 'array',
        'family_doctor' => 'array',
        'preferred_pharmacy' => 'array',
        'insurance' => 'array',
    ];
}
