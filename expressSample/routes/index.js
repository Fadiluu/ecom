var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const values = ["Fadil","Ismail","Ali","Fadi"]

  const person ={name: "Fadil", comments:{comment:"Sample comment",date:"20-07-2023"}}
 
  // const person = {name:"Fadil",admin:false}   admin if case

  res.render('index', {person});
});

module.exports = router;
