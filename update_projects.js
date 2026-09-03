const fs = require('fs');
let html = fs.readFileSync('/Users/lucky/Downloads/Portfolio/projects.html', 'utf8');

// Update Google Fonts to include Playfair Display
html = html.replace(
    'family=Anton&family=Inter:wght@300;400;500;600&display=swap',
    'family=Anton&family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap'
);

// Add aesthetic font to Tailwind Config
html = html.replace(
    "display: ['Anton', 'sans-serif'],",
    "display: ['Anton', 'sans-serif'],\n                        aesthetic: ['\"Playfair Display\"', 'serif'],"
);

// Update Lucky Bodar logo
html = html.replace(
    '<div class="font-display text-2xl tracking-wide cursor-pointer" onclick="window.location.href=\'index.html\'">\\n            Lucky Bodar\\n        </div>',
    '<div class="font-aesthetic italic text-3xl font-bold tracking-wide pointer-events-auto cursor-pointer transition-all duration-500 hover:scale-110 hover:text-white text-white/90 drop-shadow-2xl" onclick="window.location.href=\'index.html\'">Lucky Bodar</div>'
);

html = html.replace(
    /<div class="font-display text-2xl tracking-wide cursor-pointer"[^>]*>\s*Lucky Bodar\s*<\/div>/,
    '<div class="font-aesthetic italic text-3xl font-bold tracking-wide pointer-events-auto cursor-pointer transition-all duration-500 hover:scale-110 hover:text-white text-white/90 drop-shadow-2xl" onclick="window.location.href=\'index.html\'">Lucky Bodar</div>'
);

// Social icons hover animations
const socialRegex = /<a href="#" class="text-white\/50 hover:text-white transition-colors">/g;
html = html.replace(socialRegex, '<a href="#" class="text-white/50 hover:text-white transition-all duration-300 hover:scale-125 hover:-translate-y-1 inline-block">');

fs.writeFileSync('/Users/lucky/Downloads/Portfolio/projects.html', html);
