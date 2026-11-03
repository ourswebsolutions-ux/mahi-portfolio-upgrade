import type { ReactNode } from "react";
import SmoothScroll from "./SmoothScroll";
import MotionProvider from "./MotionProvider";
import Nav from "./Nav";
import Dock from "./Dock";
import ProgressiveBlur from "./ProgressiveBlur";

/** Page shell shared by every route: nav, dock, guide lines, bottom blur. */
export default function Chrome({ children }: { children: ReactNode }) {
  return (
    <MotionProvider>
      <div className="page" id="top">
        <SmoothScroll />
        <div className="page-lines" aria-hidden />
        <Nav />
        {children}
        <ProgressiveBlur />
        <Dock />
      </div>
    </MotionProvider>
  );
}
