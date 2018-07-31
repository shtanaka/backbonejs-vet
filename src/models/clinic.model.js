ClinicsApp.models.Clinic = Backbone.Model.extend({
  urlRoot : '/clinics',
  defaults: {
    name: "",
    address: "",
    city: "",
    state: "",
    country: ""
  }
});