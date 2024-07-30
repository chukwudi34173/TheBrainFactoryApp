<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('registration_payments', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('middle_name');
            $table->string('other_name');
            $table->enum('sex', ['male', 'female'])->nullable();
            $table->date('dob')->nullable();
            $table->string('parent_whatapp_no')->nullable();
            $table->string('candidate_phone_no')->unique()->nullable();
            $table->string('father_name');
            $table->string('father_occupation')->nullable();
            $table->string('mother_name');
            $table->string('mother_occupation')->nullable();
            $table->string('state_of_origin')->nullable();
            $table->string('lga_of_origin')->nullable();
            $table->text('current_address')->nullable();
            $table->string('class_tick')->nullable();
            $table->text('expected_amount_plan_desc');
            $table->string('subject_1');
            $table->string('subject_2');
            $table->string('subject_3');
            $table->string('subject_4');
            $table->string('subject_5');
            $table->string('subject_6');
            $table->string('subject_7');
            $table->string('subject_8');
            $table->string('subject_9');
            $table->string('time_section');
            $table->string('trans_refrence_id');
            $table->boolean('attestation')->default(false);
            $table->boolean('confirmed')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('registration_payments');
    }
};
