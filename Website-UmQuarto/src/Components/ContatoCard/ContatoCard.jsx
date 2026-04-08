import React, { useState } from "react";
import "./ContatoCard.css";
import logo from "../../assets/logo.jpg";

export default function ContatoCard() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

  async function handleSubmit(e) {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setMsg("Email inválido");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      const data = await res.json();

      if (data.success) {
        setMsg("Email cadastrado!");
        setEmail("");
      } else {
        setMsg("Erro ao cadastrar");
      }
    } catch {
      setMsg("Erro de conexão com o servidor");
    } finally {
      setLoading(false);
    }
  }

  return (
    <footer id="Contato" className="footer">
      <div className="footer-divider"></div>

      <div className="footer-content">

        <div className="footer-left">
          <img src={logo} alt="logo" className="footer-logo" />
          <p>Santos-SP<br />umquartoescuroofficial@gmail.com</p>
        </div>

        <div className="footer-center">
          <h4>NOSSAS NOVIDADES</h4>

          <form className="newsletter" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="COLOQUE SEU EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" disabled={loading}>
              {loading ? "ENVIANDO..." : "ENVIAR"}
            </button>
          </form>

          {msg && <p className="msg">{msg}</p>}
        </div>

        <div className="footer-right">
          <div className="col">
            <a href="#Sobre">SOBRE</a>
            <a href="#Artistas">ARTISTAS</a>
            <a href="#Mixes">MIXES</a>
            <a href="#Contato">CONTATO</a>
          </div>

          <div className="col">
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/umquarto.escuro/">
              INSTAGRAM
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/um-quarto-escuro">
              SOUNDCLOUD
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© UM QUARTO ESCURO — 2026 | CULTURA | DIVERSIDADE | COLETIVO DE MÚSICA ELETRÔNICA</p>
      </div>
    </footer>
  );
}