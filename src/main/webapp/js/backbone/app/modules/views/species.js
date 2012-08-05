define([
  "namespace",

  // Libs
  "jquery",
  "use!underscore",
  "use!backbone",

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

  SpeciesView.Detail = Backbone.View.extend({
      template: "detail/species_detail",

      serialize: function() {
        return this.model.toJSON();
      }
    });

  // Required, return the module for AMD compliance
  return SpeciesView;

});
