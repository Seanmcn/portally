<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\UserInvite;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Schema;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        // Clear users & invites
        Schema::disableForeignKeyConstraints();
        User::truncate();
        UserInvite::truncate();
        Schema::enableForeignKeyConstraints();

        // Create my user
        User::create([
            'name' => 'Sean',
            'email' => 'me@seanmcn.com',
            'date_of_birth' => '1990-07-06',
            'password' => Hash::make('password'),
        ]);

        // Create 100 invites
        for ($x = 0; $x <= 100; $x++) {
            UserInvite::create([
                'code' => Str::random(50)
            ]);
        }
    }
}
