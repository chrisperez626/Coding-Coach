var express = require('express');

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/contributions', function(req, res) {
  res.render('contributions');
});
