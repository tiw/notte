<?php

class Home_Controller extends Base_Controller
{

    public function action_api()
    {
        file_get_contents('/etc/nginx/sites-available/wib.local');
        file_get_contents('./public/js/app')
    }

    public function action_index()
    {
        //var_dump(Config::get('database'));die;
        $user = new User();
        $user->firstname = 'Ting';
        $user->lastname = 'Wang';
        $user->save();
        $tf = new Timefragment();
        $tf->user_id = 1;
        $tf->note = "xxx";
        $tf->save();
        return View::make('home.index')->with('name', 'Ting');
    }


    public function action_test()
    {
        // code...
    }
}
