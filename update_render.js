const fs = require('fs');
let html = fs.readFileSync('/Users/lucky/Downloads/Portfolio/index.html', 'utf8');

const oldRender = `
            if (canvasRatio > imgRatio) {
                drawHeight = canvas.width / imgRatio;
                offsetY = (canvas.height - drawHeight) / 2;
            } else {
                drawWidth = canvas.height * imgRatio;
                offsetX = (canvas.width - drawWidth) / 2;
            }
`;

const newRender = `
            // Changed to 'contain' logic so the image is never aggressively zoomed/cropped
            if (canvasRatio > imgRatio) {
                // Canvas is wider than image (letterbox sides)
                drawWidth = canvas.height * imgRatio;
                offsetX = (canvas.width - drawWidth) / 2;
                drawHeight = canvas.height;
            } else {
                // Canvas is taller than image (letterbox top/bottom)
                drawHeight = canvas.width / imgRatio;
                offsetY = (canvas.height - drawHeight) / 2;
                drawWidth = canvas.width;
            }
`;

html = html.replace(oldRender.trim(), newRender.trim());
fs.writeFileSync('/Users/lucky/Downloads/Portfolio/index.html', html);
console.log("Updated to contain logic");
