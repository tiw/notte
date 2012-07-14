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
            var timeFragments = [];
            _.each(resp, function(d, index) {
                var tf = new TimeFragment({
                    id: d.id,
                    project: d.project,
                    startTime: XDate(d.start_time),
                    endTime: XDate(d.end_time),
                    note: d.note
                });
                timeFragments[index] = tf;
            });
            return timeFragments;

        }
    });
    return TimeFragmentCollection;
});
