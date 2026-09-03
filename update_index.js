const fs = require('fs');
let html = fs.readFileSync('/Users/lucky/Downloads/Portfolio/index.html', 'utf8');

// 1. Add Playfair Display to Google Fonts
html = html.replace(
    'family=Anton&family=Inter:wght@300;400;500;600&display=swap',
    'family=Anton&family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap'
);

// 2. Add Tailwind Config for aesthetic font
html = html.replace(
    "display: ['Anton', 'sans-serif'],",
    "display: ['Anton', 'sans-serif'],\n                        aesthetic: ['\"Playfair Display\"', 'serif'],"
);

// 3. Fix "Projects" nav link
html = html.replace(/href="#projects" class="text-sm font-medium hover:text-brand transition-all duration-300 hover:scale-105 flex items-center gap-1"/g, 'href="projects.html" class="text-sm font-medium hover:text-brand transition-all duration-300 hover:scale-105 flex items-center gap-1"');
html = html.replace('<a href="#projects" class="hover:text-brand hover:text-white transition-all duration-300 hover:scale-110 inline-block text-white/80">Projects</a>', '<a href="projects.html" class="hover:text-brand hover:text-white transition-all duration-300 hover:scale-110 inline-block text-white/80">Projects</a>');

// 4. Update Nav Pills for white hover background
const oldNavPills = `            <div class="hidden md:flex items-center gap-6 glass rounded-full px-6 py-3 text-sm font-medium pointer-events-auto">
                <a href="#" class="hover:text-brand transition-colors bg-white text-black px-4 py-1.5 rounded-full">About</a>
                <a href="projects.html" class="hover:text-brand hover:text-white transition-all duration-300 hover:scale-110 inline-block text-white/80">Projects</a>
                <a href="#services" class="hover:text-brand hover:text-white transition-all duration-300 hover:scale-110 inline-block text-white/80">Services</a>
                <a href="#testimonials" class="hover:text-brand hover:text-white transition-all duration-300 hover:scale-110 inline-block text-white/80">Testimonials</a>
                <a href="contact.html" class="hover:text-brand hover:text-white transition-all duration-300 hover:scale-110 inline-block text-white/80">Contact</a>
            </div>`;

const newNavPills = `            <div class="hidden md:flex items-center gap-2 glass rounded-full px-4 py-2 text-sm font-medium pointer-events-auto">
                <a href="#" class="px-4 py-1.5 rounded-full transition-all duration-300 bg-white text-black hover:scale-105">About</a>
                <a href="projects.html" class="px-4 py-1.5 rounded-full transition-all duration-300 text-white/80 hover:bg-white hover:text-black hover:scale-105">Projects</a>
                <a href="#services" class="px-4 py-1.5 rounded-full transition-all duration-300 text-white/80 hover:bg-white hover:text-black hover:scale-105">Services</a>
                <a href="#testimonials" class="px-4 py-1.5 rounded-full transition-all duration-300 text-white/80 hover:bg-white hover:text-black hover:scale-105">Testimonials</a>
                <a href="contact.html" class="px-4 py-1.5 rounded-full transition-all duration-300 text-white/80 hover:bg-white hover:text-black hover:scale-105">Contact</a>
            </div>`;

html = html.replace(oldNavPills, newNavPills);

// 5. Change "Portfolio" logo and footer font to aesthetic
html = html.replace(
    'class="font-display text-2xl tracking-wide pointer-events-auto cursor-pointer transition-all duration-300 hover:scale-110 hover:text-brand"',
    'class="font-aesthetic italic text-3xl font-bold tracking-wide pointer-events-auto cursor-pointer transition-all duration-500 hover:scale-110 hover:text-white text-white/90 drop-shadow-2xl"'
);
html = html.replace(
    '<div class="font-display text-2xl tracking-wide mb-6">Portfolio</div>',
    '<div class="font-aesthetic italic text-3xl font-bold tracking-wide mb-6 transition-all duration-500 hover:scale-110 hover:text-white cursor-pointer inline-block">Portfolio</div>'
);

// 6. Change "LUCKY BODAR" to aesthetic font
html = html.replace(
    'class="font-display huge-text text-center leading-none tracking-tighter opacity-85"',
    'class="font-aesthetic italic text-center leading-tight tracking-normal opacity-85" style="mix-blend-mode: overlay; z-index: 5; transition: opacity 0.1s ease-out, transform 0.1s ease-out;"'
);
html = html.replace('LUCKY<br>BODAR', 'Lucky<br>Bodar'); // Sentence case looks better with serif fonts

// 7. Footer Social Icons Animation
const socialRegex = /<a href="#" class="text-white\/50 hover:text-white transition-colors">/g;
html = html.replace(socialRegex, '<a href="#" class="text-white/50 hover:text-white transition-all duration-300 hover:scale-125 hover:-translate-y-1 inline-block">');

// 8. Add Sand Vanish Scroll Script
const scrollScript = `
    <script>
        // Sand Vanish Effect for Hero Text
        window.addEventListener('scroll', () => {
            const heroText = document.getElementById('hero-text-bg');
            if (heroText) {
                const scrolled = window.scrollY;
                // Fade out faster
                const opacity = Math.max(0.85 - (scrolled / 400), 0);
                // Increase blur significantly like sand blowing away
                const blur = Math.min(scrolled / 15, 25);
                // Move it up
                const translateY = scrolled * 0.4;
                // Add a slight letter spacing expansion to simulate dissolving
                const letterSpacing = Math.min(scrolled / 50, 10);
                
                heroText.style.opacity = opacity;
                heroText.style.filter = \`blur(\${blur}px)\`;
                heroText.style.transform = \`translateY(\${translateY}px)\`;
                heroText.style.letterSpacing = \`\${letterSpacing}px\`;
            }
        });
    </script>
</body>
`;
html = html.replace('</body>', scrollScript);

fs.writeFileSync('/Users/lucky/Downloads/Portfolio/index.html', html);
