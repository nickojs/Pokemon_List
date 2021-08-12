import React, { useEffect } from 'react';
  import { useParams } from 'react-router-dom';
  import { usePokemon } from '../../AppContext/Provider';
  import './View.css';
  //import Evolutions from '../Evolutions/Evolutions';
  
  const PokemonView = () => {
    const { pokemonSelectHandler, selectedPokemon } = usePokemon();
    const { name } = useParams();

    useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((r) => r.json())
        .then((resultPokemon) => {
            pokemonSelectHandler(resultPokemon)
        });
    }, [name]);

    
    return selectedPokemon ? (
     <div className="PokemonView">
          <h1>{selectedPokemon.name}</h1>
          <div className="circle"><img
            src={selectedPokemon.sprites.front_default}
            alt={selectedPokemon.name}/></div>

          <h2>Type of Pokemon</h2>
          <span>{selectedPokemon.types[0].type.name}</span>

          {/*<h3>Evolutions</h3>*/}
        
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
    ): <></>;
  };
  
  export default PokemonView;