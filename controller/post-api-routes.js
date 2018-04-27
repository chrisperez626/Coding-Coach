var db = require('../models');

module.exports = function(app) {
  app.get('/contributions', function(req, res) {
    db.Post.findAll({}).then(function(result) {
      var postsObj = { posts: result };
      res.render('contributions', postsObj);
    });
  });

  app.get('/api/contributions', function(req, res) {
    db.Post.findAll({
      where: {
        language: db.Post.language,
        include: [db.User]
      }
    }).then(function(result) {
      var postsObj = { posts: result };
      res.render('contributions', postsObj);
    });
  });

  app.post('/api/contributions', function(req, res) {
    db.User.create(req.body.user_name).then(function(user) {
      var userId = user.dataValues.id;
      db.Post.create({
        title: req.body.title,
        language: req.body.language,
        content: req.body.content,
        content_type: req.body.content_type,
        UserId: userId
      }).then(function(result) {
        res.json(result);
      });
    });
  });
};
