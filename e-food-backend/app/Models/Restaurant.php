<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Restaurant extends Model
{
    use HasFactory, HasApiTokens;

    public $timestamps = false;

    protected $hidden = [
        'password'
    ];

    // protected $guarded = [];
    protected $fillable = ['name', 'street', 'number', 'city', 'state', 'phone_number'];
}
