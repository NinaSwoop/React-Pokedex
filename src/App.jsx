import './App.css';
// Import des composants
import MyTitle from './components/MyTitle/MyTitle.jsx';
import PokemonCard from './components/PokemonCard/PokemonCard.jsx';
import NavBar from './components/Navbar/Navbar.jsx';

// Import du hook useState qui va définir l'état local
import { useState } from "react";

function App() {

  // Déclaration de l'état local avec le getter pokemonIndex et le setter setPokemonIndex initialisé à 0
  const [pokemonIndex, setPokemonIndex] = useState(0);

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

  const handlePrevious = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  const handleNext = () => {

    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };
  
  // Déclaration de la constante currentPokemon qui récupère l'objet pokemonList à l'index pokemonIndex
  const currentPokemon = pokemonList[pokemonIndex];

  // Affichage du composant App
  return (
    <>
      <div>
        <MyTitle />
      </div>
      <div>
        {/* Affichage du composant PokemonCard avec la props pokemon qui prend la valeur de la constante currentPokemon */}
        <PokemonCard pokemon={currentPokemon} />
      </div>
      <NavBar onPrevious={handlePrevious} onNext={handleNext} />
    </>
  );
};

// Export du composant App
export default App;

