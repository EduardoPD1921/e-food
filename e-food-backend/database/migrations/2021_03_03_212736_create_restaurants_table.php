<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRestaurantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('restaurants', function (Blueprint $table) {
            $table->id();
            $table->string('email')->unique();
            $table->string('name');
            $table->string('password');
            $table->string('street');
            $table->integer('number');
            $table->string('cep');
            $table->string('city');
            $table->string('state');
            $table->string('phone_number');
            $table->text('image')->nullable();
            $table->text('payment_method')->nullable();
            $table->string('shipping_time')->nullable();
            $table->string('average_price')->nullable();
            $table->text('time_schedule')->nullable();
            $table->text('description')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('restaurants');
    }
}
