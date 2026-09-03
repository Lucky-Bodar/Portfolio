const fs = require('fs');
let html = fs.readFileSync('/Users/lucky/Downloads/Portfolio/index.html', 'utf8');

const regex = /<!-- Marquee -->[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;

const newHTML = `<!-- Marquee -->
        <div class="w-full overflow-hidden border-y border-white/5 bg-black/40 backdrop-blur-md py-4 pointer-events-auto">
            <div class="marquee-content w-max flex items-center font-display text-2xl tracking-widest text-white/90">
                <div class="flex items-center gap-16 pr-16">
                    <span>YEARS EXPERIENCE</span>
                    <span class="text-brand">✦</span>
                    <span>299+ DELIVERIES</span>
                    <span class="text-brand">✦</span>
                    <span>99% POSITIVE REVIEWS</span>
                    <span class="text-brand">✦</span>
                    <span>6 YEARS EX</span>
                    <span class="text-brand">✦</span>
                </div>
                <div class="flex items-center gap-16 pr-16">
                    <span>YEARS EXPERIENCE</span>
                    <span class="text-brand">✦</span>
                    <span>299+ DELIVERIES</span>
                    <span class="text-brand">✦</span>
                    <span>99% POSITIVE REVIEWS</span>
                    <span class="text-brand">✦</span>
                    <span>6 YEARS EX</span>
                    <span class="text-brand">✦</span>
                </div>
            </div>
        </div>`;

html = html.replace(regex, newHTML);
fs.writeFileSync('/Users/lucky/Downloads/Portfolio/index.html', html);
