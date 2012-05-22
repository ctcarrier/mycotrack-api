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
  var CultureProject = namespace.module();

  // Example extendings
  CultureProject.Model = Backbone.Model.extend({
        urlRoot: '/projects',

        parse: function(response) {
            var content = response;
            return content;
        }
    });

   CultureProject.Collection = Backbone.Collection.extend({
          url: '/cultures/all/projects',

          model: CultureProject.Model
     });

  // Required, return the module for AMD compliance
  return CultureProject;

});
