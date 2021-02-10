const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userController = {
  //Añadir usuario
  register:async (req,res)=>{
    var errores = []
    const {firtsName,lastName,userName,mail,urlPic,contry,password,typeAccount,whereAccount} = req.body
    const userNameExists = await User.findOne({userName: userName})
    const emailExists = await User.findOne({mail: mail})
    if (userNameExists) {errores.push('The username is already in use. Please choose another.')}
    if (emailExists) {errores.push('The Email is already in use. Please choose another.')}
    if (errores.length === 0) {
      const passwordHasheado = bcryptjs.hashSync(password, 10)
      const userSave = new User({
        firtsName,lastName,userName,
        mail,urlPic,contry,password:passwordHasheado,typeAccount,whereAccount
      })
      userSave.save()
      .then(guardoUser =>{
        var token = jwt.sign({...userSave}, process.env.SECRET_KEY, {})
        return res.json({
          success:true, 
          response:{token, userName: guardoUser.userName,
            firtsName:guardoUser.firtsName,urlPic:guardoUser.urlPic,lastName:guardoUser.lastName,
            whereAccount:guardoUser.whereAccount,mail:guardoUser.mail,_id:guardoUser._id}})
      })
      .catch(error =>{
        return res.json({success:false, error: 'Error al intentar guardar: '+ error})
      })
    }else{
      return res.json({
        success: false, errores: errores})
    }
  },
  putUser:(req,res)=>{
    /*const id=req.params.id
    const newCity=req.body.newCity
    City.findByIdAndUpdate(
      {_id:id},
      {
        titleCity:newCity.titleCity,
        directionImage:newCity.directionImage,
        descriptionCity:newCity.descriptionCity
      })
    .then(modificoCity =>{
      return res.json({success:true, respuesta: modificoCity})
    })
    .catch(error =>{
      return res.json({success:false, error: 'Error al intentar modificar: '+ error})
    })*/
  },
  //Borrar usuario
  deleteUser: async (req,res)=>{
    const id=req.params.id
    try {
      const data = await User.findOneAndRemove({_id:id})
      return res.json({success:true, respuesta:data})
    } catch (e) {
      return res.json({success:false, respuesta: 'Ha ocurrido un error en el proceso: '+e})
    }
  },
  //Devuelve todos los usuarios
  allUsers: async(req,res)=>{
    try {
      const data = await User.find()
      return res.json({success:true, respuesta:data})
    } catch (e) {
      return res.json({success:false, respuesta: 'Ha ocurrido un error en el proceso: '+e})
    }
  },
  //Devuelve un solo usuario
  singleUser: async (req,res)=>{
    const id=req.params.id
    try {
      const data = await User.find({_id:id}) //{_id:req.params.id}
      return res.json({success:true, respuesta:data})
    } catch (e) {
      return res.json({success:false, respuesta: 'Ha ocurrido un error en el proceso: '+e})
    }
  },
  signIn: async (req, res) => {
    const {userName, password} = req.body
    try{
      if(userName==='' && password===''){
        return res.json({success: false, mensaje: 'All fields are required.'})
      }
      const userExists = await User.findOne({userName: userName})
      if (!userExists) {
          return res.json({success: false, mensaje: 'Incorrect username and/or password.'})
      }
      const passwordMatches = bcryptjs.compareSync(password, userExists.password)
      if (!passwordMatches) {
          return res.json({success: false, mensaje: 'Incorrect username and/or password.'})
      }
      var token = jwt.sign({...userExists}, process.env.SECRET_KEY, {})
      return res.json({success: true, response:{
          token, 
          firtsName:userExists.firtsName,
          urlPic:userExists.urlPic,
          lastName:userExists.lastName,
          whereAccount:userExists.whereAccount,
          mail:userExists.mail,
          _id:userExists._id
        } 
      })
    }catch(e){
      return res.json({success: false, mensaje: 'There is an error with the connection, please try again later.'})
    }
  },
  logingForLS: (req, res) => {
      res.json({success: true, response: {
        token: req.body.token, 
        firtsName:req.user.firtsName,
        urlPic:req.user.urlPic,
        lastName:req.user.lastName,
        whereAccount:req.user.whereAccount,
        mail:req.user.mail,
        _id:req.user._id
      }
    })
  }
}
//fin citiesController
module.exports = userController