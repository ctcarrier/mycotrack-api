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
        urlRoot: '/api/projects',

        url: function() {
            if (!this.isNew()){
                return '/api' + this.id;
            }
          return this.urlRoot;
        },

        parse: function(response) {
            var content = response;
            if (content.startDate){
                console.log("Parsing date: " + content.startDate);
                content.startDate = new Date(content.startDate);
                console.log(content.startDate);
            }
            for (var i = 0; i < content.events.length; i++){
                content.events[i].dateCreated = new Date(content.events[i].dateCreated);
            }
            return content;
        }
    });

  Project.Collection = Backbone.Collection.extend({
        url: '/api/projects',

        model: Project.Model
   });

  // Required, return the module for AMD compliance
  return Project;

});
