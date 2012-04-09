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
  var BaseView = namespace.module();

   BaseView.Project = Backbone.View.extend({
    template: "base/project_base"
  });

  BaseView.Culture = Backbone.View.extend({
    template: "base/culture_base"
  });

  BaseView.Home = Backbone.View.extend({
    template: "base/home_base"
  });

  // Required, return the module for AMD compliance
  return BaseView;

});
