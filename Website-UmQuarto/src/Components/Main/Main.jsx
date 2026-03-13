import React, { useRef, useEffect } from 'react'
import videoBg from "../../assets/video-bg.mp4";
import './Main.css'

const Main = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current

    if (!video) return

    // começa no segundo 2
    const startTime = 1.5
    const endTime = 6

    const handleLoaded = () => {
      video.currentTime = startTime
      video.play().catch(() => { })
    }

    const handleTimeUpdate = () => {
      if (video.currentTime >= endTime) {
        video.currentTime = startTime
        video.play()
      }
    }

    video.addEventListener("loadedmetadata", handleLoaded)
    video.addEventListener("timeupdate", handleTimeUpdate)

    return () => {
      video.removeEventListener("loadedmetadata", handleLoaded)
      video.removeEventListener("timeupdate", handleTimeUpdate)
    }
  }, [])

  return (
    <section className="main-section">
      <div className="video-container">
        <video
          ref={videoRef}
          src={videoBg}
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          className="background-video"
        />
      </div>
    </section>
  )
}

export default Main
