import { build } from 'esbuild';
import { minify } from 'html-minifier-terser';
import { mkdir, readFile, writeFile, copyFile, readdir, stat } from 'node:fs/promises';
await mkdir('dist/html', { recursive: true });
await mkdir('dist/imagens', { recursive: true });
await mkdir('dist/assets', { recursive: true });
await build({ entryPoints: ['js/main.js', 'js/modules/tema.js'], bundle: true, splitting: true, format: 'esm', outdir: 'dist/assets', minify: true, target: 'es2020', entryNames: '[name]', chunkNames: 'chunk-[hash]' });
await build({ entryPoints: ['css/reset.css', 'css/styles.css'], outdir: 'dist/assets', minify: true });
const html = (await readFile('html/index.html', 'utf8')).replace('../css/reset.css', '../assets/reset.css').replace('../css/styles.css', '../assets/styles.css').replace('../js/main.js', '../assets/main.js').replace('../js/modules/tema.js', '../assets/tema.js');
await writeFile('dist/html/index.html', await minify(html, { collapseWhitespace: true, removeComments: true }));
await copyFile('imagens/marca.svg', 'dist/imagens/marca.svg');
async function files(dir) { const list = []; for (const name of await readdir(dir)) { const p = `${dir}/${name}`; if ((await stat(p)).isDirectory()) list.push(...await files(p)); else list.push(p); } return list; }
const source = [...await files('html'), ...await files('css'), ...await files('js')];
const output = (await files('dist')).filter(p => /\.(html|css|js)$/.test(p));
const report = {};
for (const ext of ['html','css','js']) {
 const sum = async list => (await Promise.all(list.filter(p=>p.endsWith('.'+ext)).map(async p=>(await stat(p)).size))).reduce((a,b)=>a+b,0);
 const antes=await sum(source), depois=await sum(output);
 report[ext]={antes,depois,reducaoPercentual:Number(((1-depois/antes)*100).toFixed(2))};
}
await writeFile('relatorio-build.json', JSON.stringify(report,null,2));
console.log(report);
