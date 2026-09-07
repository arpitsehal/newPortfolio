import Link from "next/link";
import { projects, pastProjects } from "../data";

export default function Projects() {
  return (
    <div className="flex flex-col w-full min-h-screen px-4 md:px-0">
      <div className="w-full max-w-lg mx-auto">
        <header className="flex justify-between items-center font-mono w-full py-4 text-muted transition-colors duration-300">
          <Link href="/" className="text-xs hover:text-accent hover:underline transition-colors duration-300">
            ← back
          </Link>
        </header>
      </div>
      <main className="flex w-full flex-col pt-4 pb-28 gap-2">
        <div className="mx-auto max-w-lg w-full">
          <h1 className="font-mono font-semibold text-lg mb-4">PROJECTS</h1>

          <h2 className="font-mono font-semibold mb-4 text-base">CURRENT:</h2>
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

          <h2 className="font-mono font-semibold mt-8 mb-4 text-base">PAST:</h2>
          <ul className="text-xs sm:text-sm font-mono list-disc list-inside -ml-1 space-y-1">
            {pastProjects.map((p) => (
              <li key={p.name}>
                <a className="text-accent underline decoration-accent/30 hover:decoration-accent transition-colors duration-300" target="_blank" href={p.href} rel="noreferrer">
                  {p.name}
                </a>{" "}
                - {p.desc}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
