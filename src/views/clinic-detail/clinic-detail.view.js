ClinicsApp.views.ClinicDetailView = Backbone.View.extend({
  model: new ClinicsApp.models.Clinic(),
  tagName: 'div',
  initialize: function () {
    this.template = _.template(clinicDetailTemplate);
  },
  render: function () {
    var html = this.template(this.model.toJSON());
    this.$el.html(html);
    return this;
  },
  goToHome: function () {
    ClinicsApp.Router.Instance.navigate("#home", true);
  }
});