<?php

class Api_Controller extends Base_Controller
{
    public $restful = true;

    public function get_timefragment()
    {
        echo "get";
    }

    public function put_timefragment()
    {
        echo "put";
    }

    public function post_timefragment()
    {
        $json = Input::json();

        echo json_encode($json);
    }

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

    public function put_user()
    {
        $content = Request::foundation()->getContent();
        $json = Input::json();
        var_dump($json);
        $user = new User();
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
