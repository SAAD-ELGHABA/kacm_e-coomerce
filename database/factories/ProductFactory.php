<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    protected $model = Product::class;

    public function definition(): array
    {
        return [
            'title' => $this->faker->word(),
            'description' => $this->faker->paragraph(),
            'prev_price' => $this->faker->randomFloat(2, 50, 200),
            'current_price' => $this->faker->randomFloat(2, 30, 150),
            'quantity' => $this->faker->numberBetween(1, 100),
            'sizeAvailable' => json_encode(['S', 'M', 'L']),
            'colorsAvailable' => json_encode(['red', 'blue', 'green']),
            'category' => $this->faker->word(),
            'section' => $this->faker->word(),
            'company' => $this->faker->company(),
            'imageUrl' => $this->faker->imageUrl(640, 480, 'products', true),
        ];
    }
}
