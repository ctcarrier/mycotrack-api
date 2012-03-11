define([
  "namespace",

  // Libs
  "use!backbone"

  // Modules

  // Plugins
],

function(namespace, Backbone) {

  // Create a new module
  var Mycotrack = namespace.module();

  // Example extendings
  Mycotrack.Project = Backbone.Model.extend({
        urlRoot: '/projects',

        parse: function(response) {
            var content = response;
            return content;
        }
    });

  Mycotrack.ProjectList = Backbone.Collection.extend({
        url: '/projects',

        model: Mycotrack.Project
   });
  /*Mycotrack.Router = Backbone.Router.extend({
    routes: {
      "": "index"
    },

    index: function(hash) {
      var route = this;
      var tutorial = new Example.Views.Tutorial();

      // Attach the tutorial to the DOM
      tutorial.render(function(el) {
        $("#main").html(el);

        // Fix for hashes in pushState and hash fragment
        if (hash && !route._alreadyTriggered) {
          // Reset to home, pushState support automatically converts hashes
          //Backbone.history.navigate("", false);

          // Trigger the default browser behavior
          //location.hash = hash;

          // Set an internal flag to stop recursive looping
          //route._alreadyTriggered = true;
        }
      });
    }
   });*/

  // This will fetch the tutorial template and render it.
  Mycotrack.Views.ProjectList = Backbone.View.extend({

    template: "/js/backbone/app/templates/project_list.html",
    className: 'projects nav nav-tabs nav-stacked',

    initialize: function(){
            this.model.bind('reset', this.render, this);
        },

    render: function(done) {
      var view = this;

      // Fetch the template, render it to the View element and call done.
      namespace.fetchTemplate(this.template, function(tmpl) {
        //console.log("tmp = " + tmpl);
        var project = view.model;

        view.el.innerHTML = tmpl( {projects: project.models} );

        // If a done function is passed, call it with the element
        if (_.isFunction(done)) {
          done(view.el);
        }
        else {
            $("#main").html(view.el);
        }
      });
    }
  });

  // Required, return the module for AMD compliance
  return Mycotrack;

});
