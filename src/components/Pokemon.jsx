import React, { useState } from 'react'
import axios from 'axios';

const Pokemon = () => {
    const [pokemonList, setpokemonList] = useState([]);
    const getPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=898')
            .then(response => {
                setpokemonList(response.data.results)
                console.log(response)
            })
            .catch(err => {
                console.log("error", err)
            })
    }
    return (
        <>
            <button onClick={getPokemon}>Get Pokemon:</button>
            {
                pokemonList.map((pokemon, idx) => {
                    return (
                        <p key={idx}>{pokemon.name}</p>
                    )
                })
            }
        </>
    )
}
export default Pokemon;