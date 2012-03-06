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
        $('#projectList').spin("small");
        var self = this;
        var url = "/projects";
        $.get(url, function(data) {
            for (var i = 0; i < data.length; i++) {
                var proj = data[i]
                $.get(proj.cultureUrl, function(cultureData) {
                    proj.culture = cultureData
                    return;
                });

            }
            self.set("content", data)
            $('#projectList').spin(false);
            return;
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

Mycotrack.cultures = Ember.ArrayController.create({
    content: [],

    populate: function() {
        var self = this;
        var url = "/cultures";
        $.get(url, function(data) {
            self.set('content', data);
            return;
        });
    }
});