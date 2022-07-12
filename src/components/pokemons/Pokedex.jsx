import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PokemonCard from "./PokemonCard";
import Modal from '../modal/Modal';
import PokemonDetails from "./PokemonDetails";

import {
  getAllPokemons,
  getPokemonByUrl,
} from '../../actions/pokeapi';

export const Pokedex = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

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

  const handleOpenModal = () => {
    setModalOpen(!modalOpen);
    setModalData({});
  }

  const handleModalData = (data) => {
    setModalData(data);
    setModalOpen(!modalOpen);
  }

  return (
    <>
      <Modal open={modalOpen} openModal={handleOpenModal} modalData={modalData} ModalComponent={PokemonDetails} />
    <div className="wrapper">
      {
        loadingPokemon ? <p>Loading...</p>
          : errorPokemon ? <p>{errorPokemon}</p>
            : pokemonsArrayList?.length > 0 ?
              <div className="d-grid">
                {pokemonsArrayList?.map((poke) => (
                  <PokemonCard key={poke.id} pokemonData={poke} handleModalData={handleModalData}/>
                ))}
              </div>
              : <p>No pokemons found</p>
      }
    </div>
    </>
  )

}
