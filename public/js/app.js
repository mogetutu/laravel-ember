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
// Posts Controller
App.PostsRoute = Ember.Route.extend({
    model: function() {
        return App.Post.find();
    }
});

// Post Model
App.Post = DS.Model.extend({
    title : DS.attr('string'),
    body : DS.attr('string')
});


// RESTAdapter using ember-data.js <-- ensure dependancy is included after ember.js -->
App.Adapter = DS.RESTAdapter.extend({
  // do host and endpoint customisations here
  // Test Example
  url: "http://ember.local"
});

App.Store = DS.Store.extend({
  revision: 12,
  adapter:  App.Adapter.create()
});
