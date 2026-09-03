const fs = require('fs');
let html = fs.readFileSync('/Users/lucky/Downloads/Portfolio/index.html', 'utf8');

// Update section wrapper to be full width
html = html.replace(
    '<section class="max-w-6xl mx-auto px-8 py-24 pointer-events-auto">',
    '<section id="testimonials" class="w-full py-24 pointer-events-auto overflow-hidden">'
);

// Update Testimonials link in nav
html = html.replace(
    '<a href="#" class="hover:text-brand transition-colors text-white/80 hover:text-white">Testimonials</a>',
    '<a href="#testimonials" class="hover:text-brand transition-colors text-white/80 hover:text-white">Testimonials</a>'
);

fs.writeFileSync('/Users/lucky/Downloads/Portfolio/index.html', html);
