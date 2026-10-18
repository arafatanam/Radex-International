import { Shield, Globe, Gear, People } from './Icons.jsx';

const items = [
  { Icon: Shield, label: 'Accurate fitment' },
  { Icon: Globe, label: 'Sourced globally' },
  { Icon: Gear, label: 'Part number matched' },
  { Icon: People, label: 'Trusted by enthusiasts' },
];

export default function TrustBar() {
  return (
    <section className="trust" aria-label="Why customers trust Radex">
      <ul className="wrap trust-list">
        {items.map(({ Icon, label }) => (
          <li key={label}>
            <Icon />
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
