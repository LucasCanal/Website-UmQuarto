import React, { useRef, useEffect } from 'react'
import './SobreCard.css'
import videoBg from "../../assets/video-bg.mp4";

const SobreCard = () => {
  const stripRef = useRef(null)

  useEffect(() => {
    const v = stripRef.current
    if (!v) return
    v.muted = true
    v.play().catch(() => { })
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
          Em meio à escassez de espaços e oportunidades, o projeto surge como resposta direta à necessidade de criar, ocupar e compartilhar. Um Quarto Escuro se desenvolve a partir da colaboração, valorizando a troca entre artistas e a construção de uma identidade coletiva que se fortalece na soma.

          A proposta do coletivo se baseia na curadoria sensível e na intenção de provocar, explorando atmosferas que conectam som, imagem e presença. Cada encontro é pensado como um ambiente de imersão, onde a liberdade criativa e a expressão individual coexistem com um direcionamento estético consistente.

          Ao longo de sua trajetória, o coletivo constrói parcerias que vão além do palco, estabelecendo relações duradouras com artistas, espaços e iniciativas que compartilham da mesma visão. A autenticidade é o ponto de partida e também o elo que sustenta essas conexões.

          Um Quarto Escuro é, acima de tudo, um movimento de criação coletiva, onde a música eletrônica se torna meio para experiências genuínas, guiadas pela identidade, pela troca e pela construção de algo que só existe quando feito em conjunto.
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