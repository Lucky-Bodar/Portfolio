const fs = require('fs');
let html = fs.readFileSync('/Users/lucky/Downloads/Portfolio/index.html', 'utf8');

// 1. Inject CSS
const cssToInject = `
        .canvas-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 0;
            background-color: #050505;
            pointer-events: none;
        }

        /* Loading indicator */
        #loader {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: rgba(255, 255, 255, 0.9);
            font-size: 1.2rem;
            letter-spacing: 2px;
            z-index: 100;
            transition: opacity 0.8s ease;
            display: flex;
            align-items: center;
        }
        .spinner {
            width: 24px; height: 24px;
            border: 3px solid rgba(255,255,255,0.2);
            border-radius: 50%;
            border-top-color: #E55B23;
            animation: spin 1s ease-in-out infinite;
            margin-right: 15px;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
`;

html = html.replace('/* Marquee animation */', cssToInject + '\n        /* Marquee animation */');

// 2. Inject HTML elements
const htmlElements = `
    <!-- Loader -->
    <div id="loader">
        <div class="spinner"></div>
        <span id="loading-text">0%</span>
    </div>
    
    <!-- Background Canvas -->
    <div class="canvas-container">
        <canvas id="scroll-canvas"></canvas>
    </div>
`;
html = html.replace('<!-- Centered Huge Text Background -->', htmlElements + '\n    <!-- Centered Huge Text Background -->');

// 3. Replace script tag content
const newScript = `<script>
        const canvas = document.getElementById('scroll-canvas');
        const ctx = canvas.getContext('2d', { alpha: false });
        
        const frameCount = 240;
        const images = [];
        let imagesLoaded = 0;
        const loadingText = document.getElementById('loading-text');
        const loader = document.getElementById('loader');
        let animationStarted = false;

        const state = {
            frame: 0,
            targetFrame: 0,
            lastRenderedFrame: -1
        };

        function resizeCanvas() {
            const dpr = 1; // Optimized for 60fps scrolling
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            
            state.lastRenderedFrame = -1;
            
            const currentFrameIndex = Math.min(frameCount - 1, Math.max(0, Math.round(state.frame)));
            const currentImg = images[currentFrameIndex];
            
            if (currentImg && currentImg.complete) {
                render(currentImg);
            }
        }

        window.addEventListener('resize', resizeCanvas);

        function preloadImages() {
            for (let i = 0; i < frameCount; i++) {
                const img = new Image();
                const frameNumber = (i + 1).toString().padStart(6, '0');
                img.src = \`./frames/frame_\${frameNumber}.jpg\`;
                
                const onImageReady = () => {
                    imagesLoaded++;
                    loadingText.innerText = \`\${Math.round((imagesLoaded / frameCount) * 100)}%\`;
                    
                    if (imagesLoaded === 1) {
                        resizeCanvas();
                    }
                    
                    if (imagesLoaded === frameCount && !animationStarted) {
                        animationStarted = true;
                        loader.style.opacity = '0';
                        setTimeout(() => { loader.style.display = 'none'; }, 800);
                        startAnimation();
                    }
                };

                img.onload = onImageReady;
                img.onerror = () => {
                    imagesLoaded++; 
                    if (imagesLoaded === frameCount && !animationStarted) {
                        animationStarted = true;
                        loader.style.opacity = '0';
                        setTimeout(() => { loader.style.display = 'none'; }, 800);
                        startAnimation();
                    }
                };

                images.push(img);
            }
        }

        function render(img) {
            if (!img || !img.complete) return;
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            const canvasRatio = canvas.width / canvas.height;
            const imgRatio = img.width / img.height;
            
            let drawWidth = canvas.width;
            let drawHeight = canvas.height;
            let offsetX = 0;
            let offsetY = 0;

            if (canvasRatio > imgRatio) {
                drawHeight = canvas.width / imgRatio;
                offsetY = (canvas.height - drawHeight) / 2;
                drawWidth = canvas.width;
            } else {
                drawWidth = canvas.height * imgRatio;
                offsetX = (canvas.width - drawWidth) / 2;
                drawHeight = canvas.height;
            }

            ctx.imageSmoothingEnabled = true;
            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        }

        window.addEventListener('scroll', () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const scrollFraction = Math.max(0, Math.min(1, scrollTop / maxScroll));
            
            state.targetFrame = scrollFraction * (frameCount - 1);

            // Professionally vanish the hero text on scroll
            const heroTextBg = document.getElementById('hero-text-bg');
            if (heroTextBg) {
                const fadePoint = window.innerHeight * 0.4; 
                let opacity = 1 - (scrollTop / fadePoint);
                if (opacity < 0) opacity = 0;
                
                heroTextBg.style.opacity = opacity;
                heroTextBg.style.transform = \`translateY(\${scrollTop * -0.4}px) scale(\${1 + (scrollTop * 0.0005)})\`;
            }
        }, { passive: true });

        function startAnimation() {
            // Intersection Observer for scroll animations
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => {
                observer.observe(el);
            });

            function loop() {
                // Smooth easing
                state.frame += (state.targetFrame - state.frame) * 0.1;
                
                const currentFrameIndex = Math.min(frameCount - 1, Math.max(0, Math.round(state.frame)));
                
                if (currentFrameIndex !== state.lastRenderedFrame) {
                    const currentImg = images[currentFrameIndex];
                    if (currentImg && currentImg.complete) {
                        render(currentImg);
                        state.lastRenderedFrame = currentFrameIndex;
                    }
                }
                
                requestAnimationFrame(loop);
            }
            
            loop();
        }

        preloadImages();
</script>`;

html = html.replace(/<script>[\s\S]*?<\/script>/, newScript);
fs.writeFileSync('/Users/lucky/Downloads/Portfolio/index.html', html);
