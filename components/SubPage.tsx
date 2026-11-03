import type { ReactNode } from "react";
import Chrome from "./Chrome";
import { Footer } from "./Lower";

export default function SubPage({ children }: { children: ReactNode }) {
  return (
    <Chrome>
      <main className="subpage">
        <div className="container">{children}</div>
      </main>
      <Footer />
    </Chrome>
  );
}
