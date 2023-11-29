import styles from './PokemonCard.module.css';
import PropTypes from "prop-types";

const PokemonCard = (props) => {

    PokemonCard.propTypes = {
        pokemon: PropTypes.shape ({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string
      }),
    }

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