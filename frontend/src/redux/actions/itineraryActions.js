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
      const respuesta= await axios.put(direccionHost+'/itineraries/city/likeOrDislike',{userLikeData})
      if(!respuesta.data.success)return respuesta.data.success
      dispatch({type: "SET_CHANGE_COMMENT", payload: respuesta.data.success})}
  },
  newComment:(commentUser)=>{
    return async (dispatch,getState) =>{
      const respuesta=await axios.put(direccionHost+'/comments/newComment',{commentUser})
      if(!respuesta.data.success)return respuesta.data.success
      dispatch({type: "SET_CHANGE_COMMENT", payload: respuesta.data.success})}
    },
  delComment:(commentDelete)=>{
    return async (dispatch,getState)=>{
      const respuesta=await axios.put(direccionHost+'/comments/delComment',{commentDelete})
      if(!respuesta.data.success)return respuesta.data.success
      dispatch({type: "SET_CHANGE_COMMENT", payload: respuesta.data.success})}
  },
  editComment:(commentEdit)=>{
    console.log(commentEdit)
    return async (dispatch,getState)=>{
      const respuesta=await axios.put(direccionHost+'/comments/editComment',{commentEdit})
      if(!respuesta.data.success)return respuesta.data.success
      dispatch({type: "SET_CHANGE_COMMENT", payload: respuesta.data.success})}
  }
}
export default itineraryActions