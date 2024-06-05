import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import { Loading } from '../Loading/Loading';
import './Pokemon.css';

export const Pokemon = () => {
    let {pokemonName} = useParams();
    const [pokemonData, setPokemonData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((res) => {
            setPokemonData(res.data)
            setIsLoading(false)
        })
    }, [pokemonName])

    console.log(pokemonData)
  return (
    <>
        {
            isLoading ? (
                <Loading />
            )
            :
            (
                <div className='pokemonContainer'>

                    <div>
                        <h2 className='pokemonTitle'>N°{pokemonData.id} - {pokemonName.toUpperCase()}</h2>
                        <img className='pokemonImg' src={pokemonData.sprites.front_default} />
                        <img className='pokemonImg' src={pokemonData.sprites.front_shiny} />
                        <ul className='typeContainer'>
                            {pokemonData.types.map((type, index) => (
                                <li key={index} className={`type `+ type.type.name}>{type.type.name}</li>
                            ))}
                        </ul>
                    </div>

                    <div className='rightPokemonContainer'>
                        <h2 className='pokemonTitle'>Base Stats</h2>
                        <ul className='baseStatsContainer'>
                            <li>HP: {pokemonData.stats[0].base_stat}</li>
                            <li>ATK: {pokemonData.stats[1].base_stat}</li>
                            <li>DEF: {pokemonData.stats[2].base_stat}</li>
                            <li>SP.ATK: {pokemonData.stats[3].base_stat}</li>
                            <li>SP.DEF: {pokemonData.stats[4].base_stat}</li>
                            <li>SPEED: {pokemonData.stats[5].base_stat}</li>
                        </ul>
                        
                        <audio controls key={pokemonData.name}>
                            <source src={pokemonData.cries.latest} />
                        </audio>
                        
                    </div>

                </div>
            )
        }
    </>
  )
}
