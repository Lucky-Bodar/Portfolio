const fs = require('fs');

const indexHtml = fs.readFileSync('/Users/lucky/Downloads/Portfolio/index.html', 'utf8');

const navStart = indexHtml.indexOf('<nav class="absolute top-0');
const navEnd = indexHtml.indexOf('</nav>', navStart) + '</nav>'.length;
const baseNavHtml = indexHtml.substring(navStart, navEnd);

const glassStart = indexHtml.indexOf('.glass {');
const glassEnd = indexHtml.indexOf('}', glassStart) + 1;
const glassCss = indexHtml.substring(glassStart, glassEnd);

function updateFile(file, activePage) {
    if (!fs.existsSync(file)) return;
    let html = fs.readFileSync(file, 'utf8');
    
    // Replace navbar
    const nStart = html.indexOf('<nav');
    const nEnd = html.indexOf('</nav>', nStart) + '</nav>'.length;
    
    if (nStart !== -1 && nEnd !== -1) {
        let pageNav = baseNavHtml.replace(
            new RegExp('<a href="' + activePage + '" class="([^"]+)">'),
            '<a href="' + activePage + '" class="$1 bg-white text-black scale-105">'
        );
        html = html.substring(0, nStart) + pageNav + html.substring(nEnd);
    }
    
    // Ensure glass CSS
    if (!html.includes('.glass {')) {
        html = html.replace('</style>', '    ' + glassCss + '\n    </style>');
    }
    
    fs.writeFileSync(file, html);
}

updateFile('/Users/lucky/Downloads/Portfolio/projects.html', 'projects.html');
updateFile('/Users/lucky/Downloads/Portfolio/contact.html', 'contact.html');
