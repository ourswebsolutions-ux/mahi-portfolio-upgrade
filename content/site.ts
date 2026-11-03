/**
 * All editable copy for the portfolio lives here.
 *
 * Anything marked PLACEHOLDER is a stand-in for information that has not been
 * provided yet (name, contact details, prices, work history, testimonials).
 * Replace it with real details before publishing — nothing in this file is a
 * real client, credential or quote.
 */

export const site = {
  // PLACEHOLDER — taken from the project folder name; change to your real name / studio.
  name: "Mahi",
  brand: "mahi studio.",
  role: "Video Editor",
  avatar: "/mahi.jpg",
  portrait: "/mahi.jpg",
  email: "mahi@mahivirtual.com",
  bookingUrl: "https://calendly.com/maha-mahivirtual/30min",
  socials: {
    x: { href: "https://x.com", label: "1,214" }, // PLACEHOLDER follower count
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    vimeo: "https://vimeo.com",
    linkedin: "https://linkedin.com",
  },
  year: 2026,
};

export const nav = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Blog", href: "/#blog" },
];

export const hero = {
  availability: "Available for projects",
  headingMuted: "Stories that",
  headingStrong: "hold attention.",
  leadStrong: "Cinematic editing that drives results, not just views.",
  lead: "I turn raw footage into stories that hook, hold and convert your audience.",
  cta: "Book a call with me",
  proof: "Brands & creators",
};

export type Project = {
  title: string;
  type: string;
  thumb: string;
  video: string;
  alt: string;
};

// Your past work. Thumbnails are 4:3 frames pulled from each video.
export const projects: Project[] = [
  {
    title: "Podcast clip",
    type: "Short-form captions",
    thumb: "/media/poster-pod3.jpg",
    video: "/media/pod3-web.mp4", // web encode of /pod3.mp4
    alt: "Podcast guest in a KNOW FEAR shirt with the animated caption FEAR",
  },
  {
    title: "Before & after",
    type: "Podcast short",
    thumb: "/media/poster-pod1.jpg",
    video: "/pod1-web.mp4",
    alt: "Split screen of the raw and graded podcast shot",
  },
  {
    title: "Long-form podcast",
    type: "YouTube episode",
    thumb: "/media/poster-pod4.jpg",
    video: "/media/pod4-highlight.mp4", // first 30s of /pod4.mp4
    alt: "Podcast guest with the animated caption: 2003 when the human genome was mapped",
  },
  {
    title: "Motion graphics",
    type: "Storytelling reel",
    thumb: "/media/poster-pod5.jpg",
    video: "/pod5.mp4",
    alt: "Animated cut-out figure in front of a yellow circle",
  },
];

// Every edit, for the /work page.
export const allWork: Project[] = [
  ...projects,
  {
    title: "Talking head",
    type: "Short form with UI overlays",
    thumb: "/media/journal-pod2.jpg",
    video: "/pod2-web.mp4",
    alt: "Before and after of a talking-head clip with app overlays",
  },
];

export const categories = [
  "Commercials",
  "YouTube",
  "Social Media",
  "Promo Videos",
  "Cinematic Edits",
  "Documentary",
];

export const platforms = ["YouTube", "Instagram", "TikTok", "Vimeo", "LinkedIn", "Broadcast"];

export const bigQuote = {
  before: "\u201CMaryam has provided",
  strong: "excellent work as a video editor",
  after:
    "for my e360tv show Leadership Beyond Burnout with timely and relevant edits to the work. Her background in Industrial and Organizational Psychology and Consumer Psychology adds a level of heightened expertise to creating edits most intriguing to my audience and potential customers. I highly recommend Maryam for any of your video editing services.\u201D",
  name: "Kimberly Wilson",
  role: "Leadership and Resilience Consultant",
  avatar: "/kimberly.jpeg",
};

export const services = {
  headingMuted: "Edits that",
  headingStrong: "make your brand unmissable.",
  toolsLabel: "My editing toolkit",
  tools: [
    { short: "Pr", name: "Premiere Pro" },
    { short: "Ae", name: "After Effects" },
    { short: "Dr", name: "DaVinci Resolve" },
    { short: "Fc", name: "Final Cut Pro" },
    { short: "Au", name: "Audition" },
    { short: "Ps", name: "Photoshop" },
    { short: "Fr", name: "Frame.io" },
    { short: "C4", name: "Cinema 4D" },
  ],
  items: [
    { icon: "film", label: "Commercial Editing" },
    { icon: "phone", label: "Social Media Edits" },
    { icon: "play", label: "YouTube Content" },
    { icon: "megaphone", label: "Promo Videos" },
    { icon: "clapper", label: "Cinematic Edits" },
    { icon: "sparkle", label: "Motion Graphics" },
    { icon: "palette", label: "Color & Sound Design" },
  ] as const,
};

export const about = {
  headingMuted: "Cutting stories",
  headingStrong: "that move real people.",
  paragraphs: [
    {
      strong: "I love turning raw footage into stories people feel.",
      text: "What started as cutting clips for fun became a career once I saw how much an edit can change the way a story lands.",
    },
    {
      strong: "I focus on edits that serve a real purpose –",
      text: "pacing, sound and color that keep people watching, not effects for their own sake. Whether it’s a launch film or a short-form ad, the goal is a cut that feels effortless.",
    },
    {
      strong: "I’m a bit of a perfectionist about the small stuff,",
      text: "a frame trimmed here, a sound cue there. That attention to detail builds trust, because clients know I’ll treat their footage like it’s my own.",
    },
  ],
  historyLabel: "My work history",
  // PLACEHOLDER — replace with your real roles and dates.
  history: [
    { company: "Company name", role: "Senior video editor", years: "20XX–Now" },
    { company: "Company name", role: "Video editor", years: "20XX–20XX" },
    { company: "Company name", role: "Assistant editor", years: "20XX–20XX" },
  ],
};

export const pricing = {
  headingMuted: "Simple pricing.",
  headingStrong: "Standout edits.",
  asideStrong: "Clear costs, no hidden fees.",
  aside: "Choose a monthly retainer or individual project rates.",
  steps: [
    { icon: "brief", title: "Brief", text: "Share your footage, references and goals in one simple brief." },
    { icon: "cut", title: "Edit", text: "I cut, grade, mix and animate, from first draft to final." },
    { icon: "receive", title: "Receive", text: "Receive your first cut within 72 hours on average." },
  ],
  card: {
    pill: "Start today",
    muted: "Dm for your launch film",
    text: "or short-form videos that hook.",
  },
  slots: "Slots available",
  hireTitle: "Hire me today",
  hireText: "Skip the agency markup and work directly with an experienced editor.",
  planTitle: "Pricing That Fits Your Goals",
  planText: "Simple packages, Clear value, No unnecessary costs.",
  price: "$1,000", // PLACEHOLDER — set your own rate
  per: "/ project",
  benefits: [
    "High-End Video Editing",
    "Color Grading",
    "Sound Design & Mix",
    "Motion Graphics",
    "Two Revision Rounds",
    "Avg 72 hour first cut",
  ],
  checkout: "Secure checkout",
  customTitle: "Need Something Custom?",
  customStrong: "Let’s Make Your Vision Move.",
  customText:
    "Have a bigger project, campaign, or series in mind? Tell me what you’re planning and I’ll build a custom package around it.",
  customCta: "Get quote",
};

export const trusted = { muted: "Made for", strong: "every screen" };

export type Testimonial = { quote: string; name: string; role?: string; avatar?: string };

// Client reviews, quoted as supplied. Kimberly Wilson's longer review is the big quote above.
export const testimonials = {
  headingMuted: "Hear from what my",
  headingStrong: "clients have to say.",
  items: [
    {
      quote: "\u201CThorough and responsive, my 2 most important needs. Well done...\u201D",
      name: "Pete Ferrari",
      avatar: "/client1.jpeg",
    },
    {
      quote:
        "\u201CMahi was responsive and helped with many content projects. got work done quickly and worked well with a team.\u201D",
      name: "Jamar Jones",
      role: "Founder of FOUREVA MEDIA",
      // Square crop of /client2.WEBP so his face fills the round avatar.
      avatar: "/media/client2-avatar.jpg",
    },
    {
      quote: "\u201CMJ was a pleasure to work with and is an amazing graphic designer.\u201D",
      name: "Travis",
      role: "CEO of BusyBean Coffee",
      avatar: "/client3.jpg",
    },
  ] as Testimonial[],
};

export const faq = {
  headingStrong: "Your questions",
  headingMuted: "answered.",
  items: [
    {
      q: "How long does a typical edit take to deliver?",
      a: "Timelines depend on length and complexity. A short-form edit usually takes 2–4 days, while a commercial or long-form YouTube video can take 1–2 weeks. You’ll get a specific estimate after our first call.",
    },
    {
      q: "Can you work with my existing brand and footage?",
      a: "Absolutely. I’ll follow your brand guidelines, fonts and color palette, and I can work with footage from any camera, phone or stock library.",
    },
    {
      q: "What makes your editing process unique?",
      a: "Everything starts with the story. I build a rough structure first, share it early, and refine pacing, sound and color with your feedback at each stage, so there are no surprises at the end.",
    },
    {
      q: "How many revisions are included with a project?",
      a: "Every project includes two full revision rounds. Small tweaks after delivery, like a typo in a caption or a swapped music track, are always on me.",
    },
    {
      q: "How do you handle raw footage, confidentiality and usage rights?",
      a: "Your footage stays private and is stored securely for the length of the project. You own the final edit, and I’m happy to sign an NDA before we start.",
    },
  ],
  card: {
    muted: "Still not sure?",
    strong: "Book a free discovery call.",
    text: "Learn more about how I work and how I can help bring your next video to life.",
    cta: "Schedule Now",
  },
};

export type JournalEntry = {
  title: string;
  label: string;
  image: string;
  video: string;
  excerpt?: string;
};

// "From my journal": behind-the-edit breakdowns of past videos.
export const journal: JournalEntry[] = [
  {
    title: "Turning a talking head into a scroll-stopper.",
    label: "Short form \u00B7 0:31",
    image: "/media/journal-pod2.jpg",
    video: "/pod2-web.mp4",
    excerpt:
      "The raw angle next to the final cut: tighter framing, animated app overlays and on-screen captions that keep a single-speaker clip moving from the first second.",
  },
  {
    title: "Before & after: a podcast short, re-graded.",
    label: "Podcast \u00B7 0:32",
    image: "/media/journal-pod1.jpg",
    video: "/pod1-web.mp4",
  },
  {
    title: "Building a cold open with motion graphics.",
    label: "Long form \u00B7 highlight",
    image: "/media/journal-pod4.jpg",
    video: "/media/pod4-highlight.mp4",
  },
];

export const footer = {
  lead: "Let’s",
  cycle: ["edit", "cut", "create"],
  rest: "incredible work together.",
  emailLabel: "Email",
  callLabel: "Call Me",
  callText: "Book Now",
  socialLabel: "Social",
  menuLabel: "Menu",
  legalLabel: "Legal",
  legal: [
    { label: "Terms of service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
  credit:
    "Avatar stills: Tears of Steel & Sintel © Blender Foundation, CC BY 3.0",
};
