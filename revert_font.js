const fs = require('fs');

let indexHtml = fs.readFileSync('/Users/lucky/Downloads/Portfolio/index.html', 'utf8');

indexHtml = indexHtml.replace(
    /<h1 class="font-aesthetic font-bold tracking-\[0\.2em\] text-white\/90 drop-shadow-2xl text-4xl md:text-6xl lg:text-8xl">LUCKY BODAR<\/h1>/,
    '<h1 class="font-sans font-light tracking-[0.4em] text-white/90 drop-shadow-2xl text-4xl md:text-6xl lg:text-8xl">LUCKY BODAR</h1>'
);

fs.writeFileSync('/Users/lucky/Downloads/Portfolio/index.html', indexHtml);
