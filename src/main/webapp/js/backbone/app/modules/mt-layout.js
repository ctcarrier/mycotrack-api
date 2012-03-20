define([
  "namespace",

  // Libs
  "jquery",
  "use!underscore",
  "use!backbone",
  "modelbinding"

  // Modules

  // Plugins
],

function(namespace, $, _, Backbone, ModelBinding) {

  // Create a new module
  var Mycotrack = namespace.module();
  var selectedProject

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

    initialize: function(){
            this.model.bind("change", function() {
              this.render();
            }, this);
        },

    render: function(manage) {
        var result = manage(this).render();
        ModelBinding.bind(this);
        return result;
      }
  });

  Mycotrack.Views.ProjectView = Backbone.View.extend({
    template: "project_list_hb",

    tagName: "li",

    events: {
        "click a": "clicked"
    },

    serialize: function() {
      return this.model.toJSON();
    },

    clicked: function(e){
        this.options.selectedModel = this.model;
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
        var sm = this.options.selectedModel;

        // Iterate over the passed collection and create a view for each item
        this.collection.each(function(model) {
          // Pass the data to the new SomeItem view
          var projectView = new Mycotrack.Views.ProjectView({
            model: model,
            selectedModel: sm
          });
          view.insert(projectView);
        });

        // You still must return this view to render, works identical to
        // existing functionality.
        return view.render();
      }

  });

  // Required, return the module for AMD compliance
  return Mycotrack;

});
