const data = require('../data/dataCities.json')
//Objeto con funciones con controladores para el uso de las routes
const citiesController = {
  //Devuelve todas las ciudades en una lista de objetos, sin uso parametros de entrada
  allCities:(req,res)=>{
    res.json({
      'respuesta':data
    })
  },
  //Devuelve una sola ciudad en un objeto, recibiendo como parametro el id
  singleCity:(req,res)=>{
    const id=req.params.id
    data.map(city=>{
        if(city._id===id)
        res.json({
          'respuesta':city
        })
    })
  }
}
//fin citiesController
module.exports = citiesController