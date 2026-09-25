const fs = require('node:fs'), path = require('node:path'), cp = require('node:child_process');
for (const f of fs.readdirSync('dist/assets').filter(f=>f.endsWith('.js'))) cp.execFileSync(process.execPath,['--check',path.resolve('dist/assets',f)]);
const html=fs.readFileSync('dist/html/index.html','utf8');
for(const m of html.matchAll(/(?:src|href)="([^"]+)"/g)) if(m[1].startsWith('../')&&!fs.existsSync(path.resolve('dist/html',m[1]))) throw Error('Recurso ausente: '+m[1]);
console.log('Sintaxe dos bundles e referencias HTML verificadas.');
