import Link from "next/link";
import type { Example } from "../_interfaces/example";

export function ExampleCard({ example }: { example: Example }) {
  return (
    <Link href={example.href} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-colors hover:border-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-500">
      <div className="flex items-center justify-between border-b border-zinc-200 bg-emerald-50/60 px-6 py-5 dark:border-zinc-800 dark:bg-emerald-950/20">
        <span className="font-mono text-xs font-medium tracking-widest text-emerald-800 dark:text-emerald-300">EXEMPLO / {example.id}</span>
        <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-xl border border-emerald-200 bg-white font-mono text-lg text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300">{"</>"}</span>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h3 className="text-2xl font-semibold leading-tight tracking-tight text-zinc-900 dark:text-zinc-100">{example.title}</h3>
        <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">{example.description}</p>
        <ul aria-label="Tecnologias do exemplo" className="mb-8 mt-6 flex flex-wrap gap-2">
          {example.tags.map((tag) => (
            <li key={tag} className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">{tag}</li>
          ))}
        </ul>
        <div className="mt-auto flex items-center justify-between border-t border-zinc-100 pt-5 text-sm font-semibold text-emerald-700 dark:border-zinc-800 dark:text-emerald-400">
          <span>Abrir exemplo</span>
          <span aria-hidden="true" className="text-xl motion-safe:transition-transform motion-safe:group-hover:translate-x-1">→</span>
        </div>
      </div>
    </Link>
  );
}
