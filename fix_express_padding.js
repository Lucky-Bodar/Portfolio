const fs = require('fs');

['/Users/lucky/Downloads/Portfolio/index.html', '/Users/lucky/Downloads/Portfolio/projects.html'].forEach(file => {
    let html = fs.readFileSync(file, 'utf8');
    
    // Find the Express card container (it lacks p-8)
    const regex = /<div class="rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900 mb-6 aspect-\[4\/3\] flex items-center justify-center border border-white\/5 transition-transform/g;
    html = html.replace(regex, '<div class="rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900 mb-6 aspect-[4/3] flex items-center justify-center p-8 border border-white/5 transition-transform');
    
    fs.writeFileSync(file, html);
});
