<?php

class Create_Time_Fragment {

    /**
     * Make changes to the database.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('time_fragments', function($table) {
            $table->increments('id');
            $table->integer('user_id');
            $table->string('project', 320);
            $table->timestamp('start_time');
            $table->timestamp('end_time');
            $table->text('note');
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Revert the changes to the database.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('time_fragment');
    }

}
