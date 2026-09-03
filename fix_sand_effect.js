const fs = require('fs');
let html = fs.readFileSync('/Users/lucky/Downloads/Portfolio/index.html', 'utf8');

// Replace the old scroll script with an advanced particle scattering script
const oldScriptRegex = /\/\/ Sand Vanish Effect for Hero Text[\s\S]*?\}\);/g;

const newScript = `
        // Advanced Sand Scattering Effect
        const heroTitle = document.querySelector('.huge-text');
        if (heroTitle) {
            // Split text into spans for individual particle animation
            const text = heroTitle.innerHTML;
            let newHtml = '';
            let charIndex = 0;
            
            // We have a <br> tag inside, we need to handle it properly
            const parts = text.split('<br>');
            parts.forEach((part, index) => {
                for(let i = 0; i < part.length; i++) {
                    if (part[i] === ' ') {
                        newHtml += ' ';
                    } else {
                        // Generate random drift factors for each character
                        const driftX = (Math.random() - 0.5) * 2; // -1 to 1
                        const driftY = -(Math.random() * 1.5 + 0.5); // Always drift UP (-0.5 to -2)
                        const rotate = (Math.random() - 0.5) * 180;
                        
                        newHtml += \`<span class="sand-char inline-block" data-dx="\${driftX}" data-dy="\${driftY}" data-rot="\${rotate}" style="transition: transform 0.1s ease-out, opacity 0.1s ease-out, filter 0.1s ease-out;">\${part[i]}</span>\`;
                        charIndex++;
                    }
                }
                if (index < parts.length - 1) newHtml += '<br>';
            });
            heroTitle.innerHTML = newHtml;
            
            const chars = document.querySelectorAll('.sand-char');
            
            window.addEventListener('scroll', () => {
                const scrolled = window.scrollY;
                const maxScroll = window.innerHeight * 0.5; // Fades out completely halfway down the screen
                
                // Calculate global progress 0 to 1
                let progress = scrolled / maxScroll;
                if (progress > 1) progress = 1;
                
                // Global opacity curve
                const globalOpacity = 1 - Math.pow(progress, 1.5);
                
                chars.forEach(char => {
                    if (progress === 0) {
                        char.style.transform = 'translate(0px, 0px) rotate(0deg)';
                        char.style.opacity = 1;
                        char.style.filter = 'blur(0px)';
                    } else {
                        const dx = parseFloat(char.getAttribute('data-dx'));
                        const dy = parseFloat(char.getAttribute('data-dy'));
                        const rot = parseFloat(char.getAttribute('data-rot'));
                        
                        // Scatter intensity increases with scroll
                        const intensity = scrolled * 1.5; 
                        
                        const moveX = dx * intensity;
                        const moveY = dy * intensity;
                        const rotation = rot * progress;
                        const blur = progress * 10; // Max 10px blur
                        
                        char.style.transform = \`translate(\${moveX}px, \${moveY}px) rotate(\${rotation}deg) scale(\${1 - (progress * 0.5)})\`;
                        char.style.opacity = globalOpacity;
                        char.style.filter = \`blur(\${blur}px)\`;
                    }
                });
            });
        }
`;

html = html.replace(oldScriptRegex, newScript);

fs.writeFileSync('/Users/lucky/Downloads/Portfolio/index.html', html);
