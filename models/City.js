const mongoose = require('mongoose')

const citySchema = new mongoose.Schema({
  titleCity:{type: String, required: true},
  directionImage:{type: String, required: true},
  descriptionCity:{type: String, required: false, default: 'This city not contain description.'}
})

const City = mongoose.model('city',citySchema)

module.exports = City