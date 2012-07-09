<?php

class Api_Controller extends Base_Controller
{
    public $restful = true;

    public function get_timefragment()
    {
        $timefragments = Timefragment::where('user_id' , '=', 1)->get();
        $flatTimefragments = array();
        foreach ($timefragments as $timefragment) {
            $flatTimefragments[] = $timefragment->to_array();
        }
        echo json_encode($flatTimefragments);
    }

    public function put_timefragment()
    {
        echo "put";
    }


    public function post_timefragment()
    {
        $json = Input::json();
        $timeFragment = new Timefragment();
        //todo: get user info from auht identity
        $timeFragment->user_id = 1;
        $timeFragment->project = $json->project;
        $timeFragment->note = $json->note;
        $timeFragment->start_time = $json->startTime;
        $timeFragment->end_time = $json->endTime;
        try {
            $timeFragment->save();
            echo json_encode($json);
        } catch(Exception $e) {
            echo json_encode(array('status' => 'error', 'message' => $e->getMessage()));
        }
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
