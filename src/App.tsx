import "./App.css";
import "./components/PokemonCard.css"
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

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

function App() {
  const [pokemonIndex, setPokemonIndex] = useState("bulbasaur"); 
  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonIndex);           
 
  if (pokemon == null) {
    return <p>Pokémon introuvable</p> // Si pokemon est undefined, on affiche "Pokémon introuvable" pour éviter une erreur
  };

  return (
      <>
        <nav>
          {pokemonList.map((po) => (  // pokemonList.map(...) génère une liste de boutons, un par Pokémon et "po" représente la clé de chaque pokémon
            <button key={po.name} onClick={() => setPokemonIndex(po.name)}>  
              {po.name}
            </button>
          ))} 
        </nav>
          <PokemonCard pokemon={pokemon} />
      </>
  );
};

export default App;
