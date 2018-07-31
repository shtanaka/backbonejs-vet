ClinicsApp.views.ClinicListItemView = Backbone.View.extend({
  model: new ClinicsApp.models.Clinic(),
  tagName: 'tr',
  initialize: function () {
    this.template = _.template($('.clinics-list-item-template').html());
  },
  render: function () {
    var html = this.template(this.model.toJSON());
    this.$el.html(html);
    return this;
  }
});

