const fs = require('fs');
let html = fs.readFileSync('/Users/lucky/Downloads/Portfolio/index.html', 'utf8');

const stars = `
                    <div class="flex gap-1 text-brand mb-6">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    </div>`;

const testBlocks = `
                <!-- Testimonial 1 -->
                <div class="glass p-8 rounded-3xl border border-white/10 hover:border-brand/50 transition-colors w-[400px] flex-shrink-0 whitespace-normal">
${stars}
                    <p class="text-white/80 mb-8 italic text-lg">"Lucky completely transformed our online presence. The new landing page increased our consultation bookings by over 150% in just the first month. Incredible work!"</p>
                    <div class="flex items-center gap-4">
                        <img src="https://i.pravatar.cc/150?img=11" alt="Alexander" class="w-12 h-12 rounded-full border-2 border-brand">
                        <div>
                            <h4 class="font-bold">Alexander M.</h4>
                            <p class="text-xs text-white/50">Managing Partner, Legal</p>
                        </div>
                    </div>
                </div>
                
                <!-- Testimonial 2 -->
                <div class="glass p-8 rounded-3xl border border-white/10 hover:border-brand/50 transition-colors w-[400px] flex-shrink-0 whitespace-normal">
${stars}
                    <p class="text-white/80 mb-8 italic text-lg">"Not only is the design absolutely gorgeous, but the code is flawless. We needed a high-converting pharma site, and he delivered beyond our expectations."</p>
                    <div class="flex items-center gap-4">
                        <img src="https://i.pravatar.cc/150?img=32" alt="Sarah" class="w-12 h-12 rounded-full border-2 border-brand">
                        <div>
                            <h4 class="font-bold">Sarah Jenkins</h4>
                            <p class="text-xs text-white/50">CMO, KeyPharma</p>
                        </div>
                    </div>
                </div>

                <!-- Testimonial 3 -->
                <div class="glass p-8 rounded-3xl border border-white/10 hover:border-brand/50 transition-colors w-[400px] flex-shrink-0 whitespace-normal">
${stars}
                    <p class="text-white/80 mb-8 italic text-lg">"The level of detail and modern aesthetic he brought to our agency's portfolio was mind-blowing. The animations are so smooth. Highly recommend!"</p>
                    <div class="flex items-center gap-4">
                        <img src="https://i.pravatar.cc/150?img=12" alt="David" class="w-12 h-12 rounded-full border-2 border-brand">
                        <div>
                            <h4 class="font-bold">David Cohen</h4>
                            <p class="text-xs text-white/50">Founder, Marketing Agency</p>
                        </div>
                    </div>
                </div>

                <!-- Testimonial 4 -->
                <div class="glass p-8 rounded-3xl border border-white/10 hover:border-brand/50 transition-colors w-[400px] flex-shrink-0 whitespace-normal">
${stars}
                    <p class="text-white/80 mb-8 italic text-lg">"Working with Lucky was a masterclass in modern digital design. Our new firm website exudes authority and has dramatically increased client trust."</p>
                    <div class="flex items-center gap-4">
                        <img src="https://i.pravatar.cc/150?img=52" alt="Robert" class="w-12 h-12 rounded-full border-2 border-brand">
                        <div>
                            <h4 class="font-bold">Robert F.</h4>
                            <p class="text-xs text-white/50">Senior Partner, Robert's Legal</p>
                        </div>
                    </div>
                </div>

                <!-- Testimonial 5 -->
                <div class="glass p-8 rounded-3xl border border-white/10 hover:border-brand/50 transition-colors w-[400px] flex-shrink-0 whitespace-normal">
${stars}
                    <p class="text-white/80 mb-8 italic text-lg">"The AI integrations Lucky built into our platform have saved us hundreds of hours. An exceptional developer who truly understands business scale."</p>
                    <div class="flex items-center gap-4">
                        <img src="https://i.pravatar.cc/150?img=44" alt="Emily" class="w-12 h-12 rounded-full border-2 border-brand">
                        <div>
                            <h4 class="font-bold">Emily R.</h4>
                            <p class="text-xs text-white/50">CEO, TechFlow</p>
                        </div>
                    </div>
                </div>
`;

const newTestimonials = `            <div class="reveal reveal-delay-1 w-full overflow-hidden">
                <div class="marquee-content w-[250%] hover:[animation-play-state:paused]" style="animation-duration: 40s;">
                    <div class="flex gap-8 px-4 w-1/2">
${testBlocks}
                    </div>
                    <div class="flex gap-8 px-4 w-1/2">
${testBlocks}
                    </div>
                </div>
            </div>`;

// Use regex to replace everything from <div class="reveal reveal-delay-1 grid grid-cols-1 md:grid-cols-3 gap-8"> up to the end of the section
const regex = /<div class="reveal reveal-delay-1 grid grid-cols-1 md:grid-cols-3 gap-8">[\s\S]*?<\/section>/;
html = html.replace(regex, newTestimonials + '\n        </section>');

fs.writeFileSync('/Users/lucky/Downloads/Portfolio/index.html', html);
