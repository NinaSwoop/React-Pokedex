import './App.css';
import MyTitle from './components/MyTitle/MyTitle.jsx';
import PokemonCard from './components/PokemonCard/PokemonCard.jsx';

function App() {

  return (
    <>
      <div>
        <MyTitle />
      </div>
      <div>
        <PokemonCard />
      </div>
    </>
  );
};

export default App;
