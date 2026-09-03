const fs = require('fs');
let html = fs.readFileSync('/Users/lucky/Downloads/Portfolio/index.html', 'utf8');

// Use regex to remove all 3 Start a Project buttons.
const ctaRegex1 = /<!-- CTA -->\s*<button[\s\S]*?<\/button>/g;
html = html.replace(ctaRegex1, '');

const ctaRegex2 = /<button class="bg-brand[^>]*>\s*Start a Project\s*<div[\s\S]*?<\/div>\s*<\/button>/g;
html = html.replace(ctaRegex2, '');

fs.writeFileSync('/Users/lucky/Downloads/Portfolio/index.html', html);
