var db = require('../models');

module.exports = function(app) {
  app.get('/api/users', function(req, res) {
    // 1. Add a join to include all of each Author's Posts
    db.User.findAll({
      include: [db.Post]
    }).then(function(users) {
      res.json(users);
    });
  });

  app.get('/api/users/:id', function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(user) {
      res.json(user);
    });
  });

  app.post('/api/users', function(req, res) {
    db.User.create(req.body).then(function(user) {
      res.json(user);
    });
  });
};
