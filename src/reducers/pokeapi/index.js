import  * as pokeapiTypes from '../../actions/pokeapi/types';

let initialState = {
  pokemons: [],
  loading: true,
  error: {},
  message: {}
}

let initialStatePokemon = {
  loadingPokemon: true,
  pokemonsArrayList: [],
  errorPokemon: null,
  messagePokemon: null
}

export const getPokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case pokeapiTypes.GET_POKEMONS_REQUEST:
      return {
        ...state,
        loading: true,
        error: {},
        message: {},
      }
    case pokeapiTypes.GET_POKEMONS_SUCCESS:
      return {
        ...state,
        pokemons: action.payload,
        loading: false,
        error: {},
        message: {}
      }

    case pokeapiTypes.GET_POKEMONS_FAILURE:
      return {
        loading: false,
        error: action.payload,
        pokemons: [],
        message: {}
      }
    default:
      return state;
  }
}

export const getPokemonByIdReducer = (state = initialStatePokemon, action) => {
  switch (action.type) {
    case pokeapiTypes.GET_POKEMON_REQUEST:
      return {
        ...state,
        loadingPokemon: true,
        errorPokemon: null,
        messagePokemon: null
      }
    case pokeapiTypes.GET_POKEMON_SUCCESS:
      return {
        ...state,
        loadingPokemon: false,
        pokemonsArrayList: action.payload,
        errorPokemon: null,
        messagePokemon: null
      }
    case pokeapiTypes.GET_POKEMON_FAILURE:
      return {
        loadingPokemon: false,
        pokemonsArrayList: [],
        errorPokemon: action.payload,
        messagePokemon: {}
      }
    default:
      return state;
  }
}
