define(['app/model/TimeFragment'], function(TimeFragment) {
    var TimeFragmentCollection = Backbone.Collection.extend({
        model: TimeFragment,
        url: function() {
            //if (this.model.get('id') > 0) {
                //return 'api/timefragment/' + this.model.get('id');
            //} else {
                return 'api/timefragment';
            //}
        },
        parse: function(resp) {
            var timeFragments = [],
                xd = new XDate(),
                offset = -xd.getTimezoneOffset() / 60;
            _.each(resp, function(d, index) {
                var startTime = new XDate(d.start_time),
                    endTime = new XDate(d.end_time);
                startTime.addHours(offset);
                endTime.addHours(offset);
                var tf = new TimeFragment({
                    id: d.id,
                    project: d.project,
                    startTime: startTime,
                    endTime: endTime,
                    note: d.note
                });
                console.log(tf.get('startTime').getUTCMode());
                timeFragments[index] = tf;
            });
            return timeFragments;

        }
    });
    return TimeFragmentCollection;
});
