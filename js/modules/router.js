import { inicio, listaProjetos, sobre, pagina } from './templates.js';
const rotas = {
  '#/inicio': { titulo: 'Início', renderizar: inicio },
  '#/projetos': { titulo: 'Projetos', renderizar: listaProjetos },
  '#/sobre': { titulo: 'Sobre', renderizar: sobre }
};
export function iniciarNavegacao() {
  const conteudo = document.querySelector('#conteudo');
  function renderizar(moverFoco = false) {
    // O link de salto altera o hash, mas não troca a página atual.
    if (location.hash === '#conteudo') {
      if (conteudo.querySelector('h1')) { conteudo.focus(); return; }
      history.replaceState(null, '', '#/inicio');
    }
    const caminho = location.hash || '#/inicio';
    const rota = rotas[caminho];
    conteudo.replaceChildren(rota ? rota.renderizar() : pagina('Página não encontrada', 'Utilize o menu para retornar a uma página disponível.'));
    document.title = `${rota?.titulo || 'Página não encontrada'} | Rede Solidária`;
    document.querySelectorAll('nav a').forEach(link => {
      if (link.getAttribute('href') === caminho) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    if (moverFoco) { conteudo.focus(); window.scrollTo(0, 0); }
  }
  window.addEventListener('hashchange', () => renderizar(true));
  renderizar();
}
