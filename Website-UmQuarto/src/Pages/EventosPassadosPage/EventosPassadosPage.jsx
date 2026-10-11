import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import ContatoCard from '../../Components/ContatoCard/ContatoCard'

// Import dos dados da pasta data
import { eventosPassados } from '../../data/eventosPassados'

import '../../Components/EventCard/EventCard.css'
import './EventosPassadosPage.css'

const anos = [...new Set(eventosPassados.map((ev) => ev.ano))]

const EventosPassadosPage = () => {
  const [filtro, setFiltro] = useState('todos')
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const lista =
    filtro === 'todos'
      ? eventosPassados
      : eventosPassados.filter((ev) => ev.ano === filtro)

  const fechar = useCallback(() => setLightbox(null), [])
  const mover = useCallback(
    (dir) =>
      setLightbox((l) =>
        l ? { ...l, index: (l.index + dir + l.fotos.length) % l.fotos.length } : l
      ),
    []
  )

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e) => {
      if (e.key === 'Escape') fechar()
      if (e.key === 'ArrowRight') mover(1)
      if (e.key === 'ArrowLeft') mover(-1)
    }
    const overflowAnterior = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflowAnterior
    }
  }, [lightbox, fechar, mover])

  return (
    <div className="App">
      <section id="EventosPassados" className="event-section pe-page">
        <div className="event-header">
          <Link to="/" className="pe-back">
            &lt; voltar ao início
          </Link>
          <h1 className="label">EVENTOS PASSADOS</h1>
          <p className="title">O QUE JÁ ROLOU</p>

          {anos.length > 1 && (
            <div className="pe-filtros" role="group" aria-label="Filtrar por ano">
              {['todos', ...anos].map((a) => (
                <button
                  key={a}
                  type="button"
                  className={`pe-filtro ${filtro === a ? 'is-active' : ''}`}
                  aria-pressed={filtro === a}
                  onClick={() => setFiltro(a)}
                >
                  {a === 'todos' ? 'TODOS' : a}
                </button>
              ))}
            </div>
          )}
        </div>

        {lista.length === 0 && <p className="pe-vazio">Nada por aqui ainda.</p>}

        {lista.map((ev) => {
          const paragrafos = [].concat(ev.descricao || [])
          const flyer = ev.capa ? (
            <img
              src={ev.capa}
              alt={`Flyer ${ev.titulo} - Um Quarto Escuro`}
              className="event-flyer"
            />
          ) : (
            <span className="pe-flyer-vazio">sem flyer</span>
          )

          return (
            <article key={ev.id} id={ev.id} className="pe-event">
              <div className="event-content">
                {ev.instagram ? (
                  <a
                    href={ev.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="event-flyer-link"
                  >
                    {flyer}
                  </a>
                ) : (
                  <div className="event-flyer-link">{flyer}</div>
                )}

                <div className="event-info">
                  <h2 className="event-name">{ev.titulo}</h2>

                  <p className="event-details">
                    📍 {ev.local} <br />
                    📅 {ev.data}
                    {ev.horario && <> &nbsp;|&nbsp; 🕥 {ev.horario}</>}
                    {ev.valor && <> &nbsp;|&nbsp; 🎟️ {ev.valor}</>}
                  </p>

                  <p className="event-description">
                    {paragrafos.map((p, i) => (
                      <React.Fragment key={i}>
                        {p}
                        {i < paragrafos.length - 1 && (
                          <>
                            <br />
                            <br />
                          </>
                        )}
                      </React.Fragment>
                    ))}
                  </p>

                  {ev.lineup?.length > 0 && (
                    <p className="pe-lineup">
                      <span className="pe-lineup-label">Line-up:</span>{' '}
                      {ev.lineup.join(', ')}
                    </p>
                  )}

                  {ev.instagram && (
                    <a
                      href={ev.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="event-cta"
                    >
                      VER NO INSTAGRAM
                    </a>
                  )}
                </div>
              </div>

              {/* Tira de filme com as fotos da noite
              <div className="pe-film">
                {ev.fotos?.length > 0 ? (
                  <div
                    className="pe-film-scroll"
                    tabIndex={0}
                    aria-label={`Fotos de ${ev.titulo}`}
                  >
                    {ev.fotos.map((foto, i) => (
                      <button
                        key={i}
                        type="button"
                        className="pe-frame"
                        onClick={() =>
                          setLightbox({ fotos: ev.fotos, titulo: ev.titulo, index: i })
                        }
                        aria-label={`Abrir foto ${i + 1} de ${ev.titulo}`}
                      >
                        <img src={foto} alt="" loading="lazy" />
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="pe-film-empty">Fotos em breve.</p>
                )}
              </div>
              */}
            </article>
          )
        })}
      </section>

      <ContatoCard />

      {lightbox && (
        <div
          className="pe-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Fotos de ${lightbox.titulo}`}
          onClick={fechar}
        >
          <button type="button" className="pe-lb-close" onClick={fechar} aria-label="Fechar">
            FECHAR
          </button>

          {lightbox.fotos.length > 1 && (
            <button
              type="button"
              className="pe-lb-nav pe-lb-prev"
              onClick={(e) => {
                e.stopPropagation()
                mover(-1)
              }}
              aria-label="Foto anterior"
            >
              &lt;
            </button>
          )}

          <img
            className="pe-lb-img"
            src={lightbox.fotos[lightbox.index]}
            alt={`Foto ${lightbox.index + 1} de ${lightbox.titulo}`}
            onClick={(e) => e.stopPropagation()}
          />

          {lightbox.fotos.length > 1 && (
            <button
              type="button"
              className="pe-lb-nav pe-lb-next"
              onClick={(e) => {
                e.stopPropagation()
                mover(1)
              }}
              aria-label="Próxima foto"
            >
              &gt;
            </button>
          )}

          <p className="pe-lb-count">
            {lightbox.index + 1} / {lightbox.fotos.length}
          </p>
        </div>
      )}
    </div>
  )
}

export default EventosPassadosPage