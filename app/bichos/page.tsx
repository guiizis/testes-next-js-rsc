import { Suspense } from "react";
import { PageHeader } from "@/components/page-header";
import Link from "next/link";
import { ListaBichos } from "./_components/lista-bichos";
import { AdicionarBichoButton } from "./_components/adicionar-bicho-button";

export default function BichosPage() {
  return (
    <main className="min-h-screen bg-zinc-50 px-4 py-12 font-sans text-zinc-900 sm:px-8 sm:py-20 dark:bg-zinc-950 dark:text-zinc-100">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 rounded text-sm font-medium text-zinc-500 hover:text-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400">
          <span aria-hidden="true">←</span> Todos os exemplos
        </Link>
        <PageHeader
          eyebrow="Um lugar para cada bichinho"
          title="Bichos cadastrados"
          description="Testes com React Server Components, Suspense e streaming de HTML."
        />
        <AdicionarBichoButton />
        <Suspense
          fallback={
            <p role="status" className="rounded-2xl border border-zinc-200 bg-white p-8 text-sm text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
              Carregando bichos...
            </p>
          }
        >
          <ListaBichos />
        </Suspense>
      </div>
    </main>
  );
}
