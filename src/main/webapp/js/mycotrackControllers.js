Mycotrack.selectedProjectController = Ember.Object.create({
  content: null

});

Mycotrack.selectedSpeciesController = Ember.Object.create({
  content: null

});

Mycotrack.projectController = Ember.Object.create({

    saveSelectedProject: function() {
        var toSave = Mycotrack.selectedProjectController.get('content');
        if (toSave.id) {
            var url = '/projects/' + toSave.id;
            $.ajax({
                type: "PUT",
                url: url,
                contentType: "application/json",
                data: JSON.stringify(toSave)
            });
        }
        else {
            var url = '/projects';
            $.ajax({
                type: "POST",
                url: url,
                contentType: "application/json",
                data: JSON.stringify(toSave)
            });
        }
    },

    createNewProject: function() {

        var newProject = new Object()
        newProject.name = "New Project"
        newProject.enabled = true
        Mycotrack.projects.pushObject(newProject)
        Mycotrack.selectedProjectController.set('content', newProject)
    }
})