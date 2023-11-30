import React from "react";

const Navbar = ({ onPrevious, onNext, pokemonIndex, pokemonList }) => {
  return (
    <div>
      {/* Si pokemonIndex est supérieur à 0, on affiche le bouton "précédent". On appelle onPrevious lors du clic. */}
      {pokemonIndex > 0 && (
        <button onClick={() => onPrevious("previous")}>Précédent</button>
      )}

      {/* Si pokemonIndex est inférieur à la longueur du tableau - 1, on affiche le bouton "suivant". On appelle onNext lors du clic. */}
      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={() => onNext("next")}>Suivant</button>
      )}
    </div>
  );
};

export default Navbar;