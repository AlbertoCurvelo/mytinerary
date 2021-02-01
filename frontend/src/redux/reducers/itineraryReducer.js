const initialState = {
  itinerariesForThisCity:[]
}
export function itineraryReducer(state=initialState,action){
  switch (action.type) {
    case 'LOAD_ITINERARIES_FOR_THIS_CITY':
      return{
        ...state,
        itinerariesForThisCity:action.payload
      }
    default: return state
  }
}