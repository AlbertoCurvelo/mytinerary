const Activity = require('../models/Activity')
const activitiesController = {
  //añadir itinerario
  postActivity:(req,res)=>{
    const {idItinerary,actImg,actTitle} = req.body
    const activityAGuardar = new Activity({
      idItinerary,actImg,actTitle
    })
    activityAGuardar.save()
    .then(guardado =>{
      return res.json({
        success:true, respuesta: guardado})
    })
    .catch(error =>{
      return res.json({success:false, error: 'Error al intentar '+error})
    })
  },
  getActivitiesForItinerary:async(req,res)=>{
    const id= req.params.id
    try {
      const data= await Activity.find({idItinerary:id})
      return res.json({success:true , respuesta: data})
    } catch (error) {
      return res.json({success:false, respuesta:'Error al intentar pedir los datos a la db: '+error})
    }
  }
}
module.exports = activitiesController