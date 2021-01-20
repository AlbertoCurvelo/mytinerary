const data = require('../data/dataCities.json')
//Objeto con funciones con controladores para el uso de las routes
const City = require('../models/City')
const citiesController = {
  //Añadir ciudad
  request:(req,res)=>{
    //llegan los metodos admin/cities de edicion de cities a la base de datos
    const method = req.method
    const request = req.params.request
    //evaluo los datos que entraron y redirijo a al pedido correspondiente
    switch (true) {
      //nueva ciudad
      case (request==='newCity'&&method==='POST'):
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
        break;
      //Eliminar ciudad
      case (request==='delCity'&&method==='DELETE'):
        return res.json({success:false, respuesta:'Llegue aqui'})
      break;
      //Comando 
      default:res.json({success:false, respuesta: 'No se encontro el formato de request esperado'})
        break;
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
  singleCity:async (req,res)=>{
    const id=req.params.id
    try {
      const data = await City.findById(id)
      return res.json({success:true, respuesta:data})
    } catch (e) {
      return res.json({success:false, respuesta: 'Ha ocurrido un error en el proceso: '+e})
    }
  }
}
//fin citiesController
module.exports = citiesController