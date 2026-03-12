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
  },
  {
    img: BERNARDO,
    title: 'Houses',
  },
  {
    img: JAY,
    title: 'Jay',
  },
  {
    img: CANALL,
    title: 'Canall'
  }
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
            <img src={artist.img} alt={artist.title} className="artist-image" />
            <p className="artist-title">{artist.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ArtistsCard;