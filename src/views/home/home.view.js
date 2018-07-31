ClinicsApp.scope.clinics = new ClinicsApp.collections.Clinics([]);

ClinicsApp.views.Home = Backbone.View.extend({
  model: ClinicsApp.scope.clinics,
  initialize: function (options) {
    this.model.on('add', this.render, this);
    this.model.fetch();
  },
  template: _.template($('.home-template').html()),
  target: $('.clinics-list'),
  render: function () {
    this.$el.html(this.template());
    var clinicsList = this.$el.find('.clinics-list');
    clinicsList.html('');
    _.each(this.model.toArray(), function (data) {
      clinicsList.append((new ClinicsApp.views.ClinicListItemView({ model: data })).render().$el);
    });
    return this;
  }
});