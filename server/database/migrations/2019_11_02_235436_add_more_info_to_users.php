<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddMoreInfoToUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('language', 5)->default('en');
            $table->string('avatar', 250)->default('/storage/images/default-avatar.png'); // Todo: edit to default image
            $table->text('self_intro')->nullable();
            $table->integer('self_thinking_travel_style')->default(0);
            $table->integer('question_result_travel_style')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn([
                'language', 
                'avatar', 
                'self_intro', 
                'self_thinking_travel_style', 
                'question_result_travel_style'
            ]);
        });
    }
}

