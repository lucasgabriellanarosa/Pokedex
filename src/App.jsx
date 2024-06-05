import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home/Home';
import { Layout } from './pages/Layout/Layout';
import { Pokemon } from './pages/Pokemon/Pokemon';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Pokedex/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/Pokedex/:pokemonName' element={<Pokemon />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
