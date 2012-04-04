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
  var User = namespace.module();

  // Example extendings
  User.Model = Backbone.Model.extend({
        urlRoot: '/users'
    });

  User.Collection = Backbone.Collection.extend({
        url: '/users',

        model: User.Model
   });

  // Required, return the module for AMD compliance
  return User;

});
