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

const mixes = [
  {
    img: cdj3,
    artist: "Alma",
    title: "Mix / Set — Alma",
    mixUrl: "https://soundcloud.com/almawav"
  },
  {
    img: cdj,
    artist: "Canall",
    title: "Mix / Set — VNC House Santos",
    mixUrl: "https://soundcloud.com/c_nall/canall-vnc-house-santos"
  },
  {
    img: cdj2,
    artist: "Jay",
    title: "Mix / Set — House In Da House",
    mixUrl: "https://www.youtube.com/watch?v=0NOnzksBMpE&t=2s"
  },
  {
    img: cdj4,
    artist: "Houses",
    title: "Mix / Set — House In Da House",
    mixUrl: "https://www.youtube.com/watch?v=PyU2ahxYNxw"
  },
];

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Main/>
      <SobreCard/>
      <ArtistsCard/>
      <MixesCard mixes={mixes} />
      <ContatoCard/>
    </div>
  )
}

export default App
