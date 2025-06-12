# Documentação Técnica do Projeto Gemcred Microfrontend PWA

Este documento visa descrever a arquitetura, tecnologias e funcionamento dos microfrontends que compõem o PWA Gemcred, de forma didática para auxiliar no onboarding de novos desenvolvedores e servir como referência para a equipe.

## 1. Visão Geral da Arquitetura

O projeto Gemcred PWA é construído sobre uma arquitetura de microfrontends, utilizando [Next.js](https://nextjs.org/) para cada aplicação e [Turborepo](https://turborepo.org/) para gerenciar o monorepo. Essa abordagem permite o desenvolvimento, deploy e escalabilidade independentes de cada parte da aplicação, promovendo maior agilidade e desacoplamento.

### 1.1. Monorepo com Turborepo

O Turborepo é utilizado para otimizar o fluxo de trabalho no monorepo, oferecendo:
- **Builds incrementais:** Apenas o que mudou é reconstruído.
- **Cache de build:** Compartilha o cache de build entre os membros da equipe e CI/CD.
- **Execução paralela:** Executa tarefas em paralelo para acelerar o desenvolvimento.

### 1.2. Microfrontends

Cada aplicação dentro da pasta `apps/` é um microfrontend independente, com seu próprio ciclo de vida, dependências e configuração. Atualmente, temos os seguintes microfrontends:

- **`shell`**: O microfrontend principal que orquestra e carrega os outros microfrontends. Ele é responsável pela navegação global, layout comum e autenticação.
- **`assistente`**: Um microfrontend dedicado à funcionalidade de assistente, possivelmente integrando prompts de IA (Gemini AI).
- **`simulador`**: Um microfrontend para a funcionalidade de simulação, como simulação de crédito ou outros cálculos.

## 2. Tecnologias Utilizadas

- **Next.js**: Framework React para construção de aplicações web, com suporte a Server-Side Rendering (SSR), Static Site Generation (SSG) e API Routes.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática, melhorando a manutenibilidade e a detecção de erros.
- **Turborepo**: Ferramenta de build para monorepos, otimizando a performance do desenvolvimento.
- **pnpm**: Gerenciador de pacotes rápido e eficiente, otimizado para monorepos.

## 3. Estrutura do Projeto

```
.gitignore
.turbo/             # Cache do Turborepo
README.md
apps-config.js      # Configurações globais para os apps
apps/
├── assistente/     # Microfrontend do Assistente
│   ├── .next/
│   ├── README.md
│   ├── next-env.d.ts
│   ├── next.config.js
│   ├── package.json
│   ├── src/        # Código fonte do Assistente
│   └── tsconfig.json
├── shell/          # Microfrontend Shell (orquestrador)
│   ├── .next/
│   ├── README.md
│   ├── next-env.d.ts
│   ├── next.config.js
│   ├── package.json
│   ├── pages/      # Páginas do Shell
│   ├── styles/     # Estilos do Shell
│   └── tsconfig.json
└── simulador/      # Microfrontend do Simulador
    ├── .next/
    ├── README.md
    ├── next-env.d.ts
    ├── next.config.js
    ├── package.json
    ├── src/        # Código fonte do Simulador
    └── tsconfig.json
package.json        # Dependências do monorepo
pnpm-lock.yaml
pnpm-workspace.yaml # Configuração do workspace pnpm
turbo.json          # Configuração do Turborepo
```

## 4. Como Rodar o Projeto

1. **Instalar pnpm:**
   ```bash
   npm install -g pnpm
   ```

2. **Instalar dependências:**
   Navegue até a raiz do projeto e execute:
   ```bash
   pnpm install
   ```

3. **Rodar os microfrontends em desenvolvimento:**
   Para iniciar todos os microfrontends em modo de desenvolvimento, execute na raiz do projeto:
   ```bash
   pnpm dev
   ```
   Isso iniciará o `shell` e os outros microfrontends configurados para desenvolvimento. O `shell` geralmente estará disponível em `http://localhost:3000` (ou outra porta configurada).

## 5. Implementação e Funcionamento Arquitetural

### 5.1. Comunicação entre Microfrontends

A comunicação entre os microfrontends pode ser realizada de diversas formas, dependendo da necessidade:
- **Compartilhamento de estado global:** Utilizando bibliotecas como Redux, Zustand ou Context API do React para dados que precisam ser acessados por múltiplos microfrontends.
- **Eventos customizados:** Disparando e ouvindo eventos no nível do navegador para comunicação assíncrona.
- **APIs REST/GraphQL:** Cada microfrontend pode ter sua própria API ou consumir APIs de outros microfrontends/serviços de backend.

### 5.2. Onboarding Dinâmico e Prompts Gemini AI

A funcionalidade de onboarding dinâmico e prompts Gemini AI, mencionada no `README.md` principal, será implementada provavelmente no microfrontend `assistente`. Isso envolverá:
- Integração com a API do Gemini AI para geração de prompts e respostas.
- Lógica para adaptar o fluxo de onboarding com base nas interações do usuário e nas respostas da IA.

## 6. Próximos Passos e Melhorias

- Detalhar a estratégia de deploy e CI/CD.
- Adicionar documentação sobre testes e qualidade de código.
- Expandir a seção de comunicação entre microfrontends com exemplos de código.
- Documentar as APIs internas e externas consumidas/expostas por cada microfrontend.

Este documento será atualizado continuamente para refletir as evoluções do projeto.