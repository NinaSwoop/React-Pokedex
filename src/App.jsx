import './App.css';
// Import des composants
import MyTitle from './components/MyTitle/MyTitle.jsx';
import PokemonCard from './components/PokemonCard/PokemonCard.jsx';

// Import du hook useState qui va définir l'état local
import { useState } from "react";

function App() {

  // Déclaration de l'état local avec le getter pokemonIndex et le setter setPokemonIndex initialisé à 0
  const [pokemonIndex, setPokemonIndex] = useState(0);

  // Déclaration de la fonction handleClick qui prend en paramètre la direction
  const handleClick = (direction) => {
    // Si la direction est "previous" et que l'index est supérieur à 0, on décrémente l'index
    if (direction === "previous" && pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);

    // Sinon si la direction est "next" et que l'index est inférieur à la longueur du tableau - 1, on incrémente l'index
    } else if (direction === "next" && pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };

  // Déclaration du tableau pokemonList
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

    // Déclaration de la constante currentPokemon qui récupère l'objet pokemonList à l'index pokemonIndex
    const currentPokemon = pokemonList[pokemonIndex];

  // Affichage du composant App
  return (
    <>
      <div>
        <MyTitle />
      </div>
      <div>

        {/* Affichage du composant PokemonCard avec la props pokemon qui prend la valeur de la constante currentPokemon */ }
        <PokemonCard pokemon={currentPokemon}/>
      </div>

      {/* Si poskemonIndex est supérieur à 0 on affiche le bouton "précédent'. On lance la fonction handleClick en passant en paramètre "previous*/ }
      {pokemonIndex > 0 && <button onClick={() => handleClick("previous")}>Précédent</button>}

      {/* Si poskemonIndex est inférieur à la longueur du tableau - 1 on affiche le bouton "suivant'. On lance la fonction handleClick en passant en paramètre "next*/ }
      {pokemonIndex < pokemonList.length - 1 && <button onClick={() => handleClick("next")}>Suivant</button>}
    </>
  );
};

// Export du composant App
export default App;

