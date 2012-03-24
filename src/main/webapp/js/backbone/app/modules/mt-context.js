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
  var Context = namespace.module();

  // Example extendings
  Context.Model = Backbone.Model.extend({
    selectedProject: {},
    selectedProjectView: {}
  });

  // Required, return the module for AMD compliance
  return Context;

});
