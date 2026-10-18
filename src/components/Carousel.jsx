import { useCallback, useRef, useState } from 'react';
import { Chevron } from './Icons.jsx';

export default function Carousel({ images, label = 'Image carousel' }) {
  const [i, setI] = useState(0);
  const [ratio, setRatio] = useState('1 / 1');
  const [failed, setFailed] = useState({});
  const touch = useRef(null);
  const n = images.length;
  const go = useCallback((d) => setI((v) => (v + d + n) % n), [n]);

  const onKey = (e) => {
    if (e.key === 'ArrowLeft') go(-1);
    if (e.key === 'ArrowRight') go(1);
  };
  const onTouchStart = (e) => (touch.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touch.current == null) return;
    const dx = e.changedTouches[0].clientX - touch.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    touch.current = null;
  };

  return (
    <div
      className="carousel"
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
      tabIndex={0}
      onKeyDown={onKey}
    >
      <div
        className="carousel-view"
        style={{ aspectRatio: ratio }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="carousel-track" style={{ transform: `translateX(-${i * 100}%)` }}>
          {images.map((im, idx) => (
            <div
              className="carousel-slide"
              key={im.src}
              role="group"
              aria-roledescription="slide"
              aria-label={`${idx + 1} of ${n}`}
              aria-hidden={idx !== i}
            >
              {failed[im.src] ? (
                <div className="img-missing">
                  Add <code>{im.src.replace('/images/', 'public/images/')}</code>
                </div>
              ) : (
                <img
                  src={im.src}
                  alt={im.alt}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  onLoad={(e) => {
                    if (idx === 0 && e.target.naturalWidth) {
                      setRatio(`${e.target.naturalWidth} / ${e.target.naturalHeight}`);
                    }
                  }}
                  onError={() => setFailed((f) => ({ ...f, [im.src]: true }))}
                />
              )}
            </div>
          ))}
        </div>
        {n > 1 && (
          <>
            <button className="carousel-btn prev" onClick={() => go(-1)} aria-label="Previous image">
              <Chevron dir="left" />
            </button>
            <button className="carousel-btn next" onClick={() => go(1)} aria-label="Next image">
              <Chevron />
            </button>
          </>
        )}
      </div>
      {n > 1 && (
        <div className="carousel-foot">
          <div className="dots">
            {images.map((im, idx) => (
              <button
                key={im.src}
                className={idx === i ? 'on' : ''}
                onClick={() => setI(idx)}
                aria-label={`Show image ${idx + 1}`}
                aria-current={idx === i}
              />
            ))}
          </div>
          <span className="count" aria-live="polite">
            {i + 1} / {n}
          </span>
        </div>
      )}
    </div>
  );
}
