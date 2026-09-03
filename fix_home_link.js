const fs = require('fs');
const files = ['index.html', 'about.html', 'projects.html', 'contact.html'];

files.forEach(file => {
    const path = '/Users/lucky/Downloads/Portfolio/' + file;
    if (!fs.existsSync(path)) return;
    
    let html = fs.readFileSync(path, 'utf8');
    
    // The logo div has class="font-aesthetic..."
    // We want to add onclick="window.location.href='index.html'" if it doesn't have it
    const logoRegex = /(<div class="font-aesthetic[^>]*?hover:drop-shadow-\[0_0_15px_rgba\(255,255,255,0\.5\)\]")([^>]*>)/;
    
    html = html.replace(logoRegex, (match, p1, p2) => {
        if (!p2.includes('onclick')) {
            return p1 + ' onclick="window.location.href=\'index.html\'"' + p2;
        }
        return match;
    });
    
    fs.writeFileSync(path, html);
});
