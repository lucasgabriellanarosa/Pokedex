import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import { Loading } from '../Loading/Loading';

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
    
  return (
    <div>
        {
            isLoading ? (
                <Loading />
            )
            :
            (
                <div>
                    <h1>{pokemonName}</h1>
                    <img src={pokemonData.sprites.front_default} />
                </div>
            )
        }
    </div>
  )
}
