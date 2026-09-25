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

A base foi copiada do Projeto 3 para um repositório independente. GitHub, revisão remota, auditoria de acessibilidade, build e deploy ainda não foram executados neste projeto. A conformidade WCAG não foi certificada.
