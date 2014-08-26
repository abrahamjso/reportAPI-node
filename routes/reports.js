//routes/reports.js

var Report = require('../models/report');
var express = require('express');

//config Rutes
var router = express.Router();

router.route('/reports').get(function(req, res){
  //code
  res.json({ message: 'Hi, all the report reports...!'});
});

/*
router.route('/reports').post(function(req, res){
  //code
});

router.route('/reports/:id').get(function(req, res){
  //code
});

router.route('/reports/:id').delete(function(req, res){
  //code
});

router.route('/reports/:id').put(function(req, res){
  //code
});
*/
module.exports = router;
