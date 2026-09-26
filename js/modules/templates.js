import { projetos } from './projetos.js';
import { temInteresse } from './armazenamento.js';
function elemento(tag, texto, classe) {
  const no = document.createElement(tag);
  if (texto) no.textContent = texto;
  if (classe) no.className = classe;
  return no;
}
export function cartaoProjeto(projeto) {
  const cartao = elemento('article', '', 'cartao');
  const titulo = elemento('h2', projeto.titulo);
  titulo.id = `titulo-${projeto.id}`;
  cartao.setAttribute('aria-labelledby', titulo.id);
  cartao.append(elemento('span', projeto.categoria, 'etiqueta'), titulo, elemento('p', projeto.descricao));
  const selecionado = temInteresse(projeto.id);
  const botao = elemento('button', 'Tenho interesse', 'botao');
  botao.id = `interesse-${projeto.id}`;
  botao.setAttribute('aria-labelledby', `${botao.id} ${titulo.id}`);
  botao.type = 'button';
  botao.dataset.acao = 'interesse';
  botao.dataset.projeto = projeto.id;
  botao.setAttribute('aria-pressed', String(selecionado));
  cartao.append(botao);
  return cartao;
}
export function pagina(titulo, descricao) {
  const secao = elemento('section');
  secao.append(elemento('h1', titulo), elemento('p', descricao));
  return secao;
}
export function inicio() {
  const secao = pagina('Juntos, fortalecemos a comunidade.', 'Conheça iniciativas de educação, acolhimento e cuidado com o território.');
  const link = elemento('a', 'Conhecer os projetos', 'botao');
  link.href = '#/projetos';
  secao.append(link);
  const form = elemento('form');
  form.id = 'formulario-interesse';
  form.noValidate = true;
  const tituloForm = elemento('h2', 'Teste seu cadastro de interesse');
  tituloForm.id = 'form-titulo';
  const aviso = elemento('p', 'Demonstração local: nenhum dado é enviado ou armazenado.');
  aviso.id = 'form-aviso';
  form.setAttribute('aria-labelledby', tituloForm.id);
  form.setAttribute('aria-describedby', aviso.id);
  form.append(tituloForm, aviso);
  for (const [id, rotulo, tipo] of [['nome', 'Nome', 'text'], ['email', 'E-mail', 'email']]) {
    const label = elemento('label', `${rotulo} (obrigatório)`);
    label.htmlFor = id;
    const input = elemento('input');
    input.id = id;
    input.name = id;
    input.type = tipo;
    input.required = true;
    input.autocomplete = id === 'nome' ? 'name' : 'email';
    if (id === 'nome') input.minLength = 2;
    input.setAttribute('aria-describedby', `${id}-feedback`);
    const feedback = elemento('span');
    feedback.id = `${id}-feedback`;
    feedback.setAttribute('aria-live', 'polite');
    form.append(label, input, feedback);
  }
  const submit = elemento('button', 'Validar dados', 'botao');
  submit.type = 'submit';
  const status = elemento('p');
  status.id = 'form-status';
  status.setAttribute('role', 'status');
  form.append(submit, status);
  secao.append(form);
  return secao;
}
export function listaProjetos() {
  const secao = pagina('Projetos da comunidade', 'Três frentes de atuação, um compromisso com as pessoas.');
  const grade = elemento('div', '', 'grade');
  grade.append(...projetos.map(cartaoProjeto));
  secao.append(grade);
  secao.append(elemento('p', 'Suas seleções são salvas neste navegador. Clique novamente para remover um interesse.'));
  const status = elemento('p');
  status.id = 'interesses-status';
  status.setAttribute('role', 'status');
  secao.append(status);
  return secao;
}
export function sobre() {
  return pagina('Sobre a Rede Solidária', 'Organização fictícia criada para este projeto acadêmico. Esta etapa demonstra a navegação em página única e a reutilização de componentes.');
}
