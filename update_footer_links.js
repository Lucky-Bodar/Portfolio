const fs = require('fs');
let html = fs.readFileSync('/Users/lucky/Downloads/Portfolio/index.html', 'utf8');

const newLinks = `
                    <a href="https://x.com/LuckyBodar" target="_blank" class="transition-all duration-300 hover:text-white hover:-translate-y-1 hover:scale-110 inline-block hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">Twitter</a>
                    <a href="https://www.linkedin.com/in/bodar-luckykumar-923642321/" target="_blank" class="transition-all duration-300 hover:text-white hover:-translate-y-1 hover:scale-110 inline-block hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">LinkedIn</a>
                    <a href="https://dribbble.com/lucky-bodar" target="_blank" class="transition-all duration-300 hover:text-white hover:-translate-y-1 hover:scale-110 inline-block hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">Dribbble</a>
                    <a href="https://github.com/Lucky-Bodar" target="_blank" class="transition-all duration-300 hover:text-white hover:-translate-y-1 hover:scale-110 inline-block hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">Github</a>
`;

html = html.replace(
    /<a href="#" class="hover:text-brand transition-colors">Twitter<\/a>[\s\S]*?<a href="#" class="hover:text-brand transition-colors">Github<\/a>/m,
    newLinks.trim()
);

fs.writeFileSync('/Users/lucky/Downloads/Portfolio/index.html', html);
