import type { Example } from "../_interfaces/example";

export const examples: Example[] = [
  {
    id: "01",
    kind: "page",
    title: "React Server Components e React Server Actions",
    description: "Leitura de dados do MongoDB em um Server Component e cadastro por Server Action, com validação no servidor e atualização da listagem.",
    href: "/bichos",
    tags: ["Server Components", "Server Actions", "MongoDB"],
  },
  {
    id: "02",
    kind: "modal",
    href: "/exemplos/renderizacao",
    title: "Renderização no servidor: SSR e SSG",
    description: "A própria home como exemplo de HTML pré-renderizado. Entenda a diferença entre gerar a página no build e renderizá-la a cada requisição.",
    tags: ["SSR", "SSG", "HTML", "Hidratação"],
  },
];
