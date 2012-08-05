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
  var Farm = namespace.module();

  // Example extendings
  Farm.Model = Backbone.Model.extend({
        urlRoot: '/api/farms',

        parse: function(response) {
            var content = response;
            return content;
        }
    });

  // Required, return the module for AMD compliance
  return Farm;

});
