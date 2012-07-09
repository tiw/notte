require(["jquery"], function($) {
    $(function() {
        require(['app/model/TimeFragmentCollection'], function(TimeFragmentCollection){
            var timeFragmentCollection = new TimeFragmentCollection();
        });
        require(['app/TimeFragmentApp'], function(App){
            var app = new App();
            app.startup();
        });
    });
});
