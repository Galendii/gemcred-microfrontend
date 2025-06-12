# Gemcred Microfrontend PWA Project

Este projeto é uma arquitetura moderna para um sistema de crédito brasileiro usando:

- Microfrontends com Module Federation (Next.js)
- Arquitetura PWA e Offline-first
- Microfrontends independentes: Simulador e Assistente
- Aplicação Shell que consome os microfrontends dinamicamente
- Tecnologia React 18+ com suporte a React Server Components e client components dinâmicos
- Preparação para uso do Gemini AI na camada frontend (futuro desenvolvimento)

## Arquitetura

A aplicação principal (shell) roda em `localhost:3000` e consome os microfrontends:

- Simulador: `localhost:3001`
- Assistente: `localhost:3002`

Cada microfrontend é um Next.js app autônomo, com seu próprio pacote, exposto via Module Federation.

## Como rodar

1. Instale as dependências:
```
pnpm install
```

### Microfrontends separados
2. Rode os microfrontends em terminais separados:
```
pnpm --filter simulador dev
pnpm --filter assistente dev
```
3. Rode a aplicação shell:
```
pnpm --filter shell dev
```
4. Acesse `http://localhost:3000`

### Microfrontends integrados
2. Rode a aplicação shell:
```
pnpm dev
```
3. Acesse `http://localhost:3000`

## PWA e Offline

A aplicação shell está configurada para PWA com cache e suporte offline via `next-pwa`.

## Futuro

- Implementar onboarding dinâmico e prompts Gemini AI
- Adicionar simulação de crédito e assistente inteligente

