import { useCallback, useEffect, useState } from 'react';
import { builds, civic } from '../data/builds.js';
import { Chevron, Cross } from '../components/Icons.jsx';

const groups = [
  ...builds.filter((b) => b.images.length).map((b) => ({ id: b.slug, name: b.vehicle, images: b.images })),
  { id: 'honda-civic-fe1', name: 'Honda Civic FE1', images: civic.images },
];
const all = groups.flatMap((g) => g.images.map((im) => ({ ...im, group: g.id, name: g.name })));

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [open, setOpen] = useState(null);
  const shown = filter === 'all' ? all : all.filter((im) => im.group === filter);

  const step = useCallback(
    (d) => setOpen((v) => (v == null ? v : (v + d + shown.length) % shown.length)),
    [shown.length]
  );

  useEffect(() => {
    if (open == null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowLeft') step(-1);
      if (e.key === 'ArrowRight') step(1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, step]);

  const current = open != null ? shown[open] : null;

  return (
    <section className="section">
      <div className="wrap">
        <h1 className="page-title">
          THE <em className="red">GALLERY</em>
        </h1>
        <p className="lead">Every part, every build, in one place.</p>

        <div className="chips" role="group" aria-label="Filter by vehicle">
          <button className={filter === 'all' ? 'on' : ''} onClick={() => setFilter('all')}>
            All
          </button>
          {groups.map((g) => (
            <button key={g.id} className={filter === g.id ? 'on' : ''} onClick={() => setFilter(g.id)}>
              {g.name}
            </button>
          ))}
        </div>

        <div className="gallery">
          {shown.map((im, idx) => (
            <button key={im.src} className="tile" onClick={() => setOpen(idx)} aria-label={`Open: ${im.alt}`}>
              <img src={im.src} alt="" loading="lazy" onError={(e) => (e.currentTarget.style.visibility = 'hidden')} />
            </button>
          ))}
        </div>
      </div>

      {current && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={current.alt} onClick={() => setOpen(null)}>
          <button className="lb-close" onClick={() => setOpen(null)} aria-label="Close">
            <Cross />
          </button>
          <button
            className="carousel-btn prev"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous image"
          >
            <Chevron dir="left" />
          </button>
          <img src={current.src} alt={current.alt} onClick={(e) => e.stopPropagation()} />
          <button
            className="carousel-btn next"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next image"
          >
            <Chevron />
          </button>
          <p className="lb-cap">
            {current.name}. {open + 1} / {shown.length}
          </p>
        </div>
      )}
    </section>
  );
}
