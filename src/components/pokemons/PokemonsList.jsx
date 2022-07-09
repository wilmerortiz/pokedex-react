import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PokemonCard from "./PokemonCard";

import {
  getAllPokemons,
  getPokemonByUrl,
} from '../../actions/pokeapi';

export const PokemonsList = () => {
  const dispatch = useDispatch()
  const getPokemons = useSelector((state) => state.pokemonsReducer)
  const getPokemonList = useSelector((state) => state.pokemonsListReducer)

  const { pokemons, loading, error } = getPokemons
  const { pokemonsArrayList, loadingPokemon, errorPokemon } = getPokemonList

  useEffect(() => {
    dispatch(getAllPokemons())
  },[dispatch])

  useEffect(() => {
    if (!loading && pokemons?.results?.length > 0) {
      const pokemonsList = pokemons?.results
      dispatch(getPokemonByUrl(pokemonsList))
    }
  },[pokemons, dispatch])

  const next = (url) => {
    url && dispatch(getAllPokemons(url));
  }

  const previous = (url) => {
    url && dispatch(getAllPokemons(url));
  }

  return (
    <>
      <h1>Pokemons List</h1>
      {
        loadingPokemon ? <p>Loading...</p>
          : errorPokemon ? <p>{errorPokemon}</p>
            : pokemonsArrayList?.length > 0 ?
              <div className="d-grid">
                {pokemonsArrayList?.map((poke) => (
                  <PokemonCard key={poke.id} pokemonData={poke} />
                ))}
              </div>
              : <p>No pokemons found</p>
      }
    </>
  )

}
