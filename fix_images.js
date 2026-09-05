const fs = require('fs');

function processFile(file) {
    const path = '/Users/lucky/Downloads/Portfolio/' + file;
    if (!fs.existsSync(path)) return;
    
    let html = fs.readFileSync(path, 'utf8');
    
    html = html.replace(/https:\/\/i\.pravatar\.cc\/100\?img=1/g, './images/client1.jpg');
    html = html.replace(/https:\/\/i\.pravatar\.cc\/100\?img=2/g, './images/client2.jpg');
    html = html.replace(/https:\/\/i\.pravatar\.cc\/100\?img=3/g, './images/client3.jpg');
    html = html.replace(/https:\/\/i\.pravatar\.cc\/100\?img=4/g, './images/client4.jpg');
    
    html = html.replace(/https:\/\/i\.pravatar\.cc\/150\?img=11/g, './images/alexander.jpg');
    html = html.replace(/https:\/\/i\.pravatar\.cc\/150\?img=12/g, './images/david.jpg');
    html = html.replace(/https:\/\/i\.pravatar\.cc\/150\?img=32/g, './images/sarah.jpg');
    html = html.replace(/https:\/\/i\.pravatar\.cc\/150\?img=44/g, './images/emily.jpg');
    html = html.replace(/https:\/\/i\.pravatar\.cc\/150\?img=52/g, './images/robert.jpg');
    
    // Add preload tags in the head for index.html
    if (file === 'index.html') {
        const preloadTags = `
    <!-- Preload critical above-the-fold images for instant loading -->
    <link rel="preload" as="image" href="./images/client1.jpg">
    <link rel="preload" as="image" href="./images/client2.jpg">
    <link rel="preload" as="image" href="./images/client3.jpg">
    <link rel="preload" as="image" href="./images/client4.jpg">
        `;
        if (!html.includes('rel="preload" as="image"')) {
            html = html.replace('</title>', '</title>\n' + preloadTags);
        }
    }
    
    fs.writeFileSync(path, html);
}

['index.html', 'about.html', 'projects.html', 'index_backup.html'].forEach(processFile);
