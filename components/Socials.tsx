import { site } from "@/content/site";
import { Instagram, LinkedIn, Vimeo, XLogo, YouTube } from "./icons";

const items = [
  { key: "instagram", label: "Instagram", Icon: Instagram, href: site.socials.instagram },
  { key: "youtube", label: "YouTube", Icon: YouTube, href: site.socials.youtube },
  { key: "vimeo", label: "Vimeo", Icon: Vimeo, href: site.socials.vimeo },
  { key: "linkedin", label: "LinkedIn", Icon: LinkedIn, href: site.socials.linkedin },
];

/** Social pills: frosted dark on the portrait, solid white in the footer. */
export function Socials({ variant, className }: { variant: "glass" | "solid"; className?: string }) {
  return (
    <div className={`socials socials--${variant} ${className ?? ""}`}>
      <a className="social social--wide" href={site.socials.x.href} target="_blank" rel="noreferrer" aria-label="X">
        <XLogo />
        <span>{site.socials.x.label}</span>
      </a>
      {items.map(({ key, label, Icon, href }) => (
        <a key={key} className="social" href={href} target="_blank" rel="noreferrer" aria-label={label}>
          <Icon />
        </a>
      ))}
    </div>
  );
}
