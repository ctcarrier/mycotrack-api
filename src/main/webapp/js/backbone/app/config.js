// Set the require.js configuration for your application.
require.config({
  // Initialize the application with the main application file
  deps: ["main"],

  paths: {
    // JavaScript folders
    libs: "../assets/js/libs",
    plugins: "../assets/js/plugins",

    // Libraries
    jquery: "../assets/js/libs/jquery",
    underscore: "../assets/js/libs/underscore",
    backbone: "../assets/js/libs/backbone",
    backboneforms: "../assets/js/libs/backbone-forms",
    modelbinding: "../assets/js/libs/backbone.modelbinding",
    handlebars: "../assets/js/libs/handlebars-1.0.0.beta.6",
    layoutmanager: "../assets/js/plugins/backbone.layoutmanager",

    // Shim Plugin
    use: "../assets/js/plugins/use"
  },

  use: {
    backbone: {
      deps: ["use!underscore", "jquery"],
      attach: "Backbone"
    },

    backboneforms: {
      deps: ["use!backbone"]
    },

    underscore: {
      attach: "_"
    },

    layoutmanager: {
      deps: ["use!backbone"]
    },
     handlebars: {
        attach: "Handlebars"
    },
    modelbinding: {
        deps: ["use!backbone", "use!underscore"],
        attach: "ModelBinding"
    }
  }
});
