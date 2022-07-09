import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';

import './App.css';
import {PokemonsList} from "./components/pokemons/PokemonsList";

function App() {
  return (
    <div className="App">

      {/*<Counter />*/}

      <PokemonsList />

    </div>
  );
}

export default App;
