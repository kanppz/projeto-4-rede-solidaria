async function iniciar() {
  try {
    const [{ iniciarNavegacao }, { iniciarEventos }] = await Promise.all([
      import('./modules/router.js'),
      import('./modules/eventos.js')
    ]);
    iniciarEventos();
    iniciarNavegacao();
  } catch (erro) {
    console.error('Falha ao inicializar a aplicação:', erro);
    const titulo = document.createElement('h1');
    titulo.textContent = 'Não foi possível carregar a aplicação';
    const mensagem = document.createElement('p');
    mensagem.textContent = 'Verifique sua conexão e tente recarregar a página.';
    const botao = document.createElement('button');
    botao.textContent = 'Tentar novamente';
    botao.className = 'botao';
    botao.addEventListener('click', () => location.reload());
    document.querySelector('#conteudo').replaceChildren(titulo, mensagem, botao);
  }
}
iniciar();
