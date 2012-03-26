define([
  "namespace",

  // Libs
  "jquery",
  "use!underscore",
  "use!backbone",
  "modelbinding",

  // Modules
  "modules/mt-context"
  // Plugins
],

function(namespace, $, _, Backbone, ModelBinding, Context) {

  // Create a new module
  var Mycotrack = namespace.module();

  // Example extendings
  Mycotrack.Project = Backbone.Model.extend({
        urlRoot: '/projects',

        parse: function(response) {
            var content = response;
            return content;
        }
    });

  Mycotrack.ProjectList = Backbone.Collection.extend({
        url: '/projects',

        model: Mycotrack.Project
   });

   Mycotrack.Views.SelectedProjectView = Backbone.View.extend({
    template: "selected_project_hb",

    events: {
        "click #id-submit": "saveSelected"
    },

    saveSelected: function() {
        var view = this;
        console.log('Saving selected');
        this.model.save({}, {success: function(model, response){
            view.options.context.trigger('project:save');
        }});
        
    },

    serialize: function() {
        console.log('Serializing: ' + JSON.stringify(this.model.toJSON()));
      return this.model.toJSON();
    }
  });

  Mycotrack.Views.ProjectView = Backbone.View.extend({
    template: "project_list_hb",

    tagName: "li",

    initialize: function(){
        _.bindAll('clicked');
    },

    events: {
        "click a": "clicked"
    },

    serialize: function() {
      return this.model.toJSON();
    },

    clicked: function(e){
        this.options.context.set('selectedProject', this.model);
        this.options.context.set('selectedProjectView', this);
        this.options.context.trigger('project:selected');
    }
  })

  // This will fetch the tutorial template and render it.
  Mycotrack.Views.ProjectList = Backbone.View.extend({
    tagName: "ul",
    className: 'projects nav nav-tabs nav-stacked',

    initialize: function(){
        _.bindAll('render');
        this.collection.bind("reset", function() {
          this.render();
        }, this);

    },

    render: function(manage) {
        // Have LayoutManager manage this View and call render.
        var view = manage(this);
        var ctx = this.options.context;

        if (!this.intialized) {
            // Iterate over the passed collection and create a view for each item
            this.collection.each(function(model) {
              // Pass the data to the new SomeItem view
              var projectView = new Mycotrack.Views.ProjectView({
                model: model,
                context: ctx
              });
              view.insert(projectView);
            });
        }
        this.initialized = true;

        // You still must return this view to render, works identical to
        // existing functionality.
        return view.render();
      }

  });

  // Required, return the module for AMD compliance
  return Mycotrack;

});