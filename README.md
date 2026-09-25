# Projeto 4 — Rede Solidária

Consolidação da SPA acadêmica do Projeto 3, com versionamento, documentação e etapas futuras de acessibilidade e publicação. Organização fictícia, sem envio de dados pessoais.

## Execução local

Requisito: servidor HTTP estático. Com Python instalado, execute `python -m http.server 8000` nesta pasta e abra `http://localhost:8000/html/index.html`. Os módulos JavaScript precisam de HTTP; não abra o HTML por duplo clique.

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

Fluxo para futuras alterações: abrir issue com critérios de aceite, vinculá-la ao milestone da etapa, criar branch feature, registrar commits claros, abrir PR com contexto e validação, revisar o diff e então integrar. Referencie a issue na descrição do PR. Como develop não é a branch padrão, confira o encerramento da issue após a integração; não presuma fechamento automático.

O projeto é individual: uma verificação do próprio autor não deve ser apresentada como aprovação independente de outra pessoa.

## Versionamento semântico

As futuras tags seguirão vMAJOR.MINOR.PATCH: MAJOR para alterações incompatíveis, MINOR para novas funcionalidades compatíveis e PATCH para correções compatíveis. A primeira versão será definida após a validação de uma entrega; o milestone de organização não representa uma release nem comprova deploy.
