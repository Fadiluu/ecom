const express = require('express')
const path = require('path')
const app = express();

app.use(function(req, res, next) {
    console.log('hello')
    next();
})

app.get('/signup',function(req,res,next){
    res.sendFile(path.join(__dirname,'sample.html'));
    next();
})

app.use(function(req, res){
    console.log('Endpoint')
})

app.post('/signup',function(req,res){
    res.send('Account Created');
});
     
app.get('/about',function(req,res){
    res.send('about');
});

app.listen(3000,()=> {
    console.log(__filename)
    console.log('Server Started')

})