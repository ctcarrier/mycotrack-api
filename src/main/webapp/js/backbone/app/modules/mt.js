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

  Mycotrack.Views.ProjectView = Backbone.View.extend({
    template: "/js/backbone/app/templates/project_list.html",

    tagName: "li",

    events: {
        "click a": "clicked"
    },

    initialize: function() {
        _.bindAll('render');
    },

    render: function(done) {
        var view = this;
        //var html = "<a href=#>" + this.model.get('name') + "</ a>";
        // Fetch the template, render it to the View element and call done.
        $(view.el).html("TEST");
      /*namespace.fetchTemplate(this.template, function(tmpl) {
        var projectName = view.model.get('name');

        var content = tmpl({ project: projectName });
        console.log("Content: " + content);
        $(view.el).append(content);

        // If a done function is passed, call it with the element
        if (_.isFunction(done)) {
          done(view.el);
        }
      });*/
      return this;
    },

    clicked: function(e){
        e.preventDefault();
        var name = this.model.get("name");
        alert(name);
    }
  })

  // This will fetch the tutorial template and render it.
  Mycotrack.Views.ProjectList = Backbone.View.extend({

    tagName: "ul",
    className: 'projects nav nav-tabs nav-stacked',

    initialize: function(){
            this.collection.bind('reset', this.render, this);
        },

    renderItem: function(model){
        var view = this;
        var itemView = new Mycotrack.Views.ProjectView({model: model});
        itemView.render();
        console.log("appending: " + itemView.el);
        $(view.el).append(itemView.el);
    },

    render: function(done) {
      console.log('RENDERING');
      var view = this;

      this.collection.each(this.renderItem);
      console.log("Finished UL: " + this.el);
      this.html("TEST");
      return this;
    }
  });

  // Required, return the module for AMD compliance
  return Mycotrack;

});
