const fs = require('fs');
const files = ['index.html', 'about.html', 'projects.html', 'contact.html'];

files.forEach(file => {
    const path = '/Users/lucky/Downloads/Portfolio/' + file;
    if (!fs.existsSync(path)) return;
    
    let html = fs.readFileSync(path, 'utf8');
    
    // Update nav tag for flex-col on mobile
    html = html.replace(
        /<nav class="absolute top-0 left-0 w-full px-8 py-6 flex justify-between items-center z-50 pointer-events-none">/,
        '<nav class="absolute top-0 left-0 w-full px-4 md:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 z-50 pointer-events-none">'
    );
    
    // Update center pills container to be visible and wrap on mobile
    html = html.replace(
        /<div class="hidden md:flex items-center gap-2 glass rounded-full px-4 py-2 text-sm font-medium pointer-events-auto">/g,
        '<div class="flex flex-wrap justify-center items-center gap-1 md:gap-2 glass rounded-full px-2 md:px-4 py-2 text-[10px] md:text-sm font-medium pointer-events-auto w-full md:w-auto">'
    );

    fs.writeFileSync(path, html);
});
