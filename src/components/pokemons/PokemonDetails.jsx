import { imageTypes, coloursType, capitalize } from '../../utils/pokemonsTypes';

const PokemonDetails = ({pokemonData}) => {

  return (
    pokemonData.id &&
    <div className="details">
      <div className="details-header" style={{backgroundColor: pokemonData?.name && `${coloursType(pokemonData?.types[0]?.type?.name)}`}}>
        <div className="details__name">
          <div className="name_and_types">
            <h2>{pokemonData.name}</h2>
            <h3>#{pokemonData?.id}</h3>
          </div>
          <div className="details__types">
            {
              pokemonData?.types?.map((type) => (
                <span key={type.type.name} className="types--badge">
                  <img src={imageTypes(type.type.name)} alt={type.type.name}/>{capitalize(type.type.name)}
                </span>
              ))
            }
          </div>
          <div className="details__img">
            <img src={pokemonData?.sprites?.other?.home?.front_default} alt={pokemonData?.name} />
          </div>
        </div>
      </div>
      <div className="details__body">
        <div className="experiencia">
          <div className="experiencia__stats">
            <span>{`HP ${pokemonData?.stats[0]?.base_stat}`}</span>
            <span>XP {pokemonData?.base_experience}</span>
          </div>
        </div>
        <div className="details__abilities">
          <strong>Abilities</strong><br/>
          {pokemonData?.abilities?.map((ability) => capitalize(ability.ability.name)).join(', ')}
        </div>
      </div>
    </div>
  )
}

export default PokemonDetails;
