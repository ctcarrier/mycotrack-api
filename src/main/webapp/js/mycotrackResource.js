Mycotrack.Project = Ember.Resource.define({
  url: '/projects',
  schema: {
    id: String,
    name: String,
    description: String,
    enabled: Boolean,
    selected: Boolean
  }
});

Mycotrack.projectController = Ember.ResourceCollection.create({
  type: Mycotrack.Project,

  createProject: function(title) {
    var project = Mycotrack.Project.create({ name: name || '', description: description || '', enabled: true });
    project.save().done(function() {
      Mycotrack.projectController.pushObject(project);
    })
  },

  clearCompletedProjects: function() {
    this.filterProperty('enabled', true).forEach(function(project) {
      project.destroy().done(function() {
        Mycotrack.projectController.removeObject(project);
      })
    });
  },

  remaining: function() {
    return this.filterProperty('enabled', false).get('length');
  }.property('@each.enabled'),

  allAreDone: function(key, value) {
    if (value !== undefined) {
      this.setEach('enabled', value);

      return value;
    } else {
      return !!this.get('length') && this.everyProperty('enabled', true);
    }
  }.property('@each.enabled')
});