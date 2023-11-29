import styles from './PokemonCard.module.css';

const PokemonCard = (props) => {

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

