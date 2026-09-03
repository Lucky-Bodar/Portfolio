const fs = require('fs');

const indexHtml = fs.readFileSync('/Users/lucky/Downloads/Portfolio/index.html', 'utf8');
const aboutHtml = fs.readFileSync('/Users/lucky/Downloads/Portfolio/about.html', 'utf8');

const glassStart = indexHtml.indexOf('.glass {');
if (glassStart !== -1) {
    const glassEnd = indexHtml.indexOf('}', glassStart) + 1;
    const glassCss = indexHtml.substring(glassStart, glassEnd);
    
    const newAboutHtml = aboutHtml.replace('</style>', '    ' + glassCss + '\n    </style>');
    fs.writeFileSync('/Users/lucky/Downloads/Portfolio/about.html', newAboutHtml);
}
