import './App.css';
import MyTitle from './components/MyTitle/MyTitle.jsx';
import PokemonCard from './components/PokemonCard/PokemonCard.jsx';
import { useState } from "react";

function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0);
  console.log(pokemonIndex);


  const handleClick = (direction) => {
    if (direction === "previous" && pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    } else if (direction === "next" && pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };

  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];

    const currentPokemon = pokemonList[pokemonIndex];

  return (
    <>
      <div>
        <MyTitle />
      </div>
      <div>
        <PokemonCard pokemon={currentPokemon}/>
      </div>
      {pokemonIndex > 0 && <button onClick={() => handleClick("previous")}>Précédent</button>}
      {pokemonIndex < pokemonList.length - 1 && <button onClick={() => handleClick("next")}>Suivant</button>}
    </>
  );
};

export default App;

