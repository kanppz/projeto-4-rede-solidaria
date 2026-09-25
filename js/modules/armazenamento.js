import { projetos } from './projetos.js';
const CHAVE = 'rede-solidaria:interesses:v1';
const idsValidos = new Set(projetos.map(projeto => projeto.id));
let interesses = [];
try {
  const texto = localStorage.getItem(CHAVE);
  const dados = texto === null ? [] : JSON.parse(texto);
  if (Array.isArray(dados)) {
    interesses = [...new Set(dados.filter(id => typeof id === 'string' && idsValidos.has(id)))];
  }
} catch {
  // JSON inválido ou armazenamento bloqueado: inicia sem seleção.
  interesses = [];
}
export function temInteresse(id) { return interesses.includes(id); }
export function alternarInteresse(id) {
  if (!idsValidos.has(id)) return { selecionado: false, salvo: false };
  const selecionado = !temInteresse(id);
  interesses = selecionado ? [...interesses, id] : interesses.filter(item => item !== id);
  try {
    localStorage.setItem(CHAVE, JSON.stringify(interesses));
    return { selecionado, salvo: true };
  } catch {
    return { selecionado, salvo: false };
  }
}
