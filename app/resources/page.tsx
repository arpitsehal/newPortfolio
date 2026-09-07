import Link from "next/link";

const resources = [
  { name: "some resource", href: "https://example.com", desc: "why it's worth sharing" },
];

export default function Resources() {
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
          <h1 className="font-mono font-semibold text-lg mb-4">RESOURCES</h1>
          <ul className="text-xs sm:text-sm font-mono list-disc list-inside -ml-1 space-y-1">
            {resources.map((r) => (
              <li key={r.name}>
                <a className="underline hover:no-underline" target="_blank" href={r.href} rel="noreferrer">
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
