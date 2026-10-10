const fs = require('fs');

const path = '/Users/lucky/.gemini/antigravity/brain/a63da9f7-f4e3-4bdb-bcc0-c9015253c962/scratch/Portfolio/index.html';
let html = fs.readFileSync(path, 'utf8');

const preloadReplacement = `
        function preloadImages() {
            let currentIndex = 0;
            const maxConcurrent = 5;
            
            function loadNext() {
                if (currentIndex >= frameCount) return;
                
                const index = currentIndex++;
                const img = new Image();
                const frameNumber = (index + 1).toString().padStart(6, '0');
                
                img.onload = () => {
                    imagesLoaded++;
                    loadingText.innerText = \`\${Math.round((imagesLoaded / frameCount) * 100)}%\`;
                    
                    if (imagesLoaded === 1) resizeCanvas();
                    
                    if (imagesLoaded >= 2 && !animationStarted) {
                        animationStarted = true;
                        loader.style.opacity = '0';
                        setTimeout(() => { loader.style.display = 'none'; }, 800);
                        startAnimation();
                    }
                    loadNext();
                };
                
                img.onerror = () => {
                    imagesLoaded++;
                    if (imagesLoaded >= 2 && !animationStarted) {
                        animationStarted = true;
                        loader.style.opacity = '0';
                        setTimeout(() => { loader.style.display = 'none'; }, 800);
                        startAnimation();
                    }
                    loadNext();
                };
                
                img.src = \`./frames/frame_\${frameNumber}.jpg\`;
                images[index] = img;
            }

            for (let i = 0; i < maxConcurrent; i++) {
                loadNext();
            }
        }
`;

// Extract the original function to replace it
html = html.replace(/function preloadImages\(\) \{[\s\S]*?images\.push\(img\);\s*\}\s*\}/, preloadReplacement.trim());

fs.writeFileSync(path, html);
