import React from 'react'
import './EventCard.css'
import FLYER from '../../assets/Halloween-2026.png'

// link de contato
const instagram = 'https://www.instagram.com/umquarto.escuro/'
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
          <img src={FLYER} alt="Flyer Halloween 1/4 Escuro - Um Quarto Escuro" className="event-flyer" />
        </a>

        {/* informações do evento */}
        <div className="event-info">
          <h2 className="event-name">Halloween 1/4 Escuro</h2>

          <p className="event-details">
            📍 CASA SECRETA - LOCAL INÉDITO EM SANTOS-SP <br />
            📅 31/10 &nbsp;|&nbsp; 🕥 A partir das 23h |
            🎟️ R$ 35
          </p>

          <p className="event-description">
            Dia 31 de outubro, a Um Quarto Escuro abre as portas para uma noite de música, dança e decisões questionáveis.

            Halloween é a desculpa. O escuro é a casa e a pista é de todo mundo.

            Escolha sua fantasia e vem.
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