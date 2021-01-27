const City = require('../models/City')
const citiesController = {
  //Añadir ciudad
  postCity:(req,res)=>{
    if(req.body.descriptionCity==='') delete req.body.descriptionCity
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
      return res.json({success:false, error: 'Error al intentar guardar: '+ error})
    })
  },
  putCity:(req,res)=>{
    const id=req.params.id
    const newCity=req.body.newCity
    console.log(newCity)
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
    })
  },
  //Borrar ciudad
  deleteCity: async (req,res)=>{
    const id=req.params.id
    try {
      const data = await City.findOneAndRemove({_id:id})
      return res.json({success:true, respuesta:data})
    } catch (e) {
      return res.json({success:false, respuesta: 'Ha ocurrido un error en el proceso: '+e})
    }
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
  singleCity: async (req,res)=>{
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