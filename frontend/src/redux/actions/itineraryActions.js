const direccionHost='http://localhost:4000/api'
const itineraryActions = {
  getAllItinerariesOrActivitiesForId: (id,activitiesOrItineraries) => {
    return async (dispatch, getState) => {
      const rutaBackend= activitiesOrItineraries === 'itineraries' ?'/itineraries/city/' :'/itinerary/activities/'
      const typeForDispatch= activitiesOrItineraries === 'itineraries' ?"LOAD_ITINERARIES_FOR_THIS_CITY" :"LOAD_ACTIVITIES_FOR_THIS_ITINERARY"
      const respuesta= await fetch(direccionHost+rutaBackend+id)
      const data= await respuesta.json()
      dispatch({type: typeForDispatch, payload: data.respuesta})
    }
  }
}
export default itineraryActions