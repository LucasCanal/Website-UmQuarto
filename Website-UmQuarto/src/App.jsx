import './App.css'
import Main from './Components/Main/Main'
import ArtistsCard from './Components/ArtistsCard/ArtistsCard'
import NavBar from './Components/NavBar/NavBar'
import SobreCard from './Components/SobreCard/SobreCard'
import MixesCard from './Components/MixesCard/MixesCard'
import ContatoCard from './Components/ContatoCard/ContatoCard'
import cdj from './assets/cdj.jpeg'
import cdj2 from './assets/cdj2.jpeg'
import cdj3 from './assets/cdj3.jpeg'
import cdj4 from './assets/cdj4.jpeg'
import EventCard from './Components/EventCard/EventCard'

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

function App() {
  return (
    <>
      <NavBar/>
      <div className='App'>
        <Main/>
        <SobreCard/>
        <EventCard/>
        <ArtistsCard/>
        <MixesCard mixes={mixes} />
        <ContatoCard/>
      </div>
    </>
  )
}

export default App
