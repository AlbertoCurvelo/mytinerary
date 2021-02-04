const mongoose = require ('mongoose')

const activitySchema=new mongoose.Schema({
  actImg:{type: String, required:true},
  actTitle:{type: String, required:true}
})
const commentSchema=new mongoose.Schema({
  userName:{type:String, required:true},
  userComentImg:{type:String, required:true},
  coment:{type: String, required:true}
})
const ItinerarySchema = new mongoose.Schema({
  firtsName:{type:String, required:true},
  lastName:{type:String, required:true},
  userName:{type: String, required: true},
  mail:{type: String, required:false},
  urlPic:{type: String, required:false, default:''},
  duration:{type: Number, required: true},
  valoration:{type: Number , required: true},
  hashTags:{type: Array , required:true},
  arrayComents:[commentSchema],
  arrayActivities:[activitySchema]
})

const User = mongoose.model('user',UserSchema)

module.exports = User