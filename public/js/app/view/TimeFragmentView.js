
define(['app/model/TimeFragment', 'text!templates/time-fragment/time-fragment-line.html'], function(TimeFragment, lineTemplate) {
    var TimeFragmentView = Backbone.View.extend({
        tagName: 'tr',
        className: 'time-fragment-line',
        template: _.template(lineTemplate),
        initialize: function() {
            this.model.bind('destroy', this.remove, this);
        },
        render: function() {
                var compiledTemplate = this.template(this.model.toJSON());
                $(this.el).html(compiledTemplate);
            return this;
        },
        events: {
            'click .delete-ft': 'deleteModel'
        },
        deleteModel: function () {
            this.model.destroy({data: {id: this.model.get('id')}});
        },
        remove: function() {
            var thisEl = $(this.el);
            $(this.el).slideUp(null, function() {
                thisEl.remove();
            });
        }
    });
    return TimeFragmentView;
});
