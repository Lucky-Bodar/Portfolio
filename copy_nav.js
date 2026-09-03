const fs = require('fs');

const indexHtml = fs.readFileSync('/Users/lucky/Downloads/Portfolio/index.html', 'utf8');
const aboutHtml = fs.readFileSync('/Users/lucky/Downloads/Portfolio/about.html', 'utf8');

// Extract the navbar from index.html
const navStart = indexHtml.indexOf('<nav class="absolute top-0');
const navEnd = indexHtml.indexOf('</nav>', navStart) + '</nav>'.length;
let navHtml = indexHtml.substring(navStart, navEnd);

// In the navHtml, we need to make sure the links are styled so that "About" is highlighted,
// but for the sake of consistency with index.html, it's just glass pills.
// If the user is on the About page, we can highlight the About pill.
navHtml = navHtml.replace(
    /<a href="about.html" class="([^"]+)">About<\/a>/,
    '<a href="about.html" class="$1 bg-white text-black scale-105">About</a>'
);

// We need to replace the navbar in about.html with this one.
const aboutNavStart = aboutHtml.indexOf('<nav class="absolute top-0');
const aboutNavEnd = aboutHtml.indexOf('</nav>', aboutNavStart) + '</nav>'.length;

const newAboutHtml = aboutHtml.substring(0, aboutNavStart) + navHtml + aboutHtml.substring(aboutNavEnd);

fs.writeFileSync('/Users/lucky/Downloads/Portfolio/about.html', newAboutHtml);
