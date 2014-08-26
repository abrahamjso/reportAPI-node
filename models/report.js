//models/report.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//objeto modelo de mongoose
var reportSchema = new Schema({
  name: String,
  description: String,
  created: {type: Date, default: Date.now} //definimos la fecha creada
});

//Indicamos que podremos cargarlo de algun otro lugar y nuestro modelo es Report
module.exports = mongoose.model('Report', reportSchema);
