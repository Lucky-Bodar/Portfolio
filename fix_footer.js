const fs = require('fs');
let html = fs.readFileSync('/Users/lucky/Downloads/Portfolio/index.html', 'utf8');

html = html.replace(
    /<div class="font-display text-2xl tracking-wide">\s*Portfolio\s*<\/div>/,
    '<div class="font-aesthetic italic text-3xl font-bold tracking-wide transition-all duration-500 hover:scale-110 hover:text-white cursor-pointer inline-block">Portfolio</div>'
);

fs.writeFileSync('/Users/lucky/Downloads/Portfolio/index.html', html);
