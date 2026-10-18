import { PageHeader } from "@/components/page-header";
import { ExamplesCatalog } from "./_components/examples-catalog";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 px-4 font-sans text-zinc-900 sm:px-8 dark:bg-zinc-950 dark:text-zinc-100">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between border-b border-zinc-200 py-6 dark:border-zinc-800">
          <span className="flex items-center gap-3 text-sm font-semibold tracking-tight">
            <span aria-hidden="true" className="flex size-8 items-center justify-center rounded-lg bg-emerald-700 font-mono text-xs text-white">B/</span>
            Browser Labs
          </span>
          <span className="text-xs text-zinc-500 dark:text-zinc-400">Projeto de testes</span>
        </div>
        <div className="max-w-2xl pb-8 pt-14 sm:pt-20">
          <PageHeader
            eyebrow="Frontend e plataforma web"
            title="Testes de APIs, renderização e tecnologias web"
            description="Exemplos para testar recursos do navegador, bibliotecas e modelos de renderização."
          />
        </div>
        <ExamplesCatalog />
        <footer className="mt-16 border-t border-zinc-200 py-6 text-xs leading-6 text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
          Cada exemplo reúne a implementação de um recurso e uma interface para testá-lo.
        </footer>
      </div>
    </main>
  );
}
