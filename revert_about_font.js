const fs = require('fs');

let html = fs.readFileSync('/Users/lucky/Downloads/Portfolio/about.html', 'utf8');

html = html.replace(
    /<h1 class="font-sans font-light tracking-\[0\.2em\] text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">LUCKY<br>BODAR<\/h1>/,
    '<h1 class="font-aesthetic font-bold tracking-widest text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">LUCKY<br>BODAR</h1>'
);

fs.writeFileSync('/Users/lucky/Downloads/Portfolio/about.html', html);
