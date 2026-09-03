const fs = require('fs');
let html = fs.readFileSync('/Users/lucky/Downloads/Portfolio/index.html', 'utf8');

html = html.replace(
    '<a href="#projects" class="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-3 rounded-full text-sm font-medium transition-all hover:scale-105">\\n                    View All My Work',
    '<a href="projects.html" class="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-3 rounded-full text-sm font-medium transition-all hover:scale-105">\\n                    View All My Work'
);

fs.writeFileSync('/Users/lucky/Downloads/Portfolio/index.html', html);
