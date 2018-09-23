var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'page principale ' });
});
router.get('/slider', function(req, res, next) {
  res.render('slider',{ title: 'SliderShows' });
});
router.get('/test', function(req, res, next) {
  res.render('test',{title:'test singification'}) ;
});

module.exports = router;
