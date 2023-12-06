import './App.css';
// Import des composants
import MyTitle from './components/MyTitle/MyTitle.jsx';
import PokemonCard from './components/PokemonCard/PokemonCard.jsx';
import NavBar from './components/Navbar/Navbar.jsx';

// Import de la librairie React
import React from "react";

// Import des hooks : useState qui va définir l'état local et useEffect qui va permettre d'effectuer des effets de bord sans action de la part de l'utilisateur
import { useState } from "react";
import { useEffect } from "react";

// Utilisation de la classe ErrorBoundary pour gérer les erreurs
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error in component:', error);
    console.error('Error info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}

function App() {

  useEffect(
    () => {
      console.log('hello pokemon trainer :)');
    },
    []
  );

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

  // Déclaration de la fonction updatePokemon qui prend en paramètre l'index
  const updatePokemon = (index) => {
    setPokemonIndex(index);
  };

  // Déclaration de la constante currentPokemon qui récupère l'objet pokemonList à l'index pokemonIndex
  const currentPokemon = pokemonList[pokemonIndex];

  // Affichage du composant App
  return (
    <ErrorBoundary>
    <>
      <div>
        <MyTitle />
      </div>
      <div>
        {/* Affichage du composant PokemonCard avec la props pokemon qui prend la valeur de la constante currentPokemon */}
        <PokemonCard pokemon={currentPokemon} />
      </div>
      {/* Affichage du composant NavBar avec les props pokemonIndex, pokemonList et updatePokemon */}
      <NavBar pokemonIndex={pokemonIndex} pokemonList={pokemonList} updatePokemon={updatePokemon}/>
    </>
    </ErrorBoundary>
  );
};

// Export du composant App
export default App;

// 2. Ouvrir une alerte au démarrage : dans le composant App, ouvre une alerte au "démarrage" de l'application avec le message "hello pokemon trainer :)". Tu peux utiliser le hook useEffect ici.

// 3. Ouvrir une alerte lors de la sélection de Pikachu : dans le composant NavBar, détecte lorsque le Pokémon sélectionné devient "pikachu". Lorsque cela se produit, ouvre une alerte avec le message "pika pikachu !!!". Tu ne devrais pas utiliser le hook useEffect ici (voir "You Might Not Need an Effect").

// 4. Validation : vérifie que les alertes s'affichent correctement au démarrage de l'application et lorsque Pikachu est sélectionné dans NavBar.

// 5. Soumission : fournis le lien vers la branche events.1 de ton dépôt GitHub pour valider cette étape.
