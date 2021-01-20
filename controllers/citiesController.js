const City = require('../models/City')
const citiesController = {
  //Añadir ciudad
  postCity:(req,res)=>{
    const cityAGuardar = new City({
      titleCity:req.body.titleCity,
      directionImage:req.body.directionImage,
      descriptionCity:req.body.descriptionCity
    })
    cityAGuardar.save()
    .then(guardoCity =>{
      return res.json({success:true, respuesta: guardoCity})
    })
    .catch(error =>{
      return res.json({success:false, error: 'La ruta es valida, pero algún parametro del JSON recibido no es valido: '+ error})
    })
  },
  //Borrar ciudad
  deleteCity:(req,res)=>{
    const id=req.params.id
    return res.json({success:false, respuesta:'Llegue aqui'})
  },
  //Devuelve todas las ciudades en una lista de objetos, sin uso parametros de entrada
  allCities: async(req,res)=>{
    try {
      const data = await City.find()
      return res.json({success:true, respuesta:data})
    } catch (e) {
      return res.json({success:false, respuesta: 'Ha ocurrido un error en el proceso: '+e})
    }
  },
  //Devuelve una sola ciudad en un objeto, recibiendo como parametro el id
  //Bahia - 60087b1fa030612f10239670 
  singleCity:async (req,res)=>{
    const id=req.params.id
    try {
      const data = await City.findById(id) //{_id:req.params.id}
      return res.json({success:true, respuesta:data})
    } catch (e) {
      return res.json({success:false, respuesta: 'Ha ocurrido un error en el proceso: '+e})
    }
  }
}
//fin citiesController
module.exports = citiesController