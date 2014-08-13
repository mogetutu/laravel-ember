<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Ember &middot; Laravel 4 Starter Kit</title>
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <script type="text/x-handlebars">
    <h2>Welcome to Ember.js playing nice with Laravel 4</h2>

    {{outlet}}
  </script>

  <script type="text/x-handlebars" data-template-name="posts">
    <ul>
    {{#each item in model}}
      <li>{{item.title}}</li>
      <p>{{item.body}}</p>
    {{/each}}
    </ul>
  </script>

  <script src="js/libs/jquery-1.9.1.js"></script>
  <script src="js/libs/handlebars-1.0.0-rc.3.js"></script>
  <script src="js/libs/ember-1.0.0-rc.2.js"></script>
  <script src="js/libs/ember-data.js"></script>
  <script src="js/app.js"></script>
  <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-39864809-1', 'auto');
  ga('send', 'pageview');

</script>
</body>
</html>
