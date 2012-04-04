require([
  "namespace",

  // Libs
  "jquery",
  "use!underscore",
  "use!backbone",
  "modelbinding",
  "use!base64",

  // Modules
  "modules/mt-layout",
  "modules/mt-context",
  "modules/views/navbar",
  "modules/models/project",
  "modules/models/species",
  "modules/models/culture",
  "modules/models/general_aggregation",
  "modules/views/aggregation",
  "modules/views/base"
],

function(namespace, jQuery, _, Backbone, ModelBinding, Base64, Mycotrack, Context, Navbar, Project, Species, Culture, GeneralAggregation, Aggregation, BaseView) {

    var context = new Context.Model();


  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    initialize: function() {
        context.main = new Backbone.LayoutManager({
                template: "base"
        });

        context.loginForm = new Navbar.Views.LoginForm({
            context: context,
            model: context.currentUser
        });

        context.navBarView = new Navbar.Views.Navbar({
            context: context,
            views: {
                "#loginanchor": context.loginForm
            }
        });

        context.generalAggregationView = new Aggregation.Views.GeneralAggregation({
            context: context
        });

        context.homeView = new BaseView.Home({
            views: {
                "#aggregationDetail": context.generalAggregationView
            }
        });

        context.projectView = new Mycotrack.Views.ProjectList({
            context: context
          });

        context.projectBaseView = new BaseView.Project({
            views: {
                "#projectList": context.projectView
            }
        });

        context.selectedProjectView = new Mycotrack.Views.SelectedProjectView({context: context});

        context.main = new Backbone.LayoutManager({
            template: "base",
            views: {
                "#mtnav": context.navBarView
            }
          });

        context.on('project:save', function(eventName){
            console.log('Refreshing project view');
            context.get('selectedProjectView').render();
          });

          context.on('project:new', function(eventName){
            console.log('Should display new project');
          });

          context.on('auth:required', function(eventName){
            console.log('Login necessary!');
          });

        context.main.render(function(el) {
                $("#main").html(el);
                ModelBinding.bind(context.loginForm);
            });
    },

    routes: {
      "": "index",
      "bb_mt": "mtlayout",
      "login": "login"
    },

    index: function() {
        var route = this;

        var generalAggregation = new GeneralAggregation.Model();
        generalAggregation.fetch();

//        var loginForm = new Navbar.Views.LoginForm({
//            context: context,
//            model: context.currentUser
//        });
//
//        var navBarView = new Navbar.Views.Navbar({
//            context: context,
//            views: {
//                "#loginanchor": loginForm
//            }
//        });
//
//        var generalAggregationView = new Aggregation.Views.GeneralAggregation({
//            context: context,
//            model: generalAggregation
//        });
//
//        var homeView = new BaseView.Home({
//            views: {
//                "#aggregationDetail": generalAggregationView
//            }
//        });
//
//        var main = new Backbone.LayoutManager({
//            template: "base"
//        });
//
//        main.setViews({
//            "#mtnav": navBarView
//        });

        $("#menu_home").addClass('active');
        context.generalAggregationView.model=generalAggregation;

        context.main.view("#contentAnchor", context.homeView);

        generalAggregation.on('change', function(eventName){
            console.log('Rendering general agg');
            context.homeView.render();
        });
    },

    login: function() {

    },

    mtlayout: function(hash) {
      var route = this;
      var projects = new Project.Collection();
      var cultures = new Culture.Collection();

      cultures.fetch({success: function(){
        projects.fetch({ success: function(){
            projects.trigger('projects:fetch');
        }});
      }});

      context.projectView.collection = projects;

//      var projectView = new Mycotrack.Views.ProjectList({
//        collection: projects,
//        context: context
//      });
//      var navBarView = new Navbar.Views.Navbar({
//        context: context
//      });
//
//      var projectBaseView = new BaseView.Project({
//            views: {
//                "#projectList": projectView
//            }
//        });
//
//      var main = new Backbone.LayoutManager({
//        template: "base",
//        views: {
//            "#mtnav": navBarView
//        }
//      });

      context.main.view("#contentAnchor", context.projectBaseView);

//      main.render(function(el) {
//        $("#main").html(el);
//        $("#menu_projects").addClass('active');
//      });

//      var selectedProjectView = new Mycotrack.Views.SelectedProjectView({context: context});

      projects.on('projects:fetch', function(eventName){
            console.log('Rendering project view');
            context.projectView.render();
            context.projectBaseView.render();
        });

      context.on('project:selected', function(eventName){

        context.selectedProjectView.model = context.get('selectedProject');
        context.selectedProjectView.model.set('cultureList', cultures.toJSON());
        context.main.view("#detail", selectedProjectView);
        console.log('Should refresh with: ' + JSON.stringify(context.selectedProjectView.model));

        //ModelBinding.bind(selectedProjectView);
        context.selectedProjectView.render();
        ModelBinding.bind(context.selectedProjectView);
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

    $.ajaxSetup({
        beforeSend: function (xhr) {
            if (context.currentUser.get('email')) {
                console.log("Before sending!");
                var authString = context.currentUser.get('email') + ":" + context.currentUser.get('email');
                 var encodedAuthString = "Basic " + Base64.encode(authString);

                 console.log("Authorizing with: " + authString + "with encoded: " + encodedAuthString);

                xhr.setRequestHeader('Authorization', encodedAuthString);
            }
            return xhr;
	    },
        statusCode: {
            401: function(){
                console.log("HANDLED 401");
                context.trigger('auth:required');

            },
            403: function(){
                console.log("HANDLED 403");
                context.trigger('auth:required');

            }
        }
      });
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
