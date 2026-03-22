export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech" },
  { label: "Projects", href: "#projects" },
];

export const socials = [
  {
    label: "GitHub",
    href: "https://github.com/batuhandagdelen",
    d: "M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/batuhan-dağdelen-3672b7328/",
    d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
];

export const techs = [
  {
    name: "JavaScript",
    abbr: "JS",
    color: "#F7DF1E",
    bg: "rgba(247,223,30,0.08)",
  },
  {
    name: "TypeScript",
    abbr: "TS",
    color: "#3178C6",
    bg: "rgba(49,120,198,0.10)",
  },
  {
    name: "React",
    abbr: "Re",
    color: "#61DAFB",
    bg: "rgba(97,218,251,0.08)",
  },
  {
    name: "Next.js",
    abbr: "Nx",
    color: "#e2e8f0",
    bg: "rgba(226,232,240,0.06)",
  },
  {
    name: "Redux",
    abbr: "Rx",
    color: "#764ABC",
    bg: "rgba(118,74,188,0.10)",
  },
  {
    name: "TanStack Query",
    abbr: "TQ",
    color: "#FF4154",
    bg: "rgba(255,65,84,0.10)",
  },
  {
    name: "Firebase",
    abbr: "Fb",
    color: "#FFCA28",
    bg: "rgba(255,202,40,0.08)",
  },
  {
    name: "Tailwind CSS",
    abbr: "TW",
    color: "#06B6D4",
    bg: "rgba(6,182,212,0.08)",
  },
  {
    name: "HTML5",
    abbr: "H5",
    color: "#E34F26",
    bg: "rgba(227,79,38,0.10)",
  },

  {
    name: "CSS3",
    abbr: "C3",
    color: "#1572B6",
    bg: "rgba(21,114,182,0.10)",
  },
  {
    name: "Bootstrap",
    abbr: "Bs",
    color: "#7952B3",
    bg: "rgba(121,82,179,0.10)",
  },

  {
    name: "SCSS",
    abbr: "SC",
    color: "#CC6699",
    bg: "rgba(204,102,153,0.08)",
  },
  {
    name: "Git",
    abbr: "Gt",
    color: "#F05032",
    bg: "rgba(240,80,50,0.10)",
  },
  {
    name: "GitHub",
    abbr: "GH",
    color: "#e2e8f0",
    bg: "rgba(226,232,240,0.06)",
  },

  {
    name: "Figma",
    abbr: "Fg",
    color: "#F24E1E",
    bg: "rgba(242,78,30,0.10)",
  },
  {
    name: "Vercel",
    abbr: "Vc",
    color: "#e2e8f0",
    bg: "rgba(226,232,240,0.06)",
  },
];

export const projects = [
  {
    title: "Admin Dashboard",
    description:
      "A modern, responsive admin panel for managing products, users, and orders. Features sales & category charts, modal detail views, server actions, toast notifications, and a mock REST API integration.",
    tags: ["Next.js", "React", "TypeScript", "TailwindCss", "Chart.js"],
    gradient: "from-blue-500/30 via-cyan-500/20 to-transparent",
    dotColor: "bg-blue-400",
    preview:
      "/EkranKayd2026-03-1117.25.55-ezgif.com-video-to-gif-converter.gif",
    github: "https://github.com/batuhandagdelen/admin-dashboard",
  },
  {
    title: "Kicks Shoes",
    description:
      "A modern shoe catalog app with product listing, detail pages, image gallery, price & discount display, and a full admin panel for adding, editing, and deleting products. Features role-based access, auth screens, and React Query caching.",
    tags: ["React", "TypeScript", "Tailwind CSS", "TanStack Query", "Formik"],
    gradient: "from-purple-500/30 via-pink-500/20 to-transparent",
    dotColor: "bg-purple-400",
    preview:
      "/EkranKayd2026-02-2219.49.20-ezgif.com-video-to-gif-converter (1).gif",
    github: "https://github.com/batuhandagdelen/kicks-shoes",
  },
  {
    title: "Manav",
    description:
      "A modern grocery shopping app with category-based product listing, product detail pages, cart management, quantity controls, order tracking, and a full purchase flow — built with Next.js App Router.",
    tags: ["Next.js", "React", "TypeScript", "TailwindCSS "],
    gradient: "from-green-500/30 via-emerald-500/20 to-transparent",
    dotColor: "bg-green-400",
    preview:
      "/EkranKayd2026-03-0717.09.32-ezgif.com-video-to-gif-converter.gif",
    github: "https://github.com/batuhandagdelen/manav",
  },
  {
    title: "Flight Radar",
    description:
      "A real-time flight tracking app that displays live flights on an interactive map, draws flight routes, and shows detailed info — callsign, route, and airport data — powered by RapidAPI's Flight Radar.",
    tags: ["React", "Redux Toolkit", "React Leaflet"],
    gradient: "from-orange-500/30 via-red-500/20 to-transparent",
    dotColor: "bg-orange-400",
    preview:
      "/EkranKayd2026-03-2221.08.36-ezgif.com-video-to-gif-converter.gif",
    github: "https://github.com/batuhandagdelen/flight-radar",
  },
];

export const ExternalLinkIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-3.5 h-3.5"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15,3 21,3 21,9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
};

export const GitHubIcon = () => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
};
