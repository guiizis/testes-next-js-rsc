import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { RenderingConcept } from "./_components/rendering-concept";

export const metadata: Metadata = {
  title: "CSR, SSR e SSG | Browser Labs",
  description: "Entenda CSR, SSR e SSG com diagramas animados de sequência e inspeção do HTML no navegador.",
};

export default function RenderingPage() {
  return (
    <main className="min-h-screen bg-zinc-50 px-4 py-12 font-sans text-zinc-900 sm:px-8 dark:bg-zinc-950 dark:text-zinc-100">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="mb-8 inline-flex rounded text-sm font-medium text-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-4 dark:text-emerald-400">← Todos os exemplos</Link>
        <PageHeader eyebrow="Renderização" title="CSR, SSR e SSG: onde a interface ganha forma" />
        <RenderingConcept />
      </div>
    </main>
  );
}
