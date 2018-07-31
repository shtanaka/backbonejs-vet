// models
var Clinic = Backbone.Model.extend({
  defaults: {
    name: "",
    address: "",
    city: "",
    state: "",
    country: ""
  }
});

// collections
var Clinics = Backbone.Collection.extend({
  url: 'http://localhost:3000/clinics'
});

// instantiate data
var clinics = new Clinics([]);
clinics.fetch();

// views
var ClinicListItemView = Backbone.View.extend({
  model: new Clinic(),
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

var ClinicListView = Backbone.View.extend({
  model: clinics,
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

// instantiate components
var clinicListView = new ClinicListView();

// button functions
$(document).ready(function () {
  $('.search-button').on('click', function () {
    console.log('Searching!');
  });
});

// var ClinicsApp = {
//   views: {},
//   models: {},
//   collections: {},
//   Router: {},
//   scope: {}
// }

// $(document).ready(function () {
//   ClinicsApp.Router.Instance = new ClinicsApp.Router();
//   Backbone.history.start();
// });