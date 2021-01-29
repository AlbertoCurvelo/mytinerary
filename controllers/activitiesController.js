const Activity = require('../models/Activity')
const activitiesController = {
  //añadir itinerario
  postActivity:(req,res)=>{
    const {idItinerary,actImg,actTitle} = req.body
    const activityAGuardar = new Activity({
      idItinerary,actImg,actTitle
    })
    itineraryAGuardar.save()
    .then(guardado =>{
      return res.json({
        success:true, respuesta: guardado})
    })
    .catch(error =>{
      return res.json({success:false, error: 'Error al intentar '+error})
    })
  }