# Browser Labs

Exemplos para testar recursos do navegador, bibliotecas e modelos de renderização.

O objetivo é estudar o comportamento e a implementação de tecnologias de frontend e da plataforma web por meio de exemplos executáveis. O Next.js é a infraestrutura da aplicação; os testes não se limitam ao framework.

A página inicial reúne os exemplos disponíveis em um catálogo.

A rota `/bichos` consulta o banco no servidor e exibe uma tabela. O botão **Adicionar bicho** abre um modal; a Server Action valida os campos, salva o documento e atualiza a listagem.

## Executar localmente

```bash
npm install
docker compose up -d
```

Crie `.env.local` na raiz do projeto:

```dotenv
MONGODB_URI=mongodb://admin:admin@127.0.0.1:27018/rsc_test?authSource=admin
```

As credenciais acima são exclusivas do ambiente local de estudo definido no Compose. O `.env.local` não é versionado. O volume Docker preserva os documentos entre reinicializações.

```bash
npm run dev
```

Abra http://localhost:3000 para acessar o catálogo. O exemplo de React Server Components e Server Actions está em `/bichos`. O banco e a coleção são criados na primeira inserção; uma base vazia mostra o estado sem cadastros.

## Organização

- `components/`: tabela, header e modal reutilizáveis.
- `app/bichos/_components/`: listagem, configuração da tabela, botão e formulário da feature.
- `app/bichos/_actions/`: Server Action de cadastro e revalidação da página.
- `app/bichos/_data/`: repository com operações do MongoDB.
- `app/bichos/_lib/`: validação dos dados recebidos.
- `app/bichos/_interfaces/`: tipos da feature.
- `lib/db/`: cliente MongoDB exclusivo do servidor.

A página e a consulta permanecem no servidor. A interação do modal e do formulário usa Client Components. A consulta aguarda uma requisição com `connection()` e fica dentro de `Suspense`, pois o projeto usa Cache Components.

Este laboratório ainda não implementa autenticação ou autorização de usuários.

## Verificações

```bash
npx tsc --noEmit
npm run lint
npm run build
```

## Progresso

- Listagem de bichos com React Server Components.
- Tabela e header reutilizáveis.
- Cadastro por modal e Server Action.
- Validação no servidor, feedback de erro e atualização da listagem.
