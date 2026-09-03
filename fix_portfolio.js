const fs = require('fs');
let html = fs.readFileSync('/Users/lucky/Downloads/Portfolio/index.html', 'utf8');

// The footer portfolio:
// It currently looks like: class="font-aesthetic tracking-wider text-3xl font-bold tracking-wide transition-all duration-500  hover:text-white cursor-pointer inline-block"
html = html.replace(
    /class="font-aesthetic tracking-wider text-3xl font-bold tracking-wide transition-all duration-500\s*hover:text-white cursor-pointer inline-block"/g,
    'class="font-aesthetic tracking-wider text-3xl font-bold tracking-wide transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:text-white hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] cursor-pointer inline-block"'
);

// The navbar portfolio:
// It currently looks like: class="font-aesthetic tracking-wider text-3xl font-bold tracking-wide pointer-events-auto cursor-pointer transition-all duration-500  hover:text-white text-white/90 drop-shadow-2xl"
html = html.replace(
    /class="font-aesthetic tracking-wider text-3xl font-bold tracking-wide pointer-events-auto cursor-pointer transition-all duration-500\s*hover:text-white text-white\/90 drop-shadow-2xl"/g,
    'class="font-aesthetic tracking-wider text-3xl font-bold tracking-wide pointer-events-auto cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:text-white text-white/90 drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)] hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"'
);

fs.writeFileSync('/Users/lucky/Downloads/Portfolio/index.html', html);
