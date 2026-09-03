const fs = require('fs');
let html = fs.readFileSync('/Users/lucky/Downloads/Portfolio/index.html', 'utf8');

const newProjects = `
                <!-- Project 5 -->
                <div class="group cursor-pointer">
                    <div class="rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900 mb-6 aspect-[4/3] flex items-center justify-center p-8 border border-white/5 transition-transform duration-500 group-hover:scale-[1.02]">
                        <img src="./images/project2.jpg" alt="Express Luxury Credit Platform" class="w-full h-full object-cover rounded-xl shadow-2xl opacity-80 group-hover:opacity-100 transition-opacity">
                    </div>
                    <h3 class="text-2xl font-display mb-2 group-hover:text-brand transition-colors">Express — Luxury Credit Platform</h3>
                    <p class="text-white/60 text-sm mb-4">Financial Lifestyle Web Application</p>
                    <span class="text-[10px] border border-white/20 px-3 py-1 rounded-full uppercase tracking-wider text-white/80">Fintech Platform</span>
                </div>

                <!-- Project 6 -->
                <div class="group cursor-pointer">
                    <div class="rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900 mb-6 aspect-[4/3] flex items-center justify-center p-8 border border-white/5 transition-transform duration-500 group-hover:scale-[1.02]">
                        <img src="./images/project3.jpg" alt="Brevita Coffee Journey" class="w-full h-full object-cover rounded-xl shadow-2xl opacity-80 group-hover:opacity-100 transition-opacity">
                    </div>
                    <h3 class="text-2xl font-display mb-2 group-hover:text-brand transition-colors">Brevita</h3>
                    <p class="text-white/60 text-sm mb-4">A Curated Journey Through the World's Finest Coffees, Cuisines & Cheesecakes</p>
                    <span class="text-[10px] border border-white/20 px-3 py-1 rounded-full uppercase tracking-wider text-white/80">E-Commerce</span>
                </div>
`;

// Insert after Project 4
const project4Regex = /(<!-- Project 4 -->[\s\S]*?<\/div>\s*<\/div>)/;
if (project4Regex.test(html)) {
    html = html.replace(project4Regex, '$1\n' + newProjects);
    fs.writeFileSync('/Users/lucky/Downloads/Portfolio/index.html', html);
    console.log("Projects added successfully.");
} else {
    console.log("Could not find Project 4.");
}
