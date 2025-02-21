<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'firstname' => 'admin',
            'lastname' => 'admin',
            'email' => 'saadlraba@gmail.com',
            'password' => '1234',
            'user_type' => 'admin',
        ]);
    }
}
