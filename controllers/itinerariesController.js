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
      .populate('idCity')
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
    const {idUser,idItinerary}= req.body.userLikeData
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
  },
  newComment:async(req,res)=>{
    const {idUser,idItinerary,commentUser}=req.body.commentUser
    await Itinerary.findOneAndUpdate(
      {_id:idItinerary},
      { $push: {'arrayComents': {idUser:idUser,coment:commentUser}} })
      .then(()=>res.json({success:true}))
      .catch(e=>res.json({success:false, error:"Error while modifying in database."}))
  },
  delComment:async(req,res)=>{
    const {idItinerary,idComment}=req.body.commentDelete
    await Itinerary.findOneAndUpdate(
      {_id:idItinerary},
      { $pull: {'arrayComents': {_id:idComment}} })
      .then(()=>res.json({success:true}))
      .catch(e=>res.json({success:false, error:"Error while modifying in database."}))
  },
  editComment:async(req,res)=>{
    console.log
    const {idItinerary,idComment,commentUser,idUser}=req.body.commentEdit
    /*await Itinerary.findOneAndUpdate(
      {_id:idItinerary},
      { $pull: {'arrayComents': {_id:idComment}} })*/
    await Itinerary.updateOne(
      {'arrayComents._id':idComment},
      { '$set': {'arrayComents.$.coment':commentUser}} )
      .then(()=>res.json({success:true}))
      .catch(e=>res.json({success:false, error:"Error while modifying in database."}))
  }
}

module.exports = itinerariesController