import React from 'react'
import './EventCard.css'
import FLYER from '../../assets/flyer-2anos.jpeg'

// link de contato
const instagram = 'https://www.instagram.com/p/DbDuoJuIpEU/'
const instagramDM = 'https://ig.me/m/umquarto.escuro'

const EventCard = () => {
  return (
    <section id="Eventos" className="event-section">
      <div className="event-header">
        <h1 className="label">EVENTOS</h1>
        <p className="title">PRÓXIMA EDIÇÃO</p>
      </div>

      <div className="event-content">
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="event-flyer-link"
        >
          <img src={FLYER} alt="Flyer 2 Anos - Um Quarto Escuro" className="event-flyer" />
        </a>

        {/* informações do evento */}
        <div className="event-info">
          <h2 className="event-name">2 Anos de Um Quarto Escuro</h2>


          <p className="event-details">
            📍 Sala Especial — R. Frei Gaspar, 56, Centro, Santos - SP <br />
            🗓️ 14/08 &nbsp;|&nbsp; 🕥 A partir das 22h |
            🎟️ R$ 35
          </p>

          <p className="event-description">
            Depois de 2 anos trancados no escuro, é hora de sair pra uma Sala Especial.
            Dia 14 de agosto a gente celebra 2 anos de coletivo, cercados de quem construiu essa história com a gente até aqui.
          </p>

          {/* botão que leva direto pra DM do Instagram, já que nossos ingressos são vendidos por lá */}
          <a
            href={instagramDM}
            target="_blank"
            rel="noopener noreferrer"
            className="event-cta"
          >
            COMPRAR VIA DM
          </a>
        </div>
      </div>
    </section>
  )
}

export default EventCard