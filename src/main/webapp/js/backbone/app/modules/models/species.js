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
  var Species = namespace.module();

  // Example extendings
  Species.Model = Backbone.Model.extend({
        urlRoot: '/',

        url: function() {
            if (!this.isNew()){
                return '/api' + this.id;
            }
          return this.urlRoot;
        },

        parse: function(response) {
            var content = response;
            return content;
        }
    });

  Species.Collection = Backbone.Collection.extend({
        url: '/api/species',

        model: Species.Model
   });

  // Required, return the module for AMD compliance
  return Species;

});
