const fs = require('fs');
let html = fs.readFileSync('/Users/lucky/Downloads/Portfolio/index.html', 'utf8');

const regex = /\/\/ Professionally vanish the hero text on scroll[\s\S]*?\}\);/g;
html = html.replace(regex, '});');

fs.writeFileSync('/Users/lucky/Downloads/Portfolio/index.html', html);
