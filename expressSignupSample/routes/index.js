var express = require('express');
var router = express.Router();
const MongoClient=require('mongodb').MongoClient;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/submit',function(req, res, next) {
  console.log(req.body)
  
  MongoClient.connect('mongodb://localhost:27018', function (err, client){
    if(err)
        console.log('error')
    else
       console.log('mongo connected')
    

  })

  // res.send('got it')
});

module.exports = router;

