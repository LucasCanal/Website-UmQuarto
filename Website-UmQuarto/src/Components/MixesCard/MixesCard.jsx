import React, { useState, useEffect } from "react";
import "./MixesCard.css";
import videoBg from "../../assets/video-bg.mp4";

export default function MixesCard({ mixes = [] }) {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Detecta resize (importante ao girar a tela)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setCurrent(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ===== CONFIGURAÇÕES ===== */
  const slidesToShow = isMobile ? 1 : Math.min(3, mixes.length || 3);

  // ✅ FIX: dots corretos
  const totalDots = isMobile
    ? 4
    : Math.max(0, mixes.length - slidesToShow + 1);

  // Evita índice inválido
  useEffect(() => {
    if (current > totalDots - 1) {
      setCurrent(0);
    }
  }, [current, totalDots]);

  const slideWidthPercent = 100 / slidesToShow;

  return (
    <>
      <section id="Mixes" className="mixes-section">
        <div className="mixes-header">
          <h1 className="label">MIXES</h1>
          <p className="title">UM QUARTO RECORDS</p>
        </div>

        <div className="mixes-carousel">
          <div
            className="mixes-track"
            style={{
              transform: `translateX(-${current * slideWidthPercent}%)`,
            }}
          >
            {mixes.map((mix, index) => (
              <a
                href={mix.mixUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mix-card"
                key={mix.id ?? index}
              >
                <img
                  src={mix.img}
                  alt={mix.title}
                  className="mix-image"
                />
                <p className="mix-caption">
                  {mix.artist} — {mix.title}
                </p>
              </a>

            ))}
          </div>

          {/* DOTS */}
          <div className="mixes-dots">
            {Array.from({ length: totalDots }).map((_, i) => (
              <span
                key={i}
                className={`dot ${current === i ? "active" : ""}`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Faixa animada */}
      <div className="video-strip-container">
        <video className="video-strip" autoPlay loop muted playsInline>
          <source src={videoBg} type="video/mp4" />
        </video>
      </div>
    </>
  );
}
