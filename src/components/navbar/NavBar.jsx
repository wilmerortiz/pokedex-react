import React from 'react';

const NavBar = () => {
  const logoUrl = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
  return (
    <nav className="navbar">
      <img src={logoUrl} alt=""/>
    </nav>
  );
}

export default NavBar;
