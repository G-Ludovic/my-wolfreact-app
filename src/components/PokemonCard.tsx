import "./PokemonCard.css"

interface Poke {
    pokemon: Props;
}

interface Props {
    name: string;
    imgSrc?: string;
}

function PokemonCard ({ pokemon }: Poke) {
        return ( 
        <>
        {pokemon.imgSrc ? (
            
            <figure className={`${pokemon.name}`}>
                <img src={pokemon.imgSrc} alt={`image représentant ${pokemon.name}`} />
                <figcaption>{pokemon.name}</figcaption>
            </figure> ) : (<p>???</p>)}
        </>
        );
};

export default PokemonCard;