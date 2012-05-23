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
  var Navbar = namespace.module();

   Navbar.Views.Navbar = Backbone.View.extend({
    template: "navbar",

    events: {
        "click #new_project": "newProject",
        "click #menu_home": "navHome",
        "click #menu_projects": "navProjects",
        "click #menu_species": "navSpecies",
        "click #new_culture": "newCulture",
        "click #new_user": "newUser"
    },

    navHome: function(e) {
        console.log(namespace.app);
        e.preventDefault();
        namespace.app.router.navigate("/", true);
    },

    navProjects: function(e) {
        console.log(namespace.app);
        e.preventDefault();
        namespace.app.router.navigate("/projects", true);
    },

    navSpecies: function(e) {
        e.preventDefault();
        namespace.app.router.navigate("/newSpecies", true);
    },

    newProject: function(e) {
        e.preventDefault();
        namespace.app.router.navigate("/new_project", true);
    },

    newCulture: function(e) {
        e.preventDefault();
        namespace.app.router.navigate("/new_culture", true);
    },

    newUser: function(e) {
        e.preventDefault();
        namespace.app.router.navigate("/new_user", true);
    }
  });

  Navbar.Views.LoginForm = Backbone.View.extend({
    template: "loginform",
    tagName: "form",
    className: "form-inline loginform",

    events: {
        "click #loginbutton": "login"
    },

    login: function() {
        console.log("Should login with: " + JSON.stringify(this.model));
        namespace.app.trigger('login:submit');
    },

    serialize: function() {
      return this.model.toJSON();
    }
  });

  // Required, return the module for AMD compliance
  return Navbar;

});
