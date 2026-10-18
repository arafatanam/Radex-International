import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo.jsx';
import { Menu, Cross } from './Icons.jsx';

const links = [
  { to: '/builds', label: 'Builds' },
  { to: '/upgrades', label: 'Upgrades' },
  { to: '/gallery', label: 'Gallery' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="header">
      <div className="wrap header-inner">
        <Link to="/" className="brand" aria-label="Radex International home">
          <Logo />
          <span className="brand-name">Radex International</span>
        </Link>
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Cross /> : <Menu />}
        </button>
        <nav id="main-nav" className={`nav ${open ? 'open' : ''}`} aria-label="Main">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/request" className="btn small">
            Request a part
          </Link>
        </nav>
      </div>
    </header>
  );
}
