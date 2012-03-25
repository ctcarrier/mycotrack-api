define([
  "namespace",

  // Libs
  "jquery",
  "use!underscore",
  "use!backbone"
  
  // Modules

  // Plugins
],

function(namespace, $, _, Backbone) {

  // Create a new module
  var Navbar = namespace.module();

   Navbar.Views.Navbar = Backbone.View.extend({
    template: "navbar",

    events: {
        "click #new_project": "newProject"
    },

    newProject: function() {
        this.options.context.trigger('project:new');
    }
  });

  // Required, return the module for AMD compliance
  return Navbar;

});
