import Link from "next/link";

const resources = [
  { name: "javascript", href: "https://github.com/arpitsehal/Javascript", desc: "interview-ready short notes" },
  { name: "react", href: "https://github.com/arpitsehal/React", desc: "interview-ready short notes" },
  { name: "backend", href: "https://github.com/arpitsehal/Backend", desc: "interview-ready short notes" },
];

export default function Resources() {
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
          <h1 className="font-mono font-semibold text-lg mb-4">RESOURCES</h1>
          <ul className="text-xs sm:text-sm font-mono list-disc list-inside -ml-1 space-y-1">
            {resources.map((r) => (
              <li key={r.name}>
                <a className="text-accent underline decoration-accent/30 hover:decoration-accent transition-colors duration-300" target="_blank" href={r.href} rel="noreferrer">
                  {r.name}
                </a>{" "}
                - {r.desc}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
