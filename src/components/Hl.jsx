// Renders text with *red* highlights.
export default function Hl({ text }) {
  return text.split('*').map((part, i) =>
    i % 2 ? (
      <em key={i} className="red">
        {part}
      </em>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}
