const fs = require('fs');

const path = '/Users/lucky/.gemini/antigravity/brain/a63da9f7-f4e3-4bdb-bcc0-c9015253c962/scratch/Portfolio/index.html';
let html = fs.readFileSync(path, 'utf8');

// Change imagesLoaded === frameCount to imagesLoaded >= 3
html = html.replace(/if \(imagesLoaded === frameCount && !animationStarted\)/g, 'if (imagesLoaded >= 3 && !animationStarted)');

// Add overflow-x-hidden to body
html = html.replace(/<body class="antialiased selection:bg-brand selection:text-white">/g, '<body class="antialiased selection:bg-brand selection:text-white overflow-x-hidden">');

// Ensure font sizes on mobile are perfectly small
html = html.replace(/text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl/g, 'text-xl sm:text-2xl md:text-5xl lg:text-7xl xl:text-8xl w-full text-center');

fs.writeFileSync(path, html);
