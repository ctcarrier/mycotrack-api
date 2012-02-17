Mycotrack.Project = Ember.Object.extend({
    jsonToObject: function(content) {
        for (key in content) {
            this.set(key, content[key]);
        }
    }

});


Mycotrack.projects = Ember.ArrayController.create({
    content: [],

    getProjects: function() {
        var self = this;
        var url = "/projects";
        $.get(url, function(data) {
            self.set('content', data);
            return;
        });
    },

    saveSelectedProject: function() {
        var toSave = Mycotrack.selectedProjectController.get('content');
        var url = '/projects/' + toSave.id;
        $.ajax({
            type: "PUT",
            url: url,
            contentType: "application/json",
            data: JSON.stringify(toSave)
        });
    }
});

Mycotrack.species = Ember.ArrayController.create({
    content: [],

    populate: function() {
        var self = this;
        var url = "/species";
        $.get(url, function(data) {
            self.set('content', data);
            return;
        });
    }
});