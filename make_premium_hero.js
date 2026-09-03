const fs = require('fs');
let html = fs.readFileSync('/Users/lucky/Downloads/Portfolio/index.html', 'utf8');

// 1. Fix the text z-index and remove mix-blend-mode so it sits cleanly in the background
html = html.replace('mix-blend-mode: overlay;', '');
html = html.replace('style="z-index: 5; transition: opacity 0.1s ease-out, transform 0.1s ease-out;"', 'style="z-index: -1; transition: opacity 0.1s ease-out, transform 0.1s ease-out;"');
html = html.replace('opacity: 0.85;', 'opacity: 1;'); // Make it solid since it's behind

// 2. Make canvas z-index 1 so it sits in front of the text
html = html.replace('z-index: 0;', 'z-index: 1;');

// 3. Update the canvas render logic to 'contain' or a scaled size so it doesn't cover the whole screen, leaving the edges of the text visible!
const oldRender = `
            if (canvasRatio > imgRatio) {
                drawHeight = canvas.width / imgRatio;
                offsetY = (canvas.height - drawHeight) / 2;
                drawWidth = canvas.width;
            } else {
                drawWidth = canvas.height * imgRatio;
                offsetX = (canvas.width - drawWidth) / 2;
                drawHeight = canvas.height;
            }
`;

const newRender = `
            // Premium design: 'contain' with a slight scale down so it floats elegantly over the text
            const scaleFactor = 0.8; // Scale down slightly to ensure it doesn't touch the very edges
            if (canvasRatio > imgRatio) {
                drawHeight = canvas.height * scaleFactor;
                drawWidth = drawHeight * imgRatio;
            } else {
                drawWidth = canvas.width * scaleFactor;
                drawHeight = drawWidth / imgRatio;
            }
            offsetX = (canvas.width - drawWidth) / 2;
            offsetY = (canvas.height - drawHeight) / 2;
`;

html = html.replace(oldRender, newRender);

fs.writeFileSync('/Users/lucky/Downloads/Portfolio/index.html', html);
