import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import './Layout.css';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useRef } from 'react';


export const Layout = () => {
    const inputQuery = useRef()

    const [pokemonList, setPokemonList] = useState([])
    const [query, setQuery] = useState("")
  
    useEffect(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1025`).then((res) => setPokemonList(res.data.results))
    }, [])

    const updateQuery = () => {
      setQuery(inputQuery.current.value)
    }

    console.log(pokemonList)
    
  return (
    <div className='mainContainer'>
        <nav className='navContent'>
          <h1 className='appLogoTitle'>Pokédex</h1>
          <input ref={inputQuery} type="text" placeholder='Pokémon' className='searchPokemonInput' value={query} onChange={updateQuery}/>
          <ul className='pokemonSearchList'>
              {
                pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(query.toLowerCase())).map((filteredPokemon, index) => (
                  <li key={index}>
                    <Link to={`/Pokedex/${filteredPokemon.name}`} className='pokemonLi'>{filteredPokemon.name}</Link>
                  </li>
                ))
              }
          </ul>
        </nav>

        <main className='mainContent'>
            <Outlet />
        </main>
    </div>
  )
}
