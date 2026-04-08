import React, { useState, useEffect, useRef } from "react";
import "./MixesCard.css";
import videoBg from "../../assets/video-bg.mp4";

export default function MixesCard({ mixes = [] }) {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );

  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const startX = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setCurrent(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* CONFIG */
  const slidesToShow = isMobile ? 2 : Math.min(3, mixes.length || 3);

  // número de “páginas”
  const totalDots = Math.ceil(mixes.length / slidesToShow);

  useEffect(() => {
    if (current > totalDots - 1) {
      setCurrent(0);
    }
  }, [current, totalDots]);

  const slideWidthPercent = 100 / slidesToShow;

  /* ===== SWIPE ===== */

  const handleStart = (clientX) => {
    setIsDragging(true);
    startX.current = clientX;
  };

  const handleMove = (clientX) => {
    if (!isDragging) return;
    const delta = clientX - startX.current;
    setDragOffset(delta);
  };

  const handleEnd = () => {
    setIsDragging(false);

    const threshold = 50; // sensibilidade

    if (dragOffset < -threshold && current < totalDots - 1) {
      setCurrent((prev) => prev + 1);
    } else if (dragOffset > threshold && current > 0) {
      setCurrent((prev) => prev - 1);
    }

    setDragOffset(0);
  };

  return (
    <>
      <section id="Mixes" className="mixes-section">
        <div className="mixes-header">
          <h1 className="label">MIXES</h1>
          <p className="title">UM QUARTO RECORDS</p>
        </div>

        <div
          className="mixes-carousel"
          onMouseDown={(e) => handleStart(e.clientX)}
          onMouseMove={(e) => handleMove(e.clientX)}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={(e) => handleStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
          onTouchEnd={handleEnd}
        >
          <div
            className="mixes-track"
            style={{
              transform: `translateX(calc(-${current * slideWidthPercent}% + ${dragOffset}px))`,
              transition: isDragging ? "none" : "transform 0.4s ease",
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

      <div className="video-strip-container">
        <video className="video-strip" autoPlay loop muted playsInline>
          <source src={videoBg} type="video/mp4" />
        </video>
      </div>
    </>
  );
}