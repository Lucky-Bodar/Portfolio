const fs = require('fs');
let html = fs.readFileSync('/Users/lucky/Downloads/Portfolio/index.html', 'utf8');

// Remove hero-text-bg
const heroRegex = /<div id="hero-text-bg"[^>]*>[\s\S]*?<\/div>/;
html = html.replace(heroRegex, '');

// Remove the flawless scroll script
const scriptRegex = /\/\/ Flawless Scroll Vanish Effect[\s\S]*?\}\);/g;
html = html.replace(scriptRegex, '');

fs.writeFileSync('/Users/lucky/Downloads/Portfolio/index.html', html);
