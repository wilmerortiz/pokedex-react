import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';

import NavBar from './components/navbar/NavBar';
import SearchBar from './components/searchbar/SearchBar';

import './App.css';
import {Pokedex} from "./components/pokemons/Pokedex";
import Paginate from "./components/paginate/Paginate";

function App() {
  return (
    <div className="App">

      {/*<Counter />*/}
      <NavBar />
      <SearchBar />
      <Pokedex />
      <Paginate />
    </div>
  );
}

export default App;
