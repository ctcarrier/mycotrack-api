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

function(namespace, $, _, Backbone, Context) {

  // Create a new module
  var SpeciesView = namespace.module();

  SpeciesView.List = Backbone.View.extend({
    template: "species_list_hb",

    tagName: "ul",

    serialize: function() {
      return this.collection.toJSON();
    }
  });

  // Required, return the module for AMD compliance
  return SpeciesView;

});
