var db = require('../models');

module.exports = function(app) {
  app.get('/', function(req, res) {
    var dataObject = {};
    res.render('index', dataObject);
  });

  app.get('/contributions', function(req, res) {
    var dataObject = {};
    res.render('resources', dataObject);
  });

  app.get('/contributions/post', function(req, res) {
    var dataObject = {};
    res.render('post', dataObject);
  });
};
