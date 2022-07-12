import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Paginate from '../paginate/Paginate';
import Type from "../filter/type/Type";

import './SearchBar.css';

import { getAllPokemons, getPokemonByName } from '../../actions/pokeapi';


const SearchBar = () => {
  let dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const onChange = (e) => {
    setSearch(e.target.value);
    if(e.target.value.length === 0) {
      dispatch(getAllPokemons());
    }
  }

  const hableSearchPokemon = () => {
    if(search.length > 0) {
      dispatch(getPokemonByName(search.toLowerCase()));
    }else{
      dispatch(getAllPokemons());
    }
  }

  return (<div className="search__bar">
    <div className="search__container">
      <input type="search" placeholder="Buscar por id o por nombre" onChange={onChange} />
      <div className="button" onClick={hableSearchPokemon}>&#128269;</div>
    </div>
    <Type />
    <div className="header">
      <h4 className="header__title">POKEDEX</h4>
      <Paginate />
    </div>
  </div>)
}

export default SearchBar;
