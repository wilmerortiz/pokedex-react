import * as pokeapiTypes from './types';
import axios from 'axios';

const { REACT_APP_URL_POKEAPI } = process.env

export const getAllPokemons = (limit = 18, offset = 0) => async (dispatch) => {
  console.log(limit, offset)
  const urlBase = `${REACT_APP_URL_POKEAPI}?offset=${offset}&limit=${limit}`;
  console.log(urlBase)
  try {
    dispatch({
      type: pokeapiTypes.GET_POKEMONS_REQUEST
    });

    const { data } = await axios.get(`${urlBase}`);
    dispatch({
      type: pokeapiTypes.GET_POKEMONS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: pokeapiTypes.GET_POKEMONS_FAILURE,
      payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
    })
  }
}

export const getPokemonByUrl = (pokemons) => async (dispatch) => {
  try {
    dispatch({
      type: pokeapiTypes.GET_POKEMON_REQUEST
    });

    const listOfPokemons =  pokemons.map(async (pokemon) => {
      const { data } = await axios.get(`${pokemon.url}`);
      return data;
    })

    const list = await Promise.all(listOfPokemons);

    if(list.length > 0) {
      dispatch({
        type: pokeapiTypes.GET_POKEMON_SUCCESS,
        payload: list
      });
    }

  } catch (error) {
    dispatch({
      type: pokeapiTypes.GET_POKEMON_FAILURE,
      payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
    })
  }
}

export const getPokemonByName = (nameOrId) => async (dispatch) => {
  try {
    dispatch({
      type: pokeapiTypes.GET_POKEMON_REQUEST
    });

    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);

    const pokemon = [data];

    dispatch({
      type: pokeapiTypes.GET_POKEMON_SUCCESS,
      payload: pokemon
    });
  } catch (error) {
    dispatch({
      type: pokeapiTypes.GET_POKEMON_FAILURE,
      payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
    })
  }
}
