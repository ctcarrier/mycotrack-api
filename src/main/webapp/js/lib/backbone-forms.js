


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>backbone-forms/src/backbone-forms.js at master · powmedia/backbone-forms</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

    
    

    <meta content="authenticity_token" name="csrf-param" />
<meta content="SAyJO2JSXqlFmgtHUOl7h0MerayrLbM77eXlkn60KHs=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/stylesheets/bundles/github-c1231dbd75402200b63fec9cd06ba0ee4fce0677.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/stylesheets/bundles/github2-479c7e81b5a5a7e0684fbf37f7bf89916417f645.css" media="screen" rel="stylesheet" type="text/css" />
    

    <script src="https://a248.e.akamai.net/assets.github.com/javascripts/bundles/jquery-5b140862bd914d3619171dece9be92269c2b1fe1.js" type="text/javascript"></script>
    <script src="https://a248.e.akamai.net/assets.github.com/javascripts/bundles/github-b4102a9465f9c4befb1870f7b174c771b2c35729.js" type="text/javascript"></script>
    

      <link rel='permalink' href='/powmedia/backbone-forms/blob/e66960e44c6c246908e5543ef259363a93625790/src/backbone-forms.js'>
    <meta property="og:title" content="backbone-forms"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/powmedia/backbone-forms"/>
    <meta property="og:image" content="https://a248.e.akamai.net/assets.github.com/images/gravatars/gravatar-140.png?1329275856"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="backbone-forms - Form framework for BackboneJS with nested forms, editable lists and validation"/>

    <meta name="description" content="backbone-forms - Form framework for BackboneJS with nested forms, editable lists and validation" />
  <link href="https://github.com/powmedia/backbone-forms/commits/master.atom" rel="alternate" title="Recent Commits to backbone-forms:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob  vis-public env-production " data-blob-contribs-enabled="yes">
    
    
    

      <div id="header" class="true clearfix">
        <div class="container clearfix">
          <a class="site-logo" href="https://github.com/">
            <!--[if IE]>
            <img alt="GitHub" class="github-logo" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7.png?1323882716" />
            <img alt="GitHub" class="github-logo-hover" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7-hover.png?1324325358" />
            <![endif]-->
            <img alt="GitHub" class="github-logo-4x" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x.png?1323882716" />
            <img alt="GitHub" class="github-logo-4x-hover" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x-hover.png?1324325358" />
          </a>

              
    <div class="topsearch ">
<form action="/search" id="top_search_form" method="get">        <a href="/search" class="advanced-search tooltipped downwards" title="Advanced Search">Advanced Search</a>
        <div class="search placeholder-field js-placeholder-field">
          <label class="placeholder" for="global-search-field">Search…</label>
          <input type="text" class="search my_repos_autocompleter" id="global-search-field" name="q" results="5" spellcheck="false" autocomplete="off" data-autocomplete="my-repos-autocomplete">
          <div id="my-repos-autocomplete" class="autocomplete-results">
            <ul class="js-navigation-container"></ul>
          </div>
          <input type="submit" value="Search" class="button">
        </div>
        <input type="hidden" name="type" value="Everything" />
        <input type="hidden" name="repo" value="" />
        <input type="hidden" name="langOverride" value="" />
        <input type="hidden" name="start_value" value="1" />
</form>      <ul class="top-nav">
          <li class="explore"><a href="https://github.com/explore">Explore</a></li>
          <li><a href="https://gist.github.com">Gist</a></li>
          <li><a href="/blog">Blog</a></li>
        <li><a href="http://help.github.com">Help</a></li>
      </ul>
    </div>


            


  <div id="userbox">
    <div id="user">
      <a href="https://github.com/ctcarrier"><img height="20" src="https://secure.gravatar.com/avatar/db84ff5425af8419d79a60554f85c12a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
      <a href="https://github.com/ctcarrier" class="name">ctcarrier</a>
    </div>
    <ul id="user-links">
      <li>
        <a href="/inbox/notifications" id="notifications" class="tooltipped downwards" title="Notifications">
          <span class="icon">Notifications</span>
          <span class="unread_count">5</span>
        </a>
      </li>
      <li><a href="/settings/profile" id="settings" class="tooltipped downwards" title="Account Settings"><span class="icon">Account Settings</span></a></li>
      <li>
<form action="/logout" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="SAyJO2JSXqlFmgtHUOl7h0MerayrLbM77eXlkn60KHs=" /></div>          <button type="submit" id="logout" class="tooltipped downwards" title="Log Out">
            <span class="icon">Log Out</span>
          </button>
</form>      </li>
    </ul>
  </div>



          
        </div>
      </div>

      

            <div class="site" itemscope itemtype="http://schema.org/WebPage">
      <div class="container">
        <div class="pagehead repohead instapaper_ignore readability-menu">
        <div class="title-actions-bar">
          <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
<a href="/powmedia" itemprop="url">            <span itemprop="title">powmedia</span>
            </a> /
            <strong><a href="/powmedia/backbone-forms" class="js-current-repository">backbone-forms</a></strong>
          </h1>
          



              <ul class="pagehead-actions">


          <li class="js-toggler-container watch-button-container ">
            <a href="/powmedia/backbone-forms/toggle_watch" class="minibutton btn-watch watch-button js-toggler-target" data-method="post" data-remote="true" rel="nofollow"><span><span class="icon"></span>Watch</span></a>
            <a href="/powmedia/backbone-forms/toggle_watch" class="minibutton btn-watch unwatch-button js-toggler-target" data-method="post" data-remote="true" rel="nofollow"><span><span class="icon"></span>Unwatch</span></a>
          </li>

              <li><a href="/powmedia/backbone-forms/fork" class="minibutton btn-fork fork-button" data-method="post" rel="nofollow"><span><span class="icon"></span>Fork</span></a></li>



      <li class="repostats">
        <ul class="repo-stats">
          <li class="watchers ">
            <a href="/powmedia/backbone-forms/watchers" title="Watchers" class="tooltipped downwards">
              398
            </a>
          </li>
          <li class="forks">
            <a href="/powmedia/backbone-forms/network" title="Forks" class="tooltipped downwards">
              39
            </a>
          </li>
        </ul>
      </li>
    </ul>

        </div>

          

  <ul class="tabs">
    <li><a href="/powmedia/backbone-forms" class="selected" highlight="repo_sourcerepo_downloadsrepo_commitsrepo_tagsrepo_branches">Code</a></li>
    <li><a href="/powmedia/backbone-forms/network" highlight="repo_networkrepo_fork_queue">Network</a>
    <li><a href="/powmedia/backbone-forms/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>3</span></a></li>

      <li><a href="/powmedia/backbone-forms/issues" highlight="repo_issues">Issues <span class='counter'>17</span></a></li>


    <li><a href="/powmedia/backbone-forms/graphs" highlight="repo_graphsrepo_contributors">Stats &amp; Graphs</a></li>

  </ul>

  
<div class="frame frame-center tree-finder" style="display:none"
      data-tree-list-url="/powmedia/backbone-forms/tree-list/e66960e44c6c246908e5543ef259363a93625790"
      data-blob-url-prefix="/powmedia/backbone-forms/blob/e66960e44c6c246908e5543ef259363a93625790"
    >

  <div class="breadcrumb">
    <span class="bold"><a href="/powmedia/backbone-forms">backbone-forms</a></span> /
    <input class="tree-finder-input js-navigation-enable" type="text" name="query" autocomplete="off" spellcheck="false">
  </div>


  <table class="tree-browser" cellpadding="0" cellspacing="0">
    <tr class="js-header"><th>&nbsp;</th><th>name</th></tr>
    <tr class="js-no-results no-results" style="display: none">
      <th colspan="2">No matching files</th>
    </tr>
    <tbody class="js-results-list js-navigation-container">
    </tbody>
  </table>
</div>

<div id="jump-to-line" style="display:none">
  <h2>Jump to Line</h2>
  <form>
    <input class="textfield" type="text">
    <div class="full-button">
      <button type="submit" class="classy">
        <span>Go</span>
      </button>
    </div>
  </form>
</div>


<div class="subnav-bar">

  <ul class="actions subnav">
    <li><a href="/powmedia/backbone-forms/tags" class="" highlight="repo_tags">Tags <span class="counter">4</span></a></li>
    <li><a href="/powmedia/backbone-forms/downloads" class="blank downloads-blank" highlight="repo_downloads">Downloads <span class="counter">0</span></a></li>
    
  </ul>

  <ul class="scope">
    <li class="switcher">

      <div class="context-menu-container js-menu-container">
        <a href="#"
           class="minibutton bigger switcher js-menu-target js-commitish-button btn-branch repo-tree"
           data-master-branch="master"
           data-ref="master">
          <span><span class="icon"></span><i>branch:</i> master</span>
        </a>

        <div class="context-pane commitish-context js-menu-content">
          <a href="javascript:;" class="close js-menu-close"></a>
          <div class="context-title">Switch Branches/Tags</div>
          <div class="context-body pane-selector commitish-selector js-filterable-commitishes">
            <div class="filterbar">
              <div class="placeholder-field js-placeholder-field">
                <label class="placeholder" for="context-commitish-filter-field" data-placeholder-mode="sticky">Filter branches/tags</label>
                <input type="text" id="context-commitish-filter-field" class="commitish-filter" />
              </div>

              <ul class="tabs">
                <li><a href="#" data-filter="branches" class="selected">Branches</a></li>
                <li><a href="#" data-filter="tags">Tags</a></li>
              </ul>
            </div>

              <div class="commitish-item branch-commitish selector-item">
                <h4>
                    <a href="/powmedia/backbone-forms/blob/attributes/src/backbone-forms.js" data-name="attributes" rel="nofollow">attributes</a>
                </h4>
              </div>
              <div class="commitish-item branch-commitish selector-item">
                <h4>
                    <a href="/powmedia/backbone-forms/blob/feature/templates/src/backbone-forms.js" data-name="feature/templates" rel="nofollow">feature/templates</a>
                </h4>
              </div>
              <div class="commitish-item branch-commitish selector-item">
                <h4>
                    <a href="/powmedia/backbone-forms/blob/feature/validation/src/backbone-forms.js" data-name="feature/validation" rel="nofollow">feature/validation</a>
                </h4>
              </div>
              <div class="commitish-item branch-commitish selector-item">
                <h4>
                    <a href="/powmedia/backbone-forms/blob/master/src/backbone-forms.js" data-name="master" rel="nofollow">master</a>
                </h4>
              </div>

              <div class="commitish-item tag-commitish selector-item">
                <h4>
                    <a href="/powmedia/backbone-forms/blob/v0.7.1/src/backbone-forms.js" data-name="v0.7.1" rel="nofollow">v0.7.1</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item">
                <h4>
                    <a href="/powmedia/backbone-forms/blob/v0.7.0/src/backbone-forms.js" data-name="v0.7.0" rel="nofollow">v0.7.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item">
                <h4>
                    <a href="/powmedia/backbone-forms/blob/v0.6.0/src/backbone-forms.js" data-name="v0.6.0" rel="nofollow">v0.6.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item">
                <h4>
                    <a href="/powmedia/backbone-forms/blob/v0.5.0/src/backbone-forms.js" data-name="v0.5.0" rel="nofollow">v0.5.0</a>
                </h4>
              </div>

            <div class="no-results" style="display:none">Nothing to show</div>
          </div>
        </div><!-- /.commitish-context-context -->
      </div>

    </li>
  </ul>

  <ul class="subnav with-scope">

    <li><a href="/powmedia/backbone-forms" class="selected" highlight="repo_source">Files</a></li>
    <li><a href="/powmedia/backbone-forms/commits/master" highlight="repo_commits">Commits</a></li>
    <li><a href="/powmedia/backbone-forms/branches" class="" highlight="repo_branches" rel="nofollow">Branches <span class="counter">4</span></a></li>
  </ul>

</div>

  
  
  


          

        </div><!-- /.repohead -->

        





<!-- block_view_fragment_key: views6/v8/blob:v19:6153c4f663b339ffdf6550ea0031599d -->
  <div id="slider">

    <div class="breadcrumb" data-path="src/backbone-forms.js/">
      <b itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/powmedia/backbone-forms/tree/e66960e44c6c246908e5543ef259363a93625790" class="js-rewrite-sha" itemprop="url"><span itemprop="title">backbone-forms</span></a></b> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/powmedia/backbone-forms/tree/e66960e44c6c246908e5543ef259363a93625790/src" class="js-rewrite-sha" itemscope="url"><span itemprop="title">src</span></a></span> / <strong class="final-path">backbone-forms.js</strong> <span class="js-clippy clippy-button " data-clipboard-text="src/backbone-forms.js" data-copied-hint="copied!" data-copy-hint="copy to clipboard"></span>
    </div>


      <div class="commit file-history-tease" data-path="src/backbone-forms.js/">
        <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/529a6049c4ad4483dbc62add6da06e1a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
        <span class="author"><a href="/philfreo">philfreo</a></span>
        <time class="js-relative-date" datetime="2012-03-06T11:09:33-08:00" title="2012-03-06 11:09:33">March 06, 2012</time>
        <div class="commit-title">
            <a href="/powmedia/backbone-forms/commit/538c774c877933ca90fdb50414e562e52e3f1fca" class="message">Removing title="test"</a>
        </div>

        <div class="participation">
          <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>7</strong> contributors</a></p>
              <a class="avatar tooltipped downwards" title="powmedia" href="/powmedia/backbone-forms/commits/master/src/backbone-forms.js?author=powmedia"><img height="20" src="https://secure.gravatar.com/avatar/3226184b321c13e700117f79606a3c77?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="mjtamlyn" href="/powmedia/backbone-forms/commits/master/src/backbone-forms.js?author=mjtamlyn"><img height="20" src="https://secure.gravatar.com/avatar/52654cfef40a0579cb31843b01ba49bc?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="vkareh" href="/powmedia/backbone-forms/commits/master/src/backbone-forms.js?author=vkareh"><img height="20" src="https://secure.gravatar.com/avatar/3d2afd8cd3d21af0d02a68c81af6478a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="philfreo" href="/powmedia/backbone-forms/commits/master/src/backbone-forms.js?author=philfreo"><img height="20" src="https://secure.gravatar.com/avatar/529a6049c4ad4483dbc62add6da06e1a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="jlapier" href="/powmedia/backbone-forms/commits/master/src/backbone-forms.js?author=jlapier"><img height="20" src="https://secure.gravatar.com/avatar/d0ea0c7f863c6fbfb862721b77ae434c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="gf3" href="/powmedia/backbone-forms/commits/master/src/backbone-forms.js?author=gf3"><img height="20" src="https://secure.gravatar.com/avatar/4b0209ae3652cc5a7d53545e759fbe39?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="mikl" href="/powmedia/backbone-forms/commits/master/src/backbone-forms.js?author=mikl"><img height="20" src="https://secure.gravatar.com/avatar/2c3b9882e6898958b892a218b5493af9?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>


        </div>
        <div id="blob_contributors_box" style="display:none">
          <h2>Users on GitHub who have contributed to this file</h2>
          <ul class="facebox-user-list">
            <li>
              <img height="24" src="https://secure.gravatar.com/avatar/3226184b321c13e700117f79606a3c77?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
              <a href="/powmedia">powmedia</a>
            </li>
            <li>
              <img height="24" src="https://secure.gravatar.com/avatar/52654cfef40a0579cb31843b01ba49bc?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
              <a href="/mjtamlyn">mjtamlyn</a>
            </li>
            <li>
              <img height="24" src="https://secure.gravatar.com/avatar/3d2afd8cd3d21af0d02a68c81af6478a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
              <a href="/vkareh">vkareh</a>
            </li>
            <li>
              <img height="24" src="https://secure.gravatar.com/avatar/529a6049c4ad4483dbc62add6da06e1a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
              <a href="/philfreo">philfreo</a>
            </li>
            <li>
              <img height="24" src="https://secure.gravatar.com/avatar/d0ea0c7f863c6fbfb862721b77ae434c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
              <a href="/jlapier">jlapier</a>
            </li>
            <li>
              <img height="24" src="https://secure.gravatar.com/avatar/4b0209ae3652cc5a7d53545e759fbe39?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
              <a href="/gf3">gf3</a>
            </li>
            <li>
              <img height="24" src="https://secure.gravatar.com/avatar/2c3b9882e6898958b892a218b5493af9?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
              <a href="/mikl">mikl</a>
            </li>
          </ul>
        </div>
      </div>

    <div class="frames">
      <div class="frame frame-center" data-path="src/backbone-forms.js/" data-permalink-url="/powmedia/backbone-forms/blob/e66960e44c6c246908e5543ef259363a93625790/src/backbone-forms.js" data-title="backbone-forms/src/backbone-forms.js at master · powmedia/backbone-forms · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><img alt="Txt" height="16" src="https://a248.e.akamai.net/assets.github.com/images/icons/txt.png?1252203928" width="16" /></span>
                <span class="mode" title="File Mode">100644</span>
                  <span>1400 lines (1091 sloc)</span>
                <span>37.749 kb</span>
              </div>
              <ul class="button-group actions">
                  <li>
                    <a class="grouped-button file-edit-link minibutton bigger lighter js-rewrite-sha" href="/powmedia/backbone-forms/edit/e66960e44c6c246908e5543ef259363a93625790/src/backbone-forms.js" data-method="post" rel="nofollow"><span>Edit this file</span></a>
                  </li>

                <li>
                  <a href="/powmedia/backbone-forms/raw/master/src/backbone-forms.js" class="minibutton btn-raw grouped-button bigger lighter" id="raw-url"><span><span class="icon"></span>Raw</span></a>
                </li>
                  <li>
                    <a href="/powmedia/backbone-forms/blame/master/src/backbone-forms.js" class="minibutton btn-blame grouped-button bigger lighter"><span><span class="icon"></span>Blame</span></a>
                  </li>
                <li>
                  <a href="/powmedia/backbone-forms/commits/master/src/backbone-forms.js" class="minibutton btn-history grouped-button bigger lighter" rel="nofollow"><span><span class="icon"></span>History</span></a>
                </li>
              </ul>
            </div>
              <div class="data type-javascript">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>
<span id="L559" rel="#L559">559</span>
<span id="L560" rel="#L560">560</span>
<span id="L561" rel="#L561">561</span>
<span id="L562" rel="#L562">562</span>
<span id="L563" rel="#L563">563</span>
<span id="L564" rel="#L564">564</span>
<span id="L565" rel="#L565">565</span>
<span id="L566" rel="#L566">566</span>
<span id="L567" rel="#L567">567</span>
<span id="L568" rel="#L568">568</span>
<span id="L569" rel="#L569">569</span>
<span id="L570" rel="#L570">570</span>
<span id="L571" rel="#L571">571</span>
<span id="L572" rel="#L572">572</span>
<span id="L573" rel="#L573">573</span>
<span id="L574" rel="#L574">574</span>
<span id="L575" rel="#L575">575</span>
<span id="L576" rel="#L576">576</span>
<span id="L577" rel="#L577">577</span>
<span id="L578" rel="#L578">578</span>
<span id="L579" rel="#L579">579</span>
<span id="L580" rel="#L580">580</span>
<span id="L581" rel="#L581">581</span>
<span id="L582" rel="#L582">582</span>
<span id="L583" rel="#L583">583</span>
<span id="L584" rel="#L584">584</span>
<span id="L585" rel="#L585">585</span>
<span id="L586" rel="#L586">586</span>
<span id="L587" rel="#L587">587</span>
<span id="L588" rel="#L588">588</span>
<span id="L589" rel="#L589">589</span>
<span id="L590" rel="#L590">590</span>
<span id="L591" rel="#L591">591</span>
<span id="L592" rel="#L592">592</span>
<span id="L593" rel="#L593">593</span>
<span id="L594" rel="#L594">594</span>
<span id="L595" rel="#L595">595</span>
<span id="L596" rel="#L596">596</span>
<span id="L597" rel="#L597">597</span>
<span id="L598" rel="#L598">598</span>
<span id="L599" rel="#L599">599</span>
<span id="L600" rel="#L600">600</span>
<span id="L601" rel="#L601">601</span>
<span id="L602" rel="#L602">602</span>
<span id="L603" rel="#L603">603</span>
<span id="L604" rel="#L604">604</span>
<span id="L605" rel="#L605">605</span>
<span id="L606" rel="#L606">606</span>
<span id="L607" rel="#L607">607</span>
<span id="L608" rel="#L608">608</span>
<span id="L609" rel="#L609">609</span>
<span id="L610" rel="#L610">610</span>
<span id="L611" rel="#L611">611</span>
<span id="L612" rel="#L612">612</span>
<span id="L613" rel="#L613">613</span>
<span id="L614" rel="#L614">614</span>
<span id="L615" rel="#L615">615</span>
<span id="L616" rel="#L616">616</span>
<span id="L617" rel="#L617">617</span>
<span id="L618" rel="#L618">618</span>
<span id="L619" rel="#L619">619</span>
<span id="L620" rel="#L620">620</span>
<span id="L621" rel="#L621">621</span>
<span id="L622" rel="#L622">622</span>
<span id="L623" rel="#L623">623</span>
<span id="L624" rel="#L624">624</span>
<span id="L625" rel="#L625">625</span>
<span id="L626" rel="#L626">626</span>
<span id="L627" rel="#L627">627</span>
<span id="L628" rel="#L628">628</span>
<span id="L629" rel="#L629">629</span>
<span id="L630" rel="#L630">630</span>
<span id="L631" rel="#L631">631</span>
<span id="L632" rel="#L632">632</span>
<span id="L633" rel="#L633">633</span>
<span id="L634" rel="#L634">634</span>
<span id="L635" rel="#L635">635</span>
<span id="L636" rel="#L636">636</span>
<span id="L637" rel="#L637">637</span>
<span id="L638" rel="#L638">638</span>
<span id="L639" rel="#L639">639</span>
<span id="L640" rel="#L640">640</span>
<span id="L641" rel="#L641">641</span>
<span id="L642" rel="#L642">642</span>
<span id="L643" rel="#L643">643</span>
<span id="L644" rel="#L644">644</span>
<span id="L645" rel="#L645">645</span>
<span id="L646" rel="#L646">646</span>
<span id="L647" rel="#L647">647</span>
<span id="L648" rel="#L648">648</span>
<span id="L649" rel="#L649">649</span>
<span id="L650" rel="#L650">650</span>
<span id="L651" rel="#L651">651</span>
<span id="L652" rel="#L652">652</span>
<span id="L653" rel="#L653">653</span>
<span id="L654" rel="#L654">654</span>
<span id="L655" rel="#L655">655</span>
<span id="L656" rel="#L656">656</span>
<span id="L657" rel="#L657">657</span>
<span id="L658" rel="#L658">658</span>
<span id="L659" rel="#L659">659</span>
<span id="L660" rel="#L660">660</span>
<span id="L661" rel="#L661">661</span>
<span id="L662" rel="#L662">662</span>
<span id="L663" rel="#L663">663</span>
<span id="L664" rel="#L664">664</span>
<span id="L665" rel="#L665">665</span>
<span id="L666" rel="#L666">666</span>
<span id="L667" rel="#L667">667</span>
<span id="L668" rel="#L668">668</span>
<span id="L669" rel="#L669">669</span>
<span id="L670" rel="#L670">670</span>
<span id="L671" rel="#L671">671</span>
<span id="L672" rel="#L672">672</span>
<span id="L673" rel="#L673">673</span>
<span id="L674" rel="#L674">674</span>
<span id="L675" rel="#L675">675</span>
<span id="L676" rel="#L676">676</span>
<span id="L677" rel="#L677">677</span>
<span id="L678" rel="#L678">678</span>
<span id="L679" rel="#L679">679</span>
<span id="L680" rel="#L680">680</span>
<span id="L681" rel="#L681">681</span>
<span id="L682" rel="#L682">682</span>
<span id="L683" rel="#L683">683</span>
<span id="L684" rel="#L684">684</span>
<span id="L685" rel="#L685">685</span>
<span id="L686" rel="#L686">686</span>
<span id="L687" rel="#L687">687</span>
<span id="L688" rel="#L688">688</span>
<span id="L689" rel="#L689">689</span>
<span id="L690" rel="#L690">690</span>
<span id="L691" rel="#L691">691</span>
<span id="L692" rel="#L692">692</span>
<span id="L693" rel="#L693">693</span>
<span id="L694" rel="#L694">694</span>
<span id="L695" rel="#L695">695</span>
<span id="L696" rel="#L696">696</span>
<span id="L697" rel="#L697">697</span>
<span id="L698" rel="#L698">698</span>
<span id="L699" rel="#L699">699</span>
<span id="L700" rel="#L700">700</span>
<span id="L701" rel="#L701">701</span>
<span id="L702" rel="#L702">702</span>
<span id="L703" rel="#L703">703</span>
<span id="L704" rel="#L704">704</span>
<span id="L705" rel="#L705">705</span>
<span id="L706" rel="#L706">706</span>
<span id="L707" rel="#L707">707</span>
<span id="L708" rel="#L708">708</span>
<span id="L709" rel="#L709">709</span>
<span id="L710" rel="#L710">710</span>
<span id="L711" rel="#L711">711</span>
<span id="L712" rel="#L712">712</span>
<span id="L713" rel="#L713">713</span>
<span id="L714" rel="#L714">714</span>
<span id="L715" rel="#L715">715</span>
<span id="L716" rel="#L716">716</span>
<span id="L717" rel="#L717">717</span>
<span id="L718" rel="#L718">718</span>
<span id="L719" rel="#L719">719</span>
<span id="L720" rel="#L720">720</span>
<span id="L721" rel="#L721">721</span>
<span id="L722" rel="#L722">722</span>
<span id="L723" rel="#L723">723</span>
<span id="L724" rel="#L724">724</span>
<span id="L725" rel="#L725">725</span>
<span id="L726" rel="#L726">726</span>
<span id="L727" rel="#L727">727</span>
<span id="L728" rel="#L728">728</span>
<span id="L729" rel="#L729">729</span>
<span id="L730" rel="#L730">730</span>
<span id="L731" rel="#L731">731</span>
<span id="L732" rel="#L732">732</span>
<span id="L733" rel="#L733">733</span>
<span id="L734" rel="#L734">734</span>
<span id="L735" rel="#L735">735</span>
<span id="L736" rel="#L736">736</span>
<span id="L737" rel="#L737">737</span>
<span id="L738" rel="#L738">738</span>
<span id="L739" rel="#L739">739</span>
<span id="L740" rel="#L740">740</span>
<span id="L741" rel="#L741">741</span>
<span id="L742" rel="#L742">742</span>
<span id="L743" rel="#L743">743</span>
<span id="L744" rel="#L744">744</span>
<span id="L745" rel="#L745">745</span>
<span id="L746" rel="#L746">746</span>
<span id="L747" rel="#L747">747</span>
<span id="L748" rel="#L748">748</span>
<span id="L749" rel="#L749">749</span>
<span id="L750" rel="#L750">750</span>
<span id="L751" rel="#L751">751</span>
<span id="L752" rel="#L752">752</span>
<span id="L753" rel="#L753">753</span>
<span id="L754" rel="#L754">754</span>
<span id="L755" rel="#L755">755</span>
<span id="L756" rel="#L756">756</span>
<span id="L757" rel="#L757">757</span>
<span id="L758" rel="#L758">758</span>
<span id="L759" rel="#L759">759</span>
<span id="L760" rel="#L760">760</span>
<span id="L761" rel="#L761">761</span>
<span id="L762" rel="#L762">762</span>
<span id="L763" rel="#L763">763</span>
<span id="L764" rel="#L764">764</span>
<span id="L765" rel="#L765">765</span>
<span id="L766" rel="#L766">766</span>
<span id="L767" rel="#L767">767</span>
<span id="L768" rel="#L768">768</span>
<span id="L769" rel="#L769">769</span>
<span id="L770" rel="#L770">770</span>
<span id="L771" rel="#L771">771</span>
<span id="L772" rel="#L772">772</span>
<span id="L773" rel="#L773">773</span>
<span id="L774" rel="#L774">774</span>
<span id="L775" rel="#L775">775</span>
<span id="L776" rel="#L776">776</span>
<span id="L777" rel="#L777">777</span>
<span id="L778" rel="#L778">778</span>
<span id="L779" rel="#L779">779</span>
<span id="L780" rel="#L780">780</span>
<span id="L781" rel="#L781">781</span>
<span id="L782" rel="#L782">782</span>
<span id="L783" rel="#L783">783</span>
<span id="L784" rel="#L784">784</span>
<span id="L785" rel="#L785">785</span>
<span id="L786" rel="#L786">786</span>
<span id="L787" rel="#L787">787</span>
<span id="L788" rel="#L788">788</span>
<span id="L789" rel="#L789">789</span>
<span id="L790" rel="#L790">790</span>
<span id="L791" rel="#L791">791</span>
<span id="L792" rel="#L792">792</span>
<span id="L793" rel="#L793">793</span>
<span id="L794" rel="#L794">794</span>
<span id="L795" rel="#L795">795</span>
<span id="L796" rel="#L796">796</span>
<span id="L797" rel="#L797">797</span>
<span id="L798" rel="#L798">798</span>
<span id="L799" rel="#L799">799</span>
<span id="L800" rel="#L800">800</span>
<span id="L801" rel="#L801">801</span>
<span id="L802" rel="#L802">802</span>
<span id="L803" rel="#L803">803</span>
<span id="L804" rel="#L804">804</span>
<span id="L805" rel="#L805">805</span>
<span id="L806" rel="#L806">806</span>
<span id="L807" rel="#L807">807</span>
<span id="L808" rel="#L808">808</span>
<span id="L809" rel="#L809">809</span>
<span id="L810" rel="#L810">810</span>
<span id="L811" rel="#L811">811</span>
<span id="L812" rel="#L812">812</span>
<span id="L813" rel="#L813">813</span>
<span id="L814" rel="#L814">814</span>
<span id="L815" rel="#L815">815</span>
<span id="L816" rel="#L816">816</span>
<span id="L817" rel="#L817">817</span>
<span id="L818" rel="#L818">818</span>
<span id="L819" rel="#L819">819</span>
<span id="L820" rel="#L820">820</span>
<span id="L821" rel="#L821">821</span>
<span id="L822" rel="#L822">822</span>
<span id="L823" rel="#L823">823</span>
<span id="L824" rel="#L824">824</span>
<span id="L825" rel="#L825">825</span>
<span id="L826" rel="#L826">826</span>
<span id="L827" rel="#L827">827</span>
<span id="L828" rel="#L828">828</span>
<span id="L829" rel="#L829">829</span>
<span id="L830" rel="#L830">830</span>
<span id="L831" rel="#L831">831</span>
<span id="L832" rel="#L832">832</span>
<span id="L833" rel="#L833">833</span>
<span id="L834" rel="#L834">834</span>
<span id="L835" rel="#L835">835</span>
<span id="L836" rel="#L836">836</span>
<span id="L837" rel="#L837">837</span>
<span id="L838" rel="#L838">838</span>
<span id="L839" rel="#L839">839</span>
<span id="L840" rel="#L840">840</span>
<span id="L841" rel="#L841">841</span>
<span id="L842" rel="#L842">842</span>
<span id="L843" rel="#L843">843</span>
<span id="L844" rel="#L844">844</span>
<span id="L845" rel="#L845">845</span>
<span id="L846" rel="#L846">846</span>
<span id="L847" rel="#L847">847</span>
<span id="L848" rel="#L848">848</span>
<span id="L849" rel="#L849">849</span>
<span id="L850" rel="#L850">850</span>
<span id="L851" rel="#L851">851</span>
<span id="L852" rel="#L852">852</span>
<span id="L853" rel="#L853">853</span>
<span id="L854" rel="#L854">854</span>
<span id="L855" rel="#L855">855</span>
<span id="L856" rel="#L856">856</span>
<span id="L857" rel="#L857">857</span>
<span id="L858" rel="#L858">858</span>
<span id="L859" rel="#L859">859</span>
<span id="L860" rel="#L860">860</span>
<span id="L861" rel="#L861">861</span>
<span id="L862" rel="#L862">862</span>
<span id="L863" rel="#L863">863</span>
<span id="L864" rel="#L864">864</span>
<span id="L865" rel="#L865">865</span>
<span id="L866" rel="#L866">866</span>
<span id="L867" rel="#L867">867</span>
<span id="L868" rel="#L868">868</span>
<span id="L869" rel="#L869">869</span>
<span id="L870" rel="#L870">870</span>
<span id="L871" rel="#L871">871</span>
<span id="L872" rel="#L872">872</span>
<span id="L873" rel="#L873">873</span>
<span id="L874" rel="#L874">874</span>
<span id="L875" rel="#L875">875</span>
<span id="L876" rel="#L876">876</span>
<span id="L877" rel="#L877">877</span>
<span id="L878" rel="#L878">878</span>
<span id="L879" rel="#L879">879</span>
<span id="L880" rel="#L880">880</span>
<span id="L881" rel="#L881">881</span>
<span id="L882" rel="#L882">882</span>
<span id="L883" rel="#L883">883</span>
<span id="L884" rel="#L884">884</span>
<span id="L885" rel="#L885">885</span>
<span id="L886" rel="#L886">886</span>
<span id="L887" rel="#L887">887</span>
<span id="L888" rel="#L888">888</span>
<span id="L889" rel="#L889">889</span>
<span id="L890" rel="#L890">890</span>
<span id="L891" rel="#L891">891</span>
<span id="L892" rel="#L892">892</span>
<span id="L893" rel="#L893">893</span>
<span id="L894" rel="#L894">894</span>
<span id="L895" rel="#L895">895</span>
<span id="L896" rel="#L896">896</span>
<span id="L897" rel="#L897">897</span>
<span id="L898" rel="#L898">898</span>
<span id="L899" rel="#L899">899</span>
<span id="L900" rel="#L900">900</span>
<span id="L901" rel="#L901">901</span>
<span id="L902" rel="#L902">902</span>
<span id="L903" rel="#L903">903</span>
<span id="L904" rel="#L904">904</span>
<span id="L905" rel="#L905">905</span>
<span id="L906" rel="#L906">906</span>
<span id="L907" rel="#L907">907</span>
<span id="L908" rel="#L908">908</span>
<span id="L909" rel="#L909">909</span>
<span id="L910" rel="#L910">910</span>
<span id="L911" rel="#L911">911</span>
<span id="L912" rel="#L912">912</span>
<span id="L913" rel="#L913">913</span>
<span id="L914" rel="#L914">914</span>
<span id="L915" rel="#L915">915</span>
<span id="L916" rel="#L916">916</span>
<span id="L917" rel="#L917">917</span>
<span id="L918" rel="#L918">918</span>
<span id="L919" rel="#L919">919</span>
<span id="L920" rel="#L920">920</span>
<span id="L921" rel="#L921">921</span>
<span id="L922" rel="#L922">922</span>
<span id="L923" rel="#L923">923</span>
<span id="L924" rel="#L924">924</span>
<span id="L925" rel="#L925">925</span>
<span id="L926" rel="#L926">926</span>
<span id="L927" rel="#L927">927</span>
<span id="L928" rel="#L928">928</span>
<span id="L929" rel="#L929">929</span>
<span id="L930" rel="#L930">930</span>
<span id="L931" rel="#L931">931</span>
<span id="L932" rel="#L932">932</span>
<span id="L933" rel="#L933">933</span>
<span id="L934" rel="#L934">934</span>
<span id="L935" rel="#L935">935</span>
<span id="L936" rel="#L936">936</span>
<span id="L937" rel="#L937">937</span>
<span id="L938" rel="#L938">938</span>
<span id="L939" rel="#L939">939</span>
<span id="L940" rel="#L940">940</span>
<span id="L941" rel="#L941">941</span>
<span id="L942" rel="#L942">942</span>
<span id="L943" rel="#L943">943</span>
<span id="L944" rel="#L944">944</span>
<span id="L945" rel="#L945">945</span>
<span id="L946" rel="#L946">946</span>
<span id="L947" rel="#L947">947</span>
<span id="L948" rel="#L948">948</span>
<span id="L949" rel="#L949">949</span>
<span id="L950" rel="#L950">950</span>
<span id="L951" rel="#L951">951</span>
<span id="L952" rel="#L952">952</span>
<span id="L953" rel="#L953">953</span>
<span id="L954" rel="#L954">954</span>
<span id="L955" rel="#L955">955</span>
<span id="L956" rel="#L956">956</span>
<span id="L957" rel="#L957">957</span>
<span id="L958" rel="#L958">958</span>
<span id="L959" rel="#L959">959</span>
<span id="L960" rel="#L960">960</span>
<span id="L961" rel="#L961">961</span>
<span id="L962" rel="#L962">962</span>
<span id="L963" rel="#L963">963</span>
<span id="L964" rel="#L964">964</span>
<span id="L965" rel="#L965">965</span>
<span id="L966" rel="#L966">966</span>
<span id="L967" rel="#L967">967</span>
<span id="L968" rel="#L968">968</span>
<span id="L969" rel="#L969">969</span>
<span id="L970" rel="#L970">970</span>
<span id="L971" rel="#L971">971</span>
<span id="L972" rel="#L972">972</span>
<span id="L973" rel="#L973">973</span>
<span id="L974" rel="#L974">974</span>
<span id="L975" rel="#L975">975</span>
<span id="L976" rel="#L976">976</span>
<span id="L977" rel="#L977">977</span>
<span id="L978" rel="#L978">978</span>
<span id="L979" rel="#L979">979</span>
<span id="L980" rel="#L980">980</span>
<span id="L981" rel="#L981">981</span>
<span id="L982" rel="#L982">982</span>
<span id="L983" rel="#L983">983</span>
<span id="L984" rel="#L984">984</span>
<span id="L985" rel="#L985">985</span>
<span id="L986" rel="#L986">986</span>
<span id="L987" rel="#L987">987</span>
<span id="L988" rel="#L988">988</span>
<span id="L989" rel="#L989">989</span>
<span id="L990" rel="#L990">990</span>
<span id="L991" rel="#L991">991</span>
<span id="L992" rel="#L992">992</span>
<span id="L993" rel="#L993">993</span>
<span id="L994" rel="#L994">994</span>
<span id="L995" rel="#L995">995</span>
<span id="L996" rel="#L996">996</span>
<span id="L997" rel="#L997">997</span>
<span id="L998" rel="#L998">998</span>
<span id="L999" rel="#L999">999</span>
<span id="L1000" rel="#L1000">1000</span>
<span id="L1001" rel="#L1001">1001</span>
<span id="L1002" rel="#L1002">1002</span>
<span id="L1003" rel="#L1003">1003</span>
<span id="L1004" rel="#L1004">1004</span>
<span id="L1005" rel="#L1005">1005</span>
<span id="L1006" rel="#L1006">1006</span>
<span id="L1007" rel="#L1007">1007</span>
<span id="L1008" rel="#L1008">1008</span>
<span id="L1009" rel="#L1009">1009</span>
<span id="L1010" rel="#L1010">1010</span>
<span id="L1011" rel="#L1011">1011</span>
<span id="L1012" rel="#L1012">1012</span>
<span id="L1013" rel="#L1013">1013</span>
<span id="L1014" rel="#L1014">1014</span>
<span id="L1015" rel="#L1015">1015</span>
<span id="L1016" rel="#L1016">1016</span>
<span id="L1017" rel="#L1017">1017</span>
<span id="L1018" rel="#L1018">1018</span>
<span id="L1019" rel="#L1019">1019</span>
<span id="L1020" rel="#L1020">1020</span>
<span id="L1021" rel="#L1021">1021</span>
<span id="L1022" rel="#L1022">1022</span>
<span id="L1023" rel="#L1023">1023</span>
<span id="L1024" rel="#L1024">1024</span>
<span id="L1025" rel="#L1025">1025</span>
<span id="L1026" rel="#L1026">1026</span>
<span id="L1027" rel="#L1027">1027</span>
<span id="L1028" rel="#L1028">1028</span>
<span id="L1029" rel="#L1029">1029</span>
<span id="L1030" rel="#L1030">1030</span>
<span id="L1031" rel="#L1031">1031</span>
<span id="L1032" rel="#L1032">1032</span>
<span id="L1033" rel="#L1033">1033</span>
<span id="L1034" rel="#L1034">1034</span>
<span id="L1035" rel="#L1035">1035</span>
<span id="L1036" rel="#L1036">1036</span>
<span id="L1037" rel="#L1037">1037</span>
<span id="L1038" rel="#L1038">1038</span>
<span id="L1039" rel="#L1039">1039</span>
<span id="L1040" rel="#L1040">1040</span>
<span id="L1041" rel="#L1041">1041</span>
<span id="L1042" rel="#L1042">1042</span>
<span id="L1043" rel="#L1043">1043</span>
<span id="L1044" rel="#L1044">1044</span>
<span id="L1045" rel="#L1045">1045</span>
<span id="L1046" rel="#L1046">1046</span>
<span id="L1047" rel="#L1047">1047</span>
<span id="L1048" rel="#L1048">1048</span>
<span id="L1049" rel="#L1049">1049</span>
<span id="L1050" rel="#L1050">1050</span>
<span id="L1051" rel="#L1051">1051</span>
<span id="L1052" rel="#L1052">1052</span>
<span id="L1053" rel="#L1053">1053</span>
<span id="L1054" rel="#L1054">1054</span>
<span id="L1055" rel="#L1055">1055</span>
<span id="L1056" rel="#L1056">1056</span>
<span id="L1057" rel="#L1057">1057</span>
<span id="L1058" rel="#L1058">1058</span>
<span id="L1059" rel="#L1059">1059</span>
<span id="L1060" rel="#L1060">1060</span>
<span id="L1061" rel="#L1061">1061</span>
<span id="L1062" rel="#L1062">1062</span>
<span id="L1063" rel="#L1063">1063</span>
<span id="L1064" rel="#L1064">1064</span>
<span id="L1065" rel="#L1065">1065</span>
<span id="L1066" rel="#L1066">1066</span>
<span id="L1067" rel="#L1067">1067</span>
<span id="L1068" rel="#L1068">1068</span>
<span id="L1069" rel="#L1069">1069</span>
<span id="L1070" rel="#L1070">1070</span>
<span id="L1071" rel="#L1071">1071</span>
<span id="L1072" rel="#L1072">1072</span>
<span id="L1073" rel="#L1073">1073</span>
<span id="L1074" rel="#L1074">1074</span>
<span id="L1075" rel="#L1075">1075</span>
<span id="L1076" rel="#L1076">1076</span>
<span id="L1077" rel="#L1077">1077</span>
<span id="L1078" rel="#L1078">1078</span>
<span id="L1079" rel="#L1079">1079</span>
<span id="L1080" rel="#L1080">1080</span>
<span id="L1081" rel="#L1081">1081</span>
<span id="L1082" rel="#L1082">1082</span>
<span id="L1083" rel="#L1083">1083</span>
<span id="L1084" rel="#L1084">1084</span>
<span id="L1085" rel="#L1085">1085</span>
<span id="L1086" rel="#L1086">1086</span>
<span id="L1087" rel="#L1087">1087</span>
<span id="L1088" rel="#L1088">1088</span>
<span id="L1089" rel="#L1089">1089</span>
<span id="L1090" rel="#L1090">1090</span>
<span id="L1091" rel="#L1091">1091</span>
<span id="L1092" rel="#L1092">1092</span>
<span id="L1093" rel="#L1093">1093</span>
<span id="L1094" rel="#L1094">1094</span>
<span id="L1095" rel="#L1095">1095</span>
<span id="L1096" rel="#L1096">1096</span>
<span id="L1097" rel="#L1097">1097</span>
<span id="L1098" rel="#L1098">1098</span>
<span id="L1099" rel="#L1099">1099</span>
<span id="L1100" rel="#L1100">1100</span>
<span id="L1101" rel="#L1101">1101</span>
<span id="L1102" rel="#L1102">1102</span>
<span id="L1103" rel="#L1103">1103</span>
<span id="L1104" rel="#L1104">1104</span>
<span id="L1105" rel="#L1105">1105</span>
<span id="L1106" rel="#L1106">1106</span>
<span id="L1107" rel="#L1107">1107</span>
<span id="L1108" rel="#L1108">1108</span>
<span id="L1109" rel="#L1109">1109</span>
<span id="L1110" rel="#L1110">1110</span>
<span id="L1111" rel="#L1111">1111</span>
<span id="L1112" rel="#L1112">1112</span>
<span id="L1113" rel="#L1113">1113</span>
<span id="L1114" rel="#L1114">1114</span>
<span id="L1115" rel="#L1115">1115</span>
<span id="L1116" rel="#L1116">1116</span>
<span id="L1117" rel="#L1117">1117</span>
<span id="L1118" rel="#L1118">1118</span>
<span id="L1119" rel="#L1119">1119</span>
<span id="L1120" rel="#L1120">1120</span>
<span id="L1121" rel="#L1121">1121</span>
<span id="L1122" rel="#L1122">1122</span>
<span id="L1123" rel="#L1123">1123</span>
<span id="L1124" rel="#L1124">1124</span>
<span id="L1125" rel="#L1125">1125</span>
<span id="L1126" rel="#L1126">1126</span>
<span id="L1127" rel="#L1127">1127</span>
<span id="L1128" rel="#L1128">1128</span>
<span id="L1129" rel="#L1129">1129</span>
<span id="L1130" rel="#L1130">1130</span>
<span id="L1131" rel="#L1131">1131</span>
<span id="L1132" rel="#L1132">1132</span>
<span id="L1133" rel="#L1133">1133</span>
<span id="L1134" rel="#L1134">1134</span>
<span id="L1135" rel="#L1135">1135</span>
<span id="L1136" rel="#L1136">1136</span>
<span id="L1137" rel="#L1137">1137</span>
<span id="L1138" rel="#L1138">1138</span>
<span id="L1139" rel="#L1139">1139</span>
<span id="L1140" rel="#L1140">1140</span>
<span id="L1141" rel="#L1141">1141</span>
<span id="L1142" rel="#L1142">1142</span>
<span id="L1143" rel="#L1143">1143</span>
<span id="L1144" rel="#L1144">1144</span>
<span id="L1145" rel="#L1145">1145</span>
<span id="L1146" rel="#L1146">1146</span>
<span id="L1147" rel="#L1147">1147</span>
<span id="L1148" rel="#L1148">1148</span>
<span id="L1149" rel="#L1149">1149</span>
<span id="L1150" rel="#L1150">1150</span>
<span id="L1151" rel="#L1151">1151</span>
<span id="L1152" rel="#L1152">1152</span>
<span id="L1153" rel="#L1153">1153</span>
<span id="L1154" rel="#L1154">1154</span>
<span id="L1155" rel="#L1155">1155</span>
<span id="L1156" rel="#L1156">1156</span>
<span id="L1157" rel="#L1157">1157</span>
<span id="L1158" rel="#L1158">1158</span>
<span id="L1159" rel="#L1159">1159</span>
<span id="L1160" rel="#L1160">1160</span>
<span id="L1161" rel="#L1161">1161</span>
<span id="L1162" rel="#L1162">1162</span>
<span id="L1163" rel="#L1163">1163</span>
<span id="L1164" rel="#L1164">1164</span>
<span id="L1165" rel="#L1165">1165</span>
<span id="L1166" rel="#L1166">1166</span>
<span id="L1167" rel="#L1167">1167</span>
<span id="L1168" rel="#L1168">1168</span>
<span id="L1169" rel="#L1169">1169</span>
<span id="L1170" rel="#L1170">1170</span>
<span id="L1171" rel="#L1171">1171</span>
<span id="L1172" rel="#L1172">1172</span>
<span id="L1173" rel="#L1173">1173</span>
<span id="L1174" rel="#L1174">1174</span>
<span id="L1175" rel="#L1175">1175</span>
<span id="L1176" rel="#L1176">1176</span>
<span id="L1177" rel="#L1177">1177</span>
<span id="L1178" rel="#L1178">1178</span>
<span id="L1179" rel="#L1179">1179</span>
<span id="L1180" rel="#L1180">1180</span>
<span id="L1181" rel="#L1181">1181</span>
<span id="L1182" rel="#L1182">1182</span>
<span id="L1183" rel="#L1183">1183</span>
<span id="L1184" rel="#L1184">1184</span>
<span id="L1185" rel="#L1185">1185</span>
<span id="L1186" rel="#L1186">1186</span>
<span id="L1187" rel="#L1187">1187</span>
<span id="L1188" rel="#L1188">1188</span>
<span id="L1189" rel="#L1189">1189</span>
<span id="L1190" rel="#L1190">1190</span>
<span id="L1191" rel="#L1191">1191</span>
<span id="L1192" rel="#L1192">1192</span>
<span id="L1193" rel="#L1193">1193</span>
<span id="L1194" rel="#L1194">1194</span>
<span id="L1195" rel="#L1195">1195</span>
<span id="L1196" rel="#L1196">1196</span>
<span id="L1197" rel="#L1197">1197</span>
<span id="L1198" rel="#L1198">1198</span>
<span id="L1199" rel="#L1199">1199</span>
<span id="L1200" rel="#L1200">1200</span>
<span id="L1201" rel="#L1201">1201</span>
<span id="L1202" rel="#L1202">1202</span>
<span id="L1203" rel="#L1203">1203</span>
<span id="L1204" rel="#L1204">1204</span>
<span id="L1205" rel="#L1205">1205</span>
<span id="L1206" rel="#L1206">1206</span>
<span id="L1207" rel="#L1207">1207</span>
<span id="L1208" rel="#L1208">1208</span>
<span id="L1209" rel="#L1209">1209</span>
<span id="L1210" rel="#L1210">1210</span>
<span id="L1211" rel="#L1211">1211</span>
<span id="L1212" rel="#L1212">1212</span>
<span id="L1213" rel="#L1213">1213</span>
<span id="L1214" rel="#L1214">1214</span>
<span id="L1215" rel="#L1215">1215</span>
<span id="L1216" rel="#L1216">1216</span>
<span id="L1217" rel="#L1217">1217</span>
<span id="L1218" rel="#L1218">1218</span>
<span id="L1219" rel="#L1219">1219</span>
<span id="L1220" rel="#L1220">1220</span>
<span id="L1221" rel="#L1221">1221</span>
<span id="L1222" rel="#L1222">1222</span>
<span id="L1223" rel="#L1223">1223</span>
<span id="L1224" rel="#L1224">1224</span>
<span id="L1225" rel="#L1225">1225</span>
<span id="L1226" rel="#L1226">1226</span>
<span id="L1227" rel="#L1227">1227</span>
<span id="L1228" rel="#L1228">1228</span>
<span id="L1229" rel="#L1229">1229</span>
<span id="L1230" rel="#L1230">1230</span>
<span id="L1231" rel="#L1231">1231</span>
<span id="L1232" rel="#L1232">1232</span>
<span id="L1233" rel="#L1233">1233</span>
<span id="L1234" rel="#L1234">1234</span>
<span id="L1235" rel="#L1235">1235</span>
<span id="L1236" rel="#L1236">1236</span>
<span id="L1237" rel="#L1237">1237</span>
<span id="L1238" rel="#L1238">1238</span>
<span id="L1239" rel="#L1239">1239</span>
<span id="L1240" rel="#L1240">1240</span>
<span id="L1241" rel="#L1241">1241</span>
<span id="L1242" rel="#L1242">1242</span>
<span id="L1243" rel="#L1243">1243</span>
<span id="L1244" rel="#L1244">1244</span>
<span id="L1245" rel="#L1245">1245</span>
<span id="L1246" rel="#L1246">1246</span>
<span id="L1247" rel="#L1247">1247</span>
<span id="L1248" rel="#L1248">1248</span>
<span id="L1249" rel="#L1249">1249</span>
<span id="L1250" rel="#L1250">1250</span>
<span id="L1251" rel="#L1251">1251</span>
<span id="L1252" rel="#L1252">1252</span>
<span id="L1253" rel="#L1253">1253</span>
<span id="L1254" rel="#L1254">1254</span>
<span id="L1255" rel="#L1255">1255</span>
<span id="L1256" rel="#L1256">1256</span>
<span id="L1257" rel="#L1257">1257</span>
<span id="L1258" rel="#L1258">1258</span>
<span id="L1259" rel="#L1259">1259</span>
<span id="L1260" rel="#L1260">1260</span>
<span id="L1261" rel="#L1261">1261</span>
<span id="L1262" rel="#L1262">1262</span>
<span id="L1263" rel="#L1263">1263</span>
<span id="L1264" rel="#L1264">1264</span>
<span id="L1265" rel="#L1265">1265</span>
<span id="L1266" rel="#L1266">1266</span>
<span id="L1267" rel="#L1267">1267</span>
<span id="L1268" rel="#L1268">1268</span>
<span id="L1269" rel="#L1269">1269</span>
<span id="L1270" rel="#L1270">1270</span>
<span id="L1271" rel="#L1271">1271</span>
<span id="L1272" rel="#L1272">1272</span>
<span id="L1273" rel="#L1273">1273</span>
<span id="L1274" rel="#L1274">1274</span>
<span id="L1275" rel="#L1275">1275</span>
<span id="L1276" rel="#L1276">1276</span>
<span id="L1277" rel="#L1277">1277</span>
<span id="L1278" rel="#L1278">1278</span>
<span id="L1279" rel="#L1279">1279</span>
<span id="L1280" rel="#L1280">1280</span>
<span id="L1281" rel="#L1281">1281</span>
<span id="L1282" rel="#L1282">1282</span>
<span id="L1283" rel="#L1283">1283</span>
<span id="L1284" rel="#L1284">1284</span>
<span id="L1285" rel="#L1285">1285</span>
<span id="L1286" rel="#L1286">1286</span>
<span id="L1287" rel="#L1287">1287</span>
<span id="L1288" rel="#L1288">1288</span>
<span id="L1289" rel="#L1289">1289</span>
<span id="L1290" rel="#L1290">1290</span>
<span id="L1291" rel="#L1291">1291</span>
<span id="L1292" rel="#L1292">1292</span>
<span id="L1293" rel="#L1293">1293</span>
<span id="L1294" rel="#L1294">1294</span>
<span id="L1295" rel="#L1295">1295</span>
<span id="L1296" rel="#L1296">1296</span>
<span id="L1297" rel="#L1297">1297</span>
<span id="L1298" rel="#L1298">1298</span>
<span id="L1299" rel="#L1299">1299</span>
<span id="L1300" rel="#L1300">1300</span>
<span id="L1301" rel="#L1301">1301</span>
<span id="L1302" rel="#L1302">1302</span>
<span id="L1303" rel="#L1303">1303</span>
<span id="L1304" rel="#L1304">1304</span>
<span id="L1305" rel="#L1305">1305</span>
<span id="L1306" rel="#L1306">1306</span>
<span id="L1307" rel="#L1307">1307</span>
<span id="L1308" rel="#L1308">1308</span>
<span id="L1309" rel="#L1309">1309</span>
<span id="L1310" rel="#L1310">1310</span>
<span id="L1311" rel="#L1311">1311</span>
<span id="L1312" rel="#L1312">1312</span>
<span id="L1313" rel="#L1313">1313</span>
<span id="L1314" rel="#L1314">1314</span>
<span id="L1315" rel="#L1315">1315</span>
<span id="L1316" rel="#L1316">1316</span>
<span id="L1317" rel="#L1317">1317</span>
<span id="L1318" rel="#L1318">1318</span>
<span id="L1319" rel="#L1319">1319</span>
<span id="L1320" rel="#L1320">1320</span>
<span id="L1321" rel="#L1321">1321</span>
<span id="L1322" rel="#L1322">1322</span>
<span id="L1323" rel="#L1323">1323</span>
<span id="L1324" rel="#L1324">1324</span>
<span id="L1325" rel="#L1325">1325</span>
<span id="L1326" rel="#L1326">1326</span>
<span id="L1327" rel="#L1327">1327</span>
<span id="L1328" rel="#L1328">1328</span>
<span id="L1329" rel="#L1329">1329</span>
<span id="L1330" rel="#L1330">1330</span>
<span id="L1331" rel="#L1331">1331</span>
<span id="L1332" rel="#L1332">1332</span>
<span id="L1333" rel="#L1333">1333</span>
<span id="L1334" rel="#L1334">1334</span>
<span id="L1335" rel="#L1335">1335</span>
<span id="L1336" rel="#L1336">1336</span>
<span id="L1337" rel="#L1337">1337</span>
<span id="L1338" rel="#L1338">1338</span>
<span id="L1339" rel="#L1339">1339</span>
<span id="L1340" rel="#L1340">1340</span>
<span id="L1341" rel="#L1341">1341</span>
<span id="L1342" rel="#L1342">1342</span>
<span id="L1343" rel="#L1343">1343</span>
<span id="L1344" rel="#L1344">1344</span>
<span id="L1345" rel="#L1345">1345</span>
<span id="L1346" rel="#L1346">1346</span>
<span id="L1347" rel="#L1347">1347</span>
<span id="L1348" rel="#L1348">1348</span>
<span id="L1349" rel="#L1349">1349</span>
<span id="L1350" rel="#L1350">1350</span>
<span id="L1351" rel="#L1351">1351</span>
<span id="L1352" rel="#L1352">1352</span>
<span id="L1353" rel="#L1353">1353</span>
<span id="L1354" rel="#L1354">1354</span>
<span id="L1355" rel="#L1355">1355</span>
<span id="L1356" rel="#L1356">1356</span>
<span id="L1357" rel="#L1357">1357</span>
<span id="L1358" rel="#L1358">1358</span>
<span id="L1359" rel="#L1359">1359</span>
<span id="L1360" rel="#L1360">1360</span>
<span id="L1361" rel="#L1361">1361</span>
<span id="L1362" rel="#L1362">1362</span>
<span id="L1363" rel="#L1363">1363</span>
<span id="L1364" rel="#L1364">1364</span>
<span id="L1365" rel="#L1365">1365</span>
<span id="L1366" rel="#L1366">1366</span>
<span id="L1367" rel="#L1367">1367</span>
<span id="L1368" rel="#L1368">1368</span>
<span id="L1369" rel="#L1369">1369</span>
<span id="L1370" rel="#L1370">1370</span>
<span id="L1371" rel="#L1371">1371</span>
<span id="L1372" rel="#L1372">1372</span>
<span id="L1373" rel="#L1373">1373</span>
<span id="L1374" rel="#L1374">1374</span>
<span id="L1375" rel="#L1375">1375</span>
<span id="L1376" rel="#L1376">1376</span>
<span id="L1377" rel="#L1377">1377</span>
<span id="L1378" rel="#L1378">1378</span>
<span id="L1379" rel="#L1379">1379</span>
<span id="L1380" rel="#L1380">1380</span>
<span id="L1381" rel="#L1381">1381</span>
<span id="L1382" rel="#L1382">1382</span>
<span id="L1383" rel="#L1383">1383</span>
<span id="L1384" rel="#L1384">1384</span>
<span id="L1385" rel="#L1385">1385</span>
<span id="L1386" rel="#L1386">1386</span>
<span id="L1387" rel="#L1387">1387</span>
<span id="L1388" rel="#L1388">1388</span>
<span id="L1389" rel="#L1389">1389</span>
<span id="L1390" rel="#L1390">1390</span>
<span id="L1391" rel="#L1391">1391</span>
<span id="L1392" rel="#L1392">1392</span>
<span id="L1393" rel="#L1393">1393</span>
<span id="L1394" rel="#L1394">1394</span>
<span id="L1395" rel="#L1395">1395</span>
<span id="L1396" rel="#L1396">1396</span>
<span id="L1397" rel="#L1397">1397</span>
<span id="L1398" rel="#L1398">1398</span>
<span id="L1399" rel="#L1399">1399</span>
</pre>
          </td>
          <td width="100%">
                <div class="highlight"><pre><div class='line' id='LC1'><span class="p">;(</span><span class="kd">function</span><span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">{</span>  </div><div class='line' id='LC2'>&nbsp;&nbsp;</div><div class='line' id='LC3'>&nbsp;&nbsp;<span class="c1">//==================================================================================================</span></div><div class='line' id='LC4'>&nbsp;&nbsp;<span class="c1">//TEMPLATES</span></div><div class='line' id='LC5'>&nbsp;&nbsp;<span class="c1">//==================================================================================================</span></div><div class='line' id='LC6'>&nbsp;&nbsp;</div><div class='line' id='LC7'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">templates</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC8'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">form</span><span class="o">:</span> <span class="s1">&#39;\</span></div><div class='line' id='LC9'><span class="s1">      &lt;form class=&quot;bbf-form&quot;&gt;{{fieldsets}}&lt;/form&gt;\</span></div><div class='line' id='LC10'><span class="s1">    &#39;</span><span class="p">,</span></div><div class='line' id='LC11'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC12'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fieldset</span><span class="o">:</span> <span class="s1">&#39;\</span></div><div class='line' id='LC13'><span class="s1">      &lt;fieldset&gt;\</span></div><div class='line' id='LC14'><span class="s1">        {{legend}}\</span></div><div class='line' id='LC15'><span class="s1">        &lt;ul&gt;{{fields}}&lt;/ul&gt;\</span></div><div class='line' id='LC16'><span class="s1">      &lt;/fieldset&gt;\</span></div><div class='line' id='LC17'><span class="s1">    &#39;</span><span class="p">,</span></div><div class='line' id='LC18'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC19'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">field</span><span class="o">:</span> <span class="s1">&#39;\</span></div><div class='line' id='LC20'><span class="s1">    &lt;li class=&quot;bbf-field bbf-field{{type}}&quot;&gt;\</span></div><div class='line' id='LC21'><span class="s1">      &lt;label for=&quot;{{id}}&quot;&gt;{{title}}&lt;/label&gt;\</span></div><div class='line' id='LC22'><span class="s1">      &lt;div class=&quot;bbf-editor bbf-editor{{type}}&quot;&gt;{{editor}}&lt;/div&gt;\</span></div><div class='line' id='LC23'><span class="s1">      &lt;div class=&quot;bbf-help&quot;&gt;{{help}}&lt;/div&gt;\</span></div><div class='line' id='LC24'><span class="s1">    &lt;/li&gt;\</span></div><div class='line' id='LC25'><span class="s1">    &#39;</span></div><div class='line' id='LC26'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC27'>&nbsp;&nbsp;</div><div class='line' id='LC28'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">classNames</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC29'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">error</span><span class="o">:</span> <span class="s1">&#39;bbf-error&#39;</span></div><div class='line' id='LC30'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC31'>&nbsp;&nbsp;</div><div class='line' id='LC32'>&nbsp;&nbsp;</div><div class='line' id='LC33'>&nbsp;&nbsp;</div><div class='line' id='LC34'>&nbsp;&nbsp;<span class="c1">//==================================================================================================</span></div><div class='line' id='LC35'>&nbsp;&nbsp;<span class="c1">//HELPERS</span></div><div class='line' id='LC36'>&nbsp;&nbsp;<span class="c1">//==================================================================================================</span></div><div class='line' id='LC37'>&nbsp;&nbsp;</div><div class='line' id='LC38'>&nbsp;&nbsp;<span class="c1">//Support paths for nested attributes e.g. &#39;user.name&#39;</span></div><div class='line' id='LC39'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">getNested</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">path</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC40'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">fields</span> <span class="o">=</span> <span class="nx">path</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;.&quot;</span><span class="p">);</span></div><div class='line' id='LC41'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC42'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">n</span> <span class="o">=</span> <span class="nx">fields</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">n</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC43'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span> <span class="o">=</span> <span class="nx">result</span><span class="p">[</span><span class="nx">fields</span><span class="p">[</span><span class="nx">i</span><span class="p">]];</span></div><div class='line' id='LC44'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC45'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC46'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC47'>&nbsp;&nbsp;</div><div class='line' id='LC48'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">getNestedSchema</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">path</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC49'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">path</span> <span class="o">=</span> <span class="nx">path</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\./g</span><span class="p">,</span> <span class="s1">&#39;.subSchema.&#39;</span><span class="p">);</span></div><div class='line' id='LC50'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">getNested</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">path</span><span class="p">);</span></div><div class='line' id='LC51'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC52'>&nbsp;&nbsp;</div><div class='line' id='LC53'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">helpers</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC54'>&nbsp;&nbsp;</div><div class='line' id='LC55'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC56'><span class="cm">   * This function is used to transform the key from a schema into the title used in a label.</span></div><div class='line' id='LC57'><span class="cm">   * (If a specific title is provided it will be used instead).</span></div><div class='line' id='LC58'><span class="cm">   * </span></div><div class='line' id='LC59'><span class="cm">   * By default this converts a camelCase string into words, i.e. Camel Case</span></div><div class='line' id='LC60'><span class="cm">   * If you have a different naming convention for schema keys, replace this function.</span></div><div class='line' id='LC61'><span class="cm">   * </span></div><div class='line' id='LC62'><span class="cm">   * @param {String}  Key</span></div><div class='line' id='LC63'><span class="cm">   * @return {String} Title</span></div><div class='line' id='LC64'><span class="cm">   */</span></div><div class='line' id='LC65'>&nbsp;&nbsp;<span class="nx">helpers</span><span class="p">.</span><span class="nx">keyToTitle</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">str</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC66'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Add spaces</span></div><div class='line' id='LC67'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">str</span> <span class="o">=</span> <span class="nx">str</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/([A-Z])/g</span><span class="p">,</span> <span class="s1">&#39; $1&#39;</span><span class="p">);</span></div><div class='line' id='LC68'><br/></div><div class='line' id='LC69'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Uppercase first character</span></div><div class='line' id='LC70'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">str</span> <span class="o">=</span> <span class="nx">str</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^./</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">str</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">str</span><span class="p">.</span><span class="nx">toUpperCase</span><span class="p">();</span> <span class="p">});</span></div><div class='line' id='LC71'><br/></div><div class='line' id='LC72'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">str</span><span class="p">;</span></div><div class='line' id='LC73'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC74'><br/></div><div class='line' id='LC75'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC76'><span class="cm">   * Helper to create a template with the {{mustache}} style tags. Template settings are reset</span></div><div class='line' id='LC77'><span class="cm">   * to user&#39;s settings when done to avoid conflicts.</span></div><div class='line' id='LC78'><span class="cm">   * @param {String}      Template string</span></div><div class='line' id='LC79'><span class="cm">   * @param {Object}      Optional; values to replace in template</span></div><div class='line' id='LC80'><span class="cm">   * @return {Template}   Compiled template</span></div><div class='line' id='LC81'><span class="cm">   */</span></div><div class='line' id='LC82'>&nbsp;&nbsp;<span class="nx">helpers</span><span class="p">.</span><span class="nx">createTemplate</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">str</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC83'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Store user&#39;s template options </span></div><div class='line' id='LC84'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">_interpolateBackup</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">templateSettings</span><span class="p">.</span><span class="nx">interpolate</span><span class="p">;</span></div><div class='line' id='LC85'><br/></div><div class='line' id='LC86'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Set custom template settings</span></div><div class='line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">templateSettings</span><span class="p">.</span><span class="nx">interpolate</span> <span class="o">=</span> <span class="sr">/\{\{(.+?)\}\}/g</span><span class="p">;</span></div><div class='line' id='LC88'><br/></div><div class='line' id='LC89'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">template</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">template</span><span class="p">(</span><span class="nx">str</span><span class="p">);</span></div><div class='line' id='LC90'><br/></div><div class='line' id='LC91'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Reset to users&#39; template settings</span></div><div class='line' id='LC92'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">templateSettings</span><span class="p">.</span><span class="nx">interpolate</span> <span class="o">=</span> <span class="nx">_interpolateBackup</span><span class="p">;</span></div><div class='line' id='LC93'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC94'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC95'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">template</span><span class="p">;</span></div><div class='line' id='LC96'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC97'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">template</span><span class="p">(</span><span class="nx">context</span><span class="p">);</span></div><div class='line' id='LC98'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC99'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC100'>&nbsp;&nbsp;</div><div class='line' id='LC101'>&nbsp;&nbsp;</div><div class='line' id='LC102'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC103'><span class="cm">   * Sets the templates to be used.</span></div><div class='line' id='LC104'><span class="cm">   * </span></div><div class='line' id='LC105'><span class="cm">   * If the templates passed in are strings, they will be compiled, expecting Mustache style tags,</span></div><div class='line' id='LC106'><span class="cm">   * i.e. &lt;div&gt;{{varName}}&lt;/div&gt;</span></div><div class='line' id='LC107'><span class="cm">   *</span></div><div class='line' id='LC108'><span class="cm">   * You can also pass in previously compiled Underscore templates, in which case you can use any style</span></div><div class='line' id='LC109'><span class="cm">   * tags.</span></div><div class='line' id='LC110'><span class="cm">   * </span></div><div class='line' id='LC111'><span class="cm">   * @param {Object} templates</span></div><div class='line' id='LC112'><span class="cm">   * @param {Object} classNames</span></div><div class='line' id='LC113'><span class="cm">   */</span></div><div class='line' id='LC114'>&nbsp;&nbsp;<span class="nx">helpers</span><span class="p">.</span><span class="nx">setTemplates</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">templates</span><span class="p">,</span> <span class="nx">classNames</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC115'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">createTemplate</span> <span class="o">=</span> <span class="nx">helpers</span><span class="p">.</span><span class="nx">createTemplate</span><span class="p">;</span></div><div class='line' id='LC116'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC117'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Compile templates if necessary</span></div><div class='line' id='LC118'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">templates</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">template</span><span class="p">,</span> <span class="nx">key</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isString</span><span class="p">(</span><span class="nx">template</span><span class="p">))</span> <span class="nx">template</span> <span class="o">=</span> <span class="nx">createTemplate</span><span class="p">(</span><span class="nx">template</span><span class="p">);</span></div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">list</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">template</span><span class="p">;</span></div><div class='line' id='LC122'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC123'><br/></div><div class='line' id='LC124'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Make active</span></div><div class='line' id='LC125'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Form</span><span class="p">.</span><span class="nx">templates</span> <span class="o">=</span> <span class="nx">templates</span><span class="p">;</span></div><div class='line' id='LC126'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Form</span><span class="p">.</span><span class="nx">classNames</span> <span class="o">=</span> <span class="nx">classNames</span><span class="p">;</span></div><div class='line' id='LC127'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC128'>&nbsp;&nbsp;</div><div class='line' id='LC129'>&nbsp;&nbsp;</div><div class='line' id='LC130'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC131'><span class="cm">   * Return the editor constructor for a given schema &#39;type&#39;.</span></div><div class='line' id='LC132'><span class="cm">   * Accepts strings for the default editors, or the reference to the constructor function</span></div><div class='line' id='LC133'><span class="cm">   * for custom editors</span></div><div class='line' id='LC134'><span class="cm">   * </span></div><div class='line' id='LC135'><span class="cm">   * @param {String|Function} The schema type e.g. &#39;Text&#39;, &#39;Select&#39;, or the editor constructor e.g. editors.Date</span></div><div class='line' id='LC136'><span class="cm">   * @param {Object}          Options to pass to editor, including required &#39;key&#39;, &#39;schema&#39;</span></div><div class='line' id='LC137'><span class="cm">   * @return {Mixed}          An instance of the mapped editor</span></div><div class='line' id='LC138'><span class="cm">   */</span></div><div class='line' id='LC139'>&nbsp;&nbsp;<span class="nx">helpers</span><span class="p">.</span><span class="nx">createEditor</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">schemaType</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC140'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">constructorFn</span><span class="p">;</span></div><div class='line' id='LC141'><br/></div><div class='line' id='LC142'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isString</span><span class="p">(</span><span class="nx">schemaType</span><span class="p">))</span></div><div class='line' id='LC143'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">constructorFn</span> <span class="o">=</span> <span class="nx">editors</span><span class="p">[</span><span class="nx">schemaType</span><span class="p">];</span></div><div class='line' id='LC144'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span></div><div class='line' id='LC145'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">constructorFn</span> <span class="o">=</span> <span class="nx">schemaType</span><span class="p">;</span></div><div class='line' id='LC146'><br/></div><div class='line' id='LC147'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="nx">constructorFn</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC148'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC149'>&nbsp;&nbsp;</div><div class='line' id='LC150'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC151'><span class="cm">   * Triggers an event that can be cancelled. Requires the user to invoke a callback. If false</span></div><div class='line' id='LC152'><span class="cm">   * is passed to the callback, the action does not run.</span></div><div class='line' id='LC153'><span class="cm">   *</span></div><div class='line' id='LC154'><span class="cm">   * NOTE: This helper uses private Backbone apis so can break when Backbone is upgraded</span></div><div class='line' id='LC155'><span class="cm">   * </span></div><div class='line' id='LC156'><span class="cm">   * @param {Mixed}       Instance of Backbone model, view, collection to trigger event on</span></div><div class='line' id='LC157'><span class="cm">   * @param {String}      Event name</span></div><div class='line' id='LC158'><span class="cm">   * @param {Array}       Arguments to pass to the event handlers</span></div><div class='line' id='LC159'><span class="cm">   * @param {Function}    Callback to run after the event handler has run.</span></div><div class='line' id='LC160'><span class="cm">   *                      If any of them passed false or error, this callback won&#39;t run</span></div><div class='line' id='LC161'><span class="cm">   */</span> </div><div class='line' id='LC162'>&nbsp;&nbsp;<span class="nx">helpers</span><span class="p">.</span><span class="nx">triggerCancellableEvent</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">subject</span><span class="p">,</span> <span class="nx">event</span><span class="p">,</span> <span class="nx">args</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span> </div><div class='line' id='LC163'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Return if there are no event listeners</span></div><div class='line' id='LC164'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">subject</span><span class="p">.</span><span class="nx">_callbacks</span> <span class="o">||</span> <span class="o">!</span><span class="nx">subject</span><span class="p">.</span><span class="nx">_callbacks</span><span class="p">[</span><span class="nx">event</span><span class="p">])</span> <span class="k">return</span> <span class="nx">callback</span><span class="p">();</span></div><div class='line' id='LC165'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC166'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">next</span> <span class="o">=</span> <span class="nx">subject</span><span class="p">.</span><span class="nx">_callbacks</span><span class="p">[</span><span class="nx">event</span><span class="p">].</span><span class="nx">next</span><span class="p">;</span></div><div class='line' id='LC167'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">next</span><span class="p">)</span> <span class="k">return</span> <span class="nx">callback</span><span class="p">();</span></div><div class='line' id='LC168'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC169'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">fn</span> <span class="o">=</span> <span class="nx">next</span><span class="p">.</span><span class="nx">callback</span><span class="p">,</span></div><div class='line' id='LC170'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">context</span> <span class="o">=</span> <span class="nx">next</span><span class="p">.</span><span class="nx">context</span> <span class="o">||</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC171'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC172'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Add the callback that will be used when done</span></div><div class='line' id='LC173'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">args</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">callback</span><span class="p">);</span></div><div class='line' id='LC174'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC175'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fn</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span></div><div class='line' id='LC176'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC177'>&nbsp;&nbsp;</div><div class='line' id='LC178'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC179'><span class="cm">   * Returns a validation function based on the type defined in the schema</span></div><div class='line' id='LC180'><span class="cm">   *</span></div><div class='line' id='LC181'><span class="cm">   * @param {RegExp|String|Function} validator</span></div><div class='line' id='LC182'><span class="cm">   * @return {Function}</span></div><div class='line' id='LC183'><span class="cm">   */</span></div><div class='line' id='LC184'>&nbsp;&nbsp;<span class="nx">helpers</span><span class="p">.</span><span class="nx">getValidator</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">validator</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC185'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Convert regular expressions to validators</span></div><div class='line' id='LC186'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isRegExp</span><span class="p">(</span><span class="nx">validator</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC187'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">validators</span><span class="p">.</span><span class="nx">regexp</span><span class="p">({</span> <span class="nx">regexp</span><span class="o">:</span> <span class="nx">validator</span> <span class="p">});</span></div><div class='line' id='LC188'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC189'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC190'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Use a built-in validator if given a string</span></div><div class='line' id='LC191'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isString</span><span class="p">(</span><span class="nx">validator</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC192'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">validators</span><span class="p">[</span><span class="nx">validator</span><span class="p">])</span> <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Validator &quot;&#39;</span><span class="o">+</span><span class="nx">validator</span><span class="o">+</span><span class="s1">&#39;&quot; not found&#39;</span><span class="p">);</span></div><div class='line' id='LC193'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC194'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">validators</span><span class="p">[</span><span class="nx">validator</span><span class="p">]();</span></div><div class='line' id='LC195'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC196'><br/></div><div class='line' id='LC197'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Functions can be used directly</span></div><div class='line' id='LC198'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">validator</span><span class="p">))</span> <span class="k">return</span> <span class="nx">validator</span><span class="p">;</span></div><div class='line' id='LC199'><br/></div><div class='line' id='LC200'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Use a customised built-in validator if given an object</span></div><div class='line' id='LC201'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isObject</span><span class="p">(</span><span class="nx">validator</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">validator</span><span class="p">.</span><span class="nx">type</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC202'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">config</span> <span class="o">=</span> <span class="nx">validator</span><span class="p">;</span></div><div class='line' id='LC203'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC204'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">validators</span><span class="p">[</span><span class="nx">config</span><span class="p">.</span><span class="nx">type</span><span class="p">](</span><span class="nx">config</span><span class="p">);</span></div><div class='line' id='LC205'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC206'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC207'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Unkown validator type</span></div><div class='line' id='LC208'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Invalid validator: &#39;</span> <span class="o">+</span> <span class="nx">validator</span><span class="p">);</span></div><div class='line' id='LC209'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC210'><br/></div><div class='line' id='LC211'><br/></div><div class='line' id='LC212'>&nbsp;&nbsp;</div><div class='line' id='LC213'>&nbsp;&nbsp;<span class="c1">//==================================================================================================</span></div><div class='line' id='LC214'>&nbsp;&nbsp;<span class="c1">//VALIDATORS</span></div><div class='line' id='LC215'>&nbsp;&nbsp;<span class="c1">//==================================================================================================</span></div><div class='line' id='LC216'>&nbsp;&nbsp;</div><div class='line' id='LC217'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">validators</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC218'>&nbsp;&nbsp;</div><div class='line' id='LC219'>&nbsp;&nbsp;<span class="nx">validators</span><span class="p">.</span><span class="nx">errMessages</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC220'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">required</span><span class="o">:</span> <span class="s1">&#39;Required&#39;</span><span class="p">,</span></div><div class='line' id='LC221'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">regexp</span><span class="o">:</span> <span class="s1">&#39;Invalid&#39;</span><span class="p">,</span></div><div class='line' id='LC222'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">email</span><span class="o">:</span> <span class="s1">&#39;Invalid email address&#39;</span><span class="p">,</span></div><div class='line' id='LC223'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span><span class="o">:</span> <span class="s1">&#39;Invalid URL&#39;</span><span class="p">,</span></div><div class='line' id='LC224'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">match</span><span class="o">:</span> <span class="s1">&#39;Must match field &quot;{{field}}&quot;&#39;</span></div><div class='line' id='LC225'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC226'>&nbsp;&nbsp;</div><div class='line' id='LC227'>&nbsp;&nbsp;<span class="nx">validators</span><span class="p">.</span><span class="nx">required</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span>   </div><div class='line' id='LC228'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span></div><div class='line' id='LC229'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;required&#39;</span><span class="p">,</span></div><div class='line' id='LC230'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">message</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">errMessages</span><span class="p">.</span><span class="nx">required</span></div><div class='line' id='LC231'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC232'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC233'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span> <span class="nx">required</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC234'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">value</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC235'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC236'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">err</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC237'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="nx">options</span><span class="p">.</span><span class="nx">type</span><span class="p">,</span></div><div class='line' id='LC238'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">message</span><span class="o">:</span> <span class="nx">helpers</span><span class="p">.</span><span class="nx">createTemplate</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">message</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span></div><div class='line' id='LC239'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC240'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC241'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">value</span> <span class="o">===</span> <span class="kc">null</span> <span class="o">||</span> <span class="nx">value</span> <span class="o">===</span> <span class="kc">undefined</span> <span class="o">||</span> <span class="nx">value</span> <span class="o">===</span> <span class="s1">&#39;&#39;</span><span class="p">)</span> <span class="k">return</span> <span class="nx">err</span><span class="p">;</span></div><div class='line' id='LC242'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC243'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC244'>&nbsp;&nbsp;</div><div class='line' id='LC245'>&nbsp;&nbsp;<span class="nx">validators</span><span class="p">.</span><span class="nx">regexp</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC246'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">options</span><span class="p">.</span><span class="nx">regexp</span><span class="p">)</span> <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Missing required &quot;regexp&quot; option for &quot;regexp&quot; validator&#39;</span><span class="p">);</span></div><div class='line' id='LC247'>&nbsp;&nbsp;</div><div class='line' id='LC248'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span></div><div class='line' id='LC249'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;regexp&#39;</span><span class="p">,</span></div><div class='line' id='LC250'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">message</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">errMessages</span><span class="p">.</span><span class="nx">regexp</span></div><div class='line' id='LC251'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC252'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC253'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span> <span class="nx">regexp</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC254'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">value</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC255'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC256'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">err</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC257'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="nx">options</span><span class="p">.</span><span class="nx">type</span><span class="p">,</span></div><div class='line' id='LC258'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">message</span><span class="o">:</span> <span class="nx">helpers</span><span class="p">.</span><span class="nx">createTemplate</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">message</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span></div><div class='line' id='LC259'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC260'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC261'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Don&#39;t check empty values (add a &#39;required&#39; validator for this)</span></div><div class='line' id='LC262'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">value</span> <span class="o">===</span> <span class="kc">null</span> <span class="o">||</span> <span class="nx">value</span> <span class="o">===</span> <span class="kc">undefined</span> <span class="o">||</span> <span class="nx">value</span> <span class="o">===</span> <span class="s1">&#39;&#39;</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC263'><br/></div><div class='line' id='LC264'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">options</span><span class="p">.</span><span class="nx">regexp</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">value</span><span class="p">))</span> <span class="k">return</span> <span class="nx">err</span><span class="p">;</span></div><div class='line' id='LC265'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC266'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC267'>&nbsp;&nbsp;</div><div class='line' id='LC268'>&nbsp;&nbsp;<span class="nx">validators</span><span class="p">.</span><span class="nx">email</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC269'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span></div><div class='line' id='LC270'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;email&#39;</span><span class="p">,</span></div><div class='line' id='LC271'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">message</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">errMessages</span><span class="p">.</span><span class="nx">email</span><span class="p">,</span></div><div class='line' id='LC272'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">regexp</span><span class="o">:</span> <span class="sr">/^[\w\-]{1,}([\w\-.]{1,1}[\w\-]{1,}){0,}[@][\w\-]{1,}([.]([\w\-]{1,})){1,3}$/</span></div><div class='line' id='LC273'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC274'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC275'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">validators</span><span class="p">.</span><span class="nx">regexp</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC276'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC277'>&nbsp;&nbsp;</div><div class='line' id='LC278'>&nbsp;&nbsp;<span class="nx">validators</span><span class="p">.</span><span class="nx">url</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC279'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span></div><div class='line' id='LC280'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;url&#39;</span><span class="p">,</span></div><div class='line' id='LC281'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">message</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">errMessages</span><span class="p">.</span><span class="nx">url</span><span class="p">,</span></div><div class='line' id='LC282'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">regexp</span><span class="o">:</span> <span class="sr">/^(http|https):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)(:(\d+))?\/?/i</span></div><div class='line' id='LC283'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC284'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC285'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">validators</span><span class="p">.</span><span class="nx">regexp</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC286'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC287'>&nbsp;&nbsp;</div><div class='line' id='LC288'>&nbsp;&nbsp;<span class="nx">validators</span><span class="p">.</span><span class="nx">match</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC289'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">options</span><span class="p">.</span><span class="nx">field</span><span class="p">)</span> <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Missing required &quot;field&quot; options for &quot;match&quot; validator&#39;</span><span class="p">);</span></div><div class='line' id='LC290'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC291'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span></div><div class='line' id='LC292'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;match&#39;</span><span class="p">,</span></div><div class='line' id='LC293'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">message</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">errMessages</span><span class="p">.</span><span class="nx">match</span></div><div class='line' id='LC294'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC295'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC296'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span> <span class="nx">match</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">attrs</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC297'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">value</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC298'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC299'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">err</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC300'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="nx">options</span><span class="p">.</span><span class="nx">type</span><span class="p">,</span></div><div class='line' id='LC301'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">message</span><span class="o">:</span> <span class="nx">helpers</span><span class="p">.</span><span class="nx">createTemplate</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">message</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span></div><div class='line' id='LC302'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC303'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC304'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Don&#39;t check empty values (add a &#39;required&#39; validator for this)</span></div><div class='line' id='LC305'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">value</span> <span class="o">===</span> <span class="kc">null</span> <span class="o">||</span> <span class="nx">value</span> <span class="o">===</span> <span class="kc">undefined</span> <span class="o">||</span> <span class="nx">value</span> <span class="o">===</span> <span class="s1">&#39;&#39;</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC306'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC307'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">value</span> <span class="o">!=</span> <span class="nx">attrs</span><span class="p">[</span><span class="nx">options</span><span class="p">.</span><span class="nx">field</span><span class="p">])</span> <span class="k">return</span> <span class="nx">err</span><span class="p">;</span></div><div class='line' id='LC308'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC309'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC310'>&nbsp;&nbsp;</div><div class='line' id='LC311'><br/></div><div class='line' id='LC312'><br/></div><div class='line' id='LC313'><br/></div><div class='line' id='LC314'>&nbsp;&nbsp;<span class="c1">//==================================================================================================</span></div><div class='line' id='LC315'>&nbsp;&nbsp;<span class="c1">//FORM</span></div><div class='line' id='LC316'>&nbsp;&nbsp;<span class="c1">//==================================================================================================</span></div><div class='line' id='LC317'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC318'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">Form</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">View</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span></div><div class='line' id='LC319'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC320'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Field views</span></div><div class='line' id='LC321'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fields</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC322'><br/></div><div class='line' id='LC323'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC324'><span class="cm">     * @param {Object}  Options</span></div><div class='line' id='LC325'><span class="cm">     *      Required:</span></div><div class='line' id='LC326'><span class="cm">     *          schema  {Array}</span></div><div class='line' id='LC327'><span class="cm">     *      Optional:</span></div><div class='line' id='LC328'><span class="cm">     *          model   {Backbone.Model} : Use instead of data, and use commit().</span></div><div class='line' id='LC329'><span class="cm">     *          data    {Array} : Pass this when not using a model. Use getValue() to get out value</span></div><div class='line' id='LC330'><span class="cm">     *          fields  {Array} : Keys of fields to include in the form, in display order (default: all fields)</span></div><div class='line' id='LC331'><span class="cm">     */</span></div><div class='line' id='LC332'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">initialize</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC333'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">schema</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">schema</span> <span class="o">||</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">model</span> <span class="o">?</span> <span class="nx">options</span><span class="p">.</span><span class="nx">model</span><span class="p">.</span><span class="nx">schema</span> <span class="o">:</span> <span class="p">{}),</span></div><div class='line' id='LC334'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">model</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">model</span><span class="p">;</span></div><div class='line' id='LC335'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">data</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">data</span><span class="p">;</span></div><div class='line' id='LC336'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">fieldsToRender</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">fields</span> <span class="o">||</span> <span class="nx">_</span><span class="p">.</span><span class="nx">keys</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">schema</span><span class="p">);</span></div><div class='line' id='LC337'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">fieldsets</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">fieldsets</span><span class="p">;</span></div><div class='line' id='LC338'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">idPrefix</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">idPrefix</span> <span class="o">||</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC339'><br/></div><div class='line' id='LC340'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Stores all Field views</span></div><div class='line' id='LC341'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">fields</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC342'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC343'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">form</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC344'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC345'><br/></div><div class='line' id='LC346'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC347'><span class="cm">     * Renders the form and all fields</span></div><div class='line' id='LC348'><span class="cm">     */</span></div><div class='line' id='LC349'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">render</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC350'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span></div><div class='line' id='LC351'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fieldsToRender</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">fieldsToRender</span><span class="p">,</span></div><div class='line' id='LC352'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fieldsets</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">fieldsets</span><span class="p">,</span></div><div class='line' id='LC353'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">templates</span> <span class="o">=</span> <span class="nx">Form</span><span class="p">.</span><span class="nx">templates</span><span class="p">;</span></div><div class='line' id='LC354'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC355'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Create el from template</span></div><div class='line' id='LC356'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$form</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">templates</span><span class="p">.</span><span class="nx">form</span><span class="p">({</span></div><div class='line' id='LC357'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fieldsets</span><span class="o">:</span> <span class="s1">&#39;&lt;div class=&quot;bbf-placeholder&quot;&gt;&lt;/div&gt;&#39;</span></div><div class='line' id='LC358'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}));</span></div><div class='line' id='LC359'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC360'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Get a reference to where fieldsets should go and remove the placeholder</span></div><div class='line' id='LC361'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$fieldsetContainer</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;.bbf-placeholder&#39;</span><span class="p">,</span> <span class="nx">$form</span><span class="p">).</span><span class="nx">parent</span><span class="p">();</span></div><div class='line' id='LC362'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$fieldsetContainer</span><span class="p">.</span><span class="nx">html</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC363'><br/></div><div class='line' id='LC364'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">fieldsets</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC365'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//TODO: Update handling of fieldsets</span></div><div class='line' id='LC366'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">fieldsets</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">fs</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC367'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">(</span><span class="nx">fs</span><span class="p">).</span><span class="nx">isArray</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC368'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fs</span> <span class="o">=</span> <span class="p">{</span><span class="s1">&#39;fields&#39;</span><span class="o">:</span> <span class="nx">fs</span><span class="p">};</span></div><div class='line' id='LC369'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC370'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC371'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Concatenating HTML as strings won&#39;t work so we need to insert field elements into a placeholder</span></div><div class='line' id='LC372'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$fieldset</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">templates</span><span class="p">.</span><span class="nx">fieldset</span><span class="p">({</span></div><div class='line' id='LC373'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">legend</span><span class="o">:</span> <span class="p">(</span><span class="nx">fs</span><span class="p">.</span><span class="nx">legend</span><span class="p">)</span> <span class="o">?</span> <span class="s1">&#39;&lt;legend&gt;&#39;</span> <span class="o">+</span> <span class="nx">fs</span><span class="p">.</span><span class="nx">legend</span> <span class="o">+</span> <span class="s1">&#39;&lt;/legend&gt;&#39;</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">,</span></div><div class='line' id='LC374'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fields</span><span class="o">:</span> <span class="s1">&#39;&lt;div class=&quot;bbf-placeholder&quot;&gt;&lt;/div&gt;&#39;</span></div><div class='line' id='LC375'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}));</span></div><div class='line' id='LC376'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC377'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$fieldsContainer</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;.bbf-placeholder&#39;</span><span class="p">,</span> <span class="nx">$fieldset</span><span class="p">).</span><span class="nx">parent</span><span class="p">();</span></div><div class='line' id='LC378'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$fieldsContainer</span><span class="p">.</span><span class="nx">html</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC379'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC380'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">renderFields</span><span class="p">(</span><span class="nx">fs</span><span class="p">.</span><span class="nx">fields</span><span class="p">,</span> <span class="nx">$fieldsContainer</span><span class="p">);</span></div><div class='line' id='LC381'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC382'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$fieldsetContainer</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="nx">$fieldset</span><span class="p">);</span></div><div class='line' id='LC383'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC384'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC385'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Concatenating HTML as strings won&#39;t work so we need to insert field elements into a placeholder</span></div><div class='line' id='LC386'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$fieldset</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">templates</span><span class="p">.</span><span class="nx">fieldset</span><span class="p">({</span></div><div class='line' id='LC387'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">legend</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">,</span></div><div class='line' id='LC388'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fields</span><span class="o">:</span> <span class="s1">&#39;&lt;div class=&quot;bbf-placeholder&quot;&gt;&lt;/div&gt;&#39;</span></div><div class='line' id='LC389'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}));</span></div><div class='line' id='LC390'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC391'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$fieldsContainer</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;.bbf-placeholder&#39;</span><span class="p">,</span> <span class="nx">$fieldset</span><span class="p">).</span><span class="nx">parent</span><span class="p">();</span></div><div class='line' id='LC392'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$fieldsContainer</span><span class="p">.</span><span class="nx">html</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC393'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC394'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">renderFields</span><span class="p">(</span><span class="nx">fieldsToRender</span><span class="p">,</span> <span class="nx">$fieldsContainer</span><span class="p">);</span></div><div class='line' id='LC395'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC396'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$fieldsetContainer</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="nx">$fieldset</span><span class="p">);</span></div><div class='line' id='LC397'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC398'><br/></div><div class='line' id='LC399'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">setElement</span><span class="p">(</span><span class="nx">$form</span><span class="p">);</span></div><div class='line' id='LC400'><br/></div><div class='line' id='LC401'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC402'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC403'><br/></div><div class='line' id='LC404'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC405'><span class="cm">     * Render a list of fields. Returns the rendered Field object.</span></div><div class='line' id='LC406'><span class="cm">     * @param {Array}           Fields to render</span></div><div class='line' id='LC407'><span class="cm">     * @param {jQuery}          Wrapped DOM element where field elemends will go</span></div><div class='line' id='LC408'><span class="cm">     */</span></div><div class='line' id='LC409'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">renderFields</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">fieldsToRender</span><span class="p">,</span> <span class="nx">$container</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC410'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span></div><div class='line' id='LC411'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">schema</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">schema</span><span class="p">,</span></div><div class='line' id='LC412'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">model</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">model</span><span class="p">,</span></div><div class='line' id='LC413'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">,</span></div><div class='line' id='LC414'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fields</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">fields</span><span class="p">;</span></div><div class='line' id='LC415'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC416'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Create form fields</span></div><div class='line' id='LC417'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">fieldsToRender</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">key</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC418'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">itemSchema</span> <span class="o">=</span> <span class="nx">getNestedSchema</span><span class="p">(</span><span class="nx">schema</span><span class="p">,</span> <span class="nx">key</span><span class="p">);</span></div><div class='line' id='LC419'><br/></div><div class='line' id='LC420'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">itemSchema</span><span class="p">)</span> <span class="k">throw</span> <span class="s2">&quot;Field &#39;&quot;</span><span class="o">+</span><span class="nx">key</span><span class="o">+</span><span class="s2">&quot;&#39; not found in schema&quot;</span><span class="p">;</span></div><div class='line' id='LC421'><br/></div><div class='line' id='LC422'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">options</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC423'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">form</span><span class="o">:</span> <span class="nx">self</span><span class="p">,</span></div><div class='line' id='LC424'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">key</span><span class="o">:</span> <span class="nx">key</span><span class="p">,</span></div><div class='line' id='LC425'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">schema</span><span class="o">:</span> <span class="nx">itemSchema</span><span class="p">,</span></div><div class='line' id='LC426'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">idPrefix</span><span class="o">:</span> <span class="nx">self</span><span class="p">.</span><span class="nx">idPrefix</span></div><div class='line' id='LC427'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC428'><br/></div><div class='line' id='LC429'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">model</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC430'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">model</span> <span class="o">=</span> <span class="nx">model</span><span class="p">;</span></div><div class='line' id='LC431'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC432'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">value</span> <span class="o">=</span> <span class="nx">data</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span></div><div class='line' id='LC433'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC434'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">value</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC435'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC436'><br/></div><div class='line' id='LC437'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">field</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Field</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC438'><br/></div><div class='line' id='LC439'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Render the fields with editors, apart from Hidden fields</span></div><div class='line' id='LC440'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">itemSchema</span><span class="p">.</span><span class="nx">type</span> <span class="o">==</span> <span class="s1">&#39;Hidden&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC441'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">field</span><span class="p">.</span><span class="nx">editor</span> <span class="o">=</span> <span class="nx">helpers</span><span class="p">.</span><span class="nx">createEditor</span><span class="p">(</span><span class="s1">&#39;Hidden&#39;</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC442'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC443'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$container</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="nx">field</span><span class="p">.</span><span class="nx">render</span><span class="p">().</span><span class="nx">el</span><span class="p">);</span></div><div class='line' id='LC444'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC445'><br/></div><div class='line' id='LC446'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fields</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">field</span><span class="p">;</span></div><div class='line' id='LC447'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC448'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC449'><br/></div><div class='line' id='LC450'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC451'><span class="cm">     * Validate the data</span></div><div class='line' id='LC452'><span class="cm">     *</span></div><div class='line' id='LC453'><span class="cm">     * @return {Object} Validation errors</span></div><div class='line' id='LC454'><span class="cm">     */</span></div><div class='line' id='LC455'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">validate</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC456'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span></div><div class='line' id='LC457'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fields</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">fields</span><span class="p">,</span></div><div class='line' id='LC458'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">model</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">model</span><span class="p">,</span></div><div class='line' id='LC459'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">errors</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC460'><br/></div><div class='line' id='LC461'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Collect errors from schema validation</span></div><div class='line' id='LC462'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">fields</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">field</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC463'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">error</span> <span class="o">=</span> <span class="nx">field</span><span class="p">.</span><span class="nx">validate</span><span class="p">();</span></div><div class='line' id='LC464'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">error</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC465'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">errors</span><span class="p">[</span><span class="nx">field</span><span class="p">.</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">error</span><span class="p">;</span></div><div class='line' id='LC466'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC467'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC468'><br/></div><div class='line' id='LC469'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Get errors from default Backbone model validator</span></div><div class='line' id='LC470'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">model</span> <span class="o">&amp;&amp;</span> <span class="nx">model</span><span class="p">.</span><span class="nx">validate</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC471'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">modelErrors</span> <span class="o">=</span> <span class="nx">model</span><span class="p">.</span><span class="nx">validate</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">getValue</span><span class="p">());</span></div><div class='line' id='LC472'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC473'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">modelErrors</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC474'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">isDictionary</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isObject</span><span class="p">(</span><span class="nx">modelErrors</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">modelErrors</span><span class="p">);</span></div><div class='line' id='LC475'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC476'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//If errors are not in object form then just store on the error object</span></div><div class='line' id='LC477'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">isDictionary</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC478'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">errors</span><span class="p">.</span><span class="nx">_others</span> <span class="o">=</span> <span class="nx">errors</span><span class="p">.</span><span class="nx">_others</span> <span class="o">||</span> <span class="p">[];</span></div><div class='line' id='LC479'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">errors</span><span class="p">.</span><span class="nx">_others</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">modelErrors</span><span class="p">);</span></div><div class='line' id='LC480'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC481'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC482'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Merge programmatic errors (requires model.validate() to return an object e.g. { fieldKey: &#39;error&#39; })</span></div><div class='line' id='LC483'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isDictionary</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC484'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">modelErrors</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">key</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC485'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Set error on field if there isn&#39;t one already</span></div><div class='line' id='LC486'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">fields</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">errors</span><span class="p">[</span><span class="nx">key</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC487'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">fields</span><span class="p">[</span><span class="nx">key</span><span class="p">].</span><span class="nx">setError</span><span class="p">(</span><span class="nx">val</span><span class="p">);</span></div><div class='line' id='LC488'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC489'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC490'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC491'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Otherwise add to &#39;_others&#39; key</span></div><div class='line' id='LC492'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">errors</span><span class="p">.</span><span class="nx">_others</span> <span class="o">=</span> <span class="nx">errors</span><span class="p">.</span><span class="nx">_others</span> <span class="o">||</span> <span class="p">[];</span></div><div class='line' id='LC493'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">tmpErr</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC494'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">tmpErr</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">val</span><span class="p">;</span></div><div class='line' id='LC495'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">errors</span><span class="p">.</span><span class="nx">_others</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">tmpErr</span><span class="p">);</span></div><div class='line' id='LC496'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC497'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC498'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC499'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC500'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC501'><br/></div><div class='line' id='LC502'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isEmpty</span><span class="p">(</span><span class="nx">errors</span><span class="p">)</span> <span class="o">?</span> <span class="kc">null</span> <span class="o">:</span> <span class="nx">errors</span><span class="p">;</span></div><div class='line' id='LC503'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC504'><br/></div><div class='line' id='LC505'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC506'><span class="cm">     * Update the model with all latest values.</span></div><div class='line' id='LC507'><span class="cm">     *</span></div><div class='line' id='LC508'><span class="cm">     * @return {Object}  Validation errors</span></div><div class='line' id='LC509'><span class="cm">     */</span></div><div class='line' id='LC510'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">commit</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC511'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Validate</span></div><div class='line' id='LC512'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">errors</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">validate</span><span class="p">();</span></div><div class='line' id='LC513'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">errors</span><span class="p">)</span> <span class="k">return</span> <span class="nx">errors</span><span class="p">;</span></div><div class='line' id='LC514'><br/></div><div class='line' id='LC515'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Commit</span></div><div class='line' id='LC516'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">modelError</span><span class="p">;</span></div><div class='line' id='LC517'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">model</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">getValue</span><span class="p">(),</span> <span class="p">{</span></div><div class='line' id='LC518'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">error</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">model</span><span class="p">,</span> <span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC519'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">modelError</span> <span class="o">=</span> <span class="nx">e</span><span class="p">;</span></div><div class='line' id='LC520'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC521'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC522'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC523'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">modelError</span><span class="p">)</span> <span class="k">return</span> <span class="nx">modelError</span><span class="p">;</span></div><div class='line' id='LC524'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC525'><br/></div><div class='line' id='LC526'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC527'><span class="cm">     * Get all the field values as an object.</span></div><div class='line' id='LC528'><span class="cm">     * Use this method when passing data instead of objects</span></div><div class='line' id='LC529'><span class="cm">     * </span></div><div class='line' id='LC530'><span class="cm">     * @param {String}  To get a specific field value pass the key name</span></div><div class='line' id='LC531'><span class="cm">     */</span></div><div class='line' id='LC532'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">getValue</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">key</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC533'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Return only given key if specified</span></div><div class='line' id='LC534'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">key</span><span class="p">)</span> <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">fields</span><span class="p">[</span><span class="nx">key</span><span class="p">].</span><span class="nx">getValue</span><span class="p">();</span></div><div class='line' id='LC535'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC536'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Otherwise return entire form      </span></div><div class='line' id='LC537'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">values</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC538'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">fields</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">field</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC539'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">values</span><span class="p">[</span><span class="nx">field</span><span class="p">.</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">field</span><span class="p">.</span><span class="nx">getValue</span><span class="p">();</span></div><div class='line' id='LC540'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC541'><br/></div><div class='line' id='LC542'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">values</span><span class="p">;</span></div><div class='line' id='LC543'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC544'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC545'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC546'><span class="cm">     * Update field values, referenced by key</span></div><div class='line' id='LC547'><span class="cm">     * @param {Object}  New values to set</span></div><div class='line' id='LC548'><span class="cm">     */</span></div><div class='line' id='LC549'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setValue</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC550'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC551'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">fields</span><span class="p">[</span><span class="nx">key</span><span class="p">].</span><span class="nx">setValue</span><span class="p">(</span><span class="nx">data</span><span class="p">[</span><span class="nx">key</span><span class="p">]);</span></div><div class='line' id='LC552'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC553'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC554'><br/></div><div class='line' id='LC555'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC556'><span class="cm">     * Override default remove function in order to remove embedded views</span></div><div class='line' id='LC557'><span class="cm">     */</span></div><div class='line' id='LC558'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">remove</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC559'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">fields</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">fields</span><span class="p">;</span></div><div class='line' id='LC560'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC561'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">fields</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC562'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fields</span><span class="p">[</span><span class="nx">key</span><span class="p">].</span><span class="nx">remove</span><span class="p">();</span></div><div class='line' id='LC563'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC564'><br/></div><div class='line' id='LC565'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Backbone</span><span class="p">.</span><span class="nx">View</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">remove</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC566'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC567'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC568'><br/></div><div class='line' id='LC569'><br/></div><div class='line' id='LC570'><br/></div><div class='line' id='LC571'>&nbsp;&nbsp;<span class="c1">//==================================================================================================</span></div><div class='line' id='LC572'>&nbsp;&nbsp;<span class="c1">//FIELD</span></div><div class='line' id='LC573'>&nbsp;&nbsp;<span class="c1">//==================================================================================================</span></div><div class='line' id='LC574'>&nbsp;&nbsp;</div><div class='line' id='LC575'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">Field</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">View</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span></div><div class='line' id='LC576'><br/></div><div class='line' id='LC577'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC578'><span class="cm">     * @param {Object}  Options</span></div><div class='line' id='LC579'><span class="cm">     *      Required:</span></div><div class='line' id='LC580'><span class="cm">     *          key     {String} : The model attribute key</span></div><div class='line' id='LC581'><span class="cm">     *      Optional:</span></div><div class='line' id='LC582'><span class="cm">     *          schema  {Object} : Schema for the field</span></div><div class='line' id='LC583'><span class="cm">     *          value       {Mixed} : Pass value when not using a model. Use getValue() to get out value</span></div><div class='line' id='LC584'><span class="cm">     *          model       {Backbone.Model} : Use instead of value, and use commit().</span></div><div class='line' id='LC585'><span class="cm">     *          idPrefix    {String} : Prefix to add to the editor DOM element&#39;s ID</span></div><div class='line' id='LC586'><span class="cm">     */</span></div><div class='line' id='LC587'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">initialize</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC588'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">form</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">form</span><span class="p">;</span></div><div class='line' id='LC589'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">key</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">key</span><span class="p">;</span></div><div class='line' id='LC590'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">schema</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">schema</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC591'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">value</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC592'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">model</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">model</span><span class="p">;</span></div><div class='line' id='LC593'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">idPrefix</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">idPrefix</span> <span class="o">||</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC594'><br/></div><div class='line' id='LC595'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Set schema defaults</span></div><div class='line' id='LC596'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">schema</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">schema</span><span class="p">;</span></div><div class='line' id='LC597'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">schema</span><span class="p">.</span><span class="nx">type</span><span class="p">)</span> <span class="nx">schema</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="s1">&#39;Text&#39;</span><span class="p">;</span></div><div class='line' id='LC598'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">schema</span><span class="p">.</span><span class="nx">title</span><span class="p">)</span> <span class="nx">schema</span><span class="p">.</span><span class="nx">title</span> <span class="o">=</span> <span class="nx">helpers</span><span class="p">.</span><span class="nx">keyToTitle</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">key</span><span class="p">);</span></div><div class='line' id='LC599'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC600'><br/></div><div class='line' id='LC601'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">render</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC602'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">schema</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">schema</span><span class="p">,</span></div><div class='line' id='LC603'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">templates</span> <span class="o">=</span> <span class="nx">Form</span><span class="p">.</span><span class="nx">templates</span><span class="p">;</span></div><div class='line' id='LC604'><br/></div><div class='line' id='LC605'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Standard options that will go to all editors</span></div><div class='line' id='LC606'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">options</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC607'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">form</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">form</span><span class="p">,</span></div><div class='line' id='LC608'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">key</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">key</span><span class="p">,</span></div><div class='line' id='LC609'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">schema</span><span class="o">:</span> <span class="nx">schema</span><span class="p">,</span></div><div class='line' id='LC610'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">idPrefix</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">idPrefix</span><span class="p">,</span></div><div class='line' id='LC611'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">id</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">idPrefix</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">key</span></div><div class='line' id='LC612'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC613'><br/></div><div class='line' id='LC614'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Decide on data delivery type to pass to editors</span></div><div class='line' id='LC615'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">model</span><span class="p">)</span></div><div class='line' id='LC616'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">model</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">model</span><span class="p">;</span></div><div class='line' id='LC617'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span></div><div class='line' id='LC618'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">value</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC619'><br/></div><div class='line' id='LC620'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Decide on the editor to use</span></div><div class='line' id='LC621'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">editor</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">editor</span> <span class="o">=</span> <span class="nx">helpers</span><span class="p">.</span><span class="nx">createEditor</span><span class="p">(</span><span class="nx">schema</span><span class="p">.</span><span class="nx">type</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC622'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC623'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Create the element</span></div><div class='line' id='LC624'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$field</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">templates</span><span class="p">.</span><span class="nx">field</span><span class="p">({</span></div><div class='line' id='LC625'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">key</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">key</span><span class="p">,</span></div><div class='line' id='LC626'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">title</span><span class="o">:</span> <span class="nx">schema</span><span class="p">.</span><span class="nx">title</span><span class="p">,</span></div><div class='line' id='LC627'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">id</span><span class="o">:</span> <span class="nx">editor</span><span class="p">.</span><span class="nx">id</span><span class="p">,</span></div><div class='line' id='LC628'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="nx">schema</span><span class="p">.</span><span class="nx">type</span><span class="p">,</span></div><div class='line' id='LC629'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">editor</span><span class="o">:</span> <span class="s1">&#39;&lt;span class=&quot;bbf-placeholder-editor&quot;&gt;&lt;/span&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC630'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">help</span><span class="o">:</span> <span class="s1">&#39;&lt;span class=&quot;bbf-placeholder-help&quot;&gt;&lt;/span&gt;&#39;</span></div><div class='line' id='LC631'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}));</span></div><div class='line' id='LC632'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC633'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Render editor</span></div><div class='line' id='LC634'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$editorContainer</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;.bbf-placeholder-editor&#39;</span><span class="p">,</span> <span class="nx">$field</span><span class="p">).</span><span class="nx">parent</span><span class="p">();</span></div><div class='line' id='LC635'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$editorContainer</span><span class="p">.</span><span class="nx">empty</span><span class="p">();</span></div><div class='line' id='LC636'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$editorContainer</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="nx">editor</span><span class="p">.</span><span class="nx">render</span><span class="p">().</span><span class="nx">el</span><span class="p">);</span></div><div class='line' id='LC637'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC638'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Set help text</span></div><div class='line' id='LC639'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$help</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;.bbf-placeholder-help&#39;</span><span class="p">,</span> <span class="nx">$field</span><span class="p">).</span><span class="nx">parent</span><span class="p">();</span></div><div class='line' id='LC640'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$help</span><span class="p">.</span><span class="nx">empty</span><span class="p">();</span></div><div class='line' id='LC641'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">schema</span><span class="p">.</span><span class="nx">help</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">$help</span><span class="p">.</span><span class="nx">html</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">schema</span><span class="p">.</span><span class="nx">help</span><span class="p">);</span></div><div class='line' id='LC642'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC643'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Add custom CSS class names</span></div><div class='line' id='LC644'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">schema</span><span class="p">.</span><span class="nx">fieldClass</span><span class="p">)</span> <span class="nx">$field</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">schema</span><span class="p">.</span><span class="nx">fieldClass</span><span class="p">);</span></div><div class='line' id='LC645'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC646'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Add custom attributes</span></div><div class='line' id='LC647'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">schema</span><span class="p">.</span><span class="nx">fieldAttrs</span><span class="p">)</span> <span class="nx">$field</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">schema</span><span class="p">.</span><span class="nx">fieldAttrs</span><span class="p">);</span></div><div class='line' id='LC648'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC649'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">setElement</span><span class="p">(</span><span class="nx">$field</span><span class="p">);</span></div><div class='line' id='LC650'><br/></div><div class='line' id='LC651'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC652'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC653'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC654'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC655'><span class="cm">     * Check the validity of the field</span></div><div class='line' id='LC656'><span class="cm">     * @return {String}</span></div><div class='line' id='LC657'><span class="cm">     */</span></div><div class='line' id='LC658'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">validate</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC659'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">error</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">editor</span><span class="p">.</span><span class="nx">validate</span><span class="p">();</span></div><div class='line' id='LC660'><br/></div><div class='line' id='LC661'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">error</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC662'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">setError</span><span class="p">(</span><span class="nx">error</span><span class="p">.</span><span class="nx">message</span><span class="p">);</span></div><div class='line' id='LC663'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC664'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">clearError</span><span class="p">();</span></div><div class='line' id='LC665'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC666'><br/></div><div class='line' id='LC667'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">error</span><span class="p">;</span></div><div class='line' id='LC668'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC669'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC670'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC671'><span class="cm">     * Set the field into an error state, adding the error class and setting the error message</span></div><div class='line' id='LC672'><span class="cm">     *</span></div><div class='line' id='LC673'><span class="cm">     * @param {String} errMsg</span></div><div class='line' id='LC674'><span class="cm">     */</span></div><div class='line' id='LC675'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setError</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">errMsg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC676'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Object and NestedModel types set their own errors internally</span></div><div class='line' id='LC677'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">editor</span><span class="p">.</span><span class="nx">hasNestedForm</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC678'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC679'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">errClass</span> <span class="o">=</span> <span class="nx">Form</span><span class="p">.</span><span class="nx">classNames</span><span class="p">.</span><span class="nx">error</span><span class="p">;</span></div><div class='line' id='LC680'><br/></div><div class='line' id='LC681'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">errClass</span><span class="p">);</span></div><div class='line' id='LC682'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC683'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">$help</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">$help</span><span class="p">.</span><span class="nx">html</span><span class="p">(</span><span class="nx">errMsg</span><span class="p">);</span></div><div class='line' id='LC684'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC685'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC686'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC687'><span class="cm">     * Clear the error state and reset the help message</span></div><div class='line' id='LC688'><span class="cm">     */</span></div><div class='line' id='LC689'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">clearError</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC690'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">errClass</span> <span class="o">=</span> <span class="nx">Form</span><span class="p">.</span><span class="nx">classNames</span><span class="p">.</span><span class="nx">error</span><span class="p">;</span></div><div class='line' id='LC691'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC692'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">removeClass</span><span class="p">(</span><span class="nx">errClass</span><span class="p">);</span></div><div class='line' id='LC693'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC694'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// some fields (e.g., Hidden), may not have a help el</span></div><div class='line' id='LC695'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">$help</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC696'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$help</span><span class="p">.</span><span class="nx">empty</span><span class="p">();</span></div><div class='line' id='LC697'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC698'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Reset help text if available</span></div><div class='line' id='LC699'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">helpMsg</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">schema</span><span class="p">.</span><span class="nx">help</span><span class="p">;</span></div><div class='line' id='LC700'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">helpMsg</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">$help</span><span class="p">.</span><span class="nx">html</span><span class="p">(</span><span class="nx">helpMsg</span><span class="p">);</span></div><div class='line' id='LC701'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC702'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC703'><br/></div><div class='line' id='LC704'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC705'><span class="cm">     * Update the model with the new value from the editor</span></div><div class='line' id='LC706'><span class="cm">     */</span></div><div class='line' id='LC707'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">commit</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC708'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">editor</span><span class="p">.</span><span class="nx">commit</span><span class="p">();</span></div><div class='line' id='LC709'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC710'><br/></div><div class='line' id='LC711'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC712'><span class="cm">     * Get the value from the editor</span></div><div class='line' id='LC713'><span class="cm">     * @return {Mixed}</span></div><div class='line' id='LC714'><span class="cm">     */</span></div><div class='line' id='LC715'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">getValue</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC716'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">editor</span><span class="p">.</span><span class="nx">getValue</span><span class="p">();</span></div><div class='line' id='LC717'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC718'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC719'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC720'><span class="cm">     * Set/change the value of the editor</span></div><div class='line' id='LC721'><span class="cm">     */</span></div><div class='line' id='LC722'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setValue</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC723'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">editor</span><span class="p">.</span><span class="nx">setValue</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC724'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC725'><br/></div><div class='line' id='LC726'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">logValue</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC727'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">console</span> <span class="o">||</span> <span class="o">!</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC728'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC729'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">getValue</span><span class="p">());</span></div><div class='line' id='LC730'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC731'><br/></div><div class='line' id='LC732'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">remove</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC733'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">editor</span><span class="p">.</span><span class="nx">remove</span><span class="p">();</span></div><div class='line' id='LC734'><br/></div><div class='line' id='LC735'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Backbone</span><span class="p">.</span><span class="nx">View</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">remove</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC736'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC737'><br/></div><div class='line' id='LC738'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC739'><br/></div><div class='line' id='LC740'><br/></div><div class='line' id='LC741'><br/></div><div class='line' id='LC742'>&nbsp;&nbsp;<span class="c1">//========================================================================</span></div><div class='line' id='LC743'>&nbsp;&nbsp;<span class="c1">//EDITORS</span></div><div class='line' id='LC744'>&nbsp;&nbsp;<span class="c1">//========================================================================</span></div><div class='line' id='LC745'><br/></div><div class='line' id='LC746'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">editors</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC747'><br/></div><div class='line' id='LC748'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC749'><span class="cm">   * Base editor (interface). To be extended, not used directly</span></div><div class='line' id='LC750'><span class="cm">   *</span></div><div class='line' id='LC751'><span class="cm">   * @param {Object}  Options</span></div><div class='line' id='LC752'><span class="cm">   *      Optional:</span></div><div class='line' id='LC753'><span class="cm">   *         model   {Backbone.Model} : Use instead of value, and use commit().</span></div><div class='line' id='LC754'><span class="cm">   *         key     {String} : The model attribute key. Required when using &#39;model&#39;</span></div><div class='line' id='LC755'><span class="cm">   *         value   {String} : When not using a model. If neither provided, defaultValue will be used.</span></div><div class='line' id='LC756'><span class="cm">   *         schema  {Object} : May be required by some editors</span></div><div class='line' id='LC757'><span class="cm">   */</span></div><div class='line' id='LC758'>&nbsp;&nbsp;<span class="nx">editors</span><span class="p">.</span><span class="nx">Base</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">View</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span></div><div class='line' id='LC759'><br/></div><div class='line' id='LC760'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">defaultValue</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC761'><br/></div><div class='line' id='LC762'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">initialize</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC763'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">options</span> <span class="o">=</span> <span class="nx">options</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC764'><br/></div><div class='line' id='LC765'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">model</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC766'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">options</span><span class="p">.</span><span class="nx">key</span><span class="p">)</span> <span class="k">throw</span> <span class="s2">&quot;Missing option: &#39;key&#39;&quot;</span><span class="p">;</span></div><div class='line' id='LC767'><br/></div><div class='line' id='LC768'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">model</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">model</span><span class="p">;</span></div><div class='line' id='LC769'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">key</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">key</span><span class="p">;</span></div><div class='line' id='LC770'><br/></div><div class='line' id='LC771'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">value</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">model</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">key</span><span class="p">);</span></div><div class='line' id='LC772'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC773'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC774'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">value</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC775'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC776'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC777'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">value</span> <span class="o">===</span> <span class="kc">undefined</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">value</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">defaultValue</span><span class="p">;</span></div><div class='line' id='LC778'><br/></div><div class='line' id='LC779'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">form</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">form</span><span class="p">;</span></div><div class='line' id='LC780'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">schema</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">schema</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC781'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">validators</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">validators</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">schema</span><span class="p">.</span><span class="nx">validators</span><span class="p">;</span></div><div class='line' id='LC782'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC783'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">key</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;name&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">key</span><span class="p">);</span></div><div class='line' id='LC784'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC785'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Add custom CSS class names</span></div><div class='line' id='LC786'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">schema</span><span class="p">.</span><span class="nx">editorClass</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">schema</span><span class="p">.</span><span class="nx">editorClass</span><span class="p">);</span></div><div class='line' id='LC787'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC788'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Add custom attributes</span></div><div class='line' id='LC789'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">schema</span><span class="p">.</span><span class="nx">editorAttrs</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">schema</span><span class="p">.</span><span class="nx">editorAttrs</span><span class="p">);</span></div><div class='line' id='LC790'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC791'><br/></div><div class='line' id='LC792'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">getValue</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC793'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="s1">&#39;Not implemented. Extend and override this method.&#39;</span><span class="p">;</span></div><div class='line' id='LC794'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC795'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC796'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setValue</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC797'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="s1">&#39;Not implemented. Extend and override this method.&#39;</span><span class="p">;</span></div><div class='line' id='LC798'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC799'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC800'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC801'><span class="cm">     * Update the model with the current value</span></div><div class='line' id='LC802'><span class="cm">     * NOTE: The method is defined on the editors so that they can be used independently of fields</span></div><div class='line' id='LC803'><span class="cm">     *</span></div><div class='line' id='LC804'><span class="cm">     * @return {Mixed} error</span></div><div class='line' id='LC805'><span class="cm">     */</span></div><div class='line' id='LC806'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">commit</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC807'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">error</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">validate</span><span class="p">();</span></div><div class='line' id='LC808'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">error</span><span class="p">)</span> <span class="k">return</span> <span class="nx">error</span><span class="p">;</span></div><div class='line' id='LC809'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC810'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">model</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">key</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">getValue</span><span class="p">(),</span> <span class="p">{</span></div><div class='line' id='LC811'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">error</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">model</span><span class="p">,</span> <span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC812'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">error</span> <span class="o">=</span> <span class="nx">e</span><span class="p">;</span></div><div class='line' id='LC813'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC814'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC815'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC816'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">error</span><span class="p">)</span> <span class="k">return</span> <span class="nx">error</span><span class="p">;</span></div><div class='line' id='LC817'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC818'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC819'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC820'><span class="cm">     * Check validity</span></div><div class='line' id='LC821'><span class="cm">     * NOTE: The method is defined on the editors so that they can be used independently of fields</span></div><div class='line' id='LC822'><span class="cm">     * </span></div><div class='line' id='LC823'><span class="cm">     * @return {String}</span></div><div class='line' id='LC824'><span class="cm">     */</span></div><div class='line' id='LC825'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">validate</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC826'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$el</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">,</span></div><div class='line' id='LC827'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">error</span> <span class="o">=</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC828'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getValue</span><span class="p">(),</span></div><div class='line' id='LC829'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">formValues</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">form</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">form</span><span class="p">.</span><span class="nx">getValue</span><span class="p">()</span> <span class="o">:</span> <span class="p">{},</span></div><div class='line' id='LC830'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">validators</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">validators</span><span class="p">;</span></div><div class='line' id='LC831'><br/></div><div class='line' id='LC832'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">validators</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC833'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">validators</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">validator</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC834'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">error</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC835'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">error</span> <span class="o">=</span> <span class="nx">helpers</span><span class="p">.</span><span class="nx">getValidator</span><span class="p">(</span><span class="nx">validator</span><span class="p">)(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">formValues</span><span class="p">);</span></div><div class='line' id='LC836'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC837'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC838'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC839'><br/></div><div class='line' id='LC840'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">error</span><span class="p">;</span></div><div class='line' id='LC841'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC842'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC843'><br/></div><div class='line' id='LC844'><br/></div><div class='line' id='LC845'>&nbsp;&nbsp;<span class="c1">//TEXT</span></div><div class='line' id='LC846'>&nbsp;&nbsp;<span class="nx">editors</span><span class="p">.</span><span class="nx">Text</span> <span class="o">=</span> <span class="nx">editors</span><span class="p">.</span><span class="nx">Base</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span></div><div class='line' id='LC847'><br/></div><div class='line' id='LC848'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">tagName</span><span class="o">:</span> <span class="s1">&#39;input&#39;</span><span class="p">,</span></div><div class='line' id='LC849'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC850'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">defaultValue</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">,</span></div><div class='line' id='LC851'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC852'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">initialize</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC853'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">editors</span><span class="p">.</span><span class="nx">Base</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">initialize</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC854'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC855'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">schema</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">schema</span><span class="p">;</span></div><div class='line' id='LC856'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC857'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Allow customising text type (email, phone etc.) for HTML5 browsers</span></div><div class='line' id='LC858'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">type</span> <span class="o">=</span> <span class="s1">&#39;text&#39;</span><span class="p">;</span></div><div class='line' id='LC859'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC860'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">schema</span> <span class="o">&amp;&amp;</span> <span class="nx">schema</span><span class="p">.</span><span class="nx">editorAttrs</span> <span class="o">&amp;&amp;</span> <span class="nx">schema</span><span class="p">.</span><span class="nx">editorAttrs</span><span class="p">.</span><span class="nx">type</span><span class="p">)</span> <span class="nx">type</span> <span class="o">=</span> <span class="nx">schema</span><span class="p">.</span><span class="nx">editorAttrs</span><span class="p">.</span><span class="nx">type</span><span class="p">;</span></div><div class='line' id='LC861'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">schema</span> <span class="o">&amp;&amp;</span> <span class="nx">schema</span><span class="p">.</span><span class="nx">dataType</span><span class="p">)</span> <span class="nx">type</span> <span class="o">=</span> <span class="nx">schema</span><span class="p">.</span><span class="nx">dataType</span><span class="p">;</span></div><div class='line' id='LC862'><br/></div><div class='line' id='LC863'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;type&#39;</span><span class="p">,</span> <span class="nx">type</span><span class="p">);</span></div><div class='line' id='LC864'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC865'><br/></div><div class='line' id='LC866'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC867'><span class="cm">     * Adds the editor to the DOM</span></div><div class='line' id='LC868'><span class="cm">     */</span></div><div class='line' id='LC869'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">render</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC870'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">setValue</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC871'><br/></div><div class='line' id='LC872'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC873'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC874'><br/></div><div class='line' id='LC875'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC876'><span class="cm">     * Returns the current editor value</span></div><div class='line' id='LC877'><span class="cm">     * @return {String}</span></div><div class='line' id='LC878'><span class="cm">     */</span></div><div class='line' id='LC879'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">getValue</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC880'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">val</span><span class="p">();</span></div><div class='line' id='LC881'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC882'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC883'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC884'><span class="cm">     * Sets the value of the form element</span></div><div class='line' id='LC885'><span class="cm">     * @param {String}</span></div><div class='line' id='LC886'><span class="cm">     */</span></div><div class='line' id='LC887'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setValue</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span> </div><div class='line' id='LC888'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">val</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC889'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC890'><br/></div><div class='line' id='LC891'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC892'><br/></div><div class='line' id='LC893'><br/></div><div class='line' id='LC894'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC895'><span class="cm">   * NUMBER</span></div><div class='line' id='LC896'><span class="cm">   * Normal text input that only allows a number. Letters etc. are not entered</span></div><div class='line' id='LC897'><span class="cm">   */</span></div><div class='line' id='LC898'>&nbsp;&nbsp;<span class="nx">editors</span><span class="p">.</span><span class="nb">Number</span> <span class="o">=</span> <span class="nx">editors</span><span class="p">.</span><span class="nx">Text</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span></div><div class='line' id='LC899'><br/></div><div class='line' id='LC900'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">defaultValue</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC901'><br/></div><div class='line' id='LC902'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">events</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC903'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;keypress&#39;</span><span class="o">:</span> <span class="s1">&#39;onKeyPress&#39;</span></div><div class='line' id='LC904'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC905'><br/></div><div class='line' id='LC906'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC907'><span class="cm">     * Check value is numeric</span></div><div class='line' id='LC908'><span class="cm">     */</span></div><div class='line' id='LC909'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">onKeyPress</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span>        </div><div class='line' id='LC910'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">newVal</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">val</span><span class="p">()</span> <span class="o">+</span> <span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">keyCode</span><span class="p">);</span></div><div class='line' id='LC911'><br/></div><div class='line' id='LC912'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">numeric</span> <span class="o">=</span> <span class="sr">/^[0-9]*\.?[0-9]*?$/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">newVal</span><span class="p">);</span></div><div class='line' id='LC913'><br/></div><div class='line' id='LC914'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">numeric</span><span class="p">)</span> <span class="nx">event</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC915'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC916'><br/></div><div class='line' id='LC917'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">getValue</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>        </div><div class='line' id='LC918'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">value</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">val</span><span class="p">();</span></div><div class='line' id='LC919'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC920'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">value</span> <span class="o">===</span> <span class="s2">&quot;&quot;</span> <span class="o">?</span> <span class="kc">null</span> <span class="o">:</span> <span class="nb">parseFloat</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="mi">10</span><span class="p">);</span></div><div class='line' id='LC921'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC922'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC923'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setValue</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC924'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span> <span class="o">=</span> <span class="nx">value</span> <span class="o">===</span> <span class="kc">null</span> <span class="o">?</span> <span class="kc">null</span> <span class="o">:</span> <span class="nb">parseFloat</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="mi">10</span><span class="p">);</span></div><div class='line' id='LC925'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC926'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">editors</span><span class="p">.</span><span class="nx">Text</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">setValue</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC927'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC928'><br/></div><div class='line' id='LC929'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC930'><br/></div><div class='line' id='LC931'><br/></div><div class='line' id='LC932'>&nbsp;&nbsp;<span class="c1">//PASSWORD</span></div><div class='line' id='LC933'>&nbsp;&nbsp;<span class="nx">editors</span><span class="p">.</span><span class="nx">Password</span> <span class="o">=</span> <span class="nx">editors</span><span class="p">.</span><span class="nx">Text</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span></div><div class='line' id='LC934'><br/></div><div class='line' id='LC935'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">initialize</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC936'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">editors</span><span class="p">.</span><span class="nx">Text</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">initialize</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC937'><br/></div><div class='line' id='LC938'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;type&#39;</span><span class="p">,</span> <span class="s1">&#39;password&#39;</span><span class="p">);</span></div><div class='line' id='LC939'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC940'><br/></div><div class='line' id='LC941'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC942'><br/></div><div class='line' id='LC943'><br/></div><div class='line' id='LC944'>&nbsp;&nbsp;<span class="c1">//TEXTAREA</span></div><div class='line' id='LC945'>&nbsp;&nbsp;<span class="nx">editors</span><span class="p">.</span><span class="nx">TextArea</span> <span class="o">=</span> <span class="nx">editors</span><span class="p">.</span><span class="nx">Text</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span></div><div class='line' id='LC946'><br/></div><div class='line' id='LC947'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">tagName</span><span class="o">:</span> <span class="s1">&#39;textarea&#39;</span></div><div class='line' id='LC948'><br/></div><div class='line' id='LC949'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC950'>&nbsp;&nbsp;</div><div class='line' id='LC951'>&nbsp;&nbsp;</div><div class='line' id='LC952'>&nbsp;&nbsp;<span class="c1">//CHECKBOX</span></div><div class='line' id='LC953'>&nbsp;&nbsp;<span class="nx">editors</span><span class="p">.</span><span class="nx">Checkbox</span> <span class="o">=</span> <span class="nx">editors</span><span class="p">.</span><span class="nx">Base</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span></div><div class='line' id='LC954'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC955'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">defaultValue</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC956'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC957'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">tagName</span><span class="o">:</span> <span class="s1">&#39;input&#39;</span><span class="p">,</span></div><div class='line' id='LC958'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC959'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">initialize</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC960'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">editors</span><span class="p">.</span><span class="nx">Base</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">initialize</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC961'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC962'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;type&#39;</span><span class="p">,</span> <span class="s1">&#39;checkbox&#39;</span><span class="p">);</span></div><div class='line' id='LC963'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC964'><br/></div><div class='line' id='LC965'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC966'><span class="cm">     * Adds the editor to the DOM</span></div><div class='line' id='LC967'><span class="cm">     */</span></div><div class='line' id='LC968'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">render</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC969'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">setValue</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC970'><br/></div><div class='line' id='LC971'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC972'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC973'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC974'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">getValue</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC975'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;checked&#39;</span><span class="p">)</span> <span class="o">?</span> <span class="kc">true</span> <span class="o">:</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC976'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC977'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC978'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setValue</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC979'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC980'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;checked&#39;</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC981'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC982'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC983'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC984'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC985'>&nbsp;&nbsp;</div><div class='line' id='LC986'>&nbsp;&nbsp;</div><div class='line' id='LC987'>&nbsp;&nbsp;<span class="c1">//HIDDEN</span></div><div class='line' id='LC988'>&nbsp;&nbsp;<span class="nx">editors</span><span class="p">.</span><span class="nx">Hidden</span> <span class="o">=</span> <span class="nx">editors</span><span class="p">.</span><span class="nx">Base</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span></div><div class='line' id='LC989'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC990'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">defaultValue</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">,</span></div><div class='line' id='LC991'><br/></div><div class='line' id='LC992'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">initialize</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC993'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">editors</span><span class="p">.</span><span class="nx">Text</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">initialize</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC994'><br/></div><div class='line' id='LC995'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;type&#39;</span><span class="p">,</span> <span class="s1">&#39;hidden&#39;</span><span class="p">);</span></div><div class='line' id='LC996'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC997'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC998'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">getValue</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC999'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC1000'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1001'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC1002'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setValue</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1003'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">value</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC1004'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1005'><br/></div><div class='line' id='LC1006'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1007'><br/></div><div class='line' id='LC1008'><br/></div><div class='line' id='LC1009'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1010'><span class="cm">   * SELECT</span></div><div class='line' id='LC1011'><span class="cm">   * </span></div><div class='line' id='LC1012'><span class="cm">   * Renders a &lt;select&gt; with given options</span></div><div class='line' id='LC1013'><span class="cm">   *</span></div><div class='line' id='LC1014'><span class="cm">   * Requires an &#39;options&#39; value on the schema.</span></div><div class='line' id='LC1015'><span class="cm">   *  Can be an array of options, a function that calls back with the array of options, a string of HTML</span></div><div class='line' id='LC1016'><span class="cm">   *  or a Backbone collection. If a collection, the models must implement a toString() method</span></div><div class='line' id='LC1017'><span class="cm">   */</span></div><div class='line' id='LC1018'>&nbsp;&nbsp;<span class="nx">editors</span><span class="p">.</span><span class="nx">Select</span> <span class="o">=</span> <span class="nx">editors</span><span class="p">.</span><span class="nx">Base</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span></div><div class='line' id='LC1019'><br/></div><div class='line' id='LC1020'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">tagName</span><span class="o">:</span> <span class="s1">&#39;select&#39;</span><span class="p">,</span></div><div class='line' id='LC1021'><br/></div><div class='line' id='LC1022'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">initialize</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1023'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">editors</span><span class="p">.</span><span class="nx">Base</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">initialize</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC1024'><br/></div><div class='line' id='LC1025'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">schema</span> <span class="o">||</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">schema</span><span class="p">.</span><span class="nx">options</span><span class="p">)</span> <span class="k">throw</span> <span class="s2">&quot;Missing required &#39;schema.options&#39;&quot;</span><span class="p">;</span></div><div class='line' id='LC1026'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1027'><br/></div><div class='line' id='LC1028'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">render</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1029'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">options</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">schema</span><span class="p">.</span><span class="nx">options</span><span class="p">,</span></div><div class='line' id='LC1030'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1031'><br/></div><div class='line' id='LC1032'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//If a collection was passed, check if it needs fetching</span></div><div class='line' id='LC1033'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span> <span class="k">instanceof</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Collection</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1034'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">collection</span> <span class="o">=</span> <span class="nx">options</span><span class="p">;</span></div><div class='line' id='LC1035'><br/></div><div class='line' id='LC1036'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Don&#39;t do the fetch if it&#39;s already populated</span></div><div class='line' id='LC1037'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">collection</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1038'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">renderOptions</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC1039'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1040'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">collection</span><span class="p">.</span><span class="nx">fetch</span><span class="p">({</span></div><div class='line' id='LC1041'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">success</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">collection</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1042'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">renderOptions</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC1043'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1044'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1045'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1046'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1047'><br/></div><div class='line' id='LC1048'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//If a function was passed, run it to get the options</span></div><div class='line' id='LC1049'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">options</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC1050'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">result</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1051'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">renderOptions</span><span class="p">(</span><span class="nx">result</span><span class="p">);</span></div><div class='line' id='LC1052'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1053'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1054'><br/></div><div class='line' id='LC1055'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Otherwise, ready to go straight to renderOptions</span></div><div class='line' id='LC1056'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1057'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">renderOptions</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC1058'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1059'><br/></div><div class='line' id='LC1060'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1061'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1062'><br/></div><div class='line' id='LC1063'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1064'><span class="cm">     * Adds the &lt;option&gt; html to the DOM</span></div><div class='line' id='LC1065'><span class="cm">     * @param {Mixed}   Options as a simple array e.g. [&#39;option1&#39;, &#39;option2&#39;]</span></div><div class='line' id='LC1066'><span class="cm">     *                      or as an array of objects e.g. [{val: 543, label: &#39;Title for object 543&#39;}]</span></div><div class='line' id='LC1067'><span class="cm">     *                      or as a string of &lt;option&gt; HTML to insert into the &lt;select&gt;</span></div><div class='line' id='LC1068'><span class="cm">     */</span></div><div class='line' id='LC1069'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">renderOptions</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1070'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$select</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">,</span></div><div class='line' id='LC1071'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">html</span><span class="p">;</span></div><div class='line' id='LC1072'><br/></div><div class='line' id='LC1073'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Accept string of HTML</span></div><div class='line' id='LC1074'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isString</span><span class="p">(</span><span class="nx">options</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC1075'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">html</span> <span class="o">=</span> <span class="nx">options</span><span class="p">;</span></div><div class='line' id='LC1076'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1077'><br/></div><div class='line' id='LC1078'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Or array</span></div><div class='line' id='LC1079'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">options</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC1080'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">html</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_arrayToHtml</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC1081'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1082'><br/></div><div class='line' id='LC1083'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Or Backbone collection</span></div><div class='line' id='LC1084'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">options</span> <span class="k">instanceof</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Collection</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1085'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">html</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_collectionToHtml</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span></div><div class='line' id='LC1086'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1087'><br/></div><div class='line' id='LC1088'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Insert options</span></div><div class='line' id='LC1089'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$select</span><span class="p">.</span><span class="nx">html</span><span class="p">(</span><span class="nx">html</span><span class="p">);</span></div><div class='line' id='LC1090'><br/></div><div class='line' id='LC1091'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Select correct option</span></div><div class='line' id='LC1092'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">setValue</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC1093'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1094'><br/></div><div class='line' id='LC1095'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">getValue</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1096'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">val</span><span class="p">();</span></div><div class='line' id='LC1097'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1098'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC1099'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setValue</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1100'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">val</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC1101'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1102'><br/></div><div class='line' id='LC1103'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1104'><span class="cm">     * Transforms a collection into HTML ready to use in the renderOptions method</span></div><div class='line' id='LC1105'><span class="cm">     * @param {Backbone.Collection} </span></div><div class='line' id='LC1106'><span class="cm">     * @return {String}</span></div><div class='line' id='LC1107'><span class="cm">     */</span></div><div class='line' id='LC1108'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_collectionToHtml</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">collection</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1109'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Convert collection to array first</span></div><div class='line' id='LC1110'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">array</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC1111'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">collection</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">model</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1112'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">array</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span> <span class="nx">val</span><span class="o">:</span> <span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">,</span> <span class="nx">label</span><span class="o">:</span> <span class="nx">model</span><span class="p">.</span><span class="nx">toString</span><span class="p">()</span> <span class="p">});</span></div><div class='line' id='LC1113'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1114'><br/></div><div class='line' id='LC1115'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Now convert to HTML</span></div><div class='line' id='LC1116'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">html</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_arrayToHtml</span><span class="p">(</span><span class="nx">array</span><span class="p">);</span></div><div class='line' id='LC1117'><br/></div><div class='line' id='LC1118'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">html</span><span class="p">;</span></div><div class='line' id='LC1119'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1120'><br/></div><div class='line' id='LC1121'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1122'><span class="cm">     * Create the &lt;option&gt; HTML</span></div><div class='line' id='LC1123'><span class="cm">     * @param {Array}   Options as a simple array e.g. [&#39;option1&#39;, &#39;option2&#39;]</span></div><div class='line' id='LC1124'><span class="cm">     *                      or as an array of objects e.g. [{val: 543, label: &#39;Title for object 543&#39;}]</span></div><div class='line' id='LC1125'><span class="cm">     * @return {String} HTML</span></div><div class='line' id='LC1126'><span class="cm">     */</span></div><div class='line' id='LC1127'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_arrayToHtml</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">array</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1128'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">html</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC1129'><br/></div><div class='line' id='LC1130'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Generate HTML</span></div><div class='line' id='LC1131'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">option</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1132'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isObject</span><span class="p">(</span><span class="nx">option</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC1133'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">val</span> <span class="o">=</span> <span class="nx">option</span><span class="p">.</span><span class="nx">val</span> <span class="o">?</span> <span class="nx">option</span><span class="p">.</span><span class="nx">val</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC1134'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">html</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="s1">&#39;&lt;option value=&quot;&#39;</span><span class="o">+</span><span class="nx">val</span><span class="o">+</span><span class="s1">&#39;&quot;&gt;&#39;</span><span class="o">+</span><span class="nx">option</span><span class="p">.</span><span class="nx">label</span><span class="o">+</span><span class="s1">&#39;&lt;/option&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC1135'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1136'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1137'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">html</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="s1">&#39;&lt;option&gt;&#39;</span><span class="o">+</span><span class="nx">option</span><span class="o">+</span><span class="s1">&#39;&lt;/option&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC1138'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1139'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1140'><br/></div><div class='line' id='LC1141'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">html</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC1142'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1143'><br/></div><div class='line' id='LC1144'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1145'><br/></div><div class='line' id='LC1146'><br/></div><div class='line' id='LC1147'><br/></div><div class='line' id='LC1148'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1149'><span class="cm">   * RADIO</span></div><div class='line' id='LC1150'><span class="cm">   * </span></div><div class='line' id='LC1151'><span class="cm">   * Renders a &lt;ul&gt; with given options represented as &lt;li&gt; objects containing radio buttons</span></div><div class='line' id='LC1152'><span class="cm">   *</span></div><div class='line' id='LC1153'><span class="cm">   * Requires an &#39;options&#39; value on the schema.</span></div><div class='line' id='LC1154'><span class="cm">   *  Can be an array of options, a function that calls back with the array of options, a string of HTML</span></div><div class='line' id='LC1155'><span class="cm">   *  or a Backbone collection. If a collection, the models must implement a toString() method</span></div><div class='line' id='LC1156'><span class="cm">   */</span></div><div class='line' id='LC1157'>&nbsp;&nbsp;<span class="nx">editors</span><span class="p">.</span><span class="nx">Radio</span> <span class="o">=</span> <span class="nx">editors</span><span class="p">.</span><span class="nx">Select</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span></div><div class='line' id='LC1158'><br/></div><div class='line' id='LC1159'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">tagName</span><span class="o">:</span> <span class="s1">&#39;ul&#39;</span><span class="p">,</span></div><div class='line' id='LC1160'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">className</span><span class="o">:</span> <span class="s1">&#39;bbf-radio&#39;</span><span class="p">,</span></div><div class='line' id='LC1161'><br/></div><div class='line' id='LC1162'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">getValue</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1163'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;input[type=radio]:checked&#39;</span><span class="p">).</span><span class="nx">val</span><span class="p">();</span></div><div class='line' id='LC1164'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1165'><br/></div><div class='line' id='LC1166'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setValue</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1167'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;input[type=radio][value=&#39;</span><span class="o">+</span><span class="nx">value</span><span class="o">+</span><span class="s1">&#39;]&#39;</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;checked&#39;</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC1168'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1169'><br/></div><div class='line' id='LC1170'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1171'><span class="cm">     * Create the radio list HTML</span></div><div class='line' id='LC1172'><span class="cm">     * @param {Array}   Options as a simple array e.g. [&#39;option1&#39;, &#39;option2&#39;]</span></div><div class='line' id='LC1173'><span class="cm">     *                      or as an array of objects e.g. [{val: 543, label: &#39;Title for object 543&#39;}]</span></div><div class='line' id='LC1174'><span class="cm">     * @return {String} HTML</span></div><div class='line' id='LC1175'><span class="cm">     */</span></div><div class='line' id='LC1176'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_arrayToHtml</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">array</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1177'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">html</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC1178'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1179'><br/></div><div class='line' id='LC1180'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">option</span><span class="p">,</span> <span class="nx">index</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1181'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">itemHtml</span> <span class="o">=</span> <span class="s1">&#39;&lt;li&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC1182'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isObject</span><span class="p">(</span><span class="nx">option</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC1183'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">val</span> <span class="o">=</span> <span class="nx">option</span><span class="p">.</span><span class="nx">val</span> <span class="o">?</span> <span class="nx">option</span><span class="p">.</span><span class="nx">val</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC1184'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">itemHtml</span> <span class="o">+=</span> <span class="p">(</span><span class="s1">&#39;&lt;input type=&quot;radio&quot; name=&quot;&#39;</span><span class="o">+</span><span class="nx">self</span><span class="p">.</span><span class="nx">id</span><span class="o">+</span><span class="s1">&#39;&quot; value=&quot;&#39;</span><span class="o">+</span><span class="nx">val</span><span class="o">+</span><span class="s1">&#39;&quot; id=&quot;&#39;</span><span class="o">+</span><span class="nx">self</span><span class="p">.</span><span class="nx">id</span><span class="o">+</span><span class="s1">&#39;-&#39;</span><span class="o">+</span><span class="nx">index</span><span class="o">+</span><span class="s1">&#39;&quot; /&gt;&#39;</span><span class="p">)</span></div><div class='line' id='LC1185'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">itemHtml</span> <span class="o">+=</span> <span class="p">(</span><span class="s1">&#39;&lt;label for=&quot;&#39;</span><span class="o">+</span><span class="nx">self</span><span class="p">.</span><span class="nx">id</span><span class="o">+</span><span class="s1">&#39;-&#39;</span><span class="o">+</span><span class="nx">index</span><span class="o">+</span><span class="s1">&#39;&quot;&gt;&#39;</span><span class="o">+</span><span class="nx">option</span><span class="p">.</span><span class="nx">label</span><span class="o">+</span><span class="s1">&#39;&lt;/label&gt;&#39;</span><span class="p">)</span></div><div class='line' id='LC1186'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1187'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1188'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">itemHtml</span> <span class="o">+=</span> <span class="p">(</span><span class="s1">&#39;&lt;input type=&quot;radio&quot; name=&quot;&#39;</span><span class="o">+</span><span class="nx">self</span><span class="p">.</span><span class="nx">id</span><span class="o">+</span><span class="s1">&#39;&quot; value=&quot;&#39;</span><span class="o">+</span><span class="nx">option</span><span class="o">+</span><span class="s1">&#39;&quot; id=&quot;&#39;</span><span class="o">+</span><span class="nx">self</span><span class="p">.</span><span class="nx">id</span><span class="o">+</span><span class="s1">&#39;-&#39;</span><span class="o">+</span><span class="nx">index</span><span class="o">+</span><span class="s1">&#39;&quot; /&gt;&#39;</span><span class="p">)</span></div><div class='line' id='LC1189'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">itemHtml</span> <span class="o">+=</span> <span class="p">(</span><span class="s1">&#39;&lt;label for=&quot;&#39;</span><span class="o">+</span><span class="nx">self</span><span class="p">.</span><span class="nx">id</span><span class="o">+</span><span class="s1">&#39;-&#39;</span><span class="o">+</span><span class="nx">index</span><span class="o">+</span><span class="s1">&#39;&quot;&gt;&#39;</span><span class="o">+</span><span class="nx">option</span><span class="o">+</span><span class="s1">&#39;&lt;/label&gt;&#39;</span><span class="p">)</span></div><div class='line' id='LC1190'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1191'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">itemHtml</span> <span class="o">+=</span> <span class="s1">&#39;&lt;/li&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC1192'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">html</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">itemHtml</span><span class="p">);</span></div><div class='line' id='LC1193'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1194'><br/></div><div class='line' id='LC1195'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">html</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC1196'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1197'><br/></div><div class='line' id='LC1198'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1199'><br/></div><div class='line' id='LC1200'><br/></div><div class='line' id='LC1201'><br/></div><div class='line' id='LC1202'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1203'><span class="cm">   * CHECKBOXES</span></div><div class='line' id='LC1204'><span class="cm">   * Renders a &lt;ul&gt; with given options represented as &lt;li&gt; objects containing checkboxes</span></div><div class='line' id='LC1205'><span class="cm">   *</span></div><div class='line' id='LC1206'><span class="cm">   * Requires an &#39;options&#39; value on the schema.</span></div><div class='line' id='LC1207'><span class="cm">   *  Can be an array of options, a function that calls back with the array of options, a string of HTML</span></div><div class='line' id='LC1208'><span class="cm">   *  or a Backbone collection. If a collection, the models must implement a toString() method</span></div><div class='line' id='LC1209'><span class="cm">   */</span></div><div class='line' id='LC1210'>&nbsp;&nbsp;<span class="nx">editors</span><span class="p">.</span><span class="nx">Checkboxes</span> <span class="o">=</span> <span class="nx">editors</span><span class="p">.</span><span class="nx">Select</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span></div><div class='line' id='LC1211'><br/></div><div class='line' id='LC1212'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">tagName</span><span class="o">:</span> <span class="s1">&#39;ul&#39;</span><span class="p">,</span></div><div class='line' id='LC1213'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">className</span><span class="o">:</span> <span class="s1">&#39;bbf-checkboxes&#39;</span><span class="p">,</span></div><div class='line' id='LC1214'><br/></div><div class='line' id='LC1215'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">getValue</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1216'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">values</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC1217'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;input[type=checkbox]:checked&#39;</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1218'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">values</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">val</span><span class="p">());</span></div><div class='line' id='LC1219'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1220'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">values</span><span class="p">;</span></div><div class='line' id='LC1221'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1222'><br/></div><div class='line' id='LC1223'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setValue</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1224'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1225'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1226'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;input[type=checkbox][value=&quot;&#39;</span><span class="o">+</span><span class="nx">val</span><span class="o">+</span><span class="s1">&#39;&quot;]&#39;</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;checked&#39;</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC1227'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1228'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1229'><br/></div><div class='line' id='LC1230'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1231'><span class="cm">     * Create the checkbox list HTML</span></div><div class='line' id='LC1232'><span class="cm">     * @param {Array}   Options as a simple array e.g. [&#39;option1&#39;, &#39;option2&#39;]</span></div><div class='line' id='LC1233'><span class="cm">     *                      or as an array of objects e.g. [{val: 543, label: &#39;Title for object 543&#39;}]</span></div><div class='line' id='LC1234'><span class="cm">     * @return {String} HTML</span></div><div class='line' id='LC1235'><span class="cm">     */</span></div><div class='line' id='LC1236'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_arrayToHtml</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">array</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1237'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">html</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC1238'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1239'><br/></div><div class='line' id='LC1240'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">option</span><span class="p">,</span> <span class="nx">index</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1241'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">itemHtml</span> <span class="o">=</span> <span class="s1">&#39;&lt;li&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC1242'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isObject</span><span class="p">(</span><span class="nx">option</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC1243'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">val</span> <span class="o">=</span> <span class="nx">option</span><span class="p">.</span><span class="nx">val</span> <span class="o">?</span> <span class="nx">option</span><span class="p">.</span><span class="nx">val</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC1244'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">itemHtml</span> <span class="o">+=</span> <span class="p">(</span><span class="s1">&#39;&lt;input type=&quot;checkbox&quot; name=&quot;&#39;</span><span class="o">+</span><span class="nx">self</span><span class="p">.</span><span class="nx">id</span><span class="o">+</span><span class="s1">&#39;&quot; value=&quot;&#39;</span><span class="o">+</span><span class="nx">val</span><span class="o">+</span><span class="s1">&#39;&quot; id=&quot;&#39;</span><span class="o">+</span><span class="nx">self</span><span class="p">.</span><span class="nx">id</span><span class="o">+</span><span class="s1">&#39;-&#39;</span><span class="o">+</span><span class="nx">index</span><span class="o">+</span><span class="s1">&#39;&quot; /&gt;&#39;</span><span class="p">)</span></div><div class='line' id='LC1245'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">itemHtml</span> <span class="o">+=</span> <span class="p">(</span><span class="s1">&#39;&lt;label for=&quot;&#39;</span><span class="o">+</span><span class="nx">self</span><span class="p">.</span><span class="nx">id</span><span class="o">+</span><span class="s1">&#39;-&#39;</span><span class="o">+</span><span class="nx">index</span><span class="o">+</span><span class="s1">&#39;&quot;&gt;&#39;</span><span class="o">+</span><span class="nx">option</span><span class="p">.</span><span class="nx">label</span><span class="o">+</span><span class="s1">&#39;&lt;/label&gt;&#39;</span><span class="p">)</span></div><div class='line' id='LC1246'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1247'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1248'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">itemHtml</span> <span class="o">+=</span> <span class="p">(</span><span class="s1">&#39;&lt;input type=&quot;checkbox&quot; name=&quot;&#39;</span><span class="o">+</span><span class="nx">self</span><span class="p">.</span><span class="nx">id</span><span class="o">+</span><span class="s1">&#39;&quot; value=&quot;&#39;</span><span class="o">+</span><span class="nx">option</span><span class="o">+</span><span class="s1">&#39;&quot; id=&quot;&#39;</span><span class="o">+</span><span class="nx">self</span><span class="p">.</span><span class="nx">id</span><span class="o">+</span><span class="s1">&#39;-&#39;</span><span class="o">+</span><span class="nx">index</span><span class="o">+</span><span class="s1">&#39;&quot; /&gt;&#39;</span><span class="p">)</span></div><div class='line' id='LC1249'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">itemHtml</span> <span class="o">+=</span> <span class="p">(</span><span class="s1">&#39;&lt;label for=&quot;&#39;</span><span class="o">+</span><span class="nx">self</span><span class="p">.</span><span class="nx">id</span><span class="o">+</span><span class="s1">&#39;-&#39;</span><span class="o">+</span><span class="nx">index</span><span class="o">+</span><span class="s1">&#39;&quot;&gt;&#39;</span><span class="o">+</span><span class="nx">option</span><span class="o">+</span><span class="s1">&#39;&lt;/label&gt;&#39;</span><span class="p">)</span></div><div class='line' id='LC1250'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1251'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">itemHtml</span> <span class="o">+=</span> <span class="s1">&#39;&lt;/li&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC1252'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">html</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">itemHtml</span><span class="p">);</span></div><div class='line' id='LC1253'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1254'><br/></div><div class='line' id='LC1255'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">html</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC1256'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1257'><br/></div><div class='line' id='LC1258'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1259'><br/></div><div class='line' id='LC1260'><br/></div><div class='line' id='LC1261'><br/></div><div class='line' id='LC1262'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1263'><span class="cm">   * OBJECT</span></div><div class='line' id='LC1264'><span class="cm">   * </span></div><div class='line' id='LC1265'><span class="cm">   * Creates a child form. For editing Javascript objects</span></div><div class='line' id='LC1266'><span class="cm">   * </span></div><div class='line' id='LC1267'><span class="cm">   * Special options:</span></div><div class='line' id='LC1268'><span class="cm">   *   schema.subSchema:    Subschema for object.</span></div><div class='line' id='LC1269'><span class="cm">   *   idPrefix, </span></div><div class='line' id='LC1270'><span class="cm">   */</span></div><div class='line' id='LC1271'>&nbsp;&nbsp;<span class="nx">editors</span><span class="p">.</span><span class="nb">Object</span> <span class="o">=</span> <span class="nx">editors</span><span class="p">.</span><span class="nx">Base</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span></div><div class='line' id='LC1272'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Prevent error classes being set on the main control; they are internally on the individual fields</span></div><div class='line' id='LC1273'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">hasNestedForm</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC1274'><br/></div><div class='line' id='LC1275'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">className</span><span class="o">:</span> <span class="s1">&#39;bbf-object&#39;</span><span class="p">,</span></div><div class='line' id='LC1276'><br/></div><div class='line' id='LC1277'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">defaultValue</span><span class="o">:</span> <span class="p">{},</span></div><div class='line' id='LC1278'><br/></div><div class='line' id='LC1279'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">initialize</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1280'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">editors</span><span class="p">.</span><span class="nx">Base</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">initialize</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC1281'><br/></div><div class='line' id='LC1282'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">schema</span><span class="p">.</span><span class="nx">subSchema</span><span class="p">)</span></div><div class='line' id='LC1283'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="s2">&quot;Missing required &#39;schema.subSchema&#39; option for Object editor&quot;</span><span class="p">;</span></div><div class='line' id='LC1284'><br/></div><div class='line' id='LC1285'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">idPrefix</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">idPrefix</span> <span class="o">||</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC1286'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1287'><br/></div><div class='line' id='LC1288'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">render</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1289'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$el</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">,</span></div><div class='line' id='LC1290'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">value</span> <span class="o">||</span> <span class="p">{},</span></div><div class='line' id='LC1291'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">key</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">key</span><span class="p">,</span></div><div class='line' id='LC1292'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">schema</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">schema</span><span class="p">,</span></div><div class='line' id='LC1293'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">objSchema</span> <span class="o">=</span> <span class="nx">schema</span><span class="p">.</span><span class="nx">subSchema</span><span class="p">;</span></div><div class='line' id='LC1294'><br/></div><div class='line' id='LC1295'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">form</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Form</span><span class="p">({</span></div><div class='line' id='LC1296'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">schema</span><span class="o">:</span> <span class="nx">objSchema</span><span class="p">,</span></div><div class='line' id='LC1297'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span><span class="o">:</span> <span class="nx">data</span><span class="p">,</span></div><div class='line' id='LC1298'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">idPrefix</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">idPrefix</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">key</span> <span class="o">+</span> <span class="s1">&#39;_&#39;</span></div><div class='line' id='LC1299'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1300'><br/></div><div class='line' id='LC1301'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Render form</span></div><div class='line' id='LC1302'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$el</span><span class="p">.</span><span class="nx">html</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">form</span><span class="p">.</span><span class="nx">render</span><span class="p">().</span><span class="nx">el</span><span class="p">);</span></div><div class='line' id='LC1303'><br/></div><div class='line' id='LC1304'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1305'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1306'><br/></div><div class='line' id='LC1307'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">getValue</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1308'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">form</span><span class="p">.</span><span class="nx">getValue</span><span class="p">();</span></div><div class='line' id='LC1309'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1310'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC1311'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setValue</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1312'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">value</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC1313'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC1314'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">render</span><span class="p">();</span></div><div class='line' id='LC1315'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1316'><br/></div><div class='line' id='LC1317'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">remove</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1318'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">form</span><span class="p">.</span><span class="nx">remove</span><span class="p">();</span></div><div class='line' id='LC1319'><br/></div><div class='line' id='LC1320'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Backbone</span><span class="p">.</span><span class="nx">View</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">remove</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC1321'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1322'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC1323'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">validate</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1324'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">form</span><span class="p">.</span><span class="nx">validate</span><span class="p">();</span></div><div class='line' id='LC1325'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1326'><br/></div><div class='line' id='LC1327'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1328'><br/></div><div class='line' id='LC1329'><br/></div><div class='line' id='LC1330'><br/></div><div class='line' id='LC1331'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1332'><span class="cm">   * NESTED MODEL</span></div><div class='line' id='LC1333'><span class="cm">   * </span></div><div class='line' id='LC1334'><span class="cm">   * Creates a child form. For editing nested Backbone models</span></div><div class='line' id='LC1335'><span class="cm">   * </span></div><div class='line' id='LC1336'><span class="cm">   * Special options:</span></div><div class='line' id='LC1337'><span class="cm">   *   schema.model:   Embedded model constructor</span></div><div class='line' id='LC1338'><span class="cm">   */</span></div><div class='line' id='LC1339'>&nbsp;&nbsp;<span class="nx">editors</span><span class="p">.</span><span class="nx">NestedModel</span> <span class="o">=</span> <span class="nx">editors</span><span class="p">.</span><span class="nb">Object</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span></div><div class='line' id='LC1340'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">initialize</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1341'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">editors</span><span class="p">.</span><span class="nx">Base</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">initialize</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC1342'><br/></div><div class='line' id='LC1343'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">options</span><span class="p">.</span><span class="nx">schema</span><span class="p">.</span><span class="nx">model</span><span class="p">)</span></div><div class='line' id='LC1344'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="s1">&#39;Missing required &quot;schema.model&quot; option for NestedModel editor&#39;</span><span class="p">;</span></div><div class='line' id='LC1345'><br/></div><div class='line' id='LC1346'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">idPrefix</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">idPrefix</span> <span class="o">||</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC1347'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1348'><br/></div><div class='line' id='LC1349'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">render</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1350'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">value</span> <span class="o">||</span> <span class="p">{},</span></div><div class='line' id='LC1351'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">key</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">key</span><span class="p">,</span></div><div class='line' id='LC1352'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nestedModel</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">schema</span><span class="p">.</span><span class="nx">model</span><span class="p">,</span></div><div class='line' id='LC1353'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nestedModelSchema</span> <span class="o">=</span> <span class="p">(</span><span class="nx">nestedModel</span><span class="p">).</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">schema</span><span class="p">;</span></div><div class='line' id='LC1354'><br/></div><div class='line' id='LC1355'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">form</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Form</span><span class="p">({</span></div><div class='line' id='LC1356'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">schema</span><span class="o">:</span> <span class="nx">nestedModelSchema</span><span class="p">,</span></div><div class='line' id='LC1357'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">model</span><span class="o">:</span> <span class="k">new</span> <span class="nx">nestedModel</span><span class="p">(</span><span class="nx">data</span><span class="p">),</span></div><div class='line' id='LC1358'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">idPrefix</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">idPrefix</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">key</span> <span class="o">+</span> <span class="s1">&#39;_&#39;</span></div><div class='line' id='LC1359'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1360'><br/></div><div class='line' id='LC1361'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Render form</span></div><div class='line' id='LC1362'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">html</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">form</span><span class="p">.</span><span class="nx">render</span><span class="p">().</span><span class="nx">el</span><span class="p">);</span></div><div class='line' id='LC1363'><br/></div><div class='line' id='LC1364'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1365'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1366'><br/></div><div class='line' id='LC1367'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1368'><span class="cm">     * Update the embedded model, checking for nested validation errors and pass them up</span></div><div class='line' id='LC1369'><span class="cm">     * Then update the main model if all OK</span></div><div class='line' id='LC1370'><span class="cm">     *</span></div><div class='line' id='LC1371'><span class="cm">     * @return {Error|null} Validation error or null</span></div><div class='line' id='LC1372'><span class="cm">     */</span></div><div class='line' id='LC1373'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">commit</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1374'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">error</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">form</span><span class="p">.</span><span class="nx">commit</span><span class="p">();</span></div><div class='line' id='LC1375'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">error</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1376'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;error&#39;</span><span class="p">);</span></div><div class='line' id='LC1377'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">error</span><span class="p">;</span></div><div class='line' id='LC1378'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1379'><br/></div><div class='line' id='LC1380'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">editors</span><span class="p">.</span><span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">commit</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC1381'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1382'><br/></div><div class='line' id='LC1383'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1384'>&nbsp;&nbsp;</div><div class='line' id='LC1385'>&nbsp;&nbsp;</div><div class='line' id='LC1386'>&nbsp;&nbsp;<span class="c1">//Exports</span></div><div class='line' id='LC1387'>&nbsp;&nbsp;<span class="nx">Form</span><span class="p">.</span><span class="nx">helpers</span> <span class="o">=</span> <span class="nx">helpers</span><span class="p">;</span></div><div class='line' id='LC1388'>&nbsp;&nbsp;<span class="nx">Form</span><span class="p">.</span><span class="nx">Field</span> <span class="o">=</span> <span class="nx">Field</span><span class="p">;</span></div><div class='line' id='LC1389'>&nbsp;&nbsp;<span class="nx">Form</span><span class="p">.</span><span class="nx">editors</span> <span class="o">=</span> <span class="nx">editors</span><span class="p">;</span></div><div class='line' id='LC1390'>&nbsp;&nbsp;<span class="nx">Form</span><span class="p">.</span><span class="nx">validators</span> <span class="o">=</span> <span class="nx">validators</span><span class="p">;</span></div><div class='line' id='LC1391'>&nbsp;&nbsp;<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Form</span> <span class="o">=</span> <span class="nx">Form</span><span class="p">;</span></div><div class='line' id='LC1392'>&nbsp;&nbsp;</div><div class='line' id='LC1393'>&nbsp;&nbsp;<span class="c1">//Make default templates active</span></div><div class='line' id='LC1394'>&nbsp;&nbsp;<span class="nx">helpers</span><span class="p">.</span><span class="nx">setTemplates</span><span class="p">(</span><span class="nx">templates</span><span class="p">,</span> <span class="nx">classNames</span><span class="p">);</span></div><div class='line' id='LC1395'>&nbsp;&nbsp;</div><div class='line' id='LC1396'>&nbsp;&nbsp;<span class="c1">//For use in NodeJS</span></div><div class='line' id='LC1397'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">module</span> <span class="o">!=</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span> <span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">Form</span></div><div class='line' id='LC1398'><br/></div><div class='line' id='LC1399'><span class="p">}(</span><span class="nx">jQuery</span><span class="p">));</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>
      </div>
    </div>

  </div>

<div class="frame frame-loading large-loading-area" style="display:none;" data-tree-list-url="/powmedia/backbone-forms/tree-list/e66960e44c6c246908e5543ef259363a93625790" data-blob-url-prefix="/powmedia/backbone-forms/blob/e66960e44c6c246908e5543ef259363a93625790">
  <img src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-64.gif?1329872007" height="64" width="64">
</div>

      </div>
      <div class="context-overlay"></div>
    </div>


      <!-- footer -->
      <div id="footer" >
        
  <div class="upper_footer">
     <div class="container clearfix">

       <!--[if IE]><h4 id="blacktocat_ie">GitHub Links</h4><![endif]-->
       <![if !IE]><h4 id="blacktocat">GitHub Links</h4><![endif]>

       <ul class="footer_nav">
         <h4>GitHub</h4>
         <li><a href="https://github.com/about">About</a></li>
         <li><a href="https://github.com/blog">Blog</a></li>
         <li><a href="https://github.com/features">Features</a></li>
         <li><a href="https://github.com/contact">Contact &amp; Support</a></li>
         <li><a href="https://github.com/training">Training</a></li>
         <li><a href="http://enterprise.github.com/">GitHub Enterprise</a></li>
         <li><a href="http://status.github.com/">Site Status</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Tools</h4>
         <li><a href="http://get.gaug.es/">Gauges: Analyze web traffic</a></li>
         <li><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></li>
         <li><a href="https://gist.github.com">Gist: Code snippets</a></li>
         <li><a href="http://mac.github.com/">GitHub for Mac</a></li>
         <li><a href="http://mobile.github.com/">Issues for iPhone</a></li>
         <li><a href="http://jobs.github.com/">Job Board</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Extras</h4>
         <li><a href="http://shop.github.com/">GitHub Shop</a></li>
         <li><a href="http://octodex.github.com/">The Octodex</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Documentation</h4>
         <li><a href="http://help.github.com/">GitHub Help</a></li>
         <li><a href="http://developer.github.com/">Developer API</a></li>
         <li><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></li>
         <li><a href="http://pages.github.com/">GitHub Pages</a></li>
       </ul>

     </div><!-- /.site -->
  </div><!-- /.upper_footer -->

<div class="lower_footer">
  <div class="container clearfix">
    <!--[if IE]><div id="legal_ie"><![endif]-->
    <![if !IE]><div id="legal"><![endif]>
      <ul>
          <li><a href="https://github.com/site/terms">Terms of Service</a></li>
          <li><a href="https://github.com/site/privacy">Privacy</a></li>
          <li><a href="https://github.com/security">Security</a></li>
      </ul>

      <p>&copy; 2012 <span title="0.11868s from fe9.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
    </div><!-- /#legal or /#legal_ie-->

      <div class="sponsor">
        <a href="http://www.rackspace.com" class="logo">
          <img alt="Dedicated Server" height="36" src="https://a248.e.akamai.net/assets.github.com/images/modules/footer/rackspaces_logo.png?1329521039" width="38" />
        </a>
        Powered by the <a href="http://www.rackspace.com ">Dedicated
        Servers</a> and<br/> <a href="http://www.rackspacecloud.com">Cloud
        Computing</a> of Rackspace Hosting<span>&reg;</span>
      </div>
  </div><!-- /.site -->
</div><!-- /.lower_footer -->

      </div><!-- /#footer -->

    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus site search</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Expand URL to its canonical form</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle selection</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column middle">
        <dl class="keyboard-mappings">
          <dt>I</dt>
          <dd>Mark selection as read</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>U</dt>
          <dd>Mark selection as unread</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Remove selection from view</dd>
        </dl>
      </div><!-- /.column.middle -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Issues Dashboard</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div >
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first" >
        <h3>Source Code Browsing</h3>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>w</dt>
          <dd>Switch branch/tag</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Expand URL to its canonical form</dd>
        </dl>
      </div>
    </div>
  </div>
</div>

    <div id="markdown-help" class="instapaper_ignore readability-extra">
  <h2>Markdown Cheat Sheet</h2>

  <div class="cheatsheet-content">

  <div class="mod">
    <div class="col">
      <h3>Format Text</h3>
      <p>Headers</p>
      <pre>
# This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
###### This is an &lt;h6&gt; tag</pre>
     <p>Text styles</p>
     <pre>
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
</pre>
    </div>
    <div class="col">
      <h3>Lists</h3>
      <p>Unordered</p>
      <pre>
* Item 1
* Item 2
  * Item 2a
  * Item 2b</pre>
     <p>Ordered</p>
     <pre>
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b</pre>
    </div>
    <div class="col">
      <h3>Miscellaneous</h3>
      <p>Images</p>
      <pre>
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
</pre>
     <p>Links</p>
     <pre>
http://github.com - automatic!
[GitHub](http://github.com)</pre>
<p>Blockquotes</p>
     <pre>
As Kanye West said:

> We're living the future so
> the present is our past.
</pre>
    </div>
  </div>
  <div class="rule"></div>

  <h3>Code Examples in Markdown</h3>
  <div class="col">
      <p>Syntax highlighting with <a href="http://github.github.com/github-flavored-markdown/" title="GitHub Flavored Markdown" target="_blank">GFM</a></p>
      <pre>
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>
    </div>
    <div class="col">
      <p>Or, indent your code 4 spaces</p>
      <pre>
Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true</pre>
    </div>
    <div class="col">
      <p>Inline code for comments</p>
      <pre>
I think you should use an
`&lt;addr&gt;` element here instead.</pre>
    </div>
  </div>

  </div>
</div>


    <div class="ajax-error-message">
      <p><span class="icon"></span> Something went wrong with that request. Please try again. <a href="javascript:;" class="ajax-error-dismiss">Dismiss</a></p>
    </div>

    
    
    
    <span id='server_response_time' data-time='0.12099' data-host='fe9'></span>
  </body>
</html>

