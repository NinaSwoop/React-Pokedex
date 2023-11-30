import styles from './PokemonCard.module.css';

// On importe la librairie prop-types qui sert à typer les props
import PropTypes from "prop-types";

// On déclare le composant PokemonCard en lui passant la props pokemon
const PokemonCard = (props) => {

    // On type les props du composant PokemonCard
    PokemonCard.propTypes = {
        // qui sont de type objet
        pokemon: PropTypes.shape ({
        // qui contiennent une propriété name de type string et qui est obligatoire
        name: PropTypes.string.isRequired,
        // qui contiennent une propriété imgSrc de type string facultative
        imgSrc: PropTypes.string
      }),
    }

    // Affichage du composant PokemonCard
    return (
        // La balise <figure> est une balise HTML utilisée pour encapsuler tout type de contenu qui référence une figure, comme une image, un schéma, une illustration, un code, etc.
        <figure className={styles.card}>
            {/* Si props.pokemon.imgSrc existe (n'est pas undefined, null, ou une chaîne vide), alors une balise <img> est rendue avec l'attribut src défini par props.pokemon.imgSrc. Sinon on affiche '???' */ }
            {props.pokemon.imgSrc ? (
                <img src={props.pokemon.imgSrc} alt={props.pokemon.name} className={styles.cardImg} />
                ) : <p>???</p>}
            {/* <figcaption> : Il s'agit d'une balise HTML utilisée généralement à l'intérieur d'une balise <figure>. Elle est utilisée pour décrire ou légender le contenu de la balise <figure> */}
            <figcaption>{props.pokemon.name}</figcaption>
        </figure>
    );
};

// On exporte le composant PokemonCard
export default PokemonCard;