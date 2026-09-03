const fs = require('fs');
let html = fs.readFileSync('/Users/lucky/Downloads/Portfolio/index.html', 'utf8');

// Find the index of "// Bulletproof Sand Scattering Effect"
const startIndex = html.indexOf('// Bulletproof Sand Scattering Effect');
if (startIndex !== -1) {
    // Find the next <script> tag after it to know where to stop
    const endIndex = html.indexOf('<script>', startIndex);
    if (endIndex !== -1) {
        // Remove everything in between
        html = html.substring(0, startIndex) + html.substring(endIndex);
    }
}

fs.writeFileSync('/Users/lucky/Downloads/Portfolio/index.html', html);
