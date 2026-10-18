import { RenderingSequenceDiagram } from "./rendering-sequence-diagram";

export function RenderingConcept() {
  return (
    <div className="space-y-6 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
      <section>
        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">O que é SSR?</h3>
        <p>Server-Side Rendering gera o HTML no servidor ao atender uma requisição. O navegador recebe conteúdo já renderizado, em vez de depender de JavaScript para montar todo o conteúdo inicial.</p>
      </section>
      <RenderingSequenceDiagram />
      <dl className="space-y-3 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950">
        <div><dt className="font-semibold">SSR</dt><dd>HTML gerado ao atender a requisição.</dd></div>
        <div><dt className="font-semibold">SSG</dt><dd>HTML gerado antecipadamente e reutilizado nos acessos.</dd></div>
      </dl>
      <section>
        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Como verificar conteúdo pré-renderizado?</h3>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Recarregue a home e abra Network → (primeira requisição) → Response.</li>
          <li>O texto já está no HTML recebido.</li>
          <li>Isso confirma o conteúdo pré-renderizado, mas não distingue SSR de SSG.</li>
        </ol>
      </section>
    </div>
  );
}
