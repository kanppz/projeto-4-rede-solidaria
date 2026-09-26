# Produção e entrega contínua

URL configurada: https://kanppz.github.io/projeto-4-rede-solidaria/

O GitHub Pages publica o artefato dist gerado pelo workflow .github/workflows/pages.yml. A raiz encaminha para html/index.html, preservando os caminhos relativos e a navegação por hash.

## Executar a build

Requer Node.js 24 e pnpm 11.19.0. Execute:

```sh
pnpm install --frozen-lockfile
pnpm run build
node scripts/verificar-build.cjs
node scripts/contraste.cjs
```

Para prévia local, sirva dist por HTTP: `python -m http.server 8000 --directory dist --bind 127.0.0.1`.

## CI/CD

Pull requests para main/develop executam instalação, build e verificações. Pushes em main também publicam o artefato pelo actions/deploy-pages. O job build possui apenas leitura do repositório; o job deploy possui pages:write e id-token:write e utiliza o ambiente github-pages. Uma falha na build impede o deploy. Não há credenciais pessoais no código.

## Escopo das verificações

A verificação automática cobre sintaxe dos bundles, referências HTML e razões de contraste da paleta. Não substitui auditoria WCAG completa, teste com leitor de tela ou testes de todos os navegadores. O formulário não envia dados; interesses e preferência de contraste são locais ao navegador.
