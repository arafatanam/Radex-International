import BuildCard from '../components/BuildCard.jsx';
import { builds } from '../data/builds.js';

export default function Builds() {
  return (
    <section className="section">
      <div className="wrap">
        <h1 className="page-title">
          SOURCING <em className="red">STORIES</em>
        </h1>
        <p className="lead">
          Real builds. Real parts. Each one started with a part nobody could find.
        </p>
        <div className="grid even">
          {builds.map((b) => (
            <BuildCard key={b.slug} build={b} />
          ))}
        </div>
      </div>
    </section>
  );
}
