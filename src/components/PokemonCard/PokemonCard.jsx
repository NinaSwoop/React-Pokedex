import styles from './PokemonCard.module.css';

const PokemonCard = (props) => {
console.log(props.pokemon);

    return (
        <figure className={styles.card}>
            {props.pokemon.imgSrc ? (
                <img src={props.pokemon.imgSrc} alt={props.pokemon.name} className={styles.cardImg} />
                ) : <p>???</p>}
            <figcaption>{props.pokemon.name}</figcaption>
        </figure>
    );
};

export default PokemonCard;

// 5. Utiliser props.pokemon : dans le composant PokemonCard, utilise props.pokemon pour réparer l'affichage de ton composant (pense à la destructuration). Tu devrais maintenant être en mesure de voir le Pokémon correctement affiché.

// 6. Validation : assure-toi que ton composant PokemonCard utilise props pour recevoir les données du Pokémon et que tout fonctionne correctement.

