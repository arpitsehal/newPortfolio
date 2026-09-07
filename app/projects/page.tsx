import Link from "next/link";

const pastProjects = [
  { name: "old-project-one", href: "https://example.com", desc: "one-line description" },
  { name: "old-project-two", href: "https://example.com", desc: "one-line description" },
];

export default function Projects() {
  return (
    <div className="flex flex-col w-full min-h-screen px-4 md:px-0">
      <div className="w-full max-w-lg mx-auto">
        <header className="flex justify-between items-center font-mono w-full py-4 text-gray-600">
          <Link href="/" className="text-xs underline">
            ← back
          </Link>
        </header>
      </div>
      <main className="flex w-full flex-col pt-4 pb-28 gap-2">
        <div className="mx-auto max-w-lg w-full">
          <h1 className="font-mono font-semibold text-lg mb-4">PAST PROJECTS</h1>
          <ul className="text-xs sm:text-sm font-mono list-disc list-inside -ml-1 space-y-1">
            {pastProjects.map((p) => (
              <li key={p.name}>
                <a className="underline hover:no-underline" target="_blank" href={p.href} rel="noreferrer">
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
