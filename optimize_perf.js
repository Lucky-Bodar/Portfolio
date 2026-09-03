const fs = require('fs');
let html = fs.readFileSync('/Users/lucky/Downloads/Portfolio/index.html', 'utf8');

// 1. Remove high dpr for canvas to massively reduce pixel fill rate
html = html.replace('const dpr = window.devicePixelRatio || 1;', 'const dpr = 1; // Optimized for 60fps scrolling');

// 2. Remove high image smoothing quality
html = html.replace("ctx.imageSmoothingQuality = 'high';", "");

fs.writeFileSync('/Users/lucky/Downloads/Portfolio/index.html', html);
