<?php

class Create_Project {

    /**
     * Make changes to the database.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('project', function($table) {
            $table->increments('id');
            $table->integer('user_id');
            $table->string('name', 320);
            $table->text('description');
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
        Schema::drop('project');
    }

}
