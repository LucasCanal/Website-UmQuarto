import React, { useRef, useEffect } from 'react'
import './SobreCard.css'
import videoBg from "../../assets/video-bg.mp4";

const SobreCard = () => {
  const stripRef = useRef(null)

  useEffect(() => {
    const v = stripRef.current
    if (!v) return
    v.muted = true
    v.play().catch(() => {})
  }, [])

  return (
    <section id="Sobre" className="sobre-section">
      <div className="sobre-header">
        <h1 className="label">SOBRE</h1>
        <p className="sobre-text">
          Fundada em 2024, a <strong>Um Quarto Escuro</strong> nasce do encontro entre artistas independentes que
          compartilham uma mesma linguagem: a busca pela autenticidade sonora e pela estética que ultrapassa o
          óbvio. Nosso espaço é um ponto de convergência entre música, arte visual e expressão livre.
        </p>
        <p className="sobre-text">
          Entre a penumbra e a pista, exploramos os limites entre o analógico e o digital, o orgânico e o sintético,
          uma jornada contínua pelo universo sonoro contemporâneo.
        </p>
        <p className="sobre-text signature">
          <em>Um Quarto Escuro, coletivo de música eletrõnica.</em>
        </p>
      </div>

      <div className="video-strip-container">
        <video
          ref={stripRef}
          className="video-strip"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoBg} type="video/mp4" />
        </video>
      </div>
    </section>
  )
}

export default SobreCard