// ClinicsApp.scope.clinics = new ClinicsApp.collections.Clinics([]);
// ClinicsApp.scope.clinics.fetch();

ClinicsApp.views.ClinicListItemView = Backbone.View.extend({
  model: new ClinicsApp.models.Clinic(),
  tagName: 'tr',
  initialize: function () {
    this.template = _.template($('#clinicListTemplate').html());
  },
  render: function () {
    var html = this.template(this.model.toJSON());
    this.$el.html(html);
    return this;
  }
});

ClinicsApp.views.ClinicListView = Backbone.View.extend({
  model: ClinicsApp.scope.clinics,
  el: $('.clinics-list'),
  initialize: function () {
    this.model.on('add', this.render, this);
  },
  render: function () {
    var self = this;
    this.$el.html('');
    _.each(this.model.toArray(), function (data) {
      self.$el.append((new ClinicListItemView({ model: data })).render().$el);
    });
    return this;
  }
});
