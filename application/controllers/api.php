<?php

class Api_Controller extends Base_Controller
{
    public $restful = true;

    /**
     * get_user 
     * 
     * @return void
     */
    public function get_user()
    {
        $user_id = Input::get('id');
        echo $user_id;
    }

    /**
     * post_user 
     * 
     * @return void
     */
    public function post_user()
    {
        $email = Input::get('email');
        $password = Input::get('password');
        $user = User::create($email, $password);
    }
}
