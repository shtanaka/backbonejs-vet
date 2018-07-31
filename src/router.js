ClinicsApp.Router = Backbone.Router.extend({
  routes: {
    'home': 'home',
    '*path': 'home'
  },
  home: function () {
    ClinicsApp.instances.homeView = new ClinicsApp.views.Home();
    $('#main').html(ClinicsApp.instances.homeView.render().el);
  }
})