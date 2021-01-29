import {combineReducers} from 'redux'
import {citiesReducer} from './citiesReducer'
import {cityReducer} from './cityReducer'

const rootReducer = combineReducers({
  citiesR:citiesReducer,
  cityR:cityReducer
})

export default rootReducer