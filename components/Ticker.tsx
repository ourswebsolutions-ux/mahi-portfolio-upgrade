import type { ReactNode } from "react";

/** Infinite horizontal marquee with soft faded edges (CSS-driven). */
export default function Ticker({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={`ticker ${className ?? ""}`}>
      <div className="ticker-track">
        <div className="ticker-group">{children}</div>
        <div className="ticker-group" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
