const fs = require('fs');
let html = fs.readFileSync('/Users/lucky/Downloads/Portfolio/index.html', 'utf8');

const regex = /const frameNumber = i\.toString\(\)\.padStart\(6, '0'\);/g;
const replacement = `const frameNumber = (i + 1).toString().padStart(6, '0');`;

html = html.replace(regex, replacement);

fs.writeFileSync('/Users/lucky/Downloads/Portfolio/index.html', html);
