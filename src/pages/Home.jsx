import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import BuildCard from "../components/BuildCard.jsx";
import { Check, Cross } from "../components/Icons.jsx";
import { builds } from "../data/builds.js";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section">
        <div className="wrap">
          <h2 className="section-title">
            THE RADEX <em className="red">DIFFERENCE</em>
          </h2>
          <div className="duo">
            <article className="panel problem">
              <h3>The problem</h3>
              <p className="panel-lead">
                Traditional suppliers leave you with compromises.
              </p>
              <ul className="marks bad">
                <li>
                  <Cross /> Used or second-hand parts
                </li>
                <li>
                  <Cross /> No exact matches
                </li>
                <li>
                  <Cross /> Risk of hidden wear and shorter lifespan
                </li>
              </ul>
              <p className="panel-quote">
                Traditional suppliers sell what they have available.
              </p>
            </article>
            <article className="panel solution">
              <h3>The solution</h3>
              <p className="panel-lead">
                We search for what your car actually needs.
              </p>
              <ul className="marks good">
                <li>
                  <Check /> Brand new OEM spec parts
                </li>
                <li>
                  <Check /> Exact part number matching
                </li>
                <li>
                  <Check /> Perfect fitment, reliability and peace of mind
                </li>
              </ul>
              <Link className="panel-link" to="/builds/mercedes-w211-e240">
                See the W211 E240 build
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">
              RECENT <em className="red">BUILDS</em>
            </h2>
            <Link to="/builds" className="text-link">
              View all builds
            </Link>
          </div>
          <div className="grid home-build-grid">
            {builds.map((b, i) => (
              <BuildCard key={b.slug} build={b} featured={i === 6} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="section-title">
            HOW IT <em className="red">WORKS</em>
          </h2>
          <ol className="steps">
            <li>
              <h3>Send your vehicle details</h3>
              <p>
                Make, model, year, engine and the part you need. A part number
                helps if you have one.
              </p>
            </li>
            <li>
              <h3>We match and source</h3>
              <p>
                We search our global network for the exact part, brand new where
                possible.
              </p>
            </li>
            <li>
              <h3>Shipped to you</h3>
              <p>
                Your part ships worldwide, from Belgium to Australia and beyond.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="cta-banner">
        <div className="wrap">
          <h2>
            CAN’T FIND IT? <em className="red">THAT’S WHERE RADEX STARTS.</em>
          </h2>
          <Link to="/request" className="btn big">
            Submit your vehicle details
          </Link>
        </div>
      </section>
    </>
  );
}
