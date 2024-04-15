const mongoose = require('mongoose')

const forgalmazoSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true
  },
  Forgalmazo: {
    type: String,
    required: true,
    unique: true,
    maxlength: [50, 'A név nem tartalmazhat 50 karakternél többet!'],
  },

  Alapitva: {
    required: true,
    type: Number,
    rewrite: true,
  },
  Kozpont: {
    type: Number,
    required: true,
    maxlength: [30, 'A név nem tartalmazhat 50 karakternél többet!'],

  },
  Logo : {
    required: true,
    type: String,
    default: 'no-img.jpg'

  }
})

module.exports = mongoose.model('Forgalmazo', forgalmazoSchema, 'forgalmazok')
