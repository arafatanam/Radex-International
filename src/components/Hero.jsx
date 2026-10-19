import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Chat } from './Icons.jsx';

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const interactionEvents = [window.PointerEvent ? 'pointerdown' : 'touchstart'];
    const removeInteractionListeners = () => {
      interactionEvents.forEach((event) =>
        document.removeEventListener(event, startVideo, true)
      );
      document.removeEventListener('scroll', startOnScroll, true);
    };
    const startVideo = () => {
      let playback;
      try {
        playback = video.play();
      } catch (error) {
        if (error.name !== 'NotAllowedError') console.error('Hero video playback failed.', error);
        return;
      }

      if (!playback) {
        removeInteractionListeners();
        return;
      }

      playback.then(removeInteractionListeners).catch((error) => {
        if (error.name !== 'NotAllowedError' && error.name !== 'AbortError') {
          console.error('Hero video playback failed.', error);
        }
      });
    };
    const startOnScroll = () => {
      document.removeEventListener('scroll', startOnScroll, true);
      startVideo();
    };

    interactionEvents.forEach((event) =>
      document.addEventListener(event, startVideo, { capture: true, passive: true })
    );
    document.addEventListener('scroll', startOnScroll, { capture: true, passive: true });
    startVideo();

    return removeInteractionListeners;
  }, []);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <video
        ref={videoRef}
        className="hero-media"
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="wrap hero-inner hero-intro">
        <h1 id="hero-title">
          SOURCED GLOBALLY.
          <br />
          <em className="red">SHIPPED WORLDWIDE.</em>
        </h1>
        <p className="sub">OEM • Aftermarket • Performance</p>
        <div className="hero-actions">
          <Link to="/request" className="btn big">
            <Chat /> Start a sourcing request
          </Link>
          <Link to="/builds" className="btn ghost big">
            See recent builds
          </Link>
        </div>
        <p className="script hero-script">Keep your build moving.</p>
      </div>
    </section>
  );
}
