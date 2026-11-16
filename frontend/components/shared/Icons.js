// Small inline icon set (no icon library = less JavaScript, faster pages).
const paths = {
  code: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4M9 9l-2 2 2 2M15 9l2 2-2 2" /></>,
  video: <><rect x="2" y="6" width="14" height="12" rx="2" /><path d="M16 10l6-3v10l-6-3" /><circle cx="9" cy="12" r="2.5" /></>,
  wave: <path d="M2 12h3l2-6 3 12 3-9 2 5 2-2h5" />,
  chip: <><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4M10 12h4M12 10v4" /></>,
  edge: <><rect x="5" y="13" width="14" height="7" rx="2" /><path d="M9 17h.01M13 17h2M8.5 9.5a5 5 0 0 1 7 0M6 7a8.5 8.5 0 0 1 12 0" /></>,
  cloud: <><path d="M7 18a4.5 4.5 0 0 1-.5-9 6 6 0 0 1 11.5 1.5A3.75 3.75 0 0 1 17.5 18z" /><path d="M12 11v5M9.5 13.5 12 16l2.5-2.5" /></>,
  heart: <><path d="M12 21s-7-4.5-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.5-7 11-7 11z" /><path d="M8 12h2l1-2 2 4 1-2h2" /></>,
  city: <path d="M3 21h18M5 21V8l5-3v16M14 21V3l5 3v15M8 10h.01M8 14h.01M17 9h.01M17 13h.01" />,
  shield: <><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" /><path d="M9 12l2 2 4-4" /></>,
  chart: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 15l3-3 3 2 4-5" /></>,
  check: <path d="M20 6 9 17l-5-5" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></>,
  pin: <><path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
  spark: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />,
  handshake: <><path d="m11 17 2 2a1 1 0 0 0 3-3" /><path d="m14 14 2.5 2.5a1 1 0 0 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" /><path d="m21 3 1 11h-2M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8" /></>,
};

export default function Icon({ name, className = "size-6", strokeWidth = 1.8 }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth}
      strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

export function Logo({ className = "size-9" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="sedaapi-lg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#18599c" />
          <stop offset="1" stopColor="#38a8e0" />
        </linearGradient>
      </defs>
      <path d="M44 14c-5-6-18-7-24-1-6 6-3 14 5 17 6 2 9 4 8 8-1 5-9 6-15 3 5 8 21 9 28 1 6-7 2-15-6-18-6-2-8-4-7-7 1-4 8-4 11-3z" fill="url(#sedaapi-lg)" />
      <path d="M46 22c-8-1-15 5-15 13s7 15 15 14c-6 5-18 4-23-4-5-8 0-20 10-24 5-2 10-1 13 1z" fill="#a9d4f5" />
    </svg>
  );
}
