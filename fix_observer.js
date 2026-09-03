const fs = require('fs');
let html = fs.readFileSync('/Users/lucky/Downloads/Portfolio/index.html', 'utf8');

const regex = /\/\/ Intersection Observer for scroll animations[\s\S]*?startAnimation\(\);/m;

const replacement = `startAnimation();`;

html = html.replace(regex, replacement);

const startAnimationRegex = /function startAnimation\(\) {/;
const startAnimationReplacement = `function startAnimation() {
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

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });
`;

html = html.replace(startAnimationRegex, startAnimationReplacement);
fs.writeFileSync('/Users/lucky/Downloads/Portfolio/index.html', html);
