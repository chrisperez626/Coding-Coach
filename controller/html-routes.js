var db = require('../models');

modules.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('index');
  });

  app.get('/contributions', function(req, res) {
    res.render('contributions');
  });

  app.get('/contributions/');
};
