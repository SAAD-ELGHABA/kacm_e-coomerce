<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        "title",
        "description",
        "prev_price",
        "current_price",
        "quantity",
        "sizeAvailable",
        "colorsAvailable",
        "category",
        "section",
        "company",
        "imageUrl",
    ];
}
