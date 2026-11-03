import Link from "next/link";
import SubPage from "@/components/SubPage";

export default function NotFound() {
  return (
    <SubPage>
      <article className="post">
        <h1 className="h-post">This frame got cut.</h1>
        <p className="post-p">
          The page you&apos;re looking for doesn&apos;t exist. <Link href="/" className="inline-link">Back to the homepage</Link>
        </p>
      </article>
    </SubPage>
  );
}
