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
        Schema::create('batch_groups', function (Blueprint $table) {
            $table->id();
            $table->foreignId('batch_id')->constrained();
            $table->bigInteger('participant_id')->unsigned();
            $table->foreign('participant_id')->references('id')->on('leads');
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
        Schema::dropIfExists('batch_groups');
    }
};
