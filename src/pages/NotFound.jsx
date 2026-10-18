import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap">
        <h1 className="page-title">
          PAGE <em className="red">NOT FOUND</em>
        </h1>
        <p className="lead">This page does not exist. Go back to the builds or request a part.</p>
        <div className="detail-cta">
          <Link to="/builds" className="btn">
            See builds
          </Link>
          <Link to="/request" className="btn ghost">
            Request a part
          </Link>
        </div>
      </div>
    </section>
  );
}
