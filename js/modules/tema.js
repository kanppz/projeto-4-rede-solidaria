const botao = document.querySelector('#alto-contraste');
const chave = 'rede-solidaria:contraste:v1';
let ativo = false;
try { ativo = localStorage.getItem(chave) === 'alto'; } catch { /* Preferência apenas nesta sessão. */ }
function aplicar() {
  document.documentElement.dataset.contraste = ativo ? 'alto' : 'padrao';
  botao.setAttribute('aria-pressed', String(ativo));
}
aplicar();
botao.hidden = false;
botao.addEventListener('click', () => {
  ativo = !ativo;
  aplicar();
  try { localStorage.setItem(chave, ativo ? 'alto' : 'padrao'); } catch { /* A troca visual continua funcionando. */ }
});
