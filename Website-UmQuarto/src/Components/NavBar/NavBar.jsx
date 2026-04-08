import React, { useState, useEffect, useRef } from 'react'
import './NavBar.css'

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav ref={navRef}>
      <div className='nav-logo-container'>
        <h1>Um Quarto Escuro</h1>
      </div>

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