ClinicsApp.Router = Backbone.Router.extend({
  routes: {
    'home': 'home',
    '*path': 'home'
  },
  home: function () {
    var view = new ClinicsApp.views.Home();
    $('#main').html(view.render().el);
  }
})