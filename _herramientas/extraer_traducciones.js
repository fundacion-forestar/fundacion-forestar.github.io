// Imprime en JSON el diccionario de traducciones (const t) de js/main.js
const fs = require('fs');
const src = fs.readFileSync(process.argv[2], 'utf8');
const i = src.indexOf('const t = {');
const j = src.indexOf('\nfunction applyLang', i);
const t = new Function(src.slice(i, j).replace('const t =', 'return') )();
process.stdout.write(JSON.stringify(t));
