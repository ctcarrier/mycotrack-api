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
  var Aggregation = namespace.module();

   Aggregation.Views.GeneralAggregation = Backbone.View.extend({
    template: "aggregation_detail",

    serialize: function() {
        console.log('Serializing: ' + JSON.stringify(this.model.toJSON()));
      return this.model.toJSON();
    }

  });

  // Required, return the module for AMD compliance
  return Aggregation;

});
