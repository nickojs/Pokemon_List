import React, {
    useEffect,
    useState,
    useContext
  } from 'react';
  import { useParams } from 'react-router-dom';
  import AppContext from '../../AppContext/Context';
  import './View.css';
  
  const PokemonView = () => {
    const { setToPokelist } = useContext(AppContext);
    const [pokemon, setPokemon] = useState(null);
    const { name } = useParams();

    useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((r) => r.json())
        .then((resultPokemon) => {
          setToPokelist(resultPokemon);
          setPokemon(resultPokemon);
        });
    }, [name, setToPokelist]);

    if (!pokemon) {
      return null;
    }
    
    return (

     <div className="PokemonView">
          <h1>{pokemon.name}</h1>
          <div class="circle"><img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}/></div>

          <h2>Type of Pokemon</h2>
          <span>{pokemon.types[0].type.name}</span>

          <h3>Evolutions</h3>
        
          {/*<ul className="PokemonView__abilities">
            {pokemon.abilities.map((item) => (
            <li>{item.ability.name}</li>
          ))}
            </ul>*/}

          {/*<ul className="PokemonView__EvolutionChain">
            {pokemon.EvolutionChain.map((chain) => (
            <li>{chain.EvolutionChain.name}</li>
          ))}
            </ul>*/}
    </div>
    );
  };
  
  export default PokemonView;