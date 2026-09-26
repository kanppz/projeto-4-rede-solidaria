import { alternarInteresse } from './armazenamento.js';
function validar(campo) {
  campo.setCustomValidity('');
  if (campo.name === 'nome' && campo.value.trim().length < 2) campo.setCustomValidity('Informe pelo menos 2 caracteres.');
  const valido = campo.validity.valid;
  campo.setAttribute('aria-invalid', String(!valido));
  campo.form.querySelector(`#${campo.id}-feedback`).textContent = valido ? 'Preenchimento válido.' : campo.name === 'nome' ? 'Informe um nome com pelo menos 2 caracteres.' : 'Informe um e-mail válido.';
  return valido;
}
export function iniciarEventos() {
  const conteudo = document.querySelector('#conteudo');
  conteudo.addEventListener('click', evento => {
    const botao = evento.target.closest('button[data-acao="interesse"]');
    if (!botao || !conteudo.contains(botao)) return;
    const { selecionado, salvo } = alternarInteresse(botao.dataset.projeto);
    botao.setAttribute('aria-pressed', String(selecionado));
    // Nome estável: aria-pressed comunica a mudança do botão de alternância.
    conteudo.querySelector('#interesses-status').textContent = salvo
      ? (selecionado ? 'Interesse marcado e salvo neste navegador.' : 'Interesse removido e salvo neste navegador.')
      : 'Seleção atualizada apenas nesta sessão. Não foi possível salvar no navegador.';
  });
  conteudo.addEventListener('input', evento => {
    const campo = evento.target;
    if (!campo.matches('#formulario-interesse input')) return;
    validar(campo);
    campo.form.querySelector('#form-status').textContent = '';
  });
  conteudo.addEventListener('submit', evento => {
    const form = evento.target;
    if (!form.matches('#formulario-interesse')) return;
    evento.preventDefault();
    const campos = [...form.querySelectorAll('input')];
    const resultados = campos.map(validar);
    const indice = resultados.indexOf(false);
    form.querySelector('#form-status').textContent = indice === -1 ? 'Dados válidos. Demonstração concluída sem envio ou armazenamento.' : 'Revise os campos indicados.';
    if (indice !== -1) campos[indice].focus();
  });
}
