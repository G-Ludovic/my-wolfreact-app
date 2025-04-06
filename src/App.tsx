import "./App.css";
import "./components/PokemonCard.css"
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";


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

  useEffect(() => {
    alert("hello pokemon trainer :)");
  }, []);

  const [pokemonIndex, setPokemonIndex] = useState("bulbasaur"); 
  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonIndex);           
 
  if (pokemon == null) {
    return <p>Pokémon introuvable</p> // Si pokemon est undefined, on affiche "Pokémon introuvable" pour éviter une erreur
  };

  return (
      <div>
        <NavBar setPokemonIndex={setPokemonIndex} pokemonList={pokemonList} />
        <PokemonCard pokemon={pokemon} />
      </div>
  );
}

export default App;
