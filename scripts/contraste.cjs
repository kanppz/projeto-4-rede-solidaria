// Calculadora local de luminância relativa sRGB e razão WCAG.
function luminancia(hex) {
  const rgb = hex.match(/[a-f\d]{2}/gi).map(h => parseInt(h,16)/255).map(v => v <= 0.04045 ? v/12.92 : ((v+0.055)/1.055)**2.4);
  return rgb[0]*0.2126 + rgb[1]*0.7152 + rgb[2]*0.0722;
}
const pares = [
  ['Texto principal', '#0F172A', '#F8FAFC'],
  ['Botão padrão', '#FFFFFF', '#166534'],
  ['Etiqueta padrão', '#166534', '#DCFCE7'],
  ['Campo com erro', '#0F172A', '#FEF2F2'],
  ['Texto alto contraste', '#FFFFFF', '#000000'],
  ['Link alto contraste', '#FFFF00', '#000000'],
  ['Botão alto contraste', '#000000', '#FFFF00']
];
for (const [nome,texto,fundo] of pares) {
 const a=luminancia(texto), b=luminancia(fundo);
 const razao=(Math.max(a,b)+0.05)/(Math.min(a,b)+0.05);
 console.log(`${nome}: ${texto} / ${fundo} = ${razao.toFixed(2)}:1`);
 if(razao<4.5) process.exitCode=1;
}
