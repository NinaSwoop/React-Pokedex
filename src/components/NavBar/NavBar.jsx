import React from "react";

const Navbar = ({ pokemonList, updatePokemon }) => {
  return (
    <div>
     {/* On se  sert de la fonction map pour créer des boutons dynamiquement selon le nombre de pokémon, 
     on met à jour le Pokémon en cliquant sur le bouton correspondant*/}
      {pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => updatePokemon(index)}>{pokemon.name}</button>
      ))}
    </div>
  );
};

export default Navbar;