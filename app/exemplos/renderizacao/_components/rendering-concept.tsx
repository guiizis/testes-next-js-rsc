import { AnimatedDiagram } from "@/components/animated-diagram";
import { RenderingSequenceDiagram } from "./rendering-sequence-diagram";

export function RenderingConcept() {
  return (
    <div className="space-y-6 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
      <p className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-200">
        Esta página (Home) é renderizada no servidor (SSR/SSG). Os diagramas abaixo ilustram outros fluxos de renderização para fins didáticos.
      </p>
      <section className="space-y-2">
        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">CSR — renderização no navegador</h3>
        <p>No Client-Side Rendering, o servidor entrega um documento inicial e os arquivos JavaScript da aplicação. O navegador executa esse JavaScript para montar a interface. Se os dados vêm de uma API, a aplicação faz uma nova requisição e só então pode preencher a tela com eles.</p>
        <p>Esse caminho cria um round trip adicional: documento e JavaScript chegam primeiro; depois, o navegador pede os dados e recebe a resposta. Enquanto isso, a interface pode mostrar um estado de carregamento. Se os dados já vierem no documento ou forem locais, essa etapa extra pode não existir.</p>
      </section>
      <ClientRenderingDiagram />
      <section className="space-y-2">
        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">SSR — renderização no servidor</h3>
        <p>Server-Side Rendering gera o HTML no servidor ao atender uma requisição. O navegador recebe conteúdo já renderizado e pode exibi-lo antes de o JavaScript da página terminar de carregar. Depois, o JavaScript hidrata as partes interativas.</p>
      </section>
      <RenderingSequenceDiagram type="ssr" />
      <section className="space-y-2">
        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">SSG — geração estática</h3>
        <p>Static Site Generation gera o HTML durante o build. O arquivo pronto é publicado e pode ser servido em vários acessos sem renderizar a página de novo para cada requisição. JavaScript ainda pode hidratar as partes interativas no navegador.</p>
      </section>
      <RenderingSequenceDiagram type="ssg" />
      <dl className="space-y-3 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950">
        <div><dt className="font-semibold">CSR</dt><dd>JavaScript executado no navegador monta a interface; os dados podem exigir uma requisição adicional.</dd></div>
        <div><dt className="font-semibold">SSR</dt><dd>HTML gerado no servidor ao atender a requisição.</dd></div>
        <div><dt className="font-semibold">SSG</dt><dd>HTML gerado antecipadamente e reutilizado nos acessos.</dd></div>
      </dl>
      <section>
        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Como verificar conteúdo pré-renderizado?</h3>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Recarregue a home e abra Network → a primeira requisição → Response.</li>
          <li>Confira se o texto da página já está no HTML recebido.</li>
          <li>Isso confirma que o conteúdo veio pré-renderizado, mas não distingue SSR de SSG.</li>
        </ol>
      </section>
    </div>
  );
}

function ClientRenderingDiagram() {
  return (
    <section className="space-y-4">
      <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Round trip do CSR</h3>
      <p>Leia de cima para baixo. Neste exemplo, a aplicação busca os dados em uma API depois que o JavaScript inicia.</p>
      <AnimatedDiagram
        title="CSR — documento, JavaScript e dados"
        src="/diagrams/csr-sequence.svg"
        width={720}
        height={590}
        alt="CSR: o navegador solicita um documento e recebe o shell e os arquivos JavaScript. Executando o JavaScript, solicita dados à API e recebe uma resposta. Com os dados, monta e exibe a interface."
      />
      <p className="text-xs leading-5">O round trip adicional é a ida do navegador à API e a volta dos dados. CSS, cache e detalhes de transporte foram omitidos. CSR descreve onde a interface é renderizada; não determina por si só onde os dados ficam.</p>
    </section>
  );
}
