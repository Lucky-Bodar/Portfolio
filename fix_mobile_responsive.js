const fs = require('fs');
const files = ['index.html', 'about.html', 'projects.html', 'contact.html'];

files.forEach(file => {
    const path = '/Users/lucky/Downloads/Portfolio/' + file;
    if (!fs.existsSync(path)) return;
    
    let html = fs.readFileSync(path, 'utf8');
    
    // Fix Navbar `nav` tag to ensure it doesn't overlap text awkwardly by adding better flex wrapping and padding
    html = html.replace(
        /<nav class="absolute top-0 left-0 w-full px-4 md:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 z-50 pointer-events-none">/,
        '<nav class="absolute top-0 left-0 w-full px-4 md:px-8 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0 z-50 pointer-events-none">'
    );
    
    // Fix Navbar pills container
    html = html.replace(
        /<div class="flex flex-wrap justify-center items-center gap-1 md:gap-2 glass rounded-full px-2 md:px-4 py-2 text-\[10px\] md:text-sm font-medium pointer-events-auto w-full md:w-auto">/,
        '<div class="flex flex-wrap justify-center items-center gap-1 md:gap-2 glass rounded-full px-2 md:px-4 py-1.5 md:py-2 text-[10px] md:text-sm font-medium pointer-events-auto w-[95%] sm:w-auto">'
    );
    
    // Fix Navbar A tags (padding)
    html = html.replace(
        /class="px-4 py-1\.5 rounded-full transition-all duration-300 text-white\/80 hover:bg-white hover:text-black hover:scale-105"/g,
        'class="px-2 py-1 md:px-4 md:py-1.5 rounded-full transition-all duration-300 text-white/80 hover:bg-white hover:text-black hover:scale-105"'
    );
    
    if (file === 'index.html') {
        // Fix Hero Text
        html = html.replace(
            /<h1 class="font-sans font-light tracking-\[0\.4em\] text-white\/90 drop-shadow-2xl text-4xl md:text-6xl lg:text-8xl">LUCKY BODAR<\/h1>/,
            '<h1 class="font-sans font-light tracking-[0.2em] md:tracking-[0.4em] text-white/90 drop-shadow-2xl text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl text-center px-4 break-words">LUCKY BODAR</h1>'
        );
        
        // Fix Footer social links
        html = html.replace(
            /<div class="flex gap-6 text-sm text-white\/60">/,
            '<div class="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-white/60">'
        );
    }
    
    if (file === 'about.html') {
        // Fix About Hero Text
        html = html.replace(
            /<h1 class="font-aesthetic font-bold tracking-widest text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">LUCKY<br>BODAR<\/h1>/,
            '<h1 class="font-aesthetic font-bold tracking-widest text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight mb-6 md:mb-8 text-center md:text-left break-words mt-16 md:mt-0">LUCKY<br>BODAR</h1>'
        );
    }
    
    fs.writeFileSync(path, html);
});
