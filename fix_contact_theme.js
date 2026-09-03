const fs = require('fs');
let html = fs.readFileSync('/Users/lucky/Downloads/Portfolio/contact.html', 'utf8');

// The brand color definition stays (it's in tailwind config) but we'll strip it from the elements.
html = html.replace(/bg-brand\/20/g, 'bg-white/5');
html = html.replace(/text-brand/g, 'text-white/80');
html = html.replace(/focus:border-brand/g, 'focus:border-white/50');
html = html.replace(/bg-brand hover:bg-\[#d14d1a\] text-white/g, 'bg-white hover:bg-gray-200 text-black');
html = html.replace(/border-brand\/50/g, 'border-white/20');
html = html.replace(/shadow-brand\/20/g, 'shadow-white/5');

fs.writeFileSync('/Users/lucky/Downloads/Portfolio/contact.html', html);
