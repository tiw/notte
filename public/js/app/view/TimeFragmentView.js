
define(['app/model/TimeFragment', 'text!templates/time-fragment/time-fragment-line.html', 'text!templates/time-fragment/time-fragment-edit-line.html'],
        function(TimeFragment, lineTemplate, editLineTemplate) {
    var TimeFragmentView = Backbone.View.extend({
        tagName: 'tr',
        className: 'time-fragment-line',
        template: _.template(lineTemplate),
        editTemplate: _.template(editLineTemplate),
        initialize: function() {
            this.model.bind('destroy', this.remove, this);
            this.model.bind('change:mode', this.changeMode, this);
        },
        render: function() {
            var compiledTemplate = this.template(this.model.toJSON());
            $(this.el).html(compiledTemplate);
            return this;
        },
        changeMode: function() {
            var compiledTemplate = null;
            if (this.model.get('mode') === 'edit') {
                 compiledTemplate = this.editTemplate(this.model.toJSON());
            } else {
                 compiledTemplate = this.template(this.model.toJSON());
            }
            $(this.el).html(compiledTemplate);
            return this;
        },
        events: {
            'click .delete-ft': 'deleteModel',
            'click .edit-ft': 'editModel',
            'click .save-ft': 'updateModel'
        },
        updateModel: function() {
            console.log('updateModel');
            // todo: following should be in callback
            this.model.set({mode: 'view'});
            this.changeMode();

        },
        editModel: function() {
            this.model.set({mode: 'edit'});
        },
        deleteModel: function() {
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
