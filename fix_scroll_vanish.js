const fs = require('fs');
let html = fs.readFileSync('/Users/lucky/Downloads/Portfolio/index.html', 'utf8');

// Remove the bulletproof sand script
const regex = /\/\/ Bulletproof Sand Scattering Effect[\s\S]*?\}\n\s*\}\n\s*catch\s*\([^)]*\)\s*\{\s*console\.error[^}]*\}\n/g;
html = html.replace(regex, '');

const perfectScrollScript = `
        // Flawless Scroll Vanish Effect
        window.addEventListener('scroll', () => {
            const heroWrapper = document.getElementById('hero-text-bg');
            if (!heroWrapper) return;
            
            const scrolled = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
            
            // Fades out extremely fast (within 400px of scrolling)
            const fadePoint = 400; 
            
            let progress = scrolled / fadePoint;
            if (progress > 1) progress = 1;
            
            const opacity = 1 - progress;
            const blur = progress * 20; // Blurs up to 20px
            const translateY = -(progress * 150); // Floats up 150px
            const scale = 1 + (progress * 0.2); // Grows slightly
            const letterSpacing = 0.2 + (progress * 0.5); // Spreads out like sand
            
            heroWrapper.style.opacity = opacity;
            heroWrapper.style.filter = \`blur(\${blur}px)\`;
            heroWrapper.style.transform = \`translateY(\${translateY}px) scale(\${scale})\`;
            
            const hugeText = heroWrapper.querySelector('.huge-text');
            if (hugeText) {
                hugeText.style.letterSpacing = \`\${letterSpacing}em\`;
            }
        }, { passive: true });
`;

// Insert before </body>
html = html.replace('</body>', perfectScrollScript + '\n</body>');

fs.writeFileSync('/Users/lucky/Downloads/Portfolio/index.html', html);
