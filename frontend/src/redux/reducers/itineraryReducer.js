const initialState = {
  itinerariesForThisCity:[],
  reload:false
}
export function itineraryReducer(state=initialState,action){
  switch (action.type) {
    case 'LOAD_ITINERARIES_FOR_THIS_CITY':
      return{
        ...state,
        itinerariesForThisCity:action.payload
      }
      case 'SET_LIKE_ITINERARY':
        return{
          ...state,
          reload:!state.reload
        }
    default: return state
  }
}