import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import './Layout.css';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';


export const Layout = () => {
    const [pokemonList, setPokemonList] = useState([])
  
    useEffect(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1025`).then((res) => setPokemonList(res.data.results))
    }, [])
    
  return (
    <div className='mainContainer'>
        <nav className='navContent'>
        <h1>Pokédex</h1>
        <input type="text" placeholder='search pokemon' />
        <ul>
            {pokemonList.map((pokemon, index) => (
            <li key={index}>
              <Link to={`/Pokedex/${pokemon.name}`}>{pokemon.name}</Link>
            </li>
            ))}
        </ul>
        </nav>

        <main className='mainContent'>
            <Outlet />
        </main>
    </div>
  )
}
