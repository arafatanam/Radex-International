import { useState } from 'react';

export default function Logo({ className = '' }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <span className={`wordmark ${className}`}>RADEX</span>;
  return (
    <img
      className={`logo ${className}`}
      src="/logo.jpg"
      alt="Radex International"
      onError={() => setFailed(true)}
    />
  );
}
