const fs = require('fs');

function processFile(file) {
    const path = '/Users/lucky/Downloads/Portfolio/' + file;
    if (!fs.existsSync(path)) return;
    
    let html = fs.readFileSync(path, 'utf8');
    
    html = html.replace(/\.\/images\/client1\.jpg/g, 'https://i.pravatar.cc/100?img=1');
    html = html.replace(/\.\/images\/client2\.jpg/g, 'https://i.pravatar.cc/100?img=2');
    html = html.replace(/\.\/images\/client3\.jpg/g, 'https://i.pravatar.cc/100?img=3');
    html = html.replace(/\.\/images\/client4\.jpg/g, 'https://i.pravatar.cc/100?img=4');
    
    html = html.replace(/\.\/images\/alexander\.jpg/g, 'https://i.pravatar.cc/150?img=11');
    html = html.replace(/\.\/images\/david\.jpg/g, 'https://i.pravatar.cc/150?img=12');
    html = html.replace(/\.\/images\/sarah\.jpg/g, 'https://i.pravatar.cc/150?img=32');
    html = html.replace(/\.\/images\/emily\.jpg/g, 'https://i.pravatar.cc/150?img=44');
    html = html.replace(/\.\/images\/robert\.jpg/g, 'https://i.pravatar.cc/150?img=52');
    
    fs.writeFileSync(path, html);
}

['index.html', 'about.html', 'projects.html', 'index_backup.html'].forEach(processFile);
