const mongoose= require ('mongoose')

const activitySchema = new mongoose.Schema({
  idItinerary:{type: String, required:true},
  actImg:{type: String, required:true},
  actTitle:{type: String, required:true}
})

const Activity = mongoose.model('activity',activitySchema)

module.exports = Activity