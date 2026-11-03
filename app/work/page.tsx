import type { Metadata } from "next";
import SubPage from "@/components/SubPage";
import { allWork, site } from "@/content/site";

export const metadata: Metadata = { title: `Work — ${site.name}` };

export default function WorkPage() {
  return (
    <SubPage>
      <h1 className="h-section">
        <span className="tone-muted">Selected</span>
        <br />
        <span className="tone-strong">edits.</span>
      </h1>
      <div className="work-list">
        {allWork.map((p) => (
          <figure key={p.title} className="work-item">
            <video src={p.video} poster={p.thumb} controls preload="none" playsInline />
            <figcaption>
              <p className="project-title">{p.title}</p>
              <p className="t-small t-sub">{p.type}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </SubPage>
  );
}
