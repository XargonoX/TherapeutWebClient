var express         = require('express');
var path            = require('path');
var favicon         = require('serve-favicon');
var logger          = require('morgan');
var cookieParser    = require('cookie-parser');
var bodyParser      = require('body-parser');
var mongoose        = require('mongoose');

var patient                 = require('./public/routes/patientsAPI');
var therapyTask             = require('./public/routes/therapyTaskAPI');
var questionnaire           = require('./public/routes/questionnaireAPI');
var answeredQuestionnaire   = require('./public/routes/answeredQuestionnaireAPI');

var app             = express();

mongoose.connect('mongodb://localhost/patient');
var db = mongoose.connection;
db.on('error', function callback(){
    console.log("Verbindung zu MongoDB fehlgeschlagen!");
});
db.once('open', function callback(){
    console.log("Verbindung zu MongoDB erfolgreich!");
});

// view engine setup
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public/views')));
app.use(express.static(path.join(__dirname, '/public')));

app.use('/patientAPI',patient);
app.use('/therapyTaskAPI',therapyTask);
app.use('/questionnaireAPI',questionnaire);
app.use('/answeredQuestionnaireAPI',answeredQuestionnaire);

// catch 404 and forward to error handler
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
    res.render('error.html', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error.html', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
