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
  var Project = namespace.module();

  // Example extendings
  Project.Model = Backbone.Model.extend({
        urlRoot: '/projects',

        parse: function(response) {
            var content = response;
            return content;
        }
    });

  Project.Collection = Backbone.Collection.extend({
        url: '/projects',

        model: Project.Model
   });

  // Required, return the module for AMD compliance
  return Project;

});
