<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatientsTable extends Migration
{
    public function up()
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('sex');
            $table->date('dob');
            $table->string('phone_number');
            $table->string('email');
            $table->text('address');
            $table->string('marital_status')->nullable();
            $table->boolean('is_under_18')->default(false);
            $table->text('emergency_contact')->nullable(); 
            $table->text('family_doctor')->nullable(); 
            $table->text('preferred_pharmacy')->nullable(); 
            $table->text('health_history')->nullable();
            $table->text('medications')->nullable();
            $table->text('insurance')->nullable(); 
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('patients');
    }
}
