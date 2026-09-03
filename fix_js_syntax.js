const fs = require('fs');
let html = fs.readFileSync('/Users/lucky/Downloads/Portfolio/index.html', 'utf8');

html = html.replace("newHtml += '\\\\newHtml += \\' \\';nbsp;';", 'newHtml += "&nbsp;";');
html = html.replace("newHtml += '\\newHtml += \\' \\';nbsp;';", 'newHtml += "&nbsp;";');
html = html.replace(/newHtml \+= '\\newHtml \+= ' ';nbsp;';/g, 'newHtml += "&nbsp;";');

fs.writeFileSync('/Users/lucky/Downloads/Portfolio/index.html', html);
