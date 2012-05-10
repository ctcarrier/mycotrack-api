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
        "click #project-submit": "saveSelected"
    },

    saveSelected: function() {
        var view = this;
        console.log('Saving selected');
        this.model.save({}, {success: function(model, response){
            view.options.context.trigger('project:save');
        }});
        
    },

    serialize: function() {
      return ({project: this.options.project.toJSON(), culture: this.options.culture.toJSON()});
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
  });

  // This will fetch the tutorial template and render it.
  Mycotrack.Views.ProjectList = Backbone.View.extend({
    tagName: "ul",
    className: 'projects nav nav-tabs nav-stacked',

    initialize: function(){
        console.log('Initializing projectListView');
        _.bindAll('render');

    },

    render: function(manage) {
        // Have LayoutManager manage this View and call render.
        var view = manage(this);
        var ctx = this.options.context;

//        if (!namespace.app.initialized) {
//            namespace.app.initialized = true;
            // Iterate over the passed collection and create a view for each item
            console.log(this.collection);
            this.collection.each(function(model) {
              // Pass the data to the new SomeItem view
              console.log('Adding project');
              var projectView = new Mycotrack.Views.ProjectView({
                model: model,
                context: ctx
              });
              view.insert(projectView);
            });
//        }

        // You still must return this view to render, works identical to
        // existing functionality.
        return view.render();
      }

  });

  Mycotrack.Views.CultureView = Backbone.View.extend({
    template: "culture_list_hb",

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
        this.options.context.set('selectedCulture', this.model);
        this.options.context.set('selectedCultureView', this);
        this.options.context.trigger('culture:selected');
    }
  });

  // This will fetch the tutorial template and render it.
  Mycotrack.Views.CultureList = Backbone.View.extend({
    tagName: "ul",
    className: 'cultures nav nav-tabs nav-stacked',

    initialize: function(){
        _.bindAll('render');

    },

    render: function(manage) {
        // Have LayoutManager manage this View and call render.
        var view = manage(this);
        var ctx = this.options.context;

//        if (!this.initialized) {
//            this.initialized = true;
            // Iterate over the passed collection and create a view for each item
            this.collection.each(function(model) {
              // Pass the data to the new SomeItem view
              var cultureView = new Mycotrack.Views.CultureView({
                model: model,
                context: ctx
              });
              view.insert(cultureView);
            });
//        }

        // You still must return this view to render, works identical to
        // existing functionality.
        return view.render();
      }

  })

  // Required, return the module for AMD compliance
  return Mycotrack;

});
