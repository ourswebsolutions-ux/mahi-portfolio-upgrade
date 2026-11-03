import type { Metadata } from "next";
import SubPage from "@/components/SubPage";
import { site } from "@/content/site";

export const metadata: Metadata = { title: `Terms of service — ${site.name}` };

export default function Page() {
  return (
    <SubPage>
      <article className="post">
        <h1 className="h-post">Terms of service</h1>
        <p className="post-p">Placeholder terms. Replace this page with your real terms of service before publishing: payment schedule, revision policy, delivery formats, licensing and cancellation.</p>
      </article>
    </SubPage>
  );
}
