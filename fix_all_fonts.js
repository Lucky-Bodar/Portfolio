const fs = require('fs');

const files = ['index.html', 'about.html', 'projects.html', 'contact.html'];

files.forEach(file => {
    const path = '/Users/lucky/Downloads/Portfolio/' + file;
    if (!fs.existsSync(path)) return;
    
    let html = fs.readFileSync(path, 'utf8');
    
    // Change Portfolio in navbar and footer to font-sans font-light
    html = html.replace(
        /class="font-aesthetic tracking-wider text-3xl font-bold tracking-wide/g,
        'class="font-sans font-light tracking-[0.2em] text-2xl uppercase'
    );
    
    // In about.html, change LUCKY BODAR back to font-sans font-light
    if (file === 'about.html') {
        html = html.replace(
            /<h1 class="font-aesthetic font-bold tracking-widest text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">LUCKY<br>BODAR<\/h1>/,
            '<h1 class="font-sans font-light tracking-[0.2em] text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">LUCKY<br>BODAR</h1>'
        );
    }
    
    fs.writeFileSync(path, html);
});
