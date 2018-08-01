ClinicsApp.scope.clinics = new ClinicsApp.collections.Clinics([]);

ClinicsApp.views.Home = Backbone.View.extend({
  model: ClinicsApp.scope.clinics,
  initialize: function (options) {
    this.model.on('add', this.render, this);
    this.model.fetch();
  },
  template: _.template(homeTemplate),
  render: function (data) {
    self = this;
    self.scope.searchString = "";
    this.$el.html(this.template());
    this.renderList();
    this.setEvents();
    return this;
  },
  renderList: function () {
    var clinicList = this.$el.find('.clinic-list');
    clinicList.html('');
    _.each(this.model.toArray(), function (data) {
      if (data.get('name').toLowerCase().includes(self.scope.searchString.toLowerCase()))
        clinicList.append((new ClinicsApp.views.ClinicListItemView({ model: data })).render().$el);
    });
  },
  scope: {
    keydownTimeout: null,
    searchString: ""
  },
  setEvents: function () {
    var self = this;
    this.$el.find('.search-input').on('keydown', function (event) {
      if (self.scope.keydownTimeout)
        clearTimeout(self.scope.keydownTimeout);
      self.scope.keydownTimeout = setTimeout(function () {
        self.scope.searchString = event.currentTarget.value;
        self.renderList();
      }, 300);
    });
  }
});