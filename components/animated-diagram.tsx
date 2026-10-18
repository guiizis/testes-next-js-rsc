"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type AnimatedDiagramProps = {
  title: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export function AnimatedDiagram({ title, src, alt, width, height }: AnimatedDiagramProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [playback, setPlayback] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
        setPlayback(crypto.randomUUID());
        observer.disconnect();
      }
    }, { threshold: 0.35 });

    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  function replay() {
    setFailed(false);
    setPlayback(crypto.randomUUID());
  }

  return (
    <figure className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
      <figcaption className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200 p-4 dark:border-zinc-800">
        <span className="font-semibold">{title}</span>
        <button type="button" onClick={replay} disabled={!playback} aria-label={`Reiniciar animação: ${title}`} className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 text-xs font-medium text-zinc-700 hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800">
          <span aria-hidden="true">↻</span> Reiniciar animação
        </button>
      </figcaption>
      <div ref={viewportRef} className="overflow-x-auto" tabIndex={0} role="region" aria-label={`${title}: diagrama com rolagem horizontal`}>
        <div className="relative min-w-[560px]" style={{ aspectRatio: `${width} / ${height}` }}>
          {playback && !failed ? (
            <Image key={playback} src={`${src}?playback=${playback}`} width={width} height={height} unoptimized loading="eager" alt={alt} onError={() => setFailed(true)} className="h-auto w-full" />
          ) : (
            <p role="status" className="absolute inset-0 flex items-center justify-center bg-zinc-50 p-6 text-center text-sm text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
              {failed ? "Não foi possível carregar o diagrama. Use Reiniciar animação para tentar novamente." : "A animação começa quando o diagrama fica visível."}
            </p>
          )}
        </div>
      </div>
    </figure>
  );
}
