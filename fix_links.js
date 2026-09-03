const fs = require('fs');
let html = fs.readFileSync('/Users/lucky/Downloads/Portfolio/index.html', 'utf8');

// Replace Nav link
html = html.replace(
    '<a href="#" class="hover:text-brand transition-colors text-white/80 hover:text-white">Projects</a>',
    '<a href="#projects" class="hover:text-brand transition-colors text-white/80 hover:text-white">Projects</a>'
);

// Replace View My Work links
html = html.replace(
    /<a href="#" class="text-sm font-medium hover:text-brand transition-colors flex items-center gap-1">\s*View My Work/g,
    '<a href="#projects" class="text-sm font-medium hover:text-brand transition-colors flex items-center gap-1">\n                            View My Work'
);

fs.writeFileSync('/Users/lucky/Downloads/Portfolio/index.html', html);
