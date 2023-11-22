var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', { aboutMessage: 'This is About Us page' });
});

module.exports = router;