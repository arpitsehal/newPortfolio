import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./theme-toggle";
import { projects } from "./data";

const socials = [
  { label: "GITHUB", href: "https://github.com/arpitsehal" },
  { label: "TWITTER", href: "https://x.com/MacAppu0" },
  { label: "LINKEDIN", href: "https://linkedin.com/in/arpitsehal" },
  { label: "INSTAGRAM", href: "https://instagram.com/sehal_arpit" },
  { label: "RÉSUMÉ", href: "https://drive.google.com/file/d/1jSpgQ4Nf36p9lMu1NFnWjXKl5FR1hssH/view?usp=sharing" },
];

type ExperienceEntry = {
  short: string;
  full: string;
  name: string;
  href?: string;
  role: string;
};

const experience: ExperienceEntry[] = [
  { short: "26-", full: "aug'26 – present", name: "ainrion", role: "AIML intern" },
  { short: "26", full: "may'26 – jul'26", name: "miles education", role: "AI software engineering intern" },
  { short: "25-26", full: "sep'25 – jan'26", name: "ainrion", role: "MERN stack developer intern" },
  { short: "25", full: "jun'25 – oct'25", name: "reskilll", role: "contributor" },
  { short: "25", full: "jun'25 – aug'25", name: "yug yatra retail", role: "SDE intern" },
  { short: "25", full: "jun'25 – jul'25", name: "pisoft informatics", role: "MERN stack intern" },
  { short: "24-25", full: "nov'24 – jun'25", name: "girlscript summer of code", role: "contributor" },
  { short: "24", full: "jul'24 – nov'24", name: "hackquest", role: "advocate" },
];

const achievements = [
  "1st rank in a 30-day GeeksforGeeks coding marathon (2026), solving DSA problems daily",
  "top 10 finalist out of 230+ teams at PSB Hackathon Series 2025 with an AI-powered security solution",
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
            HI! I&apos;M ARPIT<span>.</span>
          </h1>
          <p className="text-sm leading-relaxed">
            i&apos;m a frontend-first full stack developer and final year CS
            undergrad{" "}
            <a
              className="underline decoration-accent/40 hover:decoration-accent transition-colors duration-300"
              href="https://ptu.ac.in/"
              target="_blank"
              rel="noreferrer"
            >
              @ punjab technical university
            </a>
            , 20 y/o, from Yamuna Nagar, HR (india).
            <br />
            <br />
            reach out{" "}
            <a
              className="text-accent hover:underline transition-colors duration-300"
              href="mailto:2005sehalarpit@gmail.com"
            >
              2005sehalarpit@gmail.com
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
              <li key={`${e.name}-${e.full}`} className="group">
                <span className="relative inline-block text-xs rounded-sm border border-line text-muted align-middle transition-colors duration-300">
                  <span className="block px-2 py-0.5 transition-opacity duration-150 group-hover:opacity-0">
                    {e.short}
                  </span>
                  <span className="absolute left-0 top-0 overflow-hidden whitespace-nowrap px-2 py-0.5 border border-accent text-accent bg-background rounded-sm max-w-0 opacity-0 transition-[max-width,opacity,background-color,border-color,color] duration-300 group-hover:max-w-[12rem] group-hover:opacity-100">
                    {e.full}
                  </span>
                </span>{" "}
                {e.href ? (
                  <a
                    className="text-accent underline decoration-accent/30 hover:decoration-accent transition-colors duration-300"
                    target="_blank"
                    href={e.href}
                    rel="noreferrer"
                  >
                    {e.name}
                  </a>
                ) : (
                  <span>{e.name}</span>
                )}{" "}
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
            i&apos;m a fan of the process. i&apos;ve been building things and
            working for startups for well over an year now.
          </p>
          <Image
            src="/arpit.jpeg"
            alt="Arpit"
            width={891}
            height={1319}
            className="mt-4 mx-auto w-40 sm:w-48 h-auto rounded-sm border border-line transition-colors duration-300"
          />
        </div>
      </main>

      <footer className="flex font-mono text-xs w-full py-3.5 text-muted border-t border-line bg-surface px-4 md:px-0 transition-colors duration-300">
        <div className="w-full flex justify-between items-center max-w-lg mx-auto">
          <span>© {new Date().getFullYear()} ARPIT</span>
        </div>
      </footer>
    </div>
  );
}
