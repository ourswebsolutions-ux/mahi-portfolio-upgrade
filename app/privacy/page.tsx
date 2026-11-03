import type { Metadata } from "next";
import SubPage from "@/components/SubPage";
import { site } from "@/content/site";

export const metadata: Metadata = { title: `Privacy Policy — ${site.name}` };

export default function Page() {
  return (
    <SubPage>
      <article className="post">
        <h1 className="h-post">Privacy Policy</h1>
        <p className="post-p">Placeholder policy. Replace this page with your real privacy policy before publishing: what contact data you collect, how client footage is stored, and how long it is kept.</p>
      </article>
    </SubPage>
  );
}
