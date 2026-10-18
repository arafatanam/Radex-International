import { useState } from 'react';
import { Chat } from '../components/Icons.jsx';
import { waLink } from '../data/site.js';

const empty = {
  make: '',
  model: '',
  year: '',
  engine: '',
  part: '',
  partNumber: '',
  country: '',
  name: '',
  notes: '',
};

const lines = (f) =>
  [
    'Hi Radex International, I need a part.',
    '',
    `Vehicle: ${[f.make, f.model, f.year].filter(Boolean).join(' ')}`,
    ...[
      f.engine && `Engine: ${f.engine}`,
      `Part needed: ${f.part}`,
      f.partNumber && `Part number: ${f.partNumber}`,
      f.country && `Ship to: ${f.country}`,
      f.name && `Name: ${f.name}`,
      f.notes && `Notes: ${f.notes}`,
    ].filter(Boolean),
  ].join('\n');

export default function Request() {
  const [f, setF] = useState(empty);
  const set = (k) => (e) => setF((v) => ({ ...v, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    window.open(waLink(lines(f)), '_blank', 'noopener');
  };

  const field = (k, label, props = {}) => (
    <label className="field">
      <span>{label}</span>
      <input value={f[k]} onChange={set(k)} {...props} />
    </label>
  );

  return (
    <section className="section">
      <div className="wrap request">
        <div>
          <h1 className="page-title">
            REQUEST <em className="red">A PART</em>
          </h1>
          <p className="lead">
            Anyone can search for the obvious parts. The challenge begins when your build needs
            something specific, uncommon and difficult to source locally. That’s where our network
            comes in.
          </p>
          <ul className="how">
            <li>Fill in your vehicle and the part you need.</li>
            <li>WhatsApp opens with your details ready to send.</li>
            <li>Attach a photo of the part in the chat if you have one.</li>
          </ul>
        </div>

        <form className="form" onSubmit={submit}>
          <div className="row">
            {field('make', 'Make', { required: true, placeholder: 'Mercedes-Benz', autoComplete: 'off' })}
            {field('model', 'Model', { required: true, placeholder: 'W211 E63 AMG', autoComplete: 'off' })}
          </div>
          <div className="row">
            {field('year', 'Year', { required: true, inputMode: 'numeric', placeholder: '2008', maxLength: 4 })}
            {field('engine', 'Engine', { placeholder: 'M156 6.3L V8', autoComplete: 'off' })}
          </div>
          {field('part', 'Part needed', { required: true, placeholder: 'Fuel pump, seals, hoses' })}
          <div className="row">
            {field('partNumber', 'Part number, if you know it', { placeholder: 'A 211 470 37 94' })}
            {field('country', 'Ship to (country)', { placeholder: 'Australia' })}
          </div>
          {field('name', 'Your name', { autoComplete: 'name' })}
          <label className="field">
            <span>Notes</span>
            <textarea rows="3" value={f.notes} onChange={set('notes')} placeholder="New only, OEM only, deadline" />
          </label>
          <button type="submit" className="btn big">
            <Chat /> Send on WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
