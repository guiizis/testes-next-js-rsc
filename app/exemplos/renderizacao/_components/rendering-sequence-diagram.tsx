import { AnimatedDiagram } from "@/components/animated-diagram";

export function RenderingSequenceDiagram() {
  return (
    <section className="space-y-4">
      <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Sequência de renderização</h3>
      <p>Leia de cima para baixo. As setas tracejadas representam respostas.</p>
      <AnimatedDiagram
        title="SSG — esta home em produção"
        src="/diagrams/ssg-sequence.svg"
        width={720}
        height={530}
        alt="SSG: o build gera e publica o HTML antes dos acessos. O navegador solicita a página, recebe o HTML pronto e hidrata as partes interativas."
      />
      <AnimatedDiagram
        title="SSR — renderização por requisição"
        src="/diagrams/ssr-sequence.svg"
        width={720}
        height={490}
        alt="SSR sem cache: o navegador solicita a página, o servidor renderiza e devolve o HTML. O navegador exibe o conteúdo e hidrata as partes interativas."
      />
      <p className="text-xs leading-5">Fluxos simplificados do primeiro acesso. Downloads de CSS e JavaScript foram omitidos. A hidratação se refere aos componentes interativos deste projeto React.</p>
    </section>
  );
}
