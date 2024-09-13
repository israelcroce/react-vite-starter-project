# React + TypeScript + Vite

Este Boilerplate fornece uma configuração bem simples e inicial em React usando Vite.

## Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [React](https://pt-br.reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Vitest](https://vitest.dev/)

## Sumário

- [Instalação](#instalação)
- [Ambiente de Desenvolvimento](#ambiente-de-desenvolvimento)
  - [Sem Docker](#sem-docker)
  - [Com Docker](#com-docker)
- [Execução de Testes](#execução-de-testes)
- [Build do Projeto](#build-do-projeto)
- [Auditoria de segurança](#auditoria-de-segurança)
- [Linter (Analise de código)](#linter-analise-de-código)

## Ambiente de Desenvolvimento

### Sem Docker

1 - Antes de iniciar, precisa instalar as dependências do projeto.

```bash
  yarn install
```

2 - Para iniciar a aplicação, basta rodar:

```bash
yarn dev
```

### Com Docker

1 - Para iniciar a aplicação, basta rodar:

```bash
docker compose up
```

## Execução de Testes

Para executar os testes automatizados do projeto, use o seguinte comando:

```sh
yarn test
```

## Build do Projeto

Para gerar os arquivos staticos do projeto, use o seguinte comando:

```sh
yarn build
```

Os arquivos serão gerados em `build`.

## Auditoria de segurança

Para executar a auditoria de segurança do projeto, use o seguinte comando:

```sh
yarn audit
```

## Linter (Analise de código)

Para executar o linter do projeto, use o seguinte comando:

```sh
yarn lint
```

É usado o prettier para formatar o código e o eslint para analisar o código.
