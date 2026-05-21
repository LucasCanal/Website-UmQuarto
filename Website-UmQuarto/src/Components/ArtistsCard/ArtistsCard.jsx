import React from 'react'
import './ArtistsCard.css'
import ALMA from '../../assets/alma.jpg'
import BERNARDO from '../../assets/bernardo.jpg'
import JAY from '../../assets/jay.jpg'
import CANALL from '../../assets/canall.jpg'

const artists = [
  { 
    img: ALMA,
    title: 'Alma',
    presskit: 'https://drive.google.com/file/d/1h-0wpACsGLJpHdQw_ounPuzA6vUXosxZ/view?usp=sharing'
  },

  { 
    img: BERNARDO,
    title: 'Houses',
    presskit: 'https://drive.google.com/file/d/1LYjDrJuiSJeNSTpCRYe-UjMm5aRe0a2L/view?usp=drive_link'
  },

  { 
    img: JAY,
    title: 'Jay',
    presskit: 'https://drive.google.com/file/d/1Cl0c3H9K4cqh59ZiQemHHIV_SzX7iPjK/view?usp=drive_link'
  },

  { 
    img: CANALL,
    title: 'Canall',
    presskit: 'https://drive.google.com/file/d/1DReY9gOd34ieL33NJrpYLSLUbWmjFrDA/view?usp=sharing'
  },
]

const ArtistsCard = () => {
  return (
    <section id="Artistas" className="artists-section">
      <div className="artists-header">
        <h1 className="label">ARTISTAS</h1>
        <p className="title">DJ'S</p>
      </div>

      <div className="artists-grid">
        {artists.map((artist, index) => (
          <div key={index} className="artist-card">
            <a href={artist.presskit} target="_blank" rel="noopener noreferrer" className="artist-link">
              <img src={artist.img} alt={artist.title} className="artist-image" />
            </a>
            <p className="artist-title">{artist.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ArtistsCard;