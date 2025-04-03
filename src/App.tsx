import "./App.css";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";


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

function App() {

  const [pokemonIndex, setPokemonName] = useState(0);
  const pokemon = pokemonList[pokemonIndex];

  if (pokemon == null) {
    throw new Error("Invalid pokemon name");
  };

  return (
    <>
    <PokemonCard pokemon={pokemon} />
    <button onClick={() => setPokemonName(0)}>bulbasaur</button>
    <button onClick={() => setPokemonName(1)}>mew</button>
    </>
  );
};

export default App;
