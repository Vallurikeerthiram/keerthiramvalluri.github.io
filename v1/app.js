// --- CURSOR AS LIGHT SOURCE (CUSTOM CURSOR + GLASS REFLECTION EFFECTS) ---
const cursorLightElement = document.getElementById('cursorLight');
let cursorX = window.innerWidth / 2;
let cursorY = window.innerHeight / 2;
function moveCursorLight(x, y) {
    cursorX = x;
    cursorY = y;
    if (cursorLightElement) {
        cursorLightElement.style.left = `${x}px`;
        cursorLightElement.style.top = `${y}px`;
        cursorLightElement.style.opacity = 1;
    }
    document.documentElement.style.setProperty('--cursor-x', `${x}px`);
    document.documentElement.style.setProperty('--cursor-y', `${y}px`);
}

document.addEventListener('mousemove', (e) => {
    moveCursorLight(e.clientX, e.clientY);
});
document.addEventListener('mouseleave', () => {
    if (cursorLightElement) cursorLightElement.style.opacity = 0;
});
document.addEventListener('mouseenter', (e) => {
    moveCursorLight(e.clientX, e.clientY);
});

// Mobile/touch: fade out custom cursor and restore default
if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    if (cursorLightElement) cursorLightElement.style.display = 'none';
    document.body.style.cursor = 'default';
    document.querySelectorAll('a, button, .nav-link, .project-card, .btn').forEach(el => {
        el.style.cursor = 'pointer';
    });
}

// Neural Network Background Animation
const neuralBgCanvas = document.getElementById('neuralNetworkBg');
if (neuralBgCanvas) {
    const ctx = neuralBgCanvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    neuralBgCanvas.width = width;
    neuralBgCanvas.height = height;
    
    // Neural network nodes
    const nodes = [];
    const nodeCount = Math.min(50, Math.floor((width * height) / 15000));
    
    class Node {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 2 + 1;
            this.pulsePhase = Math.random() * Math.PI * 2;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
            
            this.pulsePhase += 0.02;
        }
        
        draw() {
            const pulse = Math.sin(this.pulsePhase) * 0.5 + 0.5;
            const alpha = 0.3 + pulse * 0.4;
            
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(28, 44, 51, ${alpha})`;
            ctx.fill();
            
            // Glow effect
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius * 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(28, 44, 51, ${alpha * 0.2})`;
            ctx.fill();
        }
    }
    
    // Initialize nodes
    for (let i = 0; i < nodeCount; i++) {
        nodes.push(new Node());
    }
    
    function drawConnections() {
        const maxDistance = 150;
        
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < maxDistance) {
                    const alpha = (1 - distance / maxDistance) * 0.3;
                    
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.strokeStyle = `rgba(191, 199, 203, ${alpha})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                    
                    // Flow particles along connections
                    const flowProgress = (Date.now() * 0.0005) % 1;
                    const flowX = nodes[i].x + (nodes[j].x - nodes[i].x) * flowProgress;
                    const flowY = nodes[i].y + (nodes[j].y - nodes[i].y) * flowProgress;
                    
                    if (Math.random() > 0.98) {
                        ctx.beginPath();
                        ctx.arc(flowX, flowY, 1.5, 0, Math.PI * 2);
                        ctx.fillStyle = `rgba(28, 44, 51, ${alpha * 2})`;
                        ctx.fill();
                    }
                }
            }
        }
    }
    
    function animateNeuralBg() {
        ctx.clearRect(0, 0, width, height);
        
        drawConnections();
        
        nodes.forEach(node => {
            node.update();
            node.draw();
        });
        
        requestAnimationFrame(animateNeuralBg);
    }
    
    animateNeuralBg();
    
    window.addEventListener('resize', () => {
        width = window.innerWidth;
        height = window.innerHeight;
        neuralBgCanvas.width = width;
        neuralBgCanvas.height = height;
    });
}

// Navigation functionality
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Smooth scroll for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Logo removed as per user request

// ---- REALISTIC GLASS REFLECTION/EDGE GLOW FOR ALL GLASS ELEMENTS ----
function updateGlassReflections(e) {
    const glassElements = document.querySelectorAll('.highlight-card, .vision-card, .skill-category, .project-card, .cert-card, .btn-primary, .hero-content');
    const cx = (e?.clientX ?? cursorX);
    const cy = (e?.clientY ?? cursorY);

    glassElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const dx = cx - (rect.left + rect.width/2);
        const dy = cy - (rect.top + rect.height/2);
        const dist = Math.sqrt(dx*dx + dy*dy);
        const maxDist = 600; // Fixed max distance for consistent effect
        const proximity = Math.max(0, 1 - dist/maxDist);
        
        // Reflection spot (glass highlight) - position based on cursor
        el.style.setProperty('--glass-reflect-x', `${((cx-rect.left)/rect.width)*100}%`);
        el.style.setProperty('--glass-reflect-y', `${((cy-rect.top)/rect.height)*100}%`);
        el.style.setProperty('--glass-reflect-strength', proximity.toFixed(3));
        
        // Edge glow (intense near cursor)
        el.style.setProperty('--glass-glow', (proximity*25+3) + 'px');
        el.style.setProperty('--glass-glow-alpha', Math.min(proximity*1.2+0.2, 0.9));
        
        // Active shadow for depth (3D effect)
        el.style.setProperty('--glass-depth', (proximity*15+5)+ 'px');
    });
}

// Throttled version for performance
let glassUpdateTimeout;
function throttledGlassUpdate(e) {
    if (glassUpdateTimeout) return;
    glassUpdateTimeout = setTimeout(() => {
        updateGlassReflections(e);
        glassUpdateTimeout = null;
    }, 16); // ~60fps
}

document.addEventListener('mousemove', updateGlassReflections);
document.addEventListener('scroll', () => { setTimeout(updateGlassReflections, 50); }, { passive: true });
window.addEventListener('resize', () => { setTimeout(updateGlassReflections, 100); });
setTimeout(updateGlassReflections, 300);
// (End glass reflection update)

// 3D Hero Canvas - METALLIC SOLAR SYSTEM WITH CURSOR LIGHT
const hero3DCanvas = document.getElementById('hero3DCanvas');
const letterTooltip = document.getElementById('letterTooltip');
let hero3DScene = null;

if (hero3DCanvas && typeof THREE !== 'undefined') {
    // Three.js setup with premium quality
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, hero3DCanvas.clientWidth / hero3DCanvas.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
        canvas: hero3DCanvas, 
        antialias: true, 
        alpha: true,
        powerPreference: 'high-performance'
    });
    
    renderer.setSize(hero3DCanvas.clientWidth, hero3DCanvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    camera.position.set(0, 0, 18);
    
    // Create METALLIC SOLAR SYSTEM
    const solarSystem = new THREE.Group();
    
    // Ultra-realistic metallic material
    const createMetallicMaterial = () => {
        return new THREE.MeshStandardMaterial({
            color: 0x1C2C33,
            metalness: 1.0,
            roughness: 0.1,
            emissive: 0x1C2C33,
            emissiveIntensity: 0.2,
            envMapIntensity: 2.0
        });
    };
    
    // Central metallic core sphere
    const coreGeometry = new THREE.IcosahedronGeometry(2.5, 2);
    const coreMaterial = createMetallicMaterial();
    const coreSphere = new THREE.Mesh(coreGeometry, coreMaterial);
    coreSphere.castShadow = true;
    coreSphere.receiveShadow = true;
    solarSystem.add(coreSphere);
    
    // Orbital rings (Saturn-like)
    const ringGroup = new THREE.Group();
    for (let i = 0; i < 3; i++) {
        const ringGeometry = new THREE.TorusGeometry(4 + i * 0.8, 0.08, 16, 100);
        const ringMaterial = new THREE.MeshStandardMaterial({
            color: 0x1C2C33,
            metalness: 0.95,
            roughness: 0.15,
            emissive: 0x1C2C33,
            emissiveIntensity: 0.3,
            side: THREE.DoubleSide
        });
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        ring.rotation.x = Math.PI / 2 + (i * 0.1);
        ring.rotation.y = i * 0.15;
        ring.castShadow = true;
        ringGroup.add(ring);
    }
    solarSystem.add(ringGroup);
    
    // Smaller orbiting spheres
    const orbitingSpheres = [];
    const orbitData = [
        { radius: 5, size: 0.4, speed: 1, angle: 0 },
        { radius: 6, size: 0.3, speed: -0.8, angle: Math.PI / 2 },
        { radius: 6.5, size: 0.35, speed: 1.2, angle: Math.PI },
        { radius: 5.5, size: 0.25, speed: -1.5, angle: Math.PI * 1.5 }
    ];
    
    orbitData.forEach(data => {
        const sphereGeom = new THREE.IcosahedronGeometry(data.size, 1);
        const sphereMat = new THREE.MeshStandardMaterial({
            color: 0x1C2C33,
            metalness: 1.0,
            roughness: 0.12,
            emissive: 0x1C2C33,
            emissiveIntensity: 0.4
        });
        const sphere = new THREE.Mesh(sphereGeom, sphereMat);
        sphere.castShadow = true;
        orbitingSpheres.push({ mesh: sphere, ...data });
        solarSystem.add(sphere);
    });
    
    // Interconnecting metallic beams
    const beamMaterial = new THREE.MeshStandardMaterial({
        color: 0x1C2C33,
        metalness: 0.9,
        roughness: 0.2,
        emissive: 0x1C2C33,
        emissiveIntensity: 0.25
    });
    
    const beams = [];
    for (let i = 0; i < 8; i++) {
        const beamGeom = new THREE.CylinderGeometry(0.05, 0.05, 3, 8);
        const beam = new THREE.Mesh(beamGeom, beamMaterial);
        const angle = (i / 8) * Math.PI * 2;
        beam.position.set(Math.cos(angle) * 2, Math.sin(angle) * 2, 0);
        beam.rotation.z = angle;
        solarSystem.add(beam);
        beams.push(beam);
    }
    
    // Solar flare particle system
    const particleCount = 200;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];
    
    for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 2.5 + Math.random() * 4;
        positions[i * 3] = Math.cos(angle) * radius;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
        positions[i * 3 + 2] = Math.sin(angle) * radius;
        velocities.push({
            angle: angle,
            radius: radius,
            speed: Math.random() * 0.02 + 0.01
        });
    }
    
    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
        color: 0x00D9FF,
        size: 0.12,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending
    });
    
    const particleSystem = new THREE.Points(particles, particleMaterial);
    solarSystem.add(particleSystem);
    
    scene.add(solarSystem);
    
    // FALLBACK LIGHTING (when cursor not over canvas)
    const ambientLight = new THREE.AmbientLight(0x3399cc, 0.6);
    scene.add(ambientLight);
    
    // Soft directional light from top
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
    directionalLight.position.set(0, 10, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    
    // Rim light for edge definition
    const rimLight = new THREE.DirectionalLight(0x00D9FF, 0.5);
    rimLight.position.set(0, -3, -8);
    scene.add(rimLight);
    
    // CURSOR DYNAMIC LIGHT SOURCE (main feature)
    const cursorLight = new THREE.PointLight(0xffffff, 2.5, 1000);
    cursorLight.position.set(0, 0, 10);
    cursorLight.castShadow = true;
    cursorLight.decay = 2;
    scene.add(cursorLight);
    
    // Accent cyan glow
    const accentLight = new THREE.PointLight(0x00D9FF, 1.2, 20);
    accentLight.position.set(0, 0, 5);
    scene.add(accentLight);
    
    // Cursor position tracking for light source
    let mouseX = 0;
    let mouseY = 0;
    let mouse3D = new THREE.Vector3();
    let isMouseOverCanvas = false;
    
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    
    function updateMousePosition(clientX, clientY) {
        const rect = hero3DCanvas.getBoundingClientRect();
        mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1;
        mouseX = mouse.x;
        mouseY = mouse.y;
        
        // Convert 2D mouse to 3D position for light
        mouse3D.x = mouseX * 10;
        mouse3D.y = mouseY * 10;
        mouse3D.z = 10;
    }
    
    hero3DCanvas.addEventListener('mousemove', (e) => {
        updateMousePosition(e.clientX, e.clientY);
        isMouseOverCanvas = true;
    });
    
    hero3DCanvas.addEventListener('mouseenter', () => {
        isMouseOverCanvas = true;
        hero3DCanvas.style.cursor = 'pointer';
    });
    
    hero3DCanvas.addEventListener('mouseleave', () => {
        isMouseOverCanvas = false;
        letterTooltip.classList.remove('visible');
    });
    
    // Touch support
    hero3DCanvas.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
            const touch = e.touches[0];
            updateMousePosition(touch.clientX, touch.clientY);
            isMouseOverCanvas = true;
        }
    });
    
    hero3DCanvas.addEventListener('touchmove', (e) => {
        if (e.touches.length === 1) {
            const touch = e.touches[0];
            updateMousePosition(touch.clientX, touch.clientY);
        }
    });
    
    hero3DCanvas.addEventListener('touchend', () => {
        isMouseOverCanvas = false;
    });
    
    // Animation state
    let time = 0;
    let breathingPhase = 0;
    hero3DScene = { solarSystem, coreSphere, orbitingSpheres, cursorLight, particleSystem, velocities };
    
    function animate() {
        time += 0.01;
        breathingPhase += 0.015;
        
        // UPDATE CURSOR LIGHT POSITION (main feature)
        if (isMouseOverCanvas) {
            cursorLight.position.lerp(mouse3D, 0.15);
            cursorLight.intensity = 3.0;
            accentLight.intensity = 1.5;
        } else {
            // Fade out cursor light when not hovering
            cursorLight.intensity *= 0.95;
            accentLight.intensity *= 0.95;
        }
        
        // Slow orbital rotation
        solarSystem.rotation.y = time * 0.2;
        solarSystem.rotation.x = Math.sin(time * 0.4) * 0.1;
        
        // Gentle floating motion
        solarSystem.position.y = Math.sin(time * 0.6) * 0.4;
        
        // Breathing animation (subtle scale pulse)
        const breathingScale = 1 + Math.sin(breathingPhase) * 0.03;
        solarSystem.scale.set(breathingScale, breathingScale, breathingScale);
        
        // Update core sphere glow based on cursor proximity
        const distanceToCursor = coreSphere.position.distanceTo(cursorLight.position);
        const glowIntensity = Math.max(0.2, 1.0 - (distanceToCursor / 20));
        coreSphere.material.emissiveIntensity = glowIntensity * 0.5;
        
        // Rotate orbital rings at different speeds
        ringGroup.children.forEach((ring, i) => {
            ring.rotation.z += (0.002 + i * 0.001);
            ring.material.emissiveIntensity = 0.3 + glowIntensity * 0.3;
        });
        
        // Animate orbiting spheres
        orbitingSpheres.forEach(orbit => {
            orbit.angle += orbit.speed * 0.01;
            orbit.mesh.position.x = Math.cos(orbit.angle) * orbit.radius;
            orbit.mesh.position.z = Math.sin(orbit.angle) * orbit.radius;
            orbit.mesh.position.y = Math.sin(orbit.angle * 0.5) * 2;
            orbit.mesh.rotation.y += 0.02;
            orbit.mesh.rotation.x += 0.01;
            
            // Glow based on cursor proximity
            const sphereDist = orbit.mesh.position.distanceTo(cursorLight.position);
            orbit.mesh.material.emissiveIntensity = Math.max(0.3, 1.0 - (sphereDist / 25));
        });
        
        // Animate beams
        beams.forEach((beam, i) => {
            beam.material.emissiveIntensity = 0.25 + Math.sin(time * 2 + i) * 0.15;
        });
        
        // Animate solar flare particles
        const positions = particleSystem.geometry.attributes.position.array;
        for (let i = 0; i < velocities.length; i++) {
            velocities[i].angle += velocities[i].speed;
            velocities[i].radius += Math.sin(time + i) * 0.01;
            
            if (velocities[i].radius > 8) velocities[i].radius = 2.5;
            
            positions[i * 3] = Math.cos(velocities[i].angle) * velocities[i].radius;
            positions[i * 3 + 1] += (Math.random() - 0.5) * 0.05;
            positions[i * 3 + 2] = Math.sin(velocities[i].angle) * velocities[i].radius;
        }
        particleSystem.geometry.attributes.position.needsUpdate = true;
        particleSystem.material.opacity = 0.5 + glowIntensity * 0.3;
        
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
    
    // Handle resize
    window.addEventListener('resize', () => {
        const width = hero3DCanvas.clientWidth;
        const height = hero3DCanvas.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    });
    
    animate();
}

// Project card interaction with 3D engine
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        if (hero3DScene && hero3DScene.orbitingSpheres) {
            hero3DScene.orbitingSpheres.forEach(orbit => {
                orbit.mesh.material.emissiveIntensity = 1.0;
            });
            
            setTimeout(() => {
                hero3DScene.orbitingSpheres.forEach(orbit => {
                    orbit.mesh.material.emissiveIntensity = 0.4;
                });
            }, 1500);
        }
    });
});

// About section - Small spinning 3D VKR engine
const aboutCanvas = document.getElementById('aboutCanvas');
if (aboutCanvas && typeof THREE !== 'undefined') {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({ canvas: aboutCanvas, antialias: true, alpha: true });
    
    renderer.setSize(150, 150);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.position.z = 4;
    
    const smallVKRGroup = new THREE.Group();
    const smallNodeGeo = new THREE.OctahedronGeometry(0.08, 0);
    
    const smallPositions = [
        [-0.8, -0.5, 0], [0, 0.2, 0.3], [0.8, -0.5, 0],
        [0, 0, 0], [0.5, -0.3, 0.2]
    ];
    
    smallPositions.forEach(pos => {
        const mat = new THREE.MeshStandardMaterial({
            color: 0x1C2C33,
            metalness: 0.9,
            roughness: 0.4,
            transparent: true,
            opacity: 0.5
        });
        const mesh = new THREE.Mesh(smallNodeGeo, mat);
        mesh.position.set(...pos);
        smallVKRGroup.add(mesh);
    });
    
    scene.add(smallVKRGroup);
    
    const ambLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambLight);
    
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
    dirLight.position.set(2, 2, 2);
    scene.add(dirLight);
    
    function animateAbout() {
        smallVKRGroup.rotation.y += 0.005;
        renderer.render(scene, camera);
        requestAnimationFrame(animateAbout);
    }
    
    animateAbout();
}

// Skills tabs functionality
const skillTabs = document.querySelectorAll('.skill-tab');
const skillCategories = document.querySelectorAll('.skill-category');

if (skillTabs.length > 0) {
    // Show first category by default
    if (skillCategories[0]) skillCategories[0].classList.add('active');
    
    skillTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.getAttribute('data-category');
            
            // Update active tab
            skillTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Update active category
            skillCategories.forEach(cat => {
                cat.classList.remove('active');
                if (cat.getAttribute('data-category') === category) {
                    cat.classList.add('active');
                }
            });
        });
    });
}

// Skills animation on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillItems = entry.target.querySelectorAll('.skill-item');
            skillItems.forEach(item => {
                const proficiency = item.getAttribute('data-proficiency');
                const fill = item.querySelector('.skill-fill');
                if (fill) {
                    setTimeout(() => {
                        fill.style.width = proficiency + '%';
                    }, 100);
                }
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const skillsSection = document.querySelector('.skills-section');
if (skillsSection) {
    skillObserver.observe(skillsSection);
}

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formMessage = document.getElementById('formMessage');
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            company: document.getElementById('company').value,
            message: document.getElementById('message').value
        };
        
        // Simulate form submission
        formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
        formMessage.classList.add('success');
        
        // Reset form
        contactForm.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.classList.remove('success');
        }, 5000);
    });
}

// Scroll-based 3D engine responsiveness
let lastSection = '';
window.addEventListener('scroll', () => {
    const scrollPos = window.pageYOffset;
    const sections = ['home', 'vision', 'about', 'skills', 'projects', 'education', 'contact'];
    
    let currentSection = 'home';
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section && scrollPos >= section.offsetTop - 200) {
            currentSection = sectionId;
        }
    });
    
    if (currentSection !== lastSection && hero3DScene) {
        lastSection = currentSection;
        
        // Pulse the solar system on section change
        if (hero3DScene.coreSphere) {
            hero3DScene.coreSphere.material.emissiveIntensity = 0.8;
            setTimeout(() => {
                if (hero3DScene.coreSphere) {
                    hero3DScene.coreSphere.material.emissiveIntensity = 0.3;
                }
            }, 800);
        }
    }
}, { passive: true });

// Concept nodes interaction
const conceptNodes = document.querySelectorAll('.concept-node');
conceptNodes.forEach(node => {
    node.addEventListener('click', () => {
        const concept = node.getAttribute('data-concept');
        const sectionMap = {
            'vision': 'vision',
            'knowledge': 'skills',
            'realms': 'projects'
        };
        
        const targetSection = document.getElementById(sectionMap[concept]);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
    
    node.addEventListener('mouseenter', () => {
        const core = node.querySelector('.node-core');
        if (core) {
            core.style.transform = 'scale(1.5)';
            core.style.boxShadow = '0 0 25px rgba(0, 217, 255, 1)';
        }
    });
    
    node.addEventListener('mouseleave', () => {
        const core = node.querySelector('.node-core');
        if (core) {
            core.style.transform = 'scale(1)';
            core.style.boxShadow = '';
        }
    });
});

// Add glass reflection effect to hero content on load
setInterval(() => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent && !heroContent.dataset.glassInit) {
        heroContent.dataset.glassInit = 'true';
        updateGlassReflections({ clientX: cursorX, clientY: cursorY });
    }
}, 500);

// Scroll reveal animation for elements
const revealElements = document.querySelectorAll('.project-card, .cert-card, .highlight-card');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(el);
});

// Parallax effect on scroll (subtle)
let lastScrollY = 0;
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-3d');
    
    parallaxElements.forEach(el => {
        const speed = 0.3;
        const translateY = Math.min(scrolled * speed, 200);
        el.style.transform = `translateY(${translateY}px)`;
    });
    
    lastScrollY = scrolled;
});

// Explore My Work button scroll
const viewWorkBtn = document.querySelector('.btn-primary');
if (viewWorkBtn && viewWorkBtn.getAttribute('href') === '#projects') {
    viewWorkBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Initial animation for hero section
window.addEventListener('load', () => {
    const heroElements = document.querySelectorAll('.hero-content .fade-in');
    heroElements.forEach((el, idx) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, idx * 150);
    });
    
    // Initialize glass effects after load
    setTimeout(() => {
        updateGlassReflections({ clientX: window.innerWidth/2, clientY: window.innerHeight/2 });
    }, 500);
});

// Ripple effect on button click (glass vibration)
const buttons = document.querySelectorAll('.btn-primary');
buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.width = '100%';
        ripple.style.height = '100%';
        ripple.style.top = '0';
        ripple.style.left = '0';
        ripple.style.background = 'radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple-effect 0.6s ease-out';
        ripple.style.borderRadius = '6px';
        ripple.style.pointerEvents = 'none';
        ripple.style.zIndex = '0';
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// CSS animation for ripple
const style = document.createElement('style');
style.textContent = `
@keyframes ripple-effect {
    to {
        transform: scale(2);
        opacity: 0;
    }
}
`;
document.head.appendChild(style);