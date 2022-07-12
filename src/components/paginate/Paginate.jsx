import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getAllPokemons,
} from '../../actions/pokeapi';

import './Paginate.css';

const Paginate = () => {

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(18);
  const [offset, setOffset] = useState(0);

  const dispatch = useDispatch()
  const getPokemons = useSelector((state) => state.pokemonsReducer)
  const getPokemonList = useSelector((state) => state.pokemonsListReducer)

  const { pokemons, loading, error } = getPokemons
  const { pokemonsArrayList, loadingPokemon, errorPokemon } = getPokemonList

  const next = async () => {
    setPage(page + 1);
    await setOffset(offset + limit);
    await dispatch(getAllPokemons(limit, offset + limit));
  }

  const previous = async () => {
    setOffset(offset - limit);
    if(offset > 0) {
      await dispatch(getAllPokemons(limit, offset - limit))
      setPage(page - 1);
    }
  }

  return (
    <div className="paginate">
      <button onClick={() => previous()} className="btn__previous">&#128072; Anterior</button>
      <div className="paginate__info">
        <span>Page {page}</span>
        <span>de</span>
        <span>{parseInt(pokemons?.count/18)} Pages</span>
      </div>
      <button onClick={() => next()} className="btn__next">&#128073; Siguiente</button>
    </div>
  )
}

export default Paginate;
