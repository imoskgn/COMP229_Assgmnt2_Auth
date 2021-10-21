var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', h1:'Main Heading' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home', h1:'Main Heading' });
});

/* GET About. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About', h1:'Main Heading' });
});

/* GET Products */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects', h1:'Main Heading' });
});

/* GET Services */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services', h1:'Main Heading' });
});

/* GET Contact Us */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Me', h1:'Main Heading' });
});

module.exports = router;
