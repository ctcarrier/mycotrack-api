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
    modelbinder: "../assets/js/libs/Backbone.ModelBinder",
    collectionbinder: "../assets/js/libs/Backbone.CollectionBinder",
    handlebars: "../assets/js/libs/handlebars-1.0.0.beta.6",
    layoutmanager: "../assets/js/plugins/backbone.layoutmanager",
    bootstrapdropdown: "../assets/js/plugins/bootstrap-dropdown",
    bootstrapdatepicker: "../assets/js/plugins/bootstrap-datepicker",
    base64: "../assets/js/libs/base64",
    gx: "../assets/js/libs/GX",
    modaldialog: "../assets/js/libs/Backbone.ModalDialog",
    jqueryvalidate: "../assets/js/libs/jquery.validate",
    h5validate: "../assets/js/libs/jquery.h5validate",
    jquerycookies: "../assets/js/plugins/jquery.cookies.2.2.0",
    datejs: "../assets/js/plugins/date-en-US",
    collapsiblelists: "../assets/js/libs/CollapsibleLists",
    bootstrap: "../assets/js/plugins/bootstrap",

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
    modelbinder: {
        deps: ["use!backbone", "jquery"],
        attach: "ModelBinder"
    },
    collectionbinder: {
        deps: ["use!backbone", "jquery"],
        attach: "CollectionBinder"
    },
    bootstrap: {
        deps: ["jquery"]
    },
    bootstrapdropdown: {
        deps: ["jquery", "use!bootstrap"]
    },
    bootstrapdatepicker: {
        deps: ["jquery", "use!bootstrap"]
    },
    gx: {
        deps: ["jquery"]
    },
    modaldialog: {
        deps: ["use!backbone"]
    },
    h5validate: {
        deps: ["jquery"]
    },
    jquerycookies: {
        deps: ["jquery"]
    },
    datejs: {
        deps: ["jquery"]
    }
  }
});
