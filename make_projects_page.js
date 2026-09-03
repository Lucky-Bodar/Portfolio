const fs = require('fs');
let html = fs.readFileSync('/Users/lucky/Downloads/Portfolio/index.html', 'utf8');

// 1. Extract the Projects Section
const projectsRegex = /(<!-- Projects Section -->[\s\S]*?<\/section>)/;
const match = html.match(projectsRegex);

if (match) {
    let projectsSection = match[1];
    
    // Remove it from index.html
    html = html.replace(projectsRegex, '');
    
    // Update links in index.html to point to projects.html
    html = html.replace(/href="#projects"/g, 'href="projects.html"');
    
    fs.writeFileSync('/Users/lucky/Downloads/Portfolio/index.html', html);
    
    // 2. Build projects.html
    // Let's modify the projects section to be vertical (grid-cols-1)
    projectsSection = projectsSection.replace(/grid-cols-1 md:grid-cols-2/g, 'grid-cols-1 max-w-4xl mx-auto');
    projectsSection = projectsSection.replace('id="projects"', '');
    projectsSection = projectsSection.replace('bg-black/60 backdrop-blur-md rounded-[3rem] mt-24 mb-32 border border-white/5', 'mt-32');

    // For Express, let's inject a custom dual-image thumbnail
    const expressImgHtml = `
        <div class="flex w-full h-full">
            <img src="./images/express1.png" class="w-1/2 h-full object-cover">
            <img src="./images/express2.png" class="w-1/2 h-full object-cover">
        </div>
    `;
    projectsSection = projectsSection.replace('<img src="./images/project2.jpg" alt="Express Luxury Credit Platform" class="w-full h-full object-cover rounded-xl shadow-2xl opacity-80 group-hover:opacity-100 transition-opacity">', expressImgHtml);
    
    // For Brevita, update the thumbnail to use brevita.png
    projectsSection = projectsSection.replace('<img src="./images/project3.jpg" alt="Brevita Coffee Journey" class="w-full h-full object-cover rounded-xl shadow-2xl opacity-80 group-hover:opacity-100 transition-opacity">', '<img src="./images/brevita.png" alt="Brevita Coffee Journey" class="w-full h-full object-cover rounded-xl shadow-2xl opacity-80 group-hover:opacity-100 transition-opacity">');

    const newHtml = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>All Projects - Lucky Bodar</title>
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    
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
                    }
                }
            }
        }
    </script>
    <style>
        body { background-color: #050505; color: white; }
        .reveal {
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 1s ease forwards;
        }
        @keyframes fadeInUp {
            to { opacity: 1; transform: translateY(0); }
        }
    </style>
</head>
<body class="antialiased selection:bg-brand selection:text-white">

    <!-- Navbar -->
    <nav class="fixed top-0 left-0 w-full px-8 py-6 flex justify-between items-center z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
        <div class="font-display text-2xl tracking-wide cursor-pointer" onclick="window.location.href='index.html'">
            Lucky Bodar
        </div>
        <div class="flex gap-8 text-sm font-medium">
            <a href="index.html" class="hover:text-brand transition-colors text-white/80 hover:text-white">Home</a>
            <a href="#" class="text-brand transition-colors">Projects</a>
        </div>
    </nav>

    ${projectsSection}

</body>
</html>`;

    fs.writeFileSync('/Users/lucky/Downloads/Portfolio/projects.html', newHtml);
    console.log("Successfully created projects.html and updated index.html");
} else {
    console.log("Projects section not found!");
}
