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
  var GeneralAggregation = namespace.module();

  // Example extendings
  GeneralAggregation.Model = Backbone.Model.extend({
        urlRoot: '/aggregations',

        parse: function(response) {
            var content = response;
            return content;
        }
    });

  // Required, return the module for AMD compliance
  return GeneralAggregation;

});
