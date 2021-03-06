ClinicsApp.Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'detail/:id': 'detail'
  },
  home: function () {
    ClinicsApp.instances.homeView = new ClinicsApp.views.Home();
    $('#main').html(ClinicsApp.instances.homeView.render().el);
  },
  detail: function (id) {
    data = ClinicsApp.scope.clinics.get({ id: id });
    ClinicsApp.instances.clinicDetailView =
      new ClinicsApp.views.ClinicDetailView({ model: data });
    $('#main').html(ClinicsApp.instances.clinicDetailView.render().$el);
  }
})