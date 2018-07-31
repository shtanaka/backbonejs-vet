ClinicsApp.views.ClinicDetailView = Backbone.View.extend({
  model: new ClinicsApp.models.Clinic(),
  tagName: 'div',
  initialize: function () {
    this.template = _.template($('.clinic-detail-template').html());
  },
  render: function () {
    var html = this.template(this.model.toJSON());
    this.$el.html(html);
    return this;
  }
});