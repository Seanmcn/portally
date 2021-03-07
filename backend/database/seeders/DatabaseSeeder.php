<?php

namespace Database\Seeders;

use App\Models\Book;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::truncate();
        User::create([
            'name' => 'Sean',
            'email' => 'me@seanmcn.com',
            'date_of_birth' => '1990-07-06',
            'password' => Hash::make('password'),
        ]);
    }
}
