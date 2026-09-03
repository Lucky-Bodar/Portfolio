const fs = require('fs');
let html = fs.readFileSync('/Users/lucky/Downloads/Portfolio/index.html', 'utf8');

const servicesSection = `
        <!-- Services Section -->
        <section id="services" class="max-w-6xl mx-auto px-8 py-32 pointer-events-auto mt-12 mb-12">
            <div class="mb-16 text-center">
                <div class="flex items-center justify-center gap-2 text-xs text-brand font-medium uppercase tracking-widest mb-3">
                    <span class="w-1 h-1 rounded-full bg-brand"></span>
                    What I Do
                    <span class="w-1 h-1 rounded-full bg-brand"></span>
                </div>
                <h2 class="font-display text-4xl md:text-5xl">Professional Services</h2>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
                <!-- Service 1 -->
                <div class="glass p-8 rounded-3xl border border-white/5 hover:border-brand/50 transition-colors group">
                    <div class="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-brand group-hover:scale-110 transition-transform">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-white">Web Design</h3>
                    <p class="text-white/60 text-sm leading-relaxed">Crafting visually stunning, highly converting landing pages and websites tailored for your brand.</p>
                </div>
                
                <!-- Service 2 -->
                <div class="glass p-8 rounded-3xl border border-white/5 hover:border-brand/50 transition-colors group">
                    <div class="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-brand group-hover:scale-110 transition-transform">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-white">UI/UX Architecture</h3>
                    <p class="text-white/60 text-sm leading-relaxed">Designing intuitive, user-centric interfaces that provide flawless digital experiences.</p>
                </div>
                
                <!-- Service 3 -->
                <div class="glass p-8 rounded-3xl border border-white/5 hover:border-brand/50 transition-colors group">
                    <div class="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-brand group-hover:scale-110 transition-transform">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-white">Fintech Platforms</h3>
                    <p class="text-white/60 text-sm leading-relaxed">Building secure, luxury financial dashboards and banking applications with precision.</p>
                </div>
                
                <!-- Service 4 -->
                <div class="glass p-8 rounded-3xl border border-white/5 hover:border-brand/50 transition-colors group">
                    <div class="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-brand group-hover:scale-110 transition-transform">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-white">E-Commerce</h3>
                    <p class="text-white/60 text-sm leading-relaxed">Developing high-performance, curated storefronts designed to maximize online sales.</p>
                </div>
            </div>
        </section>
`;

// Insert it right above the Projects Section
html = html.replace('<!-- Projects Section -->', servicesSection + '\n        <!-- Projects Section -->');

// Also update the Services navbar link
html = html.replace(
    '<a href="#" class="hover:text-brand transition-colors text-white/80 hover:text-white">Services</a>',
    '<a href="#services" class="hover:text-brand transition-colors text-white/80 hover:text-white">Services</a>'
);

fs.writeFileSync('/Users/lucky/Downloads/Portfolio/index.html', html);
