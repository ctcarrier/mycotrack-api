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
  var BaseView = namespace.module();

   BaseView.Project = Backbone.View.extend({
    template: "base/project_base"
  });

  BaseView.Culture = Backbone.View.extend({
    template: "base/culture_base"
  });

  BaseView.Species = Backbone.View.extend({
    template: "base/species_base"
  });

  BaseView.Home = Backbone.View.extend({
    template: "base/home_base"
  });

  BaseView.NewProject = Backbone.View.extend({
    template: "base/new_project",

    events: {
        "click #project-submit": "saveSelected"
    },

    saveSelected: function() {
        var view = this;
        ModelBinding.bind(this);
        this.model.set('enabled', true);
        console.log('Saving new: ' + JSON.stringify(this.model));
        this.model.save({}, {success: function(model, response){
            namespace.app.router.navigate("/bb_mt", true);
        }});

    },

    serialize: function() {
      return this.model.toJSON();
    }
  });

  BaseView.NewCulture = Backbone.View.extend({
    template: "base/new_culture",

    events: {
        "click #culture-submit": "saveSelected"
    },

    saveSelected: function() {
        var view = this;
        ModelBinding.bind(this);
        console.log('Saving new: ' + JSON.stringify(this.model));
        this.model.save({}, {success: function(model, response){
            namespace.app.router.navigate("/cultureList", true);
        }});

    },

    serialize: function() {
      return this.model.toJSON();
    }
  });

  BaseView.NewUser = Backbone.View.extend({
      template: "base/new_user",

      events: {
          "click #user-submit": "saveSelected"
      },

      saveSelected: function() {
          var view = this;
          ModelBinding.bind(this);
          console.log('Saving new: ' + JSON.stringify(this.model));
          this.model.save({}, {success: function(model, response){
              namespace.app.router.navigate("/bb_mt", true);
          }});

      },

      serialize: function() {
        return this.model.toJSON();
      }
    });

  // Required, return the module for AMD compliance
  return BaseView;

});
