Mycotrack = Ember.Application.create({
        // When everything is loaded.
        ready: function() {

            Mycotrack.projects.getProjects();

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