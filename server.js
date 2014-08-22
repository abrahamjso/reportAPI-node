//server.js

//libraries
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//init app
var app = express();

//define port
var port =  process.env.PORT || 3000;
var router = express.Router();

//Sample Route
router.get("/", function(req, res){
  res.json({ message: 'Hi everybody...!'});
});

//Middleware
app.use('/api', router);

//Start the server
app.listen(port);
console.log('Server listening in the port: ' + port);
