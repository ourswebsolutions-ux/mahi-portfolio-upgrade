import type { Metadata, Viewport } from "next";
import { site } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: `${site.name} — ${site.role}`,
  description:
    "Cinematic video editing for brands and creators: commercials, YouTube, social media, promos and short films.",
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: "Stories that hold attention. Cinematic editing that drives results.",
    images: ["/media/poster-pod3.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#e8e8e8",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/fonts/Switzer-500.woff2" as="font" type="font/woff2" crossOrigin="" />
      </head>
      <body>{children}</body>
    </html>
  );
}
