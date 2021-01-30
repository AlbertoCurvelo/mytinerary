const direccionHost='http://localhost:4000/api'
const cityActions = {
  getAllCities: () => {
    return async (dispatch, getState) => {
      const respuesta= await fetch(direccionHost+'/cities')
      const data= await respuesta.json()
      dispatch({type: "LOAD_CITIES", payload: data.respuesta})
    }
  },
  filter: (e) =>{
    return (dispatch,getState) =>{
      dispatch({type: "FILTER", payload: e.target.value})
    }
  }
}
export default cityActions