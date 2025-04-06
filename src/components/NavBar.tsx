import "./NavBar.css"

interface Pokemon {
    name: string;
    imgSrc?: string;
  }
  
  interface NavBarProps {
    setPokemonIndex: (name: string) => void;
    pokemonList: Pokemon[];
  }

function NavBar ({ pokemonList, setPokemonIndex }: NavBarProps) {
    return <div>
                <nav>
                {pokemonList.map((po) => ( 
                    <button 
                        key={po.name}
                        type="button"
                        onClick={() => setPokemonIndex(po.name)}>  
                        {po.name}
                    </button>
                ))}
                </nav>
            </div>
}
  
export default NavBar;