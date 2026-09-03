const fs = require('fs');
let html = fs.readFileSync('/Users/lucky/Downloads/Portfolio/index.html', 'utf8');

// Remove the raw JS text block that was accidentally added without script tags
const rawJsRegex = /\/\/\s*Professional Clean Scroll Vanish Effect[\s\S]*?\}\,\s*\{\s*passive:\s*true\s*\}\);/g;
html = html.replace(rawJsRegex, '');

// Remove the subtitle paragraph
const subtitleRegex = /<p class="font-sans font-light tracking-\[0\.2em\] text-white\/50 mt-4 text-sm md:text-base uppercase">Premium Web Design \& Engineering<\/p>/g;
html = html.replace(subtitleRegex, '');

// Now inject the proper script WITH tags!
const correctScript = `
    <script>
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
            const blur = progress * 10;
            const translateY = -(progress * 100);
            
            heroWrapper.style.opacity = opacity;
            heroWrapper.style.filter = \`blur(\${blur}px)\`;
            heroWrapper.style.transform = \`translateY(\${translateY}px)\`;
        }, { passive: true });
    </script>
`;

html = html.replace('</body>', correctScript + '\n</body>');

fs.writeFileSync('/Users/lucky/Downloads/Portfolio/index.html', html);
