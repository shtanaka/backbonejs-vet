var ClinicsApp = {
  views: {},
  models: {},
  collections: {},
  Router: {},
  scope: {},
  instances: {}
}

$(document).ready(function () {
  ClinicsApp.Router.Instance = new ClinicsApp.Router();
  Backbone.history.start();
});