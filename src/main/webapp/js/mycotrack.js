Mycotrack = Ember.Application.create({
        
        // When everything is loaded.
        ready: function() {

            // Start polling Twitter
            //      setInterval(function() {
            //      Dashboard.customerResults.refresh();
            //  }, 20000);

            // The default search is empty, let's find some cats.
            //Twitter.searchResults.set("query", "cats");

            // Call the superclass's `ready` method.
            this._super();
        }
    });

(function($) {

        var app = $.sammy('#main', function() {
      
            this.use('Handlebars', 'hb');

          this.get('/projectList', function(context) {
            console.log('Yo yo yo');
            Mycotrack.projects.getProjects();
            this.partial('templates/projectList.hb');
          });

          this.get('/speciesList', function(context) {
            console.log('Yo yo yo');
            Mycotrack.species.populate();
          });

          this.get('/cultureList', function(context) {
            console.log('Yo yo yo');
            Mycotrack.cultures.populate();
          });

        });

        $(function() {
          app.run('/projectList');
          app.run('/speciesList');
          app.run('/cultureList');
        });

      })(jQuery);