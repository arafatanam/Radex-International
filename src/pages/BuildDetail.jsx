import { Link, useParams } from 'react-router-dom';
import Carousel from '../components/Carousel.jsx';
import Hl from '../components/Hl.jsx';
import BuildCard from '../components/BuildCard.jsx';
import PartsTable from '../components/PartsTable.jsx';
import NotFound from './NotFound.jsx';
import { Check, Cross, Chat } from '../components/Icons.jsx';
import { builds, findBuild } from '../data/builds.js';
import { e63Parts } from '../data/parts.js';
import { waLink } from '../data/site.js';

export default function BuildDetail() {
  const { slug } = useParams();
  const build = findBuild(slug);
  if (!build || !build.images.length) return <NotFound />;

  const others = builds.filter((b) => b.slug !== build.slug).slice(0, 3);
  const ask = waLink(`Hi Radex International, I need a part for my ${build.vehicle}.`);

  return (
    <>
      <article className="detail">
        {build.watermark && (
          <div className="watermark" aria-hidden="true">
            {build.watermark}
          </div>
        )}
        <div className="wrap">
          <Link to="/builds" className="back">
            All builds
          </Link>
          <p className="card-vehicle">{build.vehicle}</p>
          <h1 className="page-title">
            <Hl text={build.title} />
          </h1>
          <p className="lead">{build.subtitle}</p>

          <div className="detail-grid">
            <Carousel images={build.images} label={`${build.vehicle} images`} />
            <div className="detail-copy">
              <div className="facts">
                <h2>{build.factsTitle}</h2>
                <ul>
                  {build.facts.map((f) => (
                    <li key={f}>
                      <Check /> {f}
                    </li>
                  ))}
                </ul>
              </div>
              {build.story.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <div className="detail-cta">
                <a className="btn" href={ask} target="_blank" rel="noreferrer">
                  <Chat /> Ask about this build
                </a>
                <Link className="btn ghost" to="/request">
                  Request a part
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {build.outcome && (
        <section className="section alt">
          <div className="wrap">
            <div className={`outcome n${build.outcome.length}`}>
              {build.outcome.map((o) => (
                <div className={`panel ${o.tone === 'bad' ? 'problem' : 'solution'}`} key={o.label}>
                  <h3>{o.label}</h3>
                  <p className="panel-lead">{o.text}</p>
                  {o.bullets && (
                    <ul className={`marks ${o.tone}`}>
                      {o.bullets.map((b) => (
                        <li key={b}>
                          {o.tone === 'bad' ? <Cross /> : <Check />} {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {build.showParts && <PartsTable parts={e63Parts} />}

      <section className="section">
        <div className="wrap">
          <h2 className="section-title">
            MORE <em className="red">BUILDS</em>
          </h2>
          <div className="grid even">
            {others.map((b) => (
              <BuildCard key={b.slug} build={b} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
