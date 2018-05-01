var db = require('../models');

module.exports = function(app) {
  app.get('/all/contributions', function(req, res) {
    db.Post.findAll({
      include: [db.User],
      order: [['createdAt', 'DESC']]
    }).then(function(result) {
      var postsObj = { posts: result };
      for (var i=0; i< postsObj.posts.length; i++){
        var content = postsObj.posts[i].dataValues.content.replace(/(\r\n\t|\n|\r\t)/gm, "<br/>");;
        postsObj.posts[i].dataValues.content = content;
        if(postsObj.posts[i].dataValues.language === 'csharp'){
          var language = postsObj.posts[i].dataValues.language.replace('csharp','C#');
          postsObj.posts[i].dataValues.language = language;
        }
      }
      res.render('contributions', postsObj);
    });
  });

  app.get('/api/contributions/:language', function(req, res) {
    db.Post.findAll({
      where: {
        language: req.params.language
      },
      include: [db.User],
      order: [['createdAt', 'DESC']]
    }).then(function(result) {
      var postsObj = { posts: result };
      for (var i=0; i< postsObj.posts.length; i++){
        var content = postsObj.posts[i].dataValues.content.replace(/(\r\n\t|\n|\r\t)/gm, "<br/>");;
        postsObj.posts[i].dataValues.content = content;
        if(postsObj.posts[i].dataValues.language === 'csharp'){
          var language = postsObj.posts[i].dataValues.language.replace('csharp','C#');
          postsObj.posts[i].dataValues.language = language;
        }
      }
      res.render('contributions', postsObj);
    });
  });



  function replaceNewLine(content){
    console.log("NEW LINE FUNCTION!", content, content.length);
      for (var i=0; i < content.length; i++){
        console.log(`CHAR AT ${i}`, content[i]);
        if(content.charAt[i]==='\n')
        {
          content.replace(/(\r\n\t|\n|\r\t)/gm, "<br>");
        }
      }

      return content;
  }

  app.post('/api/contributions', function(req, res) {
    db.User.create({
      user_name: req.body.name
    }).then(function(user) {
      var userId = user.dataValues.id;

      var newContent = replaceNewLine(req.body.content);
      console.log("NEW CONTENT: ", newContent);

      db.Post.create({
        title: req.body.title,
        language: req.body.language,
        content: newContent,
        content_type: req.body.content_type,
        UserId: userId
      }).then(function(result) {
        res.json(result);
      });
    });
  });
};
