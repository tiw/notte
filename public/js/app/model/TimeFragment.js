
define(['order!lib/underscore', 'order!lib/backbone'], function() {
    var TimeFragment = Backbone.Model.extend({
        url: 'api/timefragment',
        parse: function(data) {
            console.log(data);
        }
    });
    return TimeFragment;
});
