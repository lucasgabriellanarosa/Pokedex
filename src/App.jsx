import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import axios from "axios";

function App() {

  const [pokemonList, setPokemonList] = useState([])
  
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`).then((res) => setPokemonList(res.data.results))
  }, [])
  

  return (
    <div>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
