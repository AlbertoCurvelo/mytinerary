const mongoose = require ('mongoose')

const UserComentSchema = new mongoose.Schema({
  firtsName:{type:String, required:true},
  lastName:{type:String, required:true},
  userName:{type: String, required: true},
  urlPic:{type: String, required:false, default:'../assets/img/logoUser.png'}
})

const UserComent = mongoose.model('userComent',UserComentSchema)

module.exports = UserComent