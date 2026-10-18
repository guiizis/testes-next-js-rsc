import { examples } from "../_data/examples";
import { ExampleCard } from "./example-card";

export function ExamplesCatalog() {
  return (
    <section aria-labelledby="examples-title">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 id="examples-title" className="text-lg font-semibold tracking-tight">Exemplos disponíveis</h2>
        <span className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">{examples.length} {examples.length === 1 ? "exemplo" : "exemplos"}</span>
      </div>
      <ul className="grid gap-6 md:grid-cols-2">
        {examples.map((example) => (
          <li key={example.id}><ExampleCard example={example} /></li>
        ))}
      </ul>
    </section>
  );
}
