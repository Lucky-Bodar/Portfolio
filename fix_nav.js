const fs = require('fs');
['/Users/lucky/Downloads/Portfolio/index.html', '/Users/lucky/Downloads/Portfolio/projects.html', '/Users/lucky/Downloads/Portfolio/contact.html'].forEach(file => {
    let html = fs.readFileSync(file, 'utf8');
    
    // Fix About link so it's not permanently highlighted
    html = html.replace(
        '<a href="#" class="px-4 py-1.5 rounded-full transition-all duration-300 bg-white text-black hover:scale-105">About</a>',
        '<a href="#" class="px-4 py-1.5 rounded-full transition-all duration-300 text-white/80 hover:bg-white hover:text-black hover:scale-105">About</a>'
    );
    
    fs.writeFileSync(file, html);
});
