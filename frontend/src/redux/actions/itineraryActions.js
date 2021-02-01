const direccionHost='http://localhost:4000/api'
const itineraryActions = {
  getAllItinerariesForId: (id) => {
    return async (dispatch, getState) => {
      const respuesta= await fetch(direccionHost+'/itineraries/city/'+id)
      const data= await respuesta.json()
      dispatch({type: "LOAD_ITINERARIES_FOR_THIS_CITY", payload: data.respuesta})
    }
  }
}
export default itineraryActions