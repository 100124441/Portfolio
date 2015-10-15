var express = require('express');
var router = express.Router();
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Owen' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'Portfolio' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/contact/comments', function(req, res) {
  //fs.appendFile() {
  //});
  res.render('comments', { title: 'Contact' });
    
});

module.exports = router;
