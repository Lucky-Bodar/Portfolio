const fs = require('fs');
let html = fs.readFileSync('/Users/lucky/Downloads/Portfolio/index.html', 'utf8');

const cssToInsert = `
        /* Smooth Reveal Animations */
        .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }
        .reveal-delay-1 { transition-delay: 100ms; }
        .reveal-delay-2 { transition-delay: 200ms; }
        .reveal-delay-3 { transition-delay: 300ms; }
        .reveal-delay-4 { transition-delay: 400ms; }
`;

html = html.replace('</style>', cssToInsert + '\n    </style>');

const jsToInsert = `
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

html = html.replace('startAnimation();', jsToInsert + '\n        startAnimation();');
fs.writeFileSync('/Users/lucky/Downloads/Portfolio/index.html', html);
