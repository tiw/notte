<?php

class Home_Controller extends Base_Controller {

    public function action_index()
    {
        $user = new User();
        $user->firstname = 'Ting';
        $user->lastname = 'Wang';
        $user->save();
        return View::make('home.index')->with('name', 'Ting');
    }

}
