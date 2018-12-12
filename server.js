
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send("Get request received at '/' ");
});

app.listen(3000, function(){
console.log('Listening on Port 3000');
});



app.get('/quotes', function(req, res){
    console.log("Get a list of all quotes as json");
    res.json(quotes);
});

app.get('/quotes/:id', function(req,res){
    console.log("return quote with the ID: " + req.params.id);
    res.send("Return quote with the ID: " + req.params.id);
});

app.post('/quotes', function(req,res){
    console.log("Insert a new quote: "+ req.body.quote);
    res.json(req.body);
});

