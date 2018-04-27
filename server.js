var express = require('express');
var bodyParser = require('body-parser');

var exphbs = require("express-handlebars");

var path = require("path");


var app = express();
var PORT = process.env.PORT || 8080;

var db = require('./models');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "/public")));

require('./controller/html-routes.js')(app);
require('./controller/post-api-routes.js')(app);

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
  });
});
