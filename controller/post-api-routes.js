var db = require('../models');

module.exports = function(app) {
  app.get('/all/contributions', function(req, res) {
    db.Post.findAll({
      include: [db.User],
      order: [['createdAt', 'DESC']]
    }).then(function(result) {
      var postsObj = { posts: result };
      res.render('contributions', postsObj);
    });
  });

  app.get('/api/contributions/:language', function(req, res) {
    console.log('inside the get /api/contributions/languages');
    console.log("language: ", req.params.language);
    db.Post.findAll({
      where: {
        language: req.params.language
      },
      include: [db.User],
      order: [['createdAt', 'DESC']]
    }).then(function(result) {
      var postsObj = { posts: result };

      res.render('contributions', postsObj);
    });
  });

  app.post('/api/contributions', function(req, res) {
    db.User.create({
      user_name: req.body.name
    }).then(function(user) {
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
