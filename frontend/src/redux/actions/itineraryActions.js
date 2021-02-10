import axios from 'axios';

const direccionHost='http://localhost:4000/api'
const itineraryActions = {
  getAllItinerariesForId: (id) => {
    return async (dispatch, getState) => {
      const respuesta= await fetch(direccionHost+'/itineraries/city/'+id)
      const data= await respuesta.json()
      dispatch({type: "LOAD_ITINERARIES_FOR_THIS_CITY", payload: data.respuesta})
    }
  },
  setLikeThisItinerary:(userLikeData) =>{
    return async (dispatch, getState) => {
      const respuesta= await axios.put(direccionHost+'/itineraries/city/likeOrDislike/'+userLikeData.idUser+'/'+userLikeData.idItinerary)
      console.log(respuesta)
      if(!respuesta.data.success)return respuesta.data.success
      dispatch({type: "SET_LIKE_ITINERARY", payload: respuesta.data.success})}
  }
}
export default itineraryActions