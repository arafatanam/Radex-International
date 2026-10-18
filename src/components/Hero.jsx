import { Link } from 'react-router-dom';
import { Chat } from './Icons.jsx';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <video
        className="hero-media"
        src="/hero.mp4"
        poster="/images/post_11.jpeg"
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
