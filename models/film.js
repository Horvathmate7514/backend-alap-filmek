const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
  _id: {
    type: Number, 
    required: true,
  },
  Cim_en: {
    type: String,
    required: true,
    unique: true, 
    maxlength: 50
  },
  Cim_hu: {
    type: String,
    required: true,
    unique: true, 
    maxlength: 50
  },
  Studio_id: {
    type: Number,
	ref: "Forgalmazo",
  },
  Bemutato: {
    type: Date,
    required: true,
	min: ["1931-03-07", "A bemutatás nem lehet korábbi!"],
	
  },
  Hossz: {
    type: Number,
    required: true,
    default: null,
	// min: ["60", "A filmek hosszának legalább 60 percnek kell lennie!"],

  },
  Rendezo: {
    type: String,
    required: true,
    maxlength: 30
  }
});

module.exports = mongoose.model('Film', filmSchema, 'filmek')
