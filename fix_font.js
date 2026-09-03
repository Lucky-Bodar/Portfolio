const fs = require('fs');
['/Users/lucky/Downloads/Portfolio/index.html', '/Users/lucky/Downloads/Portfolio/projects.html', '/Users/lucky/Downloads/Portfolio/contact.html'].forEach(file => {
    let html = fs.readFileSync(file, 'utf8');
    
    // Change Playfair Display to Cinzel
    html = html.replace(
        'family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap',
        'family=Cinzel:wght@400;500;600&display=swap'
    );
    html = html.replace(
        'aesthetic: [\'"Playfair Display"\', \'serif\']',
        'aesthetic: [\'"Cinzel"\', \'serif\']'
    );
    
    // Change Lucky Bodar styling (remove italic, reduce size)
    // Reduce font size in style section if it exists
    html = html.replace('clamp(4rem, 12vw, 12rem)', 'clamp(3rem, 9vw, 9rem)');
    
    // Update class and text
    html = html.replace('font-aesthetic italic text-center', 'font-aesthetic tracking-[0.2em] text-center');
    html = html.replace('Lucky<br>Bodar', 'LUCKY<br>BODAR');
    
    // Remove italic from Portfolio logos
    html = html.replace(/font-aesthetic italic/g, 'font-aesthetic tracking-wider');

    fs.writeFileSync(file, html);
});
