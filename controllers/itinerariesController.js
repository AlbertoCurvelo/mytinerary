const Itinerary = require('../models/Itinerary')
const itinerariesController = {
  //añadir itinerario
  postItinerary:(req,res)=>{
    const {idCity,title,userAutor,idUserAutor,userImgAutor,likes,duration,valoration,hashTags,arrayComents,arrayActivities} = req.body
    const itineraryAGuardar = new Itinerary({
      idCity, title, userAutor, userImgAutor, idUserAutor,
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
      .populate('idUserAutor')
      .populate({
        path:'arrayComents',
        populate:{
          path:'idUser',
          model:'user'
        }
      })
      return res.json({success:true , respuesta: data})
    } catch (error) {
      return res.json({success:false, respuesta:'Error al intentar pedir los datos a la db: '+error})
    }
  },
  likeOrDislike:async(req,res)=>{
    const idUser= req.params.idUser
    const idItinerary= req.params.idItinerary
    const arrayLikes= await Itinerary.find({_id:idItinerary,arrayLikes:idUser})
    if(arrayLikes.length===0){
      const result= await Itinerary.findOneAndUpdate(
        {_id:idItinerary},
        { $push: {'arrayLikes': idUser} })
        .then(()=>res.json({success:true}))
        .catch(e=>res.json({success:false, error:"Error while modifying in database."}))
    }else{
      const result= await Itinerary.findOneAndUpdate(
        {_id:idItinerary},
        { $pull: {'arrayLikes':idUser}})
        .then(()=>res.json({success:true}))
        .catch(e=>res.json({success:false, error:"Error while modifying in database."}))
    }
    /*Itinerary.findByIdAndUpdate(
      {_id:id},
      {
        titleCity:newCity.titleCity,
        directionImage:newCity.directionImage,
        descriptionCity:newCity.descriptionCity
      })
    .then(modificoCity =>{
      return res.json({success:true, respuesta: "test"})
    })
    .catch(error =>{
      return res.json({success:false, error: 'Error al intentar modificar: '+ error})
    })*/
  }
}

module.exports = itinerariesController