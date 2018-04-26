var express = require('express');
var bodyParser = require('body-parser');

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require('./models');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(express.static('public'));

// Routes

require('./controller/html-routes.js')(app);
require('./controller/user-api-routes.js')(app);
require('./controller/post-api-routes.js')(app);

// sync models and then start express app
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
  });
});
