import React, { useState } from 'react';

import { imageTypes, coloursType, capitalize } from '../../utils/pokemonsTypes';

const PokemonCard = ({ pokemonData, handleModalData }) => {

  return (
    <>
      <div className="card" >
        <div className="card__img" style={{backgroundColor: `${coloursType(pokemonData.types[0].type.name)}`}}
          onClick={() => handleModalData(pokemonData)}
        >
          <img src={pokemonData.sprites.other?.home?.front_default} alt={pokemonData.name} />
        </div>
        <div className="card__body">
          <h3 className="card-title">{capitalize(pokemonData.name)}</h3>
          <div className="types">
            <div className="div__types">
              {
                pokemonData.types.map((type) => (
                  <span key={type.type.name} className="types__badge"
                        style={{backgroundColor: `${coloursType(type.type.name)}`}}>
                    <img src={imageTypes(type.type.name)} alt={type.type.name}/>{capitalize(type.type.name)}
                  </span>
                ))
              }
            </div>
          </div>
          <div className="pokemon__info">
            <div className="abilities">
              <strong>Abilities</strong><br/> {pokemonData.abilities.map((ability) => capitalize(ability.ability.name)).join(', ')}
            </div>
            <div className="stats" style={{color:'red', fontSize:'24px'}}>
              &#10084;
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PokemonCard;
