const fs = require('fs');
let html = fs.readFileSync('/Users/lucky/Downloads/Portfolio/index.html', 'utf8');

const regex = /<!-- Brand Logos Marquee -->[\s\S]*?<\/section>/;

const newHTML = `<!-- Brand Logos Marquee -->
        <section class="border-y border-white/5 bg-black/40 backdrop-blur-sm py-12 pointer-events-auto overflow-hidden">
            <div class="marquee-content w-max flex items-center font-display text-2xl tracking-widest text-white/50 grayscale hover:grayscale-0 transition-all duration-500 hover:text-white/80" style="animation-duration: 30s;">
                <div class="flex items-center gap-24 pr-24">
                    <span class="font-bold tracking-wider">BLISTEX</span>
                    <span class="font-bold tracking-tighter">DIXIE DOWNS</span>
                    <span class="font-bold text-teal-400">rogue</span>
                    <span class="font-serif italic font-light">Perfect</span>
                    <span class="font-bold tracking-widest">CD.PET</span>
                    <span class="font-bold text-brand">Trava</span>
                    <span class="font-bold tracking-widest">LUMINA</span>
                    <span class="font-bold italic">APEX</span>
                    <span class="font-bold tracking-wider">NOVA</span>
                    <span class="font-bold">VANGUARD</span>
                </div>
                <div class="flex items-center gap-24 pr-24">
                    <span class="font-bold tracking-wider">BLISTEX</span>
                    <span class="font-bold tracking-tighter">DIXIE DOWNS</span>
                    <span class="font-bold text-teal-400">rogue</span>
                    <span class="font-serif italic font-light">Perfect</span>
                    <span class="font-bold tracking-widest">CD.PET</span>
                    <span class="font-bold text-brand">Trava</span>
                    <span class="font-bold tracking-widest">LUMINA</span>
                    <span class="font-bold italic">APEX</span>
                    <span class="font-bold tracking-wider">NOVA</span>
                    <span class="font-bold">VANGUARD</span>
                </div>
            </div>
        </section>`;

html = html.replace(regex, newHTML);
fs.writeFileSync('/Users/lucky/Downloads/Portfolio/index.html', html);
