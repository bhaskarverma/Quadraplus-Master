<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('batches', function (Blueprint $table) {
            $table->id();
            $table->string('location');
            $table->dateTime('start_date');
            $table->foreignId('course_id')->constrained();
            $table->foreignId('batch_type_id');
            $table->unsignedBigInteger('trainer_id')->nullable();
            $table->foreign('trainer_id')->references('id')->on('users')->onDelete('no action');
            $table->string('mode');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('batches');
    }
};
