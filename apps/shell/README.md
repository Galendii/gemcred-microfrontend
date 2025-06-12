# Shell (Host) Application

Este é o container principal (shell) que consome os microfrontends 'Simulador' e 'Assistente' via Module Federation.

## Arquitetura

- Utiliza Next.js
- Configuração com next-pwa para suporte PWA e offline-first
- Module Federation para carregar microfrontends remotamente
- Ponto único de navegação e layout

## Como rodar

- `npm install`
- `npm run dev`
- Acesse `http://localhost:3000`

Os microfrontends devem estar rodando nas portas 3001 e 3002.

