ClinicsApp.views.ClinicListItemView = Backbone.View.extend({
  model: new ClinicsApp.models.Clinic(),
  tagName: 'tr',
  events: {
    "click" : "goToDetails"
  },
  initialize: function () {
    this.template = _.template($('.clinic-list-item-template').html());
  },
  render: function () {
    var html = this.template(this.model.toJSON());
    this.$el.html(html);
    return this;
  },
  goToDetails: function () {
    ClinicsApp.Router.Instance.navigate("#detail/" + this.model.get('id'), true);
  }
});

