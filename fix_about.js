const fs = require('fs');

let html = fs.readFileSync('/Users/lucky/Downloads/Portfolio/about.html', 'utf8');

// Change LUCKY BODAR to font-aesthetic
html = html.replace(
    /<h1 class="font-sans font-light tracking-\[0\.2em\] text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">LUCKY<br>BODAR<\/h1>/,
    '<h1 class="font-aesthetic font-bold tracking-widest text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">LUCKY<br>BODAR</h1>'
);

// Add Alliance University
html = html.replace(
    /<p class="font-sans text-xl font-light">B\.Tech CSE<\/p>/,
    '<p class="font-sans text-xl font-medium text-white/90">B.Tech CSE — Alliance University</p>'
);

fs.writeFileSync('/Users/lucky/Downloads/Portfolio/about.html', html);

// Change LUCKY BODAR on index.html to font-aesthetic
let indexHtml = fs.readFileSync('/Users/lucky/Downloads/Portfolio/index.html', 'utf8');

indexHtml = indexHtml.replace(
    /<h1 class="font-sans font-light tracking-\[0\.4em\] text-white\/90 drop-shadow-2xl text-4xl md:text-6xl lg:text-8xl">LUCKY BODAR<\/h1>/,
    '<h1 class="font-aesthetic font-bold tracking-[0.2em] text-white/90 drop-shadow-2xl text-4xl md:text-6xl lg:text-8xl">LUCKY BODAR</h1>'
);

// Explicitly ensure the footer Portfolio is exactly matched to the navbar Portfolio
const navPortfolioMatch = indexHtml.match(/(<div class="font-aesthetic[^>]*>)\s*Portfolio\s*(<\/div>)/);
if (navPortfolioMatch) {
    const navPortfolioClass = navPortfolioMatch[1]; // Get the exact class string of the navbar Portfolio
    
    // Replace the footer Portfolio with the exact same classes
    indexHtml = indexHtml.replace(
        /<div class="font-aesthetic tracking-wider text-3xl font-bold tracking-wide transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:text-white hover:drop-shadow-\[0_0_15px_rgba\(255,255,255,0\.5\)\] cursor-pointer inline-block">Portfolio<\/div>/,
        navPortfolioClass.replace('pointer-events-auto ', 'inline-block ') + 'Portfolio</div>'
    );
}

fs.writeFileSync('/Users/lucky/Downloads/Portfolio/index.html', indexHtml);
