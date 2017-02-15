var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var db = require('./dbConnection.js').getDbConnection();

var routes = require('./routes/signup');
var users = require('./routes/signin');
var accidentdetection = require('./routes/accidentdetection.js');
var location = require('./routes/location.js');
var workplace = require('./routes/workplace.js');
var graphtime = require('./routes/graphtime.js');
var pythonscript = require('./routes/shell.js');
//var machinelearnng  = require('./routes/machinelearning.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.post('/signup', routes);
app.post('/signin', users);
app.post('/accident',accidentdetection);
app.get('/location',location);
app.post('/workplace',workplace);
app.get('/favicon.ico',function(req,res){
  res.send(204);
});
app.post('/scriptMachineLearning',pythonscript);
app.get('/graphtime',graphtime);
//app.post('/machinelearning',machinelearning);
//// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
