//server.js

//libraries
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var reports = require('./routes/reports'); //Own Routes

//init app
var app = express();

//DB config, we can move this in an other folder
var dbName = 'reportDB';
var connectString = 'mongodb://localhost:27017/'+dbName;
mongoose.connect(connectString);

//Middleware
app.use(bodyParser.json()); //parse request Bodies
app.use(bodyParser.urlencoded());
app.use('/api', reports); //Own routes we add the middleware

//Start the server
var port =  process.env.PORT || 3000;
app.listen(port);
console.log('Server listening in the port: ' + port);
