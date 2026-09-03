const fs = require('fs');
let html = fs.readFileSync('/Users/lucky/Downloads/Portfolio/index.html', 'utf8');

// 1. Remove the loader DOM element
html = html.replace(/<!-- Loader -->[\s\S]*?<\/div>\s*<!-- Centered Huge Text Background -->/, '<!-- Centered Huge Text Background -->');

// 2. Remove the canvas container
html = html.replace(/<!-- Background Canvas -->[\s\S]*?<\/div>\s*<!-- Main UI Overlay -->/, '<!-- Main UI Overlay -->');

// 3. Remove CSS for canvas and loader
html = html.replace(/\.canvas-container {[\s\S]*?pointer-events: none;\s*}/, '');
html = html.replace(/\/\* Loading indicator \*\/[\s\S]*?@keyframes spin { to { transform: rotate\(360deg\); } }/, '');

// 4. Remove all the canvas Javascript, leaving only the reveal animation
const scriptStart = '<script>';
const scriptEnd = '</script>';

const newScript = `<script>
        // Intersection Observer for scroll animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Wait for DOM to be ready
        document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.reveal').forEach(el => {
                observer.observe(el);
            });
        });

        // Professionally vanish the hero text on scroll
        window.addEventListener('scroll', () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const heroTextBg = document.getElementById('hero-text-bg');
            if (heroTextBg) {
                // Fade out completely by the time they scroll 40% of a screen height
                const fadePoint = window.innerHeight * 0.4; 
                let opacity = 1 - (scrollTop / fadePoint);
                if (opacity < 0) opacity = 0;
                
                heroTextBg.style.opacity = opacity;
                heroTextBg.style.transform = \`translateY(\${scrollTop * -0.4}px) scale(\${1 + (scrollTop * 0.0005)})\`;
            }
        }, { passive: true });
</script>`;

const scriptRegex = /<script>\s*const canvas = document.getElementById\('scroll-canvas'\);[\s\S]*?<\/script>/;
html = html.replace(scriptRegex, newScript);

fs.writeFileSync('/Users/lucky/Downloads/Portfolio/index.html', html);
