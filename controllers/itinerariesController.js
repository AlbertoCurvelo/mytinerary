const Itinerary = require('../models/Itinerary')
const itinerariesController = {
  //añadir itinerario
  postItinerary:(req,res)=>{
    const {idCity,title,userAutor,userImgAutor,likes,duration,valoration,hashTags,arrayComents,arrayActivities} = req.body
    const itineraryAGuardar = new Itinerary({
      idCity, title, userAutor, userImgAutor, 
      likes, duration, valoration,
      hashTags, arrayComents, arrayActivities
    })
    itineraryAGuardar.save()
    .then(guardado =>{
      return res.json({
        success:true, respuesta: guardado})
    })
    .catch(error =>{
      return res.json({success:false, error: 'Error al intentar '+error})
    })
  },
  allItineraries:async(req,res)=>{
    try {
      const data= await Itinerary.find()
      return res.json({success:true , respuesta: data})
    } catch (error) {
      return res.json({success:false, respuesta:'Error al intentar pedir los datos a la db: '+error})
    }
  },
  delSingleItinerary:(req,res)=>{
    const id = req.params.id
    Itinerary.findByIdAndRemove({_id:id})
    .then(()=> res.json({success:true}))
    .catch(e=>res.json({success:false,respuesta:'Error al intentar borrar usuario en la DB '+e}))
  },
  itinerariesForCity:async(req,res)=>{
    const id = req.params.id
    try {
      const data= await Itinerary.find({idCity:id})
      return res.json({success:true , respuesta: data})
    } catch (error) {
      return res.json({success:false, respuesta:'Error al intentar pedir los datos a la db: '+error})
    }
  }
}

module.exports = itinerariesController