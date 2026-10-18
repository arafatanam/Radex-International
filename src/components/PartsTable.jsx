import { useState } from 'react';

export default function PartsTable({ parts }) {
  const [q, setQ] = useState('');
  if (!parts.length) return null;
  const rows = parts.filter((p) =>
    `${p.number} ${p.name || ''}`.toLowerCase().includes(q.trim().toLowerCase())
  );
  return (
    <section className="section parts">
      <div className="wrap">
        <h2>
          The <em className="red">{parts.length} OEM parts</em>
        </h2>
        <p className="lead">Every part matched by exact OEM part number.</p>
        <label className="search">
          <span className="sr">Filter parts</span>
          <input
            type="search"
            placeholder="Filter by part number or name"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </label>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">OEM part number</th>
                <th scope="col">Part</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((p) => (
                <tr key={p.no}>
                  <td>{p.no}</td>
                  <td className="mono">{p.number}</td>
                  <td>{p.name}</td>
                </tr>
              ))}
              {!rows.length && (
                <tr>
                  <td colSpan="3">No parts match your filter.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
