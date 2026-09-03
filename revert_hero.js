const fs = require('fs');
let html = fs.readFileSync('/Users/lucky/Downloads/Portfolio/index.html', 'utf8');

// 1. Restore text z-index, opacity, and mix-blend-mode
html = html.replace('style="z-index: -1; transition: opacity 0.1s ease-out, transform 0.1s ease-out;"', 'style="z-index: 5; transition: opacity 0.1s ease-out, transform 0.1s ease-out;"');
html = html.replace('opacity: 1;', 'opacity: 0.85; mix-blend-mode: overlay;');

// 2. Restore canvas z-index
html = html.replace('z-index: 1;', 'z-index: 0;');

// 3. Restore canvas render logic to 'cover'
const currentRender = `
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

const originalRender = `
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

html = html.replace(currentRender, originalRender);

fs.writeFileSync('/Users/lucky/Downloads/Portfolio/index.html', html);
