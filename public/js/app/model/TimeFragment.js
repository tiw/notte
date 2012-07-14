
define(['order!lib/underscore', 'order!lib/backbone'], function() {
    var TimeFragment = Backbone.Model.extend({
        url: function() {
            if (this.get('id') > 0) {
                return 'api/timefragment?id=' + this.get('id');
            } else {
                return 'api/timefragment';
            }
        },
        defaults: {note: ''},
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
