const fs = require('fs');
let html = fs.readFileSync('/Users/lucky/Downloads/Portfolio/contact.html', 'utf8');

// Update Google Fonts
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
    /<div class="font-display text-2xl tracking-wide cursor-pointer[^>]*>\s*Lucky Bodar\s*<\/div>/,
    '<div class="font-aesthetic italic text-3xl font-bold tracking-wide pointer-events-auto cursor-pointer transition-all duration-500 hover:scale-110 hover:text-white text-white/90 drop-shadow-2xl" onclick="window.location.href=\'index.html\'">Lucky Bodar</div>'
);

fs.writeFileSync('/Users/lucky/Downloads/Portfolio/contact.html', html);
