<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
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
        \App\Models\User::factory()->create([
            'name' => 'Bhaskar Verma',
            'email' => 'test@example.com',
            'username' => 'bhaskar',
            'password' => Hash::make('12345'),
            'type' => 'admin'
        ]);

        // Create the same for Jalene, Enrique, Jainul and Gabriel
        // Email for each should be name in small case with @quadrapluspmti.com
        // Username should be first name in small case
        // Password should be 12345
        // Type should be 'associate'

        \App\Models\User::factory()->create([
            'name' => 'Jalene',
            'email' => 'jalene@quadrapluspmti.com',
            'username' => 'jalene',
            'password' => Hash::make('12345'),
            'type' => 'associate'
        ]);

        \App\Models\User::factory()->create([
            'name' => 'Enrique',
            'email' => 'enrique@quadrapluspmti.com',
            'username' => 'enrique',
            'password' => Hash::make('12345'),
            'type' => 'associate'
        ]);

        \App\Models\User::factory()->create([
            'name' => 'Jainul',
            'email' => 'jainul@quadrapluspmti.com',
            'username' => 'jainul',
            'password' => Hash::make('12345'),
            'type' => 'associate'
        ]);

        \App\Models\User::factory()->create([
            'name' => 'Gabriel',
            'email' => 'gabriel@quadrapluspmti.com',
            'username' => 'gabriel',
            'password' => Hash::make('12345'),
            'type' => 'associate'
        ]);

        // Create Users for the trainers Durga, Omar, Javed, Farookh, Shiwani, Babu, Timothy, Sujoy
        // Email would be empty for all of them
        // Username should be name in small case
        // Password should be 12345
        // Type should be 'trainer'

        \App\Models\User::factory()->create([
            'name' => 'Durga',
            'email' => '',
            'username' => 'durga',
            'password' => Hash::make('12345'),
            'type' => 'trainer'
        ]);

        \App\Models\User::factory()->create([
            'name' => 'Omar',
            'email' => '',
            'username' => 'omar',
            'password' => Hash::make('12345'),
            'type' => 'trainer'
        ]);

        \App\Models\User::factory()->create([
            'name' => 'Javed',
            'email' => '',
            'username' => 'javed',
            'password' => Hash::make('12345'),
            'type' => 'trainer'
        ]);

        \App\Models\User::factory()->create([
            'name' => 'Farookh',
            'email' => '',
            'username' => 'farookh',
            'password' => Hash::make('12345'),
            'type' => 'trainer'
        ]);

        \App\Models\User::factory()->create([
            'name' => 'Shiwani',
            'email' => '',
            'username' => 'shiwani',
            'password' => Hash::make('12345'),
            'type' => 'trainer'
        ]);

        \App\Models\User::factory()->create([
            'name' => 'Babu',
            'email' => '',
            'username' => 'babu',
            'password' => Hash::make('12345'),
            'type' => 'trainer'
        ]);

        \App\Models\User::factory()->create([
            'name' => 'Timothy',
            'email' => '',
            'username' => 'timothy',
            'password' => Hash::make('12345'),
            'type' => 'trainer'
        ]);

        \App\Models\User::factory()->create([
            'name' => 'Sujoy',
            'email' => '',
            'username' => 'sujoy',
            'password' => Hash::make('12345'),
            'type' => 'trainer'
        ]);

        // Create Courses for each of the following:
        // 1. PMP - 40 hours - $1000
        // 2. CFM - 20 hours - $1500
        // 3. Leed GA - 30 hours - $2000
        // 4. Medical Coding - 18 hours - $1200
        // 5. Six Sigma Green Belt - 20 hours - $1600
        // 6. Fidic - 15 hours - $1500
        // 7. Advance Excel - 20 hours - $2200
        // 8. SAP - 8 hours - $999
        // 9. AutoCAD - 13 hours - $1300
        // 10. ACP Agile - 13 hours - $1300
        // 11. RMP - 18 hours - $1900
        // 12. CCP - 26 hours - $3400

        \App\Models\Course::factory()->create([
            'name' => 'PMP',
            'duration_in_hours' => 40,
            'price' => 1000
        ]);

        \App\Models\Course::factory()->create([
            'name' => 'CFM',
            'duration_in_hours' => 20,
            'price' => 1500
        ]);

        \App\Models\Course::factory()->create([
            'name' => 'Leed GA',
            'duration_in_hours' => 30,
            'price' => 2000
        ]);

        \App\Models\Course::factory()->create([
            'name' => 'Medical Coding',
            'duration_in_hours' => 18,
            'price' => 1200
        ]);

        \App\Models\Course::factory()->create([
            'name' => 'Six Sigma Green Belt',
            'duration_in_hours' => 20,
            'price' => 1600
        ]);

        \App\Models\Course::factory()->create([
            'name' => 'Fidic',
            'duration_in_hours' => 15,
            'price' => 1500
        ]);

        \App\Models\Course::factory()->create([
            'name' => 'Advance Excel',
            'duration_in_hours' => 20,
            'price' => 2200
        ]);

        \App\Models\Course::factory()->create([
            'name' => 'SAP',
            'duration_in_hours' => 8,
            'price' => 999
        ]);

        \App\Models\Course::factory()->create([
            'name' => 'AutoCAD',
            'duration_in_hours' => 13,
            'price' => 1300
        ]);

        \App\Models\Course::factory()->create([
            'name' => 'ACP Agile',
            'duration_in_hours' => 13,
            'price' => 1300
        ]);

        \App\Models\Course::factory()->create([
            'name' => 'RMP',
            'duration_in_hours' => 18,
            'price' => 1900
        ]);

        \App\Models\Course::factory()->create([
            'name' => 'CCP',
            'duration_in_hours' => 26,
            'price' => 3400
        ]);

    }
}
