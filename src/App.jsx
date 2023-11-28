import './App.css';
import MyTitle from './components/MyTitle/MyTitle.jsx';
import PokemonCard from './components/PokemonCard/PokemonCard.jsx';

function App() {

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

  const pokemon = pokemonList[0];

  return (
    <>
      <div>
        <MyTitle />
      </div>
      <div>
        <PokemonCard pokemon={pokemon}/>
      </div>
    </>
  );
};

export default App;