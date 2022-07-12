import React from "react";

import './Type.css';

import { listTypes } from "../../../utils/pokemonsTypes";

const Type = () => {

  const filter = (option) => {
    console.log(option);
  }

  return (
    <div className="types__list">
      <button onClick={() => filter('todos')} className="btn__types btn__types--todos">
        <span className="img__todos">T</span> <span>Todos</span>
      </button>
      <div className="types__list types__list--custom">
        {
          listTypes.map((type) => (
            <button key={type.name} onClick={() => filter(type.name)}
                    style={{ backgroundColor:type.color }}
                    className="btn__types"
            >
              <img src={type.image} alt={type.name} />
              <span>{type.name}</span>
            </button>
          ))
        }
      </div>

    </div>
  )
}

export default Type;
