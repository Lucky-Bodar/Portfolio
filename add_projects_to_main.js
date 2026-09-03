const fs = require('fs');
let html = fs.readFileSync('/Users/lucky/Downloads/Portfolio/index.html', 'utf8');

const projectsSection = `
        <!-- Projects Section -->
        <section id="projects" class="max-w-6xl mx-auto px-8 py-32 pointer-events-auto bg-black/60 backdrop-blur-md rounded-[3rem] mt-24 mb-10 border border-white/5">
            <div class="mb-16">
                <div class="flex items-center gap-2 text-xs text-brand font-medium uppercase tracking-widest mb-3">
                    <span class="w-1 h-1 rounded-full bg-brand"></span>
                    Selected Projects
                </div>
                <h2 class="font-display text-4xl md:text-5xl">Selected Work That Delivers Results</h2>
            </div>

            <div class="reveal grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                
                <!-- Project 1: Express -->
                <div class="group cursor-pointer">
                    <div class="rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900 mb-6 aspect-[4/3] flex items-center justify-center border border-white/5 transition-transform duration-700 ease-out transform group-hover:scale-[1.05]">
                        <div class="flex w-full h-full rounded-xl shadow-2xl opacity-80 group-hover:opacity-100 transition-opacity overflow-hidden">
                            <img src="./images/express1.png" class="w-1/2 h-full object-cover">
                            <img src="./images/express2.png" class="w-1/2 h-full object-cover border-l border-white/10">
                        </div>
                    </div>
                    <h3 class="text-2xl font-display mb-2 group-hover:text-brand transition-colors">Express — Luxury Credit Platform</h3>
                    <p class="text-white/60 text-sm mb-4">Financial Lifestyle Web Application</p>
                    <span class="text-[10px] border border-white/20 px-3 py-1 rounded-full uppercase tracking-wider text-white/80">Fintech Platform</span>
                </div>

                <!-- Project 2: Brevita -->
                <div class="group cursor-pointer">
                    <div class="rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900 mb-6 aspect-[4/3] flex items-center justify-center border border-white/5 transition-transform duration-700 ease-out transform group-hover:scale-[1.05]">
                        <img src="./images/brevita.png" alt="Brevita Coffee Journey" class="w-full h-full object-cover rounded-xl shadow-2xl opacity-80 group-hover:opacity-100 transition-opacity">
                    </div>
                    <h3 class="text-2xl font-display mb-2 group-hover:text-brand transition-colors">Brevita</h3>
                    <p class="text-white/60 text-sm mb-4">A Curated Journey Through the World's Finest Coffees, Cuisines & Cheesecakes</p>
                    <span class="text-[10px] border border-white/20 px-3 py-1 rounded-full uppercase tracking-wider text-white/80">E-Commerce</span>
                </div>

                <!-- Project 3: Hebrew Agency -->
                <div class="group cursor-pointer">
                    <div class="rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900 mb-6 aspect-[4/3] flex items-center justify-center p-8 border border-white/5 transition-transform duration-700 ease-out transform group-hover:scale-[1.05]">
                        <img src="./images/project3.jpg" alt="Hebrew Marketing Agency" class="w-full h-full object-cover rounded-xl shadow-2xl opacity-80 group-hover:opacity-100 transition-opacity">
                    </div>
                    <h3 class="text-2xl font-display mb-2 group-hover:text-brand transition-colors">Hebrew Marketing Agency</h3>
                    <p class="text-white/60 text-sm mb-4">Data-driven marketing and high-conversion funnels.</p>
                    <span class="text-[10px] border border-white/20 px-3 py-1 rounded-full uppercase tracking-wider text-white/80">Marketing</span>
                </div>

                <!-- Project 4: Trava -->
                <div class="group cursor-pointer">
                    <div class="rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900 mb-6 aspect-[4/3] flex items-center justify-center p-8 border border-white/5 transition-transform duration-700 ease-out transform group-hover:scale-[1.05]">
                        <img src="./images/project2.jpg" alt="Trava Product Website" class="w-full h-full object-cover rounded-xl shadow-2xl opacity-80 group-hover:opacity-100 transition-opacity">
                    </div>
                    <h3 class="text-2xl font-display mb-2 group-hover:text-brand transition-colors">KeyPharma — Trava Product</h3>
                    <p class="text-white/60 text-sm mb-4">Scientific, trustworthy product showcase for healthcare professionals.</p>
                    <span class="text-[10px] border border-white/20 px-3 py-1 rounded-full uppercase tracking-wider text-white/80">Healthcare Tech</span>
                </div>

            </div>
            
            <div class="mt-16 text-center">
                <a href="projects.html" class="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-3 rounded-full text-sm font-medium transition-all hover:scale-105">
                    View All My Work
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
            </div>
        </section>
`;

// Insert above Testimonials Section
html = html.replace('<!-- Testimonials Section -->', projectsSection + '\n        <!-- Testimonials Section -->');

// Also fix the links in the nav/hero to point back to #projects instead of projects.html (or keep them pointing to #projects)
html = html.replace(/href="projects\.html"/g, 'href="#projects"');

fs.writeFileSync('/Users/lucky/Downloads/Portfolio/index.html', html);
console.log("Successfully added Projects section back to main page!");
