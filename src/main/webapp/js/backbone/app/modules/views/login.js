define([
  "namespace",

  // Libs
  "jquery",
  "use!underscore",
  "use!backbone",

  // Modules

  // Plugins
  "use!modaldialog"
],

function(namespace, $, _, Backbone) {

  // Create a new module
  var Login = namespace.module();

   Login.View = ModalView.extend({
    template: "/js/backbone/app/templates/login_modal.html",

    events: {
        "click #loginbutton": "login"
    },

    login: function() {
        this.hideModal();
        console.log("Should login with: " + JSON.stringify(this.model));
        namespace.app.trigger('login:submit');
    },

    serialize: function() {
      return this.model.toJSON();
    },

    render: function() {
        var view = this;
        namespace.fetchTemplate("/js/backbone/app/templates/login_modal.html", function(tmpl){
            $(view.el).html( tmpl(view.serialize()));
            view.showModal({
                closeImageUrl: "/js/backbone/assets/img/close-modal.png",
                closeImageHoverUrl: "/js/backbone/assets/img/close-modal-hover.png"
            });
        });
      }

  });

  // Required, return the module for AMD compliance
  return Login;

});
