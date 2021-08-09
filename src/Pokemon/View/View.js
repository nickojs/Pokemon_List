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
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name} />

          Type of Pokemon
          <h1>{pokemon.types[0].type.name}</h1>

          Evolutions
          {/*<h1>{pokemon.APIResource[0].evolution_chain.name}</h1>*/}

          {/*<ul className="PokemonView__abilities">
      {pokemon.abilities.map((item) => (
        <li>{item.ability.name}</li>
      ))}
      </ul>*/}
        </div>
    );
  };
  
  export default PokemonView;