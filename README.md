# Projeto 4 — Rede Solidária

Consolidação da SPA acadêmica do Projeto 3, com versionamento, documentação e etapas futuras de acessibilidade e publicação. Organização fictícia, sem envio de dados pessoais.

## Tecnologias e pré-requisitos

HTML5, CSS3, JavaScript puro com módulos ES, APIs DOM, History e localStorage. Não há frameworks nem dependências NPM de execução. Para clonar, use Git; para servir os arquivos, Python 3 e um navegador moderno. Node.js é opcional, somente para conferir a sintaxe dos scripts.

## Instalação e execução local

1. Clone o repositório: `git clone https://github.com/kanppz/projeto-4-rede-solidaria.git`.
2. Entre na pasta: `cd projeto-4-rede-solidaria`.
3. Para consultar esta documentação enquanto o PR #2 está aberto, execute `git switch feature/colaboracao-github`. Após sua integração, use `git switch develop` e `git pull --ff-only`.
4. Execute `python -m http.server 8000 --bind 127.0.0.1`. No Windows, se o executável se chamar py, use `py -3 -m http.server 8000 --bind 127.0.0.1`.
5. Abra `http://127.0.0.1:8000/html/index.html`. Encerre o servidor com Ctrl+C.

Não é necessário executar npm install. Os módulos JavaScript precisam de HTTP; não abra o HTML por duplo clique. Se a porta estiver ocupada, utilize outra porta livre no comando e na URL. Mantenha a mesma origem (protocolo, host e porta) para recuperar os interesses salvos.

## Verificação e testes

Com Node.js instalado, confira a sintaxe individualmente:

```sh
node --check js/main.js
node --check js/modules/router.js
node --check js/modules/templates.js
node --check js/modules/eventos.js
node --check js/modules/armazenamento.js
node --check js/modules/projetos.js
git diff --check
```

Esses comandos não substituem testes de comportamento. Nesta pasta não há suíte automatizada ou comando npm test configurado. No navegador:

- Navegue por Início, Projetos e Sobre; teste Voltar/Avançar e uma rota inexistente.
- Envie o formulário vazio, com nome só de espaços e e-mail inválido; depois corrija e confira a mensagem de validação.
- Marque um interesse, recarregue a página e verifique a seleção; remova-o e recarregue novamente.
- Percorra links e campos com Tab, observando foco e mensagens. Verifique largura móvel e ausência de rolagem horizontal.
- Examine Console e Rede para identificar erros de JavaScript e arquivos que não carregaram.

## Build e publicação

A aplicação atual utiliza arquivos estáticos diretamente; não há compilação, minificação ou comando npm run build configurado. Para hospedá-la, os diretórios html, css, imagens e js devem manter suas posições relativas, com entrada em html/index.html. Preparação otimizada e deploy serão tratados em etapa posterior. Publicar o repositório no GitHub não publica automaticamente o site.

## Estrutura e funcionalidades

- `html/`: documento principal.
- `css/`: normalização e estilos responsivos.
- `imagens/`: marca SVG.
- `js/main.js`: inicialização e tratamento de falha de carregamento.
- `js/modules/`: roteamento, templates, eventos, dados e armazenamento.

Rotas por hash: Início, Projetos e Sobre. Formulário com validação local, sem armazenamento de nome ou e-mail. IDs dos projetos de interesse são salvos no localStorage sob `rede-solidaria:interesses:v1`.

## Estado da entrega

Repositório público: https://github.com/kanppz/projeto-4-rede-solidaria

O histórico local e as branches main, develop e feature/documentacao-gitflow foram publicados. Auditoria de acessibilidade, build e deploy continuam pendentes. A conformidade WCAG não foi certificada. Não há release publicada nesta etapa.

## Fluxo de branches

- `main`: base de lançamento; recebe apenas versões preparadas e verificadas.
- `develop`: integração contínua das funcionalidades.
- `feature/documentacao-gitflow`: criada a partir de develop para documentar este fluxo. Após revisão local, integrada em develop com merge --no-ff.
- Futuras `release/*`: partirão de develop para preparação de uma versão, com integração em main e develop e tag de versão após validação.
- Futuras `hotfix/*`: partirão de main para correções urgentes, retornando a main e develop.

Commits usam prefixos como chore, docs, feat e fix. Não há branches release/hotfix criadas sem trabalho correspondente.

## Colaboração e rastreabilidade

A [issue #1](https://github.com/kanppz/projeto-4-rede-solidaria/issues/1) define os critérios da atualização desta documentação. O trabalho ocorre em feature/colaboracao-github, criada a partir de develop, e é apresentado em pull request para develop antes da integração.

Registros reais: [PR #2](https://github.com/kanppz/projeto-4-rede-solidaria/pull/2) e [milestone da etapa 1](https://github.com/kanppz/projeto-4-rede-solidaria/milestone/1). O PR permanece aberto nesta etapa.

Fluxo para futuras alterações: abrir issue com critérios de aceite, vinculá-la ao milestone da etapa, criar branch feature, registrar commits claros, abrir PR com contexto e validação, revisar o diff e então integrar. Referencie a issue na descrição do PR. Como develop não é a branch padrão, confira o encerramento da issue após a integração; não presuma fechamento automático.

O projeto é individual: uma verificação do próprio autor não deve ser apresentada como aprovação independente de outra pessoa.

## Versionamento semântico

As futuras tags seguirão vMAJOR.MINOR.PATCH: MAJOR para alterações incompatíveis, MINOR para novas funcionalidades compatíveis e PATCH para correções compatíveis. A primeira versão será definida após a validação de uma entrega; o milestone de organização não representa uma release nem comprova deploy.
