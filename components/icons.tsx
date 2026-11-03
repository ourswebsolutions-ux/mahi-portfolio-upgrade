import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = (size: number): P => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  "aria-hidden": true,
});

export const Star = (p: P) => (
  <svg {...base(12)} {...p}>
    <path
      fill="currentColor"
      d="M12 2.5l2.94 6.07 6.56.9-4.78 4.6 1.17 6.53L12 17.5l-5.89 3.1 1.17-6.53-4.78-4.6 6.56-.9z"
    />
  </svg>
);

export const ArrowUpRight = (p: P) => (
  <svg {...base(18)} {...p}>
    <path d="M7 17L17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
  </svg>
);

export const Check = (p: P) => (
  <svg {...base(14)} {...p}>
    <path d="M4.5 12.5l4.5 4.5 10.5-11" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

export const Mail = (p: P) => (
  <svg {...base(24)} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" fill="currentColor" />
    <path d="M4.5 7.5L12 13l7.5-5.5" stroke="var(--icon-cut, #000)" strokeWidth="1.8" />
  </svg>
);

export const Calendar = (p: P) => (
  <svg {...base(24)} {...p}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" fill="currentColor" />
    <rect x="3.5" y="9" width="17" height="1.6" fill="var(--icon-cut, #fff)" />
    <path d="M8 3v4M16 3v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const CalendarCheck = (p: P) => (
  <svg {...base(16)} {...p}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" stroke="currentColor" strokeWidth="2" />
    <path d="M8 3v4M16 3v4M3.5 9.5h17" stroke="currentColor" strokeWidth="2" />
    <path d="M8.5 14.5l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const Doc = (p: P) => (
  <svg {...base(16)} {...p}>
    <path d="M6 3h9l4 4v14H6z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M9 11h7M9 14.5h7M9 18h4" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

export const Quote = (p: P) => (
  <svg width="13" height="11" viewBox="0 0 13 11" aria-hidden {...p}>
    <path
      fill="currentColor"
      d="M0 11V6.6C0 3.2 1.6.9 4.6 0l.8 1.5C3.8 2.2 3 3.5 2.9 5.2H5.6V11zm7.2 0V6.6c0-3.4 1.6-5.7 4.6-6.6l.8 1.5c-1.6.7-2.4 2-2.5 3.7h2.7V11z"
    />
  </svg>
);

export const Caret = (p: P) => (
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden {...p}>
    <circle cx="6" cy="6" r="6" fill="currentColor" />
    <path d="M3.6 5l2.4 2.4L8.4 5" stroke="#fff" strokeWidth="1.4" fill="none" />
  </svg>
);

/* ---------- social ---------- */

export const XLogo = (p: P) => (
  <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden {...p}>
    <path
      fill="currentColor"
      d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.77zm-1.08 16.17h1.7L7.4 4.74H5.58z"
    />
  </svg>
);

export const Instagram = (p: P) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
    <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" />
  </svg>
);

export const YouTube = (p: P) => (
  <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden {...p}>
    <path
      fill="currentColor"
      d="M22 8.2a3 3 0 00-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 002 8.2 31 31 0 001.6 12 31 31 0 002 15.8a3 3 0 002.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 002.1-2.1 31 31 0 00.4-3.8 31 31 0 00-.4-3.8zM10 15V9l5.2 3z"
    />
  </svg>
);

export const Vimeo = (p: P) => (
  <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden {...p}>
    <path
      fill="currentColor"
      d="M22 7.4c-.1 2-1.5 4.6-4.1 8-2.7 3.5-5 5.2-6.8 5.2-1.2 0-2.2-1.1-3-3.2L6.5 11.5C5.9 9.4 5.3 8.3 4.6 8.3c-.1 0-.7.3-1.6 1L2 8c1-.9 2-1.8 3-2.6 1.4-1.2 2.4-1.8 3-1.9 1.6-.2 2.6 1 3 3.3.4 2.6.7 4.2.9 4.8.5 2.1 1 3.2 1.5 3.2.4 0 1.1-.7 2-2.1.9-1.4 1.4-2.5 1.4-3.2.1-1.2-.4-1.9-1.4-1.9-.5 0-1 .1-1.5.3 1-3.3 3-4.9 5.8-4.8 2.1.1 3.1 1.4 3 4.1z"
    />
  </svg>
);

export const LinkedIn = (p: P) => (
  <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden {...p}>
    <path
      fill="currentColor"
      d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9.75h4V21H3zM9.5 9.75h3.8v1.6h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.6 4.77 6V21h-4v-5.05c0-1.2-.02-2.76-1.68-2.76-1.69 0-1.94 1.31-1.94 2.67V21h-4z"
    />
  </svg>
);

/* ---------- services ---------- */

const svc: Record<string, React.ReactNode> = {
  film: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2.5" fill="currentColor" />
      <path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4" stroke="#000" strokeWidth="1.5" />
    </>
  ),
  phone: (
    <>
      <rect x="6" y="2.5" width="12" height="19" rx="3" fill="currentColor" />
      <path d="M10.5 9.5v5l4-2.5z" fill="#000" />
    </>
  ),
  play: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="4" fill="currentColor" />
      <path d="M10 9v6l5-3z" fill="#000" />
    </>
  ),
  megaphone: (
    <>
      <path d="M4 9.5h3l9-5v15l-9-5H4z" fill="currentColor" />
      <path d="M7.5 14.5l1.5 5h2.5l-1.3-4.5" fill="currentColor" />
      <path d="M19 9.5c1 .7 1 4.3 0 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  clapper: (
    <>
      <path d="M3 10h18v9.5a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 19.5z" fill="currentColor" />
      <path d="M3.3 8.6L19.7 4l.6 2.2-16.4 4.6z" fill="currentColor" />
      <path d="M8 5.8l1.6 3M13 4.4l1.6 3" stroke="#000" strokeWidth="1.3" />
    </>
  ),
  sparkle: (
    <>
      <path d="M11 3l1.9 5.6L18.5 10.5l-5.6 1.9L11 18l-1.9-5.6L3.5 10.5l5.6-1.9z" fill="currentColor" />
      <path d="M18.5 14.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z" fill="currentColor" />
    </>
  ),
  palette: (
    <>
      <path
        d="M12 3a9 9 0 100 18c1.2 0 1.8-.8 1.8-1.7 0-1.2-1-1.6-1-2.6 0-1 .8-1.7 1.8-1.7H17a4 4 0 004-4C21 6.4 17 3 12 3z"
        fill="currentColor"
      />
      <circle cx="7.5" cy="11" r="1.4" fill="#000" />
      <circle cx="10.5" cy="7" r="1.4" fill="#000" />
      <circle cx="15" cy="7.5" r="1.4" fill="#000" />
    </>
  ),
  brief: (
    <>
      <path d="M5 3h10l4 4v14H5z" fill="currentColor" />
      <path d="M8 11h8M8 14.5h8M8 18h5" stroke="#e8e8e8" strokeWidth="1.6" />
    </>
  ),
  cut: (
    <>
      <circle cx="6.5" cy="17" r="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="17" r="3" stroke="currentColor" strokeWidth="2" />
      <path d="M8.5 15L17 3M15.5 15L7 3" stroke="currentColor" strokeWidth="2" />
    </>
  ),
  receive: (
    <>
      <path d="M3 14h4l3 2h5a1.5 1.5 0 010 3H10" stroke="currentColor" strokeWidth="1.8" />
      <path d="M15 17.5l4.5-2.2a1.5 1.5 0 011.5 2.6L14 21H3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M13 3v8M9.8 7.8L13 11l3.2-3.2" stroke="currentColor" strokeWidth="1.8" />
    </>
  ),
};

export const ServiceIcon = ({ name, size = 24 }: { name: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    {svc[name]}
  </svg>
);

/* ---------- ticker glyphs (generic, not brand marks) ---------- */

const glyphs = [
  <path key="0" d="M4 6h16v12H4z M10 9v6l5-3z" fillRule="evenodd" />,
  <path key="1" d="M12 3l9 9-9 9-9-9z" />,
  <path key="2" d="M12 3a9 9 0 110 18 9 9 0 010-18zm0 5a4 4 0 100 8 4 4 0 000-8z" fillRule="evenodd" />,
  <path key="3" d="M3 5h8v14H3zM13 5h8v6h-8zM13 13h8v6h-8z" />,
  <path key="4" d="M12 2l2.6 7.4L22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6z" />,
  <path key="5" d="M4 20L20 4M9 4h11v11" stroke="currentColor" strokeWidth="3" fill="none" />,
];

export const Glyph = ({ i }: { i: number }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    {glyphs[i % glyphs.length]}
  </svg>
);
