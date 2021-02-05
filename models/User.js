const mongoose = require ('mongoose')

const UserSchema = new mongoose.Schema({
  firtsName:{type:String, required:true},
  lastName:{type:String, required:true},
  userName:{type: String, required: true},
  mail:{type: String, required:true},
  urlPic:{type: String, required:false, default:''},
  contry:{type: String, required:true},
  password:{type: String , required: true},
  typeAccount:{type: String, required:false, default:"user"},
  whereAccount:{type: String, required:false, default:"local"},
})

const User = mongoose.model('user',UserSchema)

module.exports = User