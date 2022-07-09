import { combineReducers } from 'redux'

import counterReducer from '../features/counter/counterSlice';
import { getPokemonsReducer, getPokemonByIdReducer } from './pokeapi/'

export default combineReducers({
  // Add your reducers here
  counter: counterReducer,
  pokemonsReducer: getPokemonsReducer,
  pokemonsListReducer: getPokemonByIdReducer
})
