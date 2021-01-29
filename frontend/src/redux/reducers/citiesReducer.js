const initialState = {
  cities:[],
  filterCities:[],
  textFindUse:false
}

export function citiesReducer(state= initialState, action){
  switch (action.type) {
    case 'LOAD_CITIES':
      return {
        ...state,
        cities: action.payload,
        filterCities: action.payload
      }
    case 'FILTER':
        state.textFindUse=true
        return {
          ...state,
          /*Cada cambio en el input del componente lo recibo por action.payload (cargado en citiesAction) y normalizo,
          aplico a cities proveniente del store (por medio del state actual) 
          un filter por nombre de la ciudad (lo normalizo).
          el return lo almaceno en filterCities directamente a mi state para que re-renderice*/
          filterCities:state.cities.filter(({titleCity})=>{
            return titleCity.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '').indexOf(action.payload.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase().trim()) === 0
          })
      }
    default:
      return state
  }
}