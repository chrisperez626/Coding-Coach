var db = require('../models');

module.exports = function(app) {
  app.get('/contributions', function(req, res) {
    db.Post.findAll({}).then(function(result) {
      var postsObj = { posts: result };
      res.render('contributions', postsObj);
    });
  });

  app.get('/api/contributions', function(req, res) {
    var query = {};
    if (req.query.UserId) {
      query.UserId = req.query.UserId;
    }
    db.Post.findAll({
      where: query,
      include: [db.User]
    }).then(function(result) {
      var postsObj = { posts: result };
      res.render('contributions', postsObj);
    });
  });

  app.post('/api/contributions', function(req, res) {
    db.Post.create(req.body).then(function(result) {
      res.json(result);
    });
  });
};
