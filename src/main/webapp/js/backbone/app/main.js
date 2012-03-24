require([
  "namespace",

  // Libs
  "jquery",
  "use!underscore",
  "use!backbone",
  "modelbinding",

  // Modules
  "modules/example",
  "modules/mt-layout",
  "modules/mt-context"
],

function(namespace, jQuery, _, Backbone, ModelBinding, Example, Mycotrack, Context) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    routes: {
      "bb": "index",
      "bb_mt": "mtlayout"
    },

    mtlayout: function(hash) {
      var route = this;
      var projects = new Mycotrack.ProjectList();
      var context = new Context.Model( {selectedProject: new Mycotrack.Project()} );

      projects.fetch();
      var projectView = new Mycotrack.Views.ProjectList({
        collection: projects,
        context: context
      });

      var main = new Backbone.LayoutManager({
        template: "base"
      });

      main.setViews({
        "#projectList": projectView
      });

      main.render(function(el) {
        $("#main").html(el);
      });

      var selectedProjectView = new Mycotrack.Views.SelectedProjectView({context: context});
      main.view("#detail", selectedProjectView);

      context.on('project:selected', function(eventName){
        selectedProjectView.model = context.get('selectedProject');
        console.log('Should refresh with: ' + JSON.stringify(selectedProjectView.model));

        //ModelBinding.bind(selectedProjectView);
        selectedProjectView.render();
        ModelBinding.bind(selectedProjectView);
      });

      context.on('project:save', function(eventName){
        console.log('Refreshing project view');
        context.get('selectedProjectView').render();
      });
    }
  });

  // Shorthand the application namespace
  var app = namespace.app;

  // Treat the jQuery ready function as the entry point to the application.
  // Inside this function, kick-off all initialization, everything up to this
  // point should be definitions.
  jQuery(function($) {
    // Define your master router on the application namespace and trigger all
    // navigation from this instance.
    app.router = new Router();

    // Trigger the initial route and enable HTML5 History API support
    Backbone.history.start({ pushState: true });
  });

  // All navigation that is relative should be passed through the navigate
  // method, to be processed by the router.  If the link has a data-bypass
  // attribute, bypass the delegation completely.
  $(document).on("click", "a:not([data-bypass])", function(evt) {
    // Get the anchor href and protcol
    var href = $(this).attr("href");
    var protocol = this.protocol + "//";

    // Ensure the protocol is not part of URL, meaning its relative.
    if (href && href.slice(0, protocol.length) !== protocol &&
        href.indexOf("javascript:") !== 0) {
      // Stop the default event to ensure the link will not cause a page
      // refresh.
      evt.preventDefault();

      // This uses the default router defined above, and not any routers
      // that may be placed in modules.  To have this work globally (at the
      // cost of losing all route events) you can change the following line
      // to: Backbone.history.navigate(href, true);
      app.router.navigate(href, true);
    }
  });

});
