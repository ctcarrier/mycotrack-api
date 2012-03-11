<div class="container">
    <div class="navbar">
    <div class="navbar-inner">
      <div style="width: auto;" class="container">
        <a data-target=".nav-collapse" data-toggle="collapse" class="btn btn-navbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </a>
        <a href="#" class="brand">Mycotrack</a>
        <div class="nav-collapse">
          <ul class="nav">
            <li><a href="/app">Home</a></li>
            <li class="active"><a href="/projectList">Project</a></li>
            <li><a href="/speciesList">Species</a></li>
          </ul>
          <form action="" class="navbar-search pull-left">
            <input type="text" placeholder="Search" class="search-query span2">
          </form>
          <ul class="nav pull-right">
            <li><a href="#">Link</a></li>
            <li class="divider-vertical"></li>
            <li class="dropdown">
              <a data-toggle="dropdown" class="dropdown-toggle" href="#">Dropdown <b class="caret"></b></a>
              <ul class="dropdown-menu">
                <li><a href="#">New Project</a></li>
                <li><a href="#">Do someting</a></li>
                <li><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </li>
          </ul>
        </div><!-- /.nav-collapse -->
      </div>
    </div><!-- /navbar-inner -->
  </div>
    <div class="container">
        <div class="row">
            <div class="span4">
                <div class="row">
                    <div class="span4">
                        <h4>Projects</h4>
                        <script type="text/x-handlebars">
                            {{#view Ember.Button
                            target="Mycotrack.projectController"
                            action="createNewProject"}}
                            New
                            {{/view}}
                        </script>
                    </div>
                </div>
                <br />
                <div class="row">
                    <div id="projectList" class="span2">
                    <script type="text/x-handlebars">

                        <!--{{view Ember.Checkbox class="mark-all-done"
                        title="Mark All as Done"
                        valueBinding="Mycotrack.projectController.allAreDone"}}-->

                        {{#view Mycotrack.ProjectListView contentBinding="Mycotrack.projects"}}
                        {{#each content}}
                        {{#view Mycotrack.ClickableProjectView contentBinding="this" }}
                            <a href="#">{{content.name}}</a>
                        {{/view}}
                        {{/each}}
                        {{/view}}
                    </script>
                    </div>
                </div>
            </div>
            <div id="detail" class="span4">
                <script type="text/x-handlebars">
                    {{#view Mycotrack.CardView}}
                    <div class="name">
                        {{view Ember.TextField valueBinding="content.name" placeholder="name"}}
                    </div>
                    <div class="description">
                        {{view Ember.TextField valueBinding="content.description" placeholder="description"}}
                    </div>

                    <br />
                    <div class="species">
                        Culture:
                        {{view Ember.Select
                           contentBinding="Mycotrack.cultures"
                           selectionBinding="Mycotrack.selectedProjectController.content.culture"
                           optionLabelPath="content.name"
                           optionValuePath="content.id"
                           prompt="Select Culture" }}
                    </div>
                    <br/>

                    <div class="enabled">
                        {{view Ember.Checkbox class="enabled"
                        title="Enabled"
                        valueBinding="content.enabled"}}
                    </div>
                    <br/>
                    {{/view}}


                    {{#view Ember.Button
                    target="Mycotrack.projectController"
                    action="saveSelectedProject"}}
                    Save
                    {{/view}}

                </script>

            </div>
        </div>
        <div class="row">

        </div>

    </div>
</div>