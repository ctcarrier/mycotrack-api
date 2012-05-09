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
    bootstrapdropdown: "../assets/js/plugins/bootstrap-dropdown",
    bootstrapdatepicker: "../assets/js/plugins/bootstrap-datepicker",
    base64: "../assets/js/libs/base64",
    gx: "../assets/js/libs/GX",
    modaldialog: "../assets/js/libs/Backbone.ModalDialog",

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

    base64: {
      attach: "Base64"
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
    },
    bootstrapdropdown: {
        deps: ["jquery"]
    },
    bootstrapdatepicker: {
        deps: ["jquery"]
    },
    gx: {
        deps: ["jquery"]
    },
    modaldialog: {
        deps: ["use!backbone"]
    }
  }
});
