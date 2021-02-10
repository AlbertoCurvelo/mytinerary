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
    console.log(userLikeData)
    return async (dispatch, getState) => {
      const respuesta= await axios.put(direccionHost+'/itineraries/city/likeOrDislike/'+userLikeData.idUser+'/'+userLikeData.idItinerary)
      const data= await respuesta.json()
      dispatch({type: "SET_LIKE_ITINERARY", payload: data.data.respuesta})}
  }
}
export default itineraryActions