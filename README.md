# Video editor portfolio

Next.js 15 + React 19 + TypeScript landing page, modelled on the 29 Studio Framer
template's design and motion, rewritten for a video editor.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Editing content

All copy lives in `content/site.ts`. Items marked **PLACEHOLDER** (name, email,
booking link, socials, price, work history, testimonials) must be replaced with
real details before publishing.

Past work: `projects` (the four hero/gallery cards), `journal` (the "From my
journal" cards, which open a video player) and `allWork` (the /work page) in
`content/site.ts`. They play the videos in `public/`; `public/media/` holds the
4:3 poster frames, a web encode of `pod3.mp4` and a 30s highlight of `pod4.mp4`.
The small stacked avatars next to "Brands & creators" are still stills from the
Blender films *Tears of Steel* / *Sintel* (CC BY 3.0, credited in the footer):
swap `public/media/frame-*.jpg` and drop the credit once they're replaced.

## Hero → gallery animation

`components/Projects.tsx`: the four cards sit in their final 2×2 grid slots and
carry a scroll-linked `perspective(1200px) translate scale rotate` transform
that runs linearly from a hero pose (scroll 0) to identity (scroll = hero
height). The hero poses were measured from the reference. On phones the
reference shows no hero cards, so each card instead settles from a tilted pose
as it scrolls in. Reduced-motion users get a static grid.

Set `NEXT_PUBLIC_SITE_URL` in production for correct Open Graph URLs.
