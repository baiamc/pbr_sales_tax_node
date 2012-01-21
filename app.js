// Used for Cloud 9 IDE Development
if (!process.env.NODE_ENV) {
    process.env.NODE_ENV='development';
}

var express=require('express');
var app=express.createServer()

app.configure(function () {
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(app.router);
});

app.configure('development', function () {
  app.use(express.static(__dirname + '/static'));
  app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
});

app.configure('production', function () {
  var oneYear = 3157600000;
  app.use(express.static(__dirname + '/static', { maxAge: oneYear }));
  app.use(express.errorHandler({dumpExceptions: false, showStack: false}));
});

app.set('views',__dirname + '/views');
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/enter', function (req, res) {
  res.render('enter');
});

app.get('/upload', function (req, res) {
  res.render('upload');
});

app.get('/query', function (req, res) {
  res.render('query');
});

app.get('/report', function (req, res) {
  res.render('report');
});

app.get('/users', function (req, res) {
  res.render('users');
});

app.get('/:page/help', function (req, res) {
  res.render('help/' + req.params.page);
});

app.listen(process.env.PORT);