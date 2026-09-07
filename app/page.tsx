import Link from "next/link";
import ThemeToggle from "./theme-toggle";

const socials = [
  { label: "GITHUB", href: "https://github.com/yourusername" },
  { label: "TWITTER", href: "https://x.com/yourusername" },
  { label: "LINKEDIN", href: "https://linkedin.com/in/yourusername" },
  { label: "RÉSUMÉ", href: "/resume.pdf" },
];

const projects = [
  { name: "project-one", href: "https://example.com", desc: "a short one-line description of what it does" },
  { name: "project-two", href: "https://example.com", desc: "another short one-line description" },
];

const experience = [
  { short: "25-", full: "jun'25 – present", name: "current company", href: "https://example.com", role: "full-stack engineer" },
  { short: "24-25", full: "sep'24 – jun'25", name: "previous company", href: "https://example.com", role: "software engineer intern" },
  { short: "24", full: "jan'24 – aug'24", name: "earlier gig", href: "https://example.com", role: "frontend developer" },
];

const achievements = [
  "winner of some hackathon, built a thing called Thing",
  "top N finalists out of some number of teams at some event",
  "another accomplishment worth bragging about, briefly",
];

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen px-4 md:px-0">
      <div className="w-full max-w-lg mx-auto">
        <header className="flex justify-between items-center font-mono w-full py-4 text-muted transition-colors duration-300">
          <ThemeToggle />
          <nav className="flex items-center gap-2.5 md:gap-4 underline text-xs md:text-sm">
            <Link href="/projects">PROJECTS</Link>
            <Link href="/resources">RESOURCES</Link>
          </nav>
        </header>
      </div>

      <main className="flex w-full flex-col pt-10 md:pt-12 pb-28 gap-2">
        <div className="mx-auto max-w-lg w-full">
          <h1 className="font-mono font-semibold text-lg mb-4">
            HEY! I&apos;M YOUR NAME<span>.</span>
          </h1>
          <p className="text-sm leading-relaxed">
            i&apos;m a one-line description of what you do, based in{" "}
            <a className="underline decoration-accent/40 hover:decoration-accent transition-colors duration-300" href="#">
              your city, country
            </a>
            .
            <br />
            <br />
            reach out{" "}
            <a
              className="text-accent hover:underline transition-colors duration-300"
              href="mailto:you@example.com"
            >
              you@example.com
            </a>
          </p>

          <div className="flex items-center font-mono opacity-80 hover:opacity-100 gap-4 mt-4">
            <span className="flex md:flex-row flex-col gap-1 md:gap-3">
              {socials.map((s) => (
                <div className="flex items-center text-xs" key={s.label}>
                  [ <a className="mx-1 hover:text-accent hover:underline transition-colors duration-300" target="_blank" href={s.href} rel="noreferrer">
                    {s.label}
                  </a> ]
                </div>
              ))}
            </span>
          </div>

          <h2 className="font-mono font-semibold mt-8 mb-4 text-base">
            SOME PROJECTS I&apos;M WORKING ON:
          </h2>
          <ul className="text-xs sm:text-sm font-mono list-disc list-inside -ml-1 space-y-1">
            {projects.map((p) => (
              <li key={p.name}>
                <a className="text-accent underline decoration-accent/30 hover:decoration-accent transition-colors duration-300" target="_blank" href={p.href} rel="noreferrer">
                  {p.name}
                </a>{" "}
                - {p.desc}
              </li>
            ))}
          </ul>
          <p className="text-xs font-mono mt-2">
            <Link className="text-muted hover:text-accent hover:underline transition-colors duration-300" href="/projects">
              view past projects →
            </Link>
          </p>

          <h2 className="font-mono font-semibold mt-8 mb-4 text-base">
            MY WORK EXPERIENCE SO FAR:
          </h2>
          <ul className="text-xs sm:text-sm font-mono list-disc list-inside -ml-1 space-y-2">
            {experience.map((e) => (
              <li key={e.name} className="group">
                <span className="relative inline-block text-xs rounded-sm border border-line text-muted align-middle transition-colors duration-300">
                  <span className="block px-2 py-0.5 transition-opacity duration-150 group-hover:opacity-0">
                    {e.short}
                  </span>
                  <span className="absolute left-0 top-0 overflow-hidden whitespace-nowrap px-2 py-0.5 border border-accent text-accent bg-accent/10 rounded-sm max-w-0 opacity-0 transition-[max-width,opacity,background-color,border-color,color] duration-300 group-hover:max-w-[12rem] group-hover:opacity-100">
                    {e.full}
                  </span>
                </span>{" "}
                <a className="text-accent underline decoration-accent/30 hover:decoration-accent transition-colors duration-300" target="_blank" href={e.href} rel="noreferrer">
                  {e.name}
                </a>{" "}
                - {e.role}
              </li>
            ))}
          </ul>

          <h2 className="font-mono font-semibold mt-8 mb-4 text-base">
            ACHIEVEMENTS I&apos;M PROUD OF:
          </h2>
          <ul className="text-xs sm:text-sm font-mono list-disc list-inside -ml-1 space-y-1">
            {achievements.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>

          <h2 className="font-mono font-semibold mt-8 mb-4 text-base">TL;DR:</h2>
          <p className="text-sm leading-relaxed">
            a couple of sentences about how you approach work, what you care about,
            what you&apos;re into outside of code.
          </p>
        </div>
      </main>

      <footer className="flex font-mono text-xs w-full py-3.5 text-muted border-t border-line bg-surface px-4 md:px-0 transition-colors duration-300">
        <div className="w-full flex justify-between items-center max-w-lg mx-auto">
          <span>© {new Date().getFullYear()} YOUR NAME</span>
        </div>
      </footer>
    </div>
  );
}
