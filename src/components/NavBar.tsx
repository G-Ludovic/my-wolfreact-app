import "./NavBar.css"

interface Pokemon {
    name: string;
    imgSrc?: string;
  }
  
  interface NavBarProps {
    setPokemonIndex: (name: string) => void; 
    // prend un argument name de type string et qui ne retourne rien (void) pour utiliser le composant parent via le hook "useState"
    pokemonList: Pokemon[];
    // pour respecter le faite que "pokemonList" doit être un tableau d'objets qui respecte la structure de l'interface "Pokemon" qui déclare à son tour la structure des objets Pokémon
  }

function NavBar ({ pokemonList, setPokemonIndex }: NavBarProps) {

    // pour être appelé lorsqu'un utilisateur clique sur un des boutons, qui met à jour l'index du pokémon sélectionné et vérifie si c'est "pikachu"
    const handleChangePokemon = (pokemonIndex: string) => {setPokemonIndex(pokemonIndex); 

        // si le Pokémon sélectionné est "pikachu" on affiche l'alerte
        if (pokemonIndex === "pikachu") {
            alert("pika pikachu !!!");
        }
    };

    return <div>
                <nav>
                {pokemonList.map((po) => ( 
                    <button 
                        key={po.name}
                        type="button"
                        onClick={() => handleChangePokemon(po.name)}>  
                        {po.name}
                    </button>
                ))}
                </nav>
            </div>
}
  
export default NavBar;