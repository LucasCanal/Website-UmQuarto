import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Componentes da página principal
import Main from './Components/Main/Main'
import ArtistsCard from './Components/ArtistsCard/ArtistsCard'
import NavBar from './Components/NavBar/NavBar'
import SobreCard from './Components/SobreCard/SobreCard'
import MixesCard from './Components/MixesCard/MixesCard'
import ContatoCard from './Components/ContatoCard/ContatoCard'
import EventCard from './Components/EventCard/EventCard'

// Imagens
import cdj from './assets/cdj.jpeg'
import cdj2 from './assets/cdj2.jpeg'
import cdj3 from './assets/cdj3.jpeg'
import cdj4 from './assets/cdj4.jpeg'

// Nova Página (Caminho completo com a subpasta)
import EventosPassadosPage from './Pages/EventosPassadosPage/EventosPassadosPage'

const mixes = [
  {
    img: cdj3,
    artist: "ShowCunty",
    title: "JOPELOVA B2B JULIANA ALMA",
    mixUrl: "https://youtu.be/FcJOjNs4rYQ?si=ip8bpZ5O0S-HCoEk"
  },
  {
    img: cdj,
    artist: "Canall",
    title: "VNC House Santos",
    mixUrl: "https://soundcloud.com/c_nall/canall-vnc-house-santos"
  },
  {
    img: cdj2,
    artist: "Jay",
    title: "PANDANCE360°",
    mixUrl: "https://youtu.be/-bMBz_twRPE?si=PyaDPkvRPgpFrrVS"
  },
  {
    img: cdj4,
    artist: "Houses",
    title: "House In Da House",
    mixUrl: "https://youtu.be/PyU2ahxYNxw?si=vFtKNeRTCTiwlca2"
  },
];

// Componente da Home
const HomePage = () => (
  <>
    <NavBar />
    <div className='App'>
      <Main />
      <SobreCard />
      <EventCard />
      <ArtistsCard />
      <MixesCard mixes={mixes} />
      <ContatoCard />
    </div>
  </>
)

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota da Landing Page principal */}
        <Route path="/" element={<HomePage />} />

        {/* Rota para a nova página de Eventos Passados */}
        <Route path="/eventos-passados" element={<EventosPassadosPage />} />
      </Routes>
    </Router>
  )
}

export default App