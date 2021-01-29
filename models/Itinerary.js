const mongoose = require ('mongoose')

const commentSchema=new mongoose.Schema({
  userName:{type:String, required:true},
  userComentImg:{type:String, required:true},
  coment:{type: String, required:true}
})
const ItinerarySchema = new mongoose.Schema({
  idCity:{type: mongoose.Schema.ObjectId, ref: 'city'},
  title:{type: String, required:true},
  userAutor:{type: String, required: true},
  userImgAutor:{type: String, required:false},
  likes:{type: Number, required: false, default:0},
  duration:{type: Number, required: true},
  valoration:{type: Number , required: true},
  hashTags:{type: Array , required:true},
  arrayComents:[commentSchema]
})

const Itinerary = mongoose.model('itinerary',ItinerarySchema)

module.exports = Itinerary