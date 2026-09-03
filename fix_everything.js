const fs = require('fs');
let html = fs.readFileSync('/Users/lucky/Downloads/Portfolio/index_backup.html', 'utf8');

// The file currently has the animation JS where the tailwind script used to be.
// We need to extract the animation JS, put the tailwind script back, and put the animation JS at the bottom.

// 1. Extract the animation script that was accidentally put in the head
const headScriptRegex = /<script>\s*const canvas = document.getElementById\('scroll-canvas'\);[\s\S]*?<\/script>/;
const match = html.match(headScriptRegex);
const animationScript = match ? match[0] : '';

// 2. Remove it from the head
html = html.replace(headScriptRegex, '');

// 3. Re-inject Tailwind CSS and config in the head
const tailwindScripts = `
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: '#E55B23', // Bright orange
                        brandHover: '#d14d1a',
                        dark: '#050505',
                        darkPanel: '#111111',
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        display: ['Anton', 'sans-serif'],
                    },
                    boxShadow: {
                        'glass': '0 4px 30px rgba(0, 0, 0, 0.5)',
                    }
                }
            }
        }
    </script>
`;

html = html.replace('<!-- Tailwind CSS -->', tailwindScripts);

// 4. Inject the animation script back at the very bottom right before </body>
// First, make sure we remove any existing script at the bottom just in case
const bottomScriptRegex = /<script>\s*\/\/ Intersection Observer for scroll animations[\s\S]*?<\/script>/;
html = html.replace(bottomScriptRegex, '');

html = html.replace('</body>', animationScript + '\n</body>');

fs.writeFileSync('/Users/lucky/Downloads/Portfolio/index.html', html);
