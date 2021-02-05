const mongoose = require ('mongoose')

const activitySchema=new mongoose.Schema({
  actImg:{type: String, required:true},
  actTitle:{type: String, required:true}
})
const commentSchema=new mongoose.Schema({
  idUser:{type: String, required:true},
  coment:{type: String, required:true}
})
const ItinerarySchema = new mongoose.Schema({
  idCity:{type: mongoose.Schema.ObjectId, ref: 'city'},
  title:{type: String, required:true},
  idUserAutor:{type: String, required: true},
  duration:{type: Number, required: true},
  valoration:{type: Number , required: true},
  hashTags:{type: Array , required:true},
  arrayLikes:{type: Array, required: false, default:[""]},
  arrayComents:[commentSchema],
  arrayActivities:[activitySchema]
})

const Itinerary = mongoose.model('itinerary',ItinerarySchema)

module.exports = Itinerary