const fs = require('fs');
let html = fs.readFileSync('/Users/lucky/Downloads/Portfolio/index.html', 'utf8');

// Replace the old sand script entirely
const regex = /\/\/ Advanced Sand Scattering Effect[\s\S]*?\n\s*\n/g;
html = html.replace(regex, '');

const bulletproofScript = `
        // Bulletproof Sand Scattering Effect
        try {
            const heroTitle = document.querySelector('.huge-text');
            if (heroTitle) {
                const text = heroTitle.innerText.trim();
                let newHtml = '';
                
                for(let i = 0; i < text.length; i++) {
                    if (text[i] === ' ') {
                        newHtml += '&nbsp;';
                    } else if (text[i] === '\\n') {
                        newHtml += '<br>';
                    } else {
                        const driftX = (Math.random() - 0.5) * 2;
                        const driftY = -(Math.random() * 2 + 1);
                        const rotate = (Math.random() - 0.5) * 180;
                        newHtml += \`<span class="sand-char" data-dx="\${driftX}" data-dy="\${driftY}" data-rot="\${rotate}" style="display:inline-block; transition: transform 0.1s ease-out, opacity 0.1s ease-out, filter 0.1s ease-out;">\${text[i]}</span>\`;
                    }
                }
                
                heroTitle.innerHTML = newHtml;
                
                window.addEventListener('scroll', () => {
                    const chars = document.querySelectorAll('.sand-char');
                    if (!chars.length) return;
                    
                    const scrolled = window.scrollY || document.documentElement.scrollTop;
                    const maxScroll = window.innerHeight * 0.6;
                    
                    let progress = scrolled / maxScroll;
                    if (progress > 1) progress = 1;
                    
                    const globalOpacity = 1 - Math.pow(progress, 1.5);
                    
                    chars.forEach(char => {
                        if (progress === 0) {
                            char.style.transform = 'translate(0px, 0px) rotate(0deg) scale(1)';
                            char.style.opacity = 1;
                            char.style.filter = 'blur(0px)';
                        } else {
                            const dx = parseFloat(char.getAttribute('data-dx')) || 0;
                            const dy = parseFloat(char.getAttribute('data-dy')) || 0;
                            const rot = parseFloat(char.getAttribute('data-rot')) || 0;
                            
                            const intensity = scrolled * 1.5; 
                            const moveX = dx * intensity;
                            const moveY = dy * intensity;
                            const rotation = rot * progress;
                            const blur = progress * 10;
                            
                            char.style.transform = \`translate(\${moveX}px, \${moveY}px) rotate(\${rotation}deg) scale(\${1 - progress * 0.5})\`;
                            char.style.opacity = globalOpacity;
                            char.style.filter = \`blur(\${blur}px)\`;
                        }
                    });
                }, { passive: true });
            }
        } catch (e) {
            console.error('Sand effect error:', e);
        }
`;

// Insert it right before </body>
html = html.replace('</body>', bulletproofScript + '\n</body>');

fs.writeFileSync('/Users/lucky/Downloads/Portfolio/index.html', html);
