const fs = require('fs');
let html = fs.readFileSync('/Users/lucky/Downloads/Portfolio/index.html', 'utf8');

html = html.replace('<h1 class="huge-text font-display text-center">Lucky Bodar</h1>', '<h1 class="huge-text font-aesthetic italic text-center drop-shadow-2xl opacity-90" style="mix-blend-mode: overlay;">Lucky Bodar</h1>');

fs.writeFileSync('/Users/lucky/Downloads/Portfolio/index.html', html);
