
define(['order!lib/underscore', 'order!lib/backbone'], function() {
    var TimeFragment = Backbone.Model.extend({
        url: 'api/timefragment',
        parse: function(data) {
            console.log(data);
            return new TimeFragment({
                note: data.note, project: data.project,
                startTime: XDate(data.startTime),
                endTime: XDate(data.endTime)
            });
        }
    });
    return TimeFragment;
});
