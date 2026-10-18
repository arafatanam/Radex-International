import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';
import { waLink, INSTAGRAM_URL, EMAIL } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Logo />
          <p className="footer-tag">
            Sourced globally. Shipped worldwide. OEM, aftermarket, performance. Demand has no
            borders, neither do we.
          </p>
          <p className="script">Keep your build moving.</p>
        </div>
        <nav aria-label="Footer">
          <h3>Explore</h3>
          <Link to="/builds">Builds</Link>
          <Link to="/upgrades">Upgrades</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/request">Request a part</Link>
        </nav>
        <div>
          <h3>Contact</h3>
          <a href={waLink('Hi Radex International, I have a question.')} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          {INSTAGRAM_URL && (
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              Instagram
            </a>
          )}
          {EMAIL && <a href={`mailto:${EMAIL}`}>{EMAIL}</a>}
        </div>
      </div>
      <div className="wrap footer-base">© {new Date().getFullYear()} Radex International</div>
    </footer>
  );
}
