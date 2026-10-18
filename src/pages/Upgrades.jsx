import Carousel from '../components/Carousel.jsx';
import Hl from '../components/Hl.jsx';
import { Check, Chat } from '../components/Icons.jsx';
import { civic } from '../data/builds.js';
import { waLink } from '../data/site.js';

export default function Upgrades() {
  const ask = waLink(
    'Hi Radex International, I own a Honda Civic FE1. Please check compatibility, current stock and pricing for the intercooler and charge pipe kit.\n\nVehicle: Honda Civic FE1\nEngine: L15 1.5\nYear: '
  );
  return (
    <section className="section detail">
      <div className="wrap">
        <p className="card-vehicle">Performance upgrade</p>
        <h1 className="page-title">
          <Hl text={civic.title} />
        </h1>
        <p className="lead">{civic.subtitle}</p>

        <div className="detail-grid">
          <Carousel images={civic.images} label="Honda Civic FE1 intercooler kit images" />
          <div className="detail-copy">
            <div className="fit-box" aria-label="Fitment">
              <h2>Fits</h2>
              <ul>
                {civic.fitment.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>

            <div className="facts">
              <h2>In the kit</h2>
              <ul>
                {civic.kit.map((k) => (
                  <li key={k}>
                    <Check /> {k}
                  </li>
                ))}
              </ul>
            </div>

            <div className="facts">
              <h2>What you get</h2>
              <ul>
                {civic.benefits.map((k) => (
                  <li key={k}>
                    <Check /> {k}
                  </li>
                ))}
              </ul>
            </div>

            <p>
              The graphs in the second image show the charge-air temperature drop and the boost air
              efficiency gain. Cooler, denser air improves response. This kit is already delivered
              for a real customer build.
            </p>

            <div className="detail-cta">
              <a className="btn" href={ask} target="_blank" rel="noreferrer">
                <Chat /> FE1 owner? Check compatibility and pricing
              </a>
            </div>
            <p className="fine">
              WhatsApp opens with a message ready to send. Add your model year before you send.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
