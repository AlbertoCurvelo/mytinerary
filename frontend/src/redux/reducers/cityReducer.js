const initialState = {
  //constantes
}

export function cityReducer(state= initialState, action){
  switch (action.type) {
    case 'loQueSea':
      return {
        state
      }
    default:
      return state
  }
}