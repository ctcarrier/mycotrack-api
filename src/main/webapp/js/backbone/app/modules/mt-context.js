define([
  "namespace",

  // Libs
  "jquery",
  "use!underscore",
  "use!backbone",

  // Modules
  "modules/models/project",
  "modules/models/culture",
  "modules/models/user"

  // Plugins
],

function(namespace, $, _, Backbone, Project, Culture, User) {

  // Create a new module
  var Context = namespace.module();

  // Example extendings
  Context.Model = Backbone.Model.extend({
    selectedProject: new Project.Model(),
    currentUser: new User.Model({}),
    selectedProjectView: {},
    projectList: new Project.Collection(),
    cultureList: new Culture.Collection()
  });

  // Required, return the module for AMD compliance
  return Context;

});
