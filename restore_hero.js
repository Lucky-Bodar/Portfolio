const fs = require('fs');
let html = fs.readFileSync('/Users/lucky/Downloads/Portfolio/index.html', 'utf8');

const heroHtml = `
    <!-- Centered Huge Text Background -->
    <div id="hero-text-bg" class="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center pointer-events-none" style="z-index: 5; transition: opacity 0.1s ease-out, transform 0.1s ease-out, filter 0.1s ease-out;">
        <h1 class="font-sans font-light tracking-[0.4em] text-white/90 drop-shadow-2xl text-4xl md:text-6xl lg:text-8xl">LUCKY BODAR</h1>
        <p class="font-sans font-light tracking-[0.2em] text-white/50 mt-4 text-sm md:text-base uppercase">Premium Web Design & Engineering</p>
    </div>
`;

// Insert after <div class="canvas-container"> ... </div>
html = html.replace(/(<div class="canvas-container">[\s\S]*?<\/div>)/, '$1\n' + heroHtml);

const scriptHtml = `
        // Professional Clean Scroll Vanish Effect
        window.addEventListener('scroll', () => {
            const heroWrapper = document.getElementById('hero-text-bg');
            if (!heroWrapper) return;
            
            const scrolled = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
            
            // Fades out extremely fast (within 300px of scrolling)
            const fadePoint = 300; 
            
            let progress = scrolled / fadePoint;
            if (progress > 1) progress = 1;
            
            const opacity = 1 - progress;
            const blur = progress * 10; // Subtle blur
            const translateY = -(progress * 100); // Floats up 100px
            
            heroWrapper.style.opacity = opacity;
            heroWrapper.style.filter = \`blur(\${blur}px)\`;
            heroWrapper.style.transform = \`translateY(\${translateY}px)\`;
        }, { passive: true });
`;

// Insert before </body>
html = html.replace('</body>', scriptHtml + '\n</body>');

fs.writeFileSync('/Users/lucky/Downloads/Portfolio/index.html', html);
