Mycotrack.StatsView = Ember.View.extend({
  remainingBinding: 'Mycotrack.projectController.remaining',

  remainingString: function() {
    var remaining = this.get('remaining');
    return remaining + (remaining === 1 ? " item" : " items");
  }.property('remaining')
});

Mycotrack.ProjectCheckbox = Ember.Checkbox.extend({

    content: null,

    click: function() {
        Mycotrack.selectedProjectController.set('content', content);
      },

      isSelected: function() {
        var selectedItem = Mycotrack.selectedProjectController.get('content');

        if (content === selectedItem) { return true; }
      }.property('Mycotrack.selectedProjectController.content')
});

Mycotrack.DetailedProjectView = Ember.TextField.extend({
  contentBinding: 'Mycotrack.selectedProjectController.content.name'
});

Mycotrack.CardView = SC.View.extend({
  contentBinding: 'Mycotrack.selectedProjectController.content',
  classNames: ['card'],
});

Mycotrack.SpeciesListView = Ember.View.extend({
        tagName: 'ul',
        classNames: ['species', 'unstyled']

    });

Mycotrack.ProjectListView = Ember.View.extend({
        tagName: 'ul',
        classNames: ['projects', 'nav', 'nav-tabs', 'nav-stacked']

    });

Mycotrack.SpeciesView = Ember.View.extend({
        tagName: 'li',
        classNames: ['species'],

        click: function(evt) {
            var selectedContent = this.get('content');

            Mycotrack.selectedSpeciesController.set('content', selectedContent);
        }
    });

Mycotrack.ProjectView = Ember.View.extend({
        tagName: 'li',
        classNames: ['projects']
    });

Mycotrack.ClickableProjectView = Ember.View.extend({
        tagName: 'li',

        classNames: ['projects'],
        
        click: function(evt) {
            var selectedContent = this.get('content');

            Mycotrack.selectedProjectController.set('content', selectedContent);

            return false;
        }
    });