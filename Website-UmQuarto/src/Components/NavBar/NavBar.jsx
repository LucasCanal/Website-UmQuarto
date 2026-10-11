import React, { useState, useEffect, useRef } from 'react'
import './NavBar.css'

const links = [
  { href: '#Sobre', label: 'SOBRE' },
  { href: '#Eventos', label: 'EVENTOS' },
  { href: '#Artistas', label: 'ARTISTAS' },
  { href: '#Mixes', label: 'MIXES' },
  { href: '#Contato', label: 'CONTATO' },
]

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    const handleEscape = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <nav ref={navRef} className="navbar">
      <div className="nav-logo-container">
        <h1>Um Quarto Escuro</h1>
      </div>

      <button
        type="button"
        className={`menu-toggle ${open ? 'is-open' : ''}`}
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={open}
        aria-controls="navbar-links"
      >
        <span className="menu-toggle-bar" />
        <span className="menu-toggle-bar" />
        <span className="menu-toggle-bar" />
      </button>

      <div
        id="navbar-links"
        className={`navbar-links-container ${open ? 'open' : ''}`}
      >
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default NavBar