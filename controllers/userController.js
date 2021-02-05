const User = require('../models/User')
const bcryptjs = require('bcryptjs')

const userController = {
  //Añadir usuario
  postUser:(req,res)=>{
    const {firtsName,lastName,userName,mail,urlPic,contry,password,typeAccount} = req.body
    const passwordHasheado = bcryptjs.hashSync(password, 10)
    const userSave = new User({
      firtsName,lastName,userName,
      mail,urlPic,contry,password:passwordHasheado,typeAccount
    })
    userSave.save()
    .then(guardoUser =>{
      return res.json({success:true, respuesta: guardoUser})
    })
    .catch(error =>{
      return res.json({success:false, error: 'Error al intentar guardar: '+ error})
    })
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
    const {username, password} = req.body
    const userExists = await User.findOne({username: username})
    if (!userExists) {
        return res.json({success: false, mensaje: 'Nombre de usuario y/o contraseña incorrectos.'})
    }
    const passwordMatches = bcryptjs.compareSync(password, userExists.password)
    if (!passwordMatches) {
        return res.json({success: false, mensaje: 'Nombre de usuario y/o contraseña incorrectos.'})
    }

    return res.json({success: true, response: userExists})
  }
}
//fin citiesController
module.exports = userController