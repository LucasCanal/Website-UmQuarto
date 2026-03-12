import React, { useState } from 'react'
import './NavBar.css'

const NavBar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav>
      <div className='nav-logo-container'>
        <h1>Um Quarto Escuro</h1>
      </div>

      {/* Botão menu mobile */}
      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menu"
      >
        ☰
      </button>

      <div className={`navbar-links-container ${open ? 'open' : ''}`}>
        <a href="#Sobre" onClick={() => setOpen(false)}>SOBRE</a>
        <a href="#Artistas" onClick={() => setOpen(false)}>ARTISTAS</a>
        <a href="#Mixes" onClick={() => setOpen(false)}>MIXES</a>
        <a href="#Contato" onClick={() => setOpen(false)}>CONTATO</a>
      </div>
    </nav>
  )
}

export default NavBar
