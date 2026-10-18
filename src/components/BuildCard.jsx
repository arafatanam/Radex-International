import { Link } from 'react-router-dom';
import Hl from './Hl.jsx';
import { buildPath } from '../data/builds.js';

export default function BuildCard({ build, featured = false }) {
  return (
    <Link to={buildPath(build)} className={`card ${featured ? 'featured' : ''}`}>
      <div className="card-img">
        <img src={build.cover} alt="" loading="lazy" onError={(e) => (e.currentTarget.style.visibility = 'hidden')} />
      </div>
      <div className="card-body">
        <p className="card-vehicle">{build.vehicle}</p>
        <h3>
          <Hl text={build.cardTitle} />
        </h3>
        <p className="card-note">{build.cardNote}</p>
      </div>
    </Link>
  );
}
