const initialState = {
  itinerariesForThisCity:[],
  activitiesForThisItinerary:[]
}
export function itineraryReducer(state=initialState,action){
  switch (action.type) {
    case 'LOAD_ITINERARIES_FOR_THIS_CITY':
      return{
        ...state,
        itinerariesForThisCity:action.payload
      }
    case 'LOAD_ACTIVITIES_FOR_THIS_ITINERARY':
      return {
        ...state,
        activitiesForThisItinerary:action.payload
      }
    default: return state
  }
}