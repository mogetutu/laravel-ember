App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
  this.resource('posts', {path : 'posts'}, function() {
    this.route('new');
  });
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('posts');
  }
});

App.PostsRoute = Ember.Route.extend({
    model: function() {
        return App.Post.find();
    }
});

App.Post = DS.Model.extend({
    title : DS.attr('string'),
    body : DS.attr('string')
});

App.Adapter = DS.RESTAdapter.extend({
  url: "http://ember.local"
});

App.Store = DS.Store.extend({
  revision: 12,
  adapter:  App.Adapter.create()
});
