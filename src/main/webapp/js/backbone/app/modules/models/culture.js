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
  var Culture = namespace.module();

  // Example extendings
  Culture.Model = Backbone.Model.extend({
        urlRoot: '/',

        parse: function(response) {
            var content = response;
            return content;
        }
    });

  Culture.Collection = Backbone.Collection.extend({
        url: '/cultures',

        model: Culture.Model
   });

  // Required, return the module for AMD compliance
  return Culture;

});
