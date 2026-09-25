// A small hand-built line-icon set so the project has zero icon dependencies.
// Every icon takes className (for size/color via Tailwind) and forwards other props.

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function Menu({ className, ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  );
}

export function XIcon({ className, ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  );
}

export function ArrowRight({ className, ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <line x1="4" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </svg>
  );
}

export function ChevronDown({ className, ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function Phone({ className, ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M5 4h3.2l1.3 4.2-2 1.6a12 12 0 0 0 6.7 6.7l1.6-2 4.2 1.3V19a2 2 0 0 1-2.2 2A16 16 0 0 1 3 5.2 2 2 0 0 1 5 4Z" />
    </svg>
  );
}

export function WhatsApp({ className, ...p }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-1.5-.7-2.5-1.3-3.5-3-.3-.5.3-.4.8-1.4.1-.2 0-.4 0-.5C11 9.5 10.5 8.2 10.2 7.6c-.2-.5-.5-.4-.6-.4h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.5-.3Z"/>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.6 0-3.2-.4-4.5-1.3l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Z"/>
    </svg>
  );
}

export function Mail({ className, ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3 6 12 13 21 6" />
    </svg>
  );
}

export function MapPin({ className, ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}

export function Clock({ className, ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15.5 14" />
    </svg>
  );
}

export function Users({ className, ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M15.5 14.2c2.5.3 4.5 2.5 4.5 5.3" />
    </svg>
  );
}

export function Target({ className, ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function BookOpen({ className, ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M12 6.5c-1.6-1.2-3.7-1.8-6.5-1.8v13c2.8 0 4.9.6 6.5 1.8 1.6-1.2 3.7-1.8 6.5-1.8v-13c-2.8 0-4.9.6-6.5 1.8Z" />
      <line x1="12" y1="6.5" x2="12" y2="19.5" />
    </svg>
  );
}

export function GraduationCap({ className, ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M2 9.5 12 5l10 4.5-10 4.5-10-4.5Z" />
      <path d="M6.5 11.7v4.3c0 1.4 2.5 2.6 5.5 2.6s5.5-1.2 5.5-2.6v-4.3" />
      <path d="M21 9.5v5.4" />
    </svg>
  );
}

export function Stethoscope({ className, ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M6 4v5.5a4.5 4.5 0 0 0 9 0V4" />
      <line x1="6" y1="4" x2="4.3" y2="4" />
      <line x1="15" y1="4" x2="16.7" y2="4" />
      <path d="M15 13.5V16a5 5 0 0 0 5 5 3 3 0 0 0 3-3" />
      <circle cx="20.3" cy="18" r="1.7" />
    </svg>
  );
}

export function Pill({ className, ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <rect x="3.5" y="9.5" width="17" height="7" rx="3.5" transform="rotate(-45 12 12)" />
      <line x1="9.5" y1="9.5" x2="14.5" y2="14.5" />
    </svg>
  );
}

export function Dna({ className, ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M7 3c0 6 10 12 10 18" />
      <path d="M17 3c0 6-10 12-10 18" />
      <line x1="8" y1="7" x2="16" y2="7" />
      <line x1="7.3" y1="12" x2="16.7" y2="12" />
      <line x1="8" y1="17" x2="16" y2="17" />
    </svg>
  );
}

export function Microscope({ className, ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <line x1="5" y1="21" x2="19" y2="21" />
      <path d="M9 21c-1-3 .2-5 2-6.3" />
      <path d="M10 8.5 14 12l1.2-1.2a2 2 0 0 0 0-2.8L12.5 5.3a2 2 0 0 0-2.8 0L9 6a2 2 0 0 0 0 2.8Z" />
      <line x1="12.3" y1="9.8" x2="9.5" y2="12.6" />
      <path d="M15 21a5 5 0 0 0 4.8-6.5" />
    </svg>
  );
}

export function Briefcase({ className, ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <line x1="3" y1="13" x2="21" y2="13" />
    </svg>
  );
}

export function Monitor({ className, ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <line x1="8" y1="20" x2="16" y2="20" />
      <line x1="12" y1="16" x2="12" y2="20" />
    </svg>
  );
}

export function MoreDots({ className, ...p }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" {...p}>
      <circle cx="5" cy="12" r="1.6" />
      <circle cx="12" cy="12" r="1.6" />
      <circle cx="19" cy="12" r="1.6" />
    </svg>
  );
}

export function TrendingUp({ className, ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <polyline points="3 17 9.5 10.5 13.5 14.5 21 6" />
      <polyline points="14.5 6 21 6 21 12.5" />
    </svg>
  );
}

export function Leaf({ className, ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M20 4c0 9-6 15-15 15-1 0-1-1-1-1C4 9 10 4 20 4Z" />
      <path d="M5 19c3-4 6-7 12-11" />
    </svg>
  );
}

export function Trophy({ className, ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" />
      <path d="M7 5H4a3 3 0 0 0 3 4" />
      <path d="M17 5h3a3 3 0 0 1-3 4" />
      <line x1="12" y1="13" x2="12" y2="17" />
      <line x1="9" y1="20" x2="15" y2="20" />
      <line x1="9.5" y1="17" x2="14.5" y2="17" />
    </svg>
  );
}

export function Award({ className, ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <circle cx="12" cy="9" r="5.5" />
      <polyline points="8.5 13.8 7 21 12 18.5 17 21 15.5 13.8" />
    </svg>
  );
}

export function Flag({ className, ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <line x1="5" y1="3" x2="5" y2="21" />
      <path d="M5 4h13l-3 4 3 4H5" />
    </svg>
  );
}

export function Check({ className, ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <polyline points="4 12.5 9.5 18 20 6" />
    </svg>
  );
}

export function CheckCircle({ className, ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <polyline points="8 12.5 11 15.5 16 9" />
    </svg>
  );
}

export function Play({ className, ...p }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" {...p}>
      <circle cx="12" cy="12" r="10" opacity="0.9" />
      <path d="M10 8.3v7.4L16.5 12 10 8.3Z" fill="#0a2540" />
    </svg>
  );
}

export function Download({ className, ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M12 3v12" />
      <polyline points="7.5 10.5 12 15 16.5 10.5" />
      <path d="M4.5 17.5V19a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-1.5" />
    </svg>
  );
}

export function Instagram({ className, ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Facebook({ className, ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M14 21v-7h2.5l.5-3H14V9c0-.9.3-1.5 1.7-1.5H17V4.8c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H8.5v3H10.8v7Z" />
    </svg>
  );
}

export function Youtube({ className, ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <rect x="3" y="6" width="18" height="12" rx="4" />
      <path d="M10.5 9.5v5l4.5-2.5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Flask({ className, ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M9.5 3h5" />
      <path d="M10.3 3v6.3L5.6 18a2 2 0 0 0 1.8 3h9.2a2 2 0 0 0 1.8-3l-4.7-8.7V3" />
      <path d="M7.5 15.5h9" />
    </svg>
  );
}

export function Compass({ className, ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5 13 13l-4.5 2.5L11 11l4.5-2.5Z" />
    </svg>
  );
}

export function Route({ className, ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <circle cx="6" cy="6" r="2.2" />
      <circle cx="18" cy="18" r="2.2" />
      <path d="M6 8.2V13a4 4 0 0 0 4 4h4" />
    </svg>
  );
}

export function FileText({ className, ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M7 3h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v4h4" />
      <line x1="8.5" y1="12" x2="15.5" y2="12" />
      <line x1="8.5" y1="15.5" x2="15.5" y2="15.5" />
    </svg>
  );
}

export function Sparkle({ className, ...p }) {
  return (
    <svg className={className} {...base} {...p}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
    </svg>
  );
}
