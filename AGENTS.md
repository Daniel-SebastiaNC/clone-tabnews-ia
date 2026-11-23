# AGENTS.md

Instruções e contexto do repositório para agentes de IA que trabalham neste projeto.

## Visão Geral

- **Projeto:** `clone-tabnews-ia` (`0.1.0`, privado)
- **Objetivo:** Projeto de estudo (em estágio inicial).
- **Idioma padrão da interface e documentação:** Português (`pt-BR`).

## Stack Atual

- **Framework:** Next.js `16.2.12` (App Router)
- **Biblioteca UI:** React `^19.0.0` e `react-dom` `^19.0.0`
- **Efeitos / UI adicional:** `react-confetti` `^6.4.0`
- **Linguagem:** JavaScript (arquivos `.js`, sem TypeScript configurado no momento)
- **Estilização:** CSS global (`app/global.css`)
- **Gerenciador de pacotes:** `npm` (com `package-lock.json`)

## Estrutura do Projeto

```text
.
├── app/
│   ├── confetti-effect.js  # Componente client-side para animação de confete
│   ├── global.css          # Estilos globais importados pelo layout raiz
│   ├── layout.js           # RootLayout (html lang="pt-BR", metadata)
│   └── page.js             # Página inicial (HomePage, dinâmica via API do TabNews)
├── .gitignore        # Ignora node_modules/ e .next/
├── .prettierignore   # Arquivos e diretórios ignorados pelo Prettier
├── .prettierrc       # Configuração do Prettier (aspas simples, ponto e vírgula, 2 espaços)
├── eslint.config.mjs # Configuração oficial do ESLint para Next.js (core-web-vitals + prettier)
├── package.json      # Dependências e scripts npm
└── README.md         # Título do repositório
```

## Comandos Úteis

- `npm run dev` — Inicia o servidor de desenvolvimento (`next dev`).
- `npm run build` — Gera o build de produção (`next build`). Use para validar alterações antes de finalizar tarefas.
- `npm run start` — Inicia o servidor de produção (`next start`).
- `npm run lint` — Executa o ESLint (`eslint .`) usando `eslint-config-next/core-web-vitals`.
- `npm run format` — Formata os arquivos do projeto com o Prettier (`prettier --write .`).
- `npm run format:check` — Verifica a formatação dos arquivos com o Prettier (`prettier --check .`).

> **Nota:** Atualmente não há suíte de testes automatizados configurada no `package.json`.

## Convenções Observadas

- **Next.js App Router:** Rotas e layouts ficam em `app/`.
- **Código simples e direto:** Componentes funcionais em JavaScript com aspas simples (`'...'`), ponto e vírgula e indentação de 2 espaços.
- **Commits:** Histórico segue o padrão Conventional Commits em inglês (ex.: `feat: add minimal Next.js 16.2.12 app with centered name list`, `feat: add heading title to home page`).

## Diretrizes para Agentes

1. **Mantenha o escopo enxuto:** Como o projeto está no início, evite introduzir abstrações, bibliotecas ou configurações pesadas (como TypeScript, Tailwind, etc.) sem que seja explicitamente solicitado.
2. **Verifique o build:** Após editar código em `app/`, execute `npm run build` para garantir que não há erros de compilação ou roteamento.
3. **Atualize este arquivo:** Ao adicionar novas ferramentas, variáveis de ambiente, testes, rotas relevantes ou banco de dados, atualize o `AGENTS.md` para manter o contexto sincronizado.
