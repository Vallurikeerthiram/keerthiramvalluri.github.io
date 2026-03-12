// Advanced 3D Portfolio System - Revolutionary Implementation (Fixed Version)
// Global Variables and Scene Management
let scenes = {
    hero: { scene: null, camera: null, renderer: null, objects: [] },
    about: { scene: null, camera: null, renderer: null, objects: [] },
    skills: { scene: null, camera: null, renderer: null, objects: [] },
    projects: { scene: null, camera: null, renderer: null, objects: [] },
    certs: { scene: null, camera: null, renderer: null, objects: [] },
    contact: { scene: null, camera: null, renderer: null, objects: [] }
};

let isLoaded = false;
let mouse = { x: 0, y: 0 };
let scrollProgress = 0;
let activeSection = 'home';

// Initialize Revolutionary Portfolio System
document.addEventListener('DOMContentLoaded', function() {
    initializeQuantumSystems();
});

// Quantum Systems Initialization
async function initializeQuantumSystems() {
    // Register GSAP Plugins
    gsap.registerPlugin(ScrollTrigger, TextPlugin);
    
    // Initialize loading sequence
    await initializeLoadingSequence();
    
    // Fix all external links immediately
    fixAllExternalLinks();
    
    // Initialize all 3D environments
    await initialize3DUniverses();
    
    // Initialize interaction systems
    initializeInteractionSystems();
    
    // Initialize navigation quantum matrix
    initializeNavigationMatrix();
    
    // Initialize communication protocols
    initializeCommunicationProtocols();
    
    // Initialize performance optimization systems
    initializePerformanceOptimization();
    
    // Start the quantum experience
    startQuantumExperience();
}

// Fix All External Links
function fixAllExternalLinks() {
    // Fix GitHub and repository links
    const repoLinks = [
        { selector: 'a[href*="Probability-Based-Crypto"]', url: 'https://github.com/Vallurikeerthiram/Probability-Based-Crypto-For-Scalping-and-Compounding' },
        { selector: 'a[href*="teacher-course-allocation"]', url: 'https://github.com/Vallurikeerthiram/teacher-course-allocation' },
        { selector: 'a[href*="Weight-Aware-Lift-Management"]', url: 'https://github.com/Vallurikeerthiram/Weight-Aware-Lift-Management' },
        { selector: 'a[href*="web-blr.amrita.edu"]', url: 'http://web-blr.amrita.edu/track/pages/' }
    ];

    repoLinks.forEach(link => {
        const elements = document.querySelectorAll(link.selector);
        elements.forEach(el => {
            el.setAttribute('href', link.url);
            el.setAttribute('target', '_blank');
            el.setAttribute('rel', 'noopener noreferrer');
        });
    });

    // Fix certificate verification links
    const certLinks = [
        { selector: 'a[href*="cloudskillsboost.google"]', url: 'https://www.cloudskillsboost.google/public_profiles/e4344aa9-c665-4e54-8412-153d0fbf3aac/badges/12538813?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share' },
        { selector: 'a[href*="linkedin.com/learning/certificates/6c22df1e"]', url: 'https://www.linkedin.com/learning/certificates/6c22df1ec90364652f3ff5e3aaacbf889196fac08c5d03a9b495b575aa3f54f4' },
        { selector: 'a[href*="linkedin.com/learning/certificates/8c3149fe"]', url: 'https://www.linkedin.com/learning/certificates/8c3149fe7969152b2511388390c4370bb560802a4e0a3c1ae334bca1e58dfd33' },
        { selector: 'a[href*="coursera.org/account/accomplishments"]', url: 'https://www.coursera.org/account/accomplishments/verify/SX36EVGM85BS' }
    ];

    certLinks.forEach(link => {
        const elements = document.querySelectorAll(link.selector);
        elements.forEach(el => {
            el.setAttribute('href', link.url);
            el.setAttribute('target', '_blank');
            el.setAttribute('rel', 'noopener noreferrer');
        });
    });

    // Fix contact links
    const contactLinks = [
        { text: 'GitHub Repository', url: 'https://github.com/Vallurikeerthiram' },
        { text: 'LinkedIn Network', url: 'https://www.linkedin.com/in/valluri-keerthi-ram-503576216' }
    ];

    contactLinks.forEach(linkData => {
        const elements = document.querySelectorAll('.channel-link');
        elements.forEach(el => {
            const nameEl = el.querySelector('.channel-name');
            if (nameEl && nameEl.textContent.includes(linkData.text)) {
                el.style.cursor = 'pointer';
                el.onclick = () => window.open(linkData.url, '_blank', 'noopener,noreferrer');
            }
        });
    });

    // Fix all module action buttons
    setTimeout(() => {
        document.querySelectorAll('.btn-module').forEach(btn => {
            const href = btn.getAttribute('href');
            if (href && href.startsWith('http')) {
                btn.onclick = (e) => {
                    e.preventDefault();
                    window.open(href, '_blank', 'noopener,noreferrer');
                };
            }
        });

        document.querySelectorAll('.verify-btn').forEach(btn => {
            const href = btn.getAttribute('href');
            if (href && href.startsWith('http')) {
                btn.onclick = (e) => {
                    e.preventDefault();
                    window.open(href, '_blank', 'noopener,noreferrer');
                };
            }
        });
    }, 1000);
}

// Epic Loading Sequence
async function initializeLoadingSequence() {
    const loadingScreen = document.getElementById('loading-screen');
    const progressBar = document.querySelector('.progress-bar');
    const statusText = document.querySelector('.loader-status');
    
    const loadingStates = [
        'Initializing quantum matrices...',
        'Loading 3D universes...',
        'Calibrating particle systems...',
        'Establishing neural networks...',
        'Synchronizing timeline data...',
        'Activating holographic displays...',
        'Systems online. Welcome, Commander.'
    ];
    
    for (let i = 0; i < loadingStates.length; i++) {
        statusText.textContent = loadingStates[i];
        gsap.to(progressBar, {
            width: `${((i + 1) / loadingStates.length) * 100}%`,
            duration: 0.5,
            ease: "power2.out"
        });
        await new Promise(resolve => setTimeout(resolve, 600));
    }
    
    // Hide loading screen with epic transition
    await new Promise(resolve => setTimeout(resolve, 800));
    gsap.to(loadingScreen, {
        opacity: 0,
        scale: 1.1,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
            loadingScreen.classList.add('hidden');
            resolve();
        }
    });
    
    isLoaded = true;
}

// Initialize 3D Universes
async function initialize3DUniverses() {
    // Hero Command Center Universe
    initializeHeroUniverse();
    
    // Personal Data Planet
    initializeAboutPlanet();
    
    // Technology Nebula
    initializeSkillsNebula();
    
    // Innovation Space Station
    initializeProjectsStation();
    
    // Achievement Constellation
    initializeCertsConstellation();
    
    // Communication Array
    initializeContactArray();
}

// Hero Command Center 3D Universe
function initializeHeroUniverse() {
    const container = document.getElementById('hero-3d');
    if (!container) return;

    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Advanced Particle System
    const particleCount = 2000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 100;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
        
        // Color variation for space effect
        const colorChoice = Math.random();
        if (colorChoice < 0.33) {
            colors[i * 3] = 0.2; colors[i * 3 + 1] = 0.65; colors[i * 3 + 2] = 0.32; // Green
        } else if (colorChoice < 0.66) {
            colors[i * 3] = 0.18; colors[i * 3 + 1] = 0.83; colors[i * 3 + 2] = 0.75; // Cyan
        } else {
            colors[i * 3] = 0.23; colors[i * 3 + 1] = 0.51; colors[i * 3 + 2] = 0.96; // Blue
        }
        
        sizes[i] = Math.random() * 3 + 1;
    }
    
    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particles.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    const particleMaterial = new THREE.PointsMaterial({
        size: 2,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });
    
    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Floating Geometric Structures
    const geometries = [
        new THREE.BoxGeometry(2, 2, 2),
        new THREE.SphereGeometry(1.5, 32, 32),
        new THREE.ConeGeometry(1, 3, 8),
        new THREE.TorusGeometry(1.5, 0.5, 16, 100),
        new THREE.OctahedronGeometry(1.5),
        new THREE.TetrahedronGeometry(1.5)
    ];
    
    const materials = [
        new THREE.MeshPhongMaterial({ 
            color: 0x32a852, 
            wireframe: true,
            transparent: true,
            opacity: 0.7,
            emissive: 0x113311
        }),
        new THREE.MeshPhongMaterial({ 
            color: 0x2dd4bf, 
            wireframe: true,
            transparent: true,
            opacity: 0.6,
            emissive: 0x0a3d3c
        }),
        new THREE.MeshPhongMaterial({ 
            color: 0x3b82f6, 
            wireframe: true,
            transparent: true,
            opacity: 0.8,
            emissive: 0x1a2f5c
        })
    ];

    const floatingObjects = [];
    for (let i = 0; i < 20; i++) {
        const geometry = geometries[Math.floor(Math.random() * geometries.length)];
        const material = materials[Math.floor(Math.random() * materials.length)];
        const mesh = new THREE.Mesh(geometry, material);
        
        mesh.position.set(
            (Math.random() - 0.5) * 60,
            (Math.random() - 0.5) * 40,
            (Math.random() - 0.5) * 40
        );
        
        mesh.userData = {
            originalPosition: mesh.position.clone(),
            rotationSpeed: {
                x: (Math.random() - 0.5) * 0.02,
                y: (Math.random() - 0.5) * 0.02,
                z: (Math.random() - 0.5) * 0.02
            },
            floatSpeed: Math.random() * 0.5 + 0.5,
            floatAmplitude: Math.random() * 2 + 1
        };
        
        scene.add(mesh);
        floatingObjects.push(mesh);
    }

    // Advanced Lighting System
    const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0x32a852, 0.8);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    
    const pointLight1 = new THREE.PointLight(0x2dd4bf, 1, 100);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);
    
    const pointLight2 = new THREE.PointLight(0x3b82f6, 1, 100);
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);

    camera.position.z = 25;

    // Store in scenes object
    scenes.hero = { scene, camera, renderer, objects: { particleSystem, floatingObjects, lights: [pointLight1, pointLight2] } };

    // Animation Loop
    function animateHero() {
        requestAnimationFrame(animateHero);
        
        const time = Date.now() * 0.001;
        
        // Animate particles
        const positions = particleSystem.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
            positions[i + 1] += Math.sin(time + positions[i] * 0.01) * 0.01;
        }
        particleSystem.geometry.attributes.position.needsUpdate = true;
        
        // Animate floating objects more visibly
        floatingObjects.forEach((obj, index) => {
            obj.rotation.x += obj.userData.rotationSpeed.x;
            obj.rotation.y += obj.userData.rotationSpeed.y;
            obj.rotation.z += obj.userData.rotationSpeed.z;
            
            obj.position.y = obj.userData.originalPosition.y + 
                Math.sin(time * obj.userData.floatSpeed + index) * obj.userData.floatAmplitude;
            obj.position.x = obj.userData.originalPosition.x + 
                Math.cos(time * obj.userData.floatSpeed * 0.7 + index) * (obj.userData.floatAmplitude * 0.5);
        });
        
        // Dynamic lighting
        scenes.hero.objects.lights[0].position.x = Math.sin(time * 0.5) * 15;
        scenes.hero.objects.lights[0].position.z = Math.cos(time * 0.5) * 15;
        scenes.hero.objects.lights[1].position.x = Math.cos(time * 0.3) * 15;
        scenes.hero.objects.lights[1].position.z = Math.sin(time * 0.3) * 15;
        
        // Mouse interaction
        camera.position.x += (mouse.x * 3 - camera.position.x) * 0.02;
        camera.position.y += (-mouse.y * 2 - camera.position.y) * 0.02;
        camera.lookAt(scene.position);
        
        renderer.render(scene, camera);
    }
    animateHero();
}

// About Planet 3D Environment
function initializeAboutPlanet() {
    const container = document.getElementById('about-3d');
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Planet Core
    const planetGeometry = new THREE.SphereGeometry(3, 64, 64);
    const planetMaterial = new THREE.MeshPhongMaterial({
        map: createPlanetTexture(),
        transparent: true,
        opacity: 0.8
    });
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);
    scene.add(planet);

    // Floating Data Fragments
    const dataFragments = [];
    for (let i = 0; i < 25; i++) {
        const fragmentGeometry = new THREE.PlaneGeometry(1.2, 0.8);
        const fragmentMaterial = new THREE.MeshBasicMaterial({
            color: 0x32a852,
            transparent: true,
            opacity: 0.7,
            side: THREE.DoubleSide
        });
        const fragment = new THREE.Mesh(fragmentGeometry, fragmentMaterial);
        
        const radius = 5 + Math.random() * 4;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        
        fragment.position.set(
            radius * Math.sin(phi) * Math.cos(theta),
            radius * Math.cos(phi),
            radius * Math.sin(phi) * Math.sin(theta)
        );
        
        fragment.userData = {
            orbitSpeed: Math.random() * 0.01 + 0.005,
            originalRadius: radius,
            theta: theta,
            phi: phi
        };
        
        scene.add(fragment);
        dataFragments.push(fragment);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0x32a852, 2, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    camera.position.set(0, 0, 15);

    scenes.about = { scene, camera, renderer, objects: { planet, dataFragments } };

    function animateAbout() {
        requestAnimationFrame(animateAbout);
        
        const time = Date.now() * 0.001;
        
        // Rotate planet
        planet.rotation.y += 0.005;
        
        // Orbit data fragments
        dataFragments.forEach((fragment, index) => {
            fragment.userData.theta += fragment.userData.orbitSpeed;
            const radius = fragment.userData.originalRadius + Math.sin(time + index) * 0.5;
            
            fragment.position.set(
                radius * Math.sin(fragment.userData.phi) * Math.cos(fragment.userData.theta),
                radius * Math.cos(fragment.userData.phi),
                radius * Math.sin(fragment.userData.phi) * Math.sin(fragment.userData.theta)
            );
            
            fragment.lookAt(camera.position);
            fragment.rotation.z += 0.01;
        });
        
        renderer.render(scene, camera);
    }
    animateAbout();
}

// Skills Nebula 3D Environment (Enhanced)
function initializeSkillsNebula() {
    const container = document.getElementById('skills-3d');
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Skill Orbs with different technologies
    const skillData = [
        { name: 'Python', color: 0x3776ab, position: [5, 2, 0] },
        { name: 'JavaScript', color: 0xf7df1e, position: [-5, 2, 0] },
        { name: 'React', color: 0x61dafb, position: [0, 5, 2] },
        { name: 'MySQL', color: 0x00758f, position: [4, -2, 1] },
        { name: 'Git', color: 0xf05032, position: [-4, -2, -1] },
        { name: 'PHP', color: 0x777bb4, position: [0, -5, 0] },
        { name: 'CSS', color: 0x1572b6, position: [3, 0, -4] },
        { name: 'HTML5', color: 0xe34f26, position: [-3, 0, 4] },
        { name: 'PyQt', color: 0x41cd52, position: [2, 3, -2] },
        { name: 'Plotly', color: 0xff6692, position: [-2, -3, 2] }
    ];

    const skillOrbs = [];
    skillData.forEach((skill, index) => {
        const geometry = new THREE.SphereGeometry(0.7, 32, 32);
        const material = new THREE.MeshPhongMaterial({
            color: skill.color,
            transparent: true,
            opacity: 0.8,
            emissive: skill.color,
            emissiveIntensity: 0.4
        });
        const orb = new THREE.Mesh(geometry, material);
        
        orb.position.set(...skill.position);
        orb.userData = {
            originalPosition: new THREE.Vector3(...skill.position),
            skill: skill.name,
            orbitRadius: Math.random() * 2 + 3,
            orbitSpeed: Math.random() * 0.02 + 0.01,
            angle: Math.random() * Math.PI * 2,
            pulseSpeed: Math.random() * 0.02 + 0.01
        };
        
        scene.add(orb);
        skillOrbs.push(orb);
        
        // Add larger, more visible glow effect
        const glowGeometry = new THREE.SphereGeometry(1.2, 16, 16);
        const glowMaterial = new THREE.MeshBasicMaterial({
            color: skill.color,
            transparent: true,
            opacity: 0.3,
            blending: THREE.AdditiveBlending
        });
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        orb.add(glow);
    });

    // Enhanced Nebula Background Particles
    const nebulaGeometry = new THREE.BufferGeometry();
    const nebulaVertices = [];
    const nebulaColors = [];
    
    for (let i = 0; i < 1500; i++) {
        nebulaVertices.push(
            (Math.random() - 0.5) * 80,
            (Math.random() - 0.5) * 60,
            (Math.random() - 0.5) * 60
        );
        
        const color = new THREE.Color();
        color.setHSL(Math.random() * 0.3 + 0.5, 1, 0.6);
        nebulaColors.push(color.r, color.g, color.b);
    }
    
    nebulaGeometry.setAttribute('position', new THREE.Float32BufferAttribute(nebulaVertices, 3));
    nebulaGeometry.setAttribute('color', new THREE.Float32BufferAttribute(nebulaColors, 3));
    
    const nebulaMaterial = new THREE.PointsMaterial({
        size: 1,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });
    
    const nebula = new THREE.Points(nebulaGeometry, nebulaMaterial);
    scene.add(nebula);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0xffffff, 1.5, 100);
    pointLight.position.set(0, 0, 15);
    scene.add(pointLight);

    camera.position.set(0, 0, 20);

    scenes.skills = { scene, camera, renderer, objects: { skillOrbs, nebula } };

    function animateSkills() {
        requestAnimationFrame(animateSkills);
        
        const time = Date.now() * 0.001;
        
        // Animate skill orbs with more dynamic movement
        skillOrbs.forEach((orb, index) => {
            orb.userData.angle += orb.userData.orbitSpeed;
            
            orb.position.x = orb.userData.originalPosition.x + Math.cos(orb.userData.angle) * 1.5;
            orb.position.z = orb.userData.originalPosition.z + Math.sin(orb.userData.angle) * 1.5;
            orb.position.y = orb.userData.originalPosition.y + Math.sin(time * orb.userData.pulseSpeed + index) * 1;
            
            orb.rotation.x += 0.015;
            orb.rotation.y += 0.01;
            
            // Pulse effect
            const scale = 1 + Math.sin(time * orb.userData.pulseSpeed * 2 + index) * 0.1;
            orb.scale.setScalar(scale);
        });
        
        // Animate nebula
        nebula.rotation.y += 0.002;
        nebula.rotation.x += 0.001;
        
        // Dynamic camera movement
        camera.position.x = Math.sin(time * 0.2) * 8;
        camera.position.y = Math.cos(time * 0.15) * 3;
        camera.lookAt(scene.position);
        
        renderer.render(scene, camera);
    }
    animateSkills();
}

// Projects Space Station 3D Environment (Enhanced)
function initializeProjectsStation() {
    const container = document.getElementById('projects-3d');
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Space Station Modules
    const stationModules = [];
    const modulePositions = [
        [0, 0, 0],     // Central hub
        [10, 0, 0],    // Module 1
        [-10, 0, 0],   // Module 2
        [0, 10, 0],    // Module 3
        [0, -10, 0],   // Module 4
        [7, 7, 0],     // Module 5
        [-7, -7, 0]    // Module 6
    ];

    modulePositions.forEach((pos, index) => {
        const geometry = index === 0 ? 
            new THREE.SphereGeometry(3, 32, 32) : 
            new THREE.BoxGeometry(4, 2, 2);
        
        const material = new THREE.MeshPhongMaterial({
            color: index === 0 ? 0x4caf50 : 0x2196f3,
            transparent: true,
            opacity: 0.8,
            wireframe: true,
            emissive: index === 0 ? 0x1a5a1a : 0x0d2f5f,
            emissiveIntensity: 0.3
        });
        
        const module = new THREE.Mesh(geometry, material);
        module.position.set(...pos);
        
        if (index > 0) {
            module.userData = {
                rotationSpeed: Math.random() * 0.02 + 0.005,
                originalPosition: new THREE.Vector3(...pos),
                pulseSpeed: Math.random() * 0.01 + 0.005
            };
        }
        
        scene.add(module);
        stationModules.push(module);
        
        // Add connection beams with better visibility
        if (index > 0) {
            const distance = Math.sqrt(pos[0]*pos[0] + pos[1]*pos[1] + pos[2]*pos[2]);
            const beamGeometry = new THREE.CylinderGeometry(0.15, 0.15, distance);
            const beamMaterial = new THREE.MeshBasicMaterial({
                color: 0x00ff66,
                transparent: true,
                opacity: 0.6,
                emissive: 0x00ff66,
                emissiveIntensity: 0.2
            });
            const beam = new THREE.Mesh(beamGeometry, beamMaterial);
            
            beam.position.set(pos[0]/2, pos[1]/2, pos[2]/2);
            beam.lookAt(new THREE.Vector3(...pos));
            beam.rotateX(Math.PI / 2);
            
            scene.add(beam);
        }
    });

    // Floating Project Displays with more visibility
    const projectDisplays = [];
    for (let i = 0; i < 6; i++) {
        const displayGeometry = new THREE.PlaneGeometry(3, 2);
        const displayMaterial = new THREE.MeshBasicMaterial({
            color: 0x00ff88,
            transparent: true,
            opacity: 0.8,
            side: THREE.DoubleSide,
            emissive: 0x006644,
            emissiveIntensity: 0.3
        });
        const display = new THREE.Mesh(displayGeometry, displayMaterial);
        
        const angle = (i / 6) * Math.PI * 2;
        display.position.set(
            Math.cos(angle) * 15,
            Math.sin(i * 0.7) * 4,
            Math.sin(angle) * 15
        );
        
        display.userData = {
            orbitAngle: angle,
            orbitSpeed: 0.005,
            floatSpeed: 0.02,
            originalY: Math.sin(i * 0.7) * 4
        };
        
        scene.add(display);
        projectDisplays.push(display);
    }

    // Enhanced Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);
    
    const spotLight = new THREE.SpotLight(0x4caf50, 3);
    spotLight.position.set(0, 25, 15);
    spotLight.target.position.set(0, 0, 0);
    scene.add(spotLight);
    scene.add(spotLight.target);

    const pointLight = new THREE.PointLight(0x2196f3, 2, 50);
    pointLight.position.set(15, 0, 15);
    scene.add(pointLight);

    camera.position.set(20, 15, 20);
    camera.lookAt(0, 0, 0);

    scenes.projects = { scene, camera, renderer, objects: { stationModules, projectDisplays } };

    function animateProjects() {
        requestAnimationFrame(animateProjects);
        
        const time = Date.now() * 0.001;
        
        // Animate station modules
        stationModules.forEach((module, index) => {
            if (index > 0 && module.userData) {
                module.rotation.y += module.userData.rotationSpeed;
                module.rotation.z += module.userData.rotationSpeed * 0.5;
                
                // Pulse effect
                const scale = 1 + Math.sin(time * module.userData.pulseSpeed + index) * 0.05;
                module.scale.setScalar(scale);
            } else if (index === 0) {
                module.rotation.y += 0.01;
            }
        });
        
        // Animate project displays
        projectDisplays.forEach((display, index) => {
            display.userData.orbitAngle += display.userData.orbitSpeed;
            
            display.position.x = Math.cos(display.userData.orbitAngle) * 15;
            display.position.z = Math.sin(display.userData.orbitAngle) * 15;
            display.position.y = display.userData.originalY + 
                Math.sin(time * display.userData.floatSpeed + index) * 2;
            
            display.lookAt(camera.position);
            display.rotation.z += 0.005;
        });
        
        // Dynamic camera orbit
        camera.position.x = Math.cos(time * 0.08) * 25;
        camera.position.z = Math.sin(time * 0.08) * 25;
        camera.position.y = 15 + Math.sin(time * 0.05) * 5;
        camera.lookAt(0, 0, 0);
        
        renderer.render(scene, camera);
    }
    animateProjects();
}

// Certifications Constellation 3D Environment (Enhanced)
function initializeCertsConstellation() {
    const container = document.getElementById('certs-3d');
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Certification Stars
    const certStars = [];
    const certPositions = [
        [0, 0, 0],
        [6, 4, 3],
        [-5, -3, 4],
        [4, -5, -3],
        [-3, 5, -2]
    ];

    certPositions.forEach((pos, index) => {
        // Main star
        const starGeometry = new THREE.SphereGeometry(1, 20, 20);
        const starMaterial = new THREE.MeshPhongMaterial({
            color: 0xff9800,
            transparent: true,
            opacity: 0.9,
            emissive: 0xff9800,
            emissiveIntensity: 0.6
        });
        const star = new THREE.Mesh(starGeometry, starMaterial);
        star.position.set(...pos);
        
        // Outer glow - more visible
        const glowGeometry = new THREE.SphereGeometry(1.5, 16, 16);
        const glowMaterial = new THREE.MeshBasicMaterial({
            color: 0xff9800,
            transparent: true,
            opacity: 0.4,
            blending: THREE.AdditiveBlending
        });
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        star.add(glow);
        
        // Connection beams to other stars
        if (index > 0) {
            const beamGeometry = new THREE.BufferGeometry();
            const points = [
                new THREE.Vector3(0, 0, 0),
                new THREE.Vector3(...pos)
            ];
            beamGeometry.setFromPoints(points);
            
            const beamMaterial = new THREE.LineBasicMaterial({
                color: 0xff9800,
                transparent: true,
                opacity: 0.6
            });
            const beam = new THREE.Line(beamGeometry, beamMaterial);
            scene.add(beam);
        }
        
        star.userData = {
            originalPosition: new THREE.Vector3(...pos),
            pulseSpeed: Math.random() * 0.02 + 0.01,
            rotationSpeed: Math.random() * 0.02 + 0.005,
            orbitSpeed: Math.random() * 0.005 + 0.002
        };
        
        scene.add(star);
        certStars.push(star);
    });

    // Floating Achievement Badges with more visibility
    const achievements = [];
    for (let i = 0; i < 8; i++) {
        const badgeGeometry = new THREE.RingGeometry(0.8, 1.2, 8);
        const badgeMaterial = new THREE.MeshBasicMaterial({
            color: 0xffc107,
            transparent: true,
            opacity: 0.8,
            side: THREE.DoubleSide,
            emissive: 0xffc107,
            emissiveIntensity: 0.3
        });
        const badge = new THREE.Mesh(badgeGeometry, badgeMaterial);
        
        const radius = 10 + Math.random() * 5;
        const angle = (i / 8) * Math.PI * 2;
        badge.position.set(
            Math.cos(angle) * radius,
            (Math.random() - 0.5) * 8,
            Math.sin(angle) * radius
        );
        
        badge.userData = {
            orbitAngle: angle,
            orbitRadius: radius,
            orbitSpeed: Math.random() * 0.008 + 0.003,
            rotationSpeed: Math.random() * 0.02 + 0.01
        };
        
        scene.add(badge);
        achievements.push(badge);
    }

    // Enhanced starfield background
    const starfieldGeometry = new THREE.BufferGeometry();
    const starfieldVertices = [];
    const starfieldColors = [];
    
    for (let i = 0; i < 800; i++) {
        starfieldVertices.push(
            (Math.random() - 0.5) * 200,
            (Math.random() - 0.5) * 150,
            (Math.random() - 0.5) * 150
        );
        
        const intensity = Math.random();
        starfieldColors.push(intensity, intensity * 0.8, 0.2);
    }
    
    starfieldGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starfieldVertices, 3));
    starfieldGeometry.setAttribute('color', new THREE.Float32BufferAttribute(starfieldColors, 3));
    
    const starfieldMaterial = new THREE.PointsMaterial({
        size: 2,
        vertexColors: true,
        transparent: true,
        opacity: 0.9
    });
    
    const starfield = new THREE.Points(starfieldGeometry, starfieldMaterial);
    scene.add(starfield);

    // Enhanced Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.7);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0xff9800, 3, 80);
    pointLight.position.set(0, 0, 15);
    scene.add(pointLight);

    camera.position.set(0, 0, 20);

    scenes.certs = { scene, camera, renderer, objects: { certStars, achievements, starfield } };

    function animateCerts() {
        requestAnimationFrame(animateCerts);
        
        const time = Date.now() * 0.001;
        
        // Animate certification stars
        certStars.forEach((star, index) => {
            star.rotation.y += star.userData.rotationSpeed;
            star.rotation.x += star.userData.rotationSpeed * 0.5;
            
            const scale = 1 + Math.sin(time * star.userData.pulseSpeed + index) * 0.15;
            star.scale.setScalar(scale);
            
            // Add subtle orbital movement
            const orbitOffset = Math.sin(time * star.userData.orbitSpeed + index) * 0.5;
            star.position.x = star.userData.originalPosition.x + orbitOffset;
        });
        
        // Animate achievement badges
        achievements.forEach((badge, index) => {
            badge.userData.orbitAngle += badge.userData.orbitSpeed;
            
            badge.position.x = Math.cos(badge.userData.orbitAngle) * badge.userData.orbitRadius;
            badge.position.z = Math.sin(badge.userData.orbitAngle) * badge.userData.orbitRadius;
            
            badge.rotation.z += badge.userData.rotationSpeed;
            badge.rotation.y += badge.userData.rotationSpeed * 0.5;
        });
        
        // Animate starfield
        starfield.rotation.y += 0.0008;
        starfield.rotation.x += 0.0003;
        
        // Dynamic camera movement
        camera.position.x = Math.sin(time * 0.1) * 3;
        camera.position.y = Math.cos(time * 0.08) * 2;
        camera.lookAt(scene.position);
        
        renderer.render(scene, camera);
    }
    animateCerts();
}

// Contact Array 3D Environment (Enhanced)
function initializeContactArray() {
    const container = document.getElementById('contact-3d');
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Communication Satellites - more visible
    const satellites = [];
    const satelliteCount = 6;
    
    for (let i = 0; i < satelliteCount; i++) {
        const satelliteGroup = new THREE.Group();
        
        // Main body
        const bodyGeometry = new THREE.BoxGeometry(1.5, 0.8, 2.5);
        const bodyMaterial = new THREE.MeshPhongMaterial({
            color: 0x3b82f6,
            transparent: true,
            opacity: 0.9,
            emissive: 0x1e3a8a,
            emissiveIntensity: 0.3
        });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        
        // Solar panels
        const panelGeometry = new THREE.PlaneGeometry(4, 1.5);
        const panelMaterial = new THREE.MeshBasicMaterial({
            color: 0x2dd4bf,
            transparent: true,
            opacity: 0.8,
            side: THREE.DoubleSide,
            emissive: 0x0f766e,
            emissiveIntensity: 0.2
        });
        const panel1 = new THREE.Mesh(panelGeometry, panelMaterial);
        const panel2 = new THREE.Mesh(panelGeometry, panelMaterial);
        
        panel1.position.x = -2.5;
        panel2.position.x = 2.5;
        
        satelliteGroup.add(body, panel1, panel2);
        
        // Positioning
        const angle = (i / satelliteCount) * Math.PI * 2;
        const radius = 12;
        satelliteGroup.position.set(
            Math.cos(angle) * radius,
            (Math.random() - 0.5) * 6,
            Math.sin(angle) * radius
        );
        
        satelliteGroup.userData = {
            orbitAngle: angle,
            orbitSpeed: 0.008,
            rotationSpeed: 0.02,
            originalY: satelliteGroup.position.y
        };
        
        scene.add(satelliteGroup);
        satellites.push(satelliteGroup);
    }

    // Communication Beams - more visible
    const beams = [];
    for (let i = 0; i < satellites.length; i++) {
        const beamGeometry = new THREE.BufferGeometry();
        const points = [
            new THREE.Vector3(0, 0, 0),
            satellites[i].position.clone()
        ];
        beamGeometry.setFromPoints(points);
        
        const beamMaterial = new THREE.LineBasicMaterial({
            color: 0x2dd4bf,
            transparent: true,
            opacity: 0.8
        });
        const beam = new THREE.Line(beamGeometry, beamMaterial);
        
        scene.add(beam);
        beams.push(beam);
    }

    // Central Communication Hub - enhanced
    const hubGeometry = new THREE.SphereGeometry(2.5, 32, 32);
    const hubMaterial = new THREE.MeshPhongMaterial({
        color: 0x2dd4bf,
        transparent: true,
        opacity: 0.8,
        wireframe: true,
        emissive: 0x0f766e,
        emissiveIntensity: 0.4
    });
    const hub = new THREE.Mesh(hubGeometry, hubMaterial);
    scene.add(hub);

    // Signal Particles - enhanced
    const signalGeometry = new THREE.BufferGeometry();
    const signalVertices = [];
    const signalColors = [];
    
    for (let i = 0; i < 400; i++) {
        signalVertices.push(
            (Math.random() - 0.5) * 50,
            (Math.random() - 0.5) * 40,
            (Math.random() - 0.5) * 40
        );
        
        signalColors.push(0.2, 0.9, 0.9);
    }
    
    signalGeometry.setAttribute('position', new THREE.Float32BufferAttribute(signalVertices, 3));
    signalGeometry.setAttribute('color', new THREE.Float32BufferAttribute(signalColors, 3));
    
    const signalMaterial = new THREE.PointsMaterial({
        size: 3,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });
    
    const signalParticles = new THREE.Points(signalGeometry, signalMaterial);
    scene.add(signalParticles);

    // Enhanced Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0x2dd4bf, 3, 80);
    pointLight.position.set(0, 0, 15);
    scene.add(pointLight);

    camera.position.set(0, 8, 25);

    scenes.contact = { scene, camera, renderer, objects: { satellites, beams, hub, signalParticles } };

    function animateContact() {
        requestAnimationFrame(animateContact);
        
        const time = Date.now() * 0.001;
        
        // Animate satellites
        satellites.forEach((satellite, index) => {
            satellite.userData.orbitAngle += satellite.userData.orbitSpeed;
            
            satellite.position.x = Math.cos(satellite.userData.orbitAngle) * 12;
            satellite.position.z = Math.sin(satellite.userData.orbitAngle) * 12;
            satellite.position.y = satellite.userData.originalY + 
                Math.sin(time * 0.5 + index) * 1;
            
            satellite.rotation.y += satellite.userData.rotationSpeed;
            satellite.rotation.z += satellite.userData.rotationSpeed * 0.3;
        });
        
        // Update communication beams
        beams.forEach((beam, index) => {
            const points = [
                new THREE.Vector3(0, 0, 0),
                satellites[index].position.clone()
            ];
            beam.geometry.setFromPoints(points);
        });
        
        // Animate hub
        hub.rotation.y += 0.015;
        hub.rotation.x += 0.005;
        
        // Animate signal particles
        const positions = signalParticles.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
            positions[i] += Math.sin(time + i) * 0.02;
            positions[i + 1] += Math.cos(time + i) * 0.02;
            positions[i + 2] += Math.sin(time + i * 0.5) * 0.01;
        }
        signalParticles.geometry.attributes.position.needsUpdate = true;
        
        // Dynamic camera movement
        camera.position.x = Math.sin(time * 0.1) * 8;
        camera.position.y = 8 + Math.cos(time * 0.07) * 3;
        camera.lookAt(0, 0, 0);
        
        renderer.render(scene, camera);
    }
    animateContact();
}

// Interaction Systems
function initializeInteractionSystems() {
    // Mouse tracking for 3D interactions
    document.addEventListener('mousemove', (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    // Advanced GSAP Animations
    initializeAdvancedAnimations();
    
    // Interactive elements
    initializeInteractiveElements();
    
    // Scroll-based 3D effects
    initializeScrollEffects();
}

// Advanced GSAP Animation System (Enhanced with Typing Animation)
function initializeAdvancedAnimations() {
    // Hero content animations with PROPER TYPING ANIMATION
    const tl = gsap.timeline({ delay: 2 });
    
    tl.from('.rank-insignia', {
        duration: 1,
        opacity: 0,
        y: 30,
        ease: "power3.out"
    })
    .from('#typing-text-1', {
        duration: 0.01,
        opacity: 0
    })
    .to('#typing-text-1', {
        duration: 3,
        text: "VALLURI KEERTHI RAM",
        ease: "none",
        onComplete: () => {
            gsap.to('#typing-text-2', {
                duration: 2,
                text: "QUANTUM DEVELOPER",
                ease: "none"
            });
        }
    })
    .from('.hero-classification', {
        duration: 1,
        opacity: 0,
        y: 20,
        stagger: 0.2,
        ease: "power2.out"
    }, "-=1")
    .from('.mission-brief p', {
        duration: 1,
        opacity: 0,
        y: 20,
        stagger: 0.3,
        ease: "power2.out"
    }, "-=0.5");

    // Stats animation
    gsap.from('.stat-module', {
        scrollTrigger: {
            trigger: '.stats-panel',
            start: "top 80%"
        },
        duration: 1,
        opacity: 0,
        scale: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)"
    });

    // Animate stat fills with proper data attributes
    setTimeout(() => {
        document.querySelectorAll('.stat-fill').forEach(fill => {
            const value = fill.dataset.value;
            if (value) {
                gsap.set(fill, { width: '0%' });
                
                ScrollTrigger.create({
                    trigger: fill,
                    start: "top 80%",
                    onEnter: () => {
                        gsap.to(fill, {
                            width: value + '%',
                            duration: 2,
                            ease: "power3.out"
                        });
                    }
                });
            }
        });
    }, 1000);

    // Section entrance animations
    gsap.utils.toArray('.section').forEach(section => {
        const titleMain = section.querySelector('.title-main');
        const titleSub = section.querySelector('.title-sub');
        
        if (titleMain) {
            gsap.from(titleMain, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%"
                },
                duration: 1.5,
                opacity: 0,
                y: 50,
                scale: 0.8,
                ease: "power3.out"
            });
        }

        if (titleSub) {
            gsap.from(titleSub, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%"
                },
                duration: 1,
                opacity: 0,
                y: 20,
                ease: "power2.out",
                delay: 0.3
            });
        }
    });

    // Matrix nodes animation
    gsap.from('.matrix-node', {
        scrollTrigger: {
            trigger: '.data-matrix',
            start: "top 80%"
        },
        duration: 1.5,
        opacity: 0,
        y: 60,
        rotationX: 45,
        stagger: 0.3,
        ease: "power3.out"
    });

    // Skill constellation animation
    gsap.from('.skill-cluster', {
        scrollTrigger: {
            trigger: '.skill-constellation',
            start: "top 80%"
        },
        duration: 1.5,
        opacity: 0,
        scale: 0.5,
        rotation: 180,
        stagger: 0.2,
        ease: "back.out(1.7)"
    });

    // Project modules animation
    gsap.from('.project-module', {
        scrollTrigger: {
            trigger: '.station-modules',
            start: "top 80%"
        },
        duration: 2,
        opacity: 0,
        y: 100,
        rotationX: 45,
        stagger: 0.3,
        ease: "power3.out"
    });

    // Achievement stars animation
    gsap.from('.achievement-star', {
        scrollTrigger: {
            trigger: '.achievement-galaxy',
            start: "top 80%"
        },
        duration: 1.5,
        opacity: 0,
        scale: 0,
        rotation: 360,
        stagger: 0.2,
        ease: "back.out(2)"
    });

    // Communication panels animation
    gsap.from('.comm-panel', {
        scrollTrigger: {
            trigger: '.communication-grid',
            start: "top 80%"
        },
        duration: 1.5,
        opacity: 0,
        x: (index) => index % 2 === 0 ? -100 : 100,
        stagger: 0.3,
        ease: "power3.out"
    });
}

// Interactive Elements (Enhanced)
function initializeInteractiveElements() {
    // Enhanced project module interactions
    document.querySelectorAll('.project-module').forEach(module => {
        module.addEventListener('mouseenter', () => {
            gsap.to(module, {
                duration: 0.5,
                scale: 1.05,
                rotationY: 10,
                z: 50,
                ease: "power2.out"
            });
            
            gsap.to(module.querySelector('.module-shell'), {
                duration: 0.3,
                borderColor: '#4caf50',
                boxShadow: '0 30px 60px rgba(76, 175, 80, 0.3)',
                ease: "power2.out"
            });
        });

        module.addEventListener('mouseleave', () => {
            gsap.to(module, {
                duration: 0.5,
                scale: 1,
                rotationY: 0,
                z: 0,
                ease: "power2.out"
            });
        });
    });

    // Enhanced skill star interactions
    document.querySelectorAll('.skill-star').forEach(star => {
        star.addEventListener('mouseenter', () => {
            gsap.to(star, {
                duration: 0.3,
                scale: 1.4,
                rotation: Math.random() * 360,
                ease: "back.out(1.7)"
            });
            
            // Create ripple effect
            createRippleEffect(star);
        });

        star.addEventListener('mouseleave', () => {
            gsap.to(star, {
                duration: 0.3,
                scale: 1,
                rotation: 0,
                ease: "power2.out"
            });
        });
    });

    // Enhanced achievement star interactions
    document.querySelectorAll('.achievement-star').forEach(star => {
        star.addEventListener('mouseenter', () => {
            gsap.to(star, {
                duration: 0.4,
                scale: 1.1,
                rotationY: 15,
                z: 30,
                ease: "power2.out"
            });
            
            // Pulse effect
            gsap.to(star, {
                duration: 0.2,
                repeat: 1,
                yoyo: true,
                scale: 1.15,
                ease: "power2.inOut"
            });
        });

        star.addEventListener('mouseleave', () => {
            gsap.to(star, {
                duration: 0.4,
                scale: 1,
                rotationY: 0,
                z: 0,
                ease: "power2.out"
            });
        });
    });

    // Enhanced command buttons interactions
    document.querySelectorAll('.btn-command').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, {
                duration: 0.3,
                scale: 1.1,
                y: -5,
                ease: "back.out(1.7)"
            });
            
            // Create particle burst effect
            createParticleBurst(btn);
        });

        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                duration: 0.3,
                scale: 1,
                y: 0,
                ease: "power2.out"
            });
        });
    });

    // Form field focus effects
    document.querySelectorAll('.field-input').forEach(input => {
        input.addEventListener('focus', () => {
            gsap.to(input.parentNode, {
                duration: 0.3,
                scale: 1.02,
                ease: "power2.out"
            });
            
            const beam = input.parentNode.querySelector('.field-beam');
            if (beam) {
                gsap.to(beam, {
                    duration: 0.5,
                    width: '100%',
                    ease: "power2.out"
                });
            }
        });

        input.addEventListener('blur', () => {
            gsap.to(input.parentNode, {
                duration: 0.3,
                scale: 1,
                ease: "power2.out"
            });
            
            if (!input.value) {
                const beam = input.parentNode.querySelector('.field-beam');
                if (beam) {
                    gsap.to(beam, {
                        duration: 0.3,
                        width: '0%',
                        ease: "power2.out"
                    });
                }
            }
        });
    });
}

// Special Effects Functions
function createRippleEffect(element) {
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 10px;
        height: 10px;
        background: radial-gradient(circle, rgba(50, 168, 82, 0.8) 0%, transparent 70%);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 1000;
    `;
    
    element.style.position = 'relative';
    element.appendChild(ripple);
    
    gsap.to(ripple, {
        duration: 0.6,
        width: '200px',
        height: '200px',
        opacity: 0,
        ease: "power2.out",
        onComplete: () => {
            if (ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
            }
        }
    });
}

function createParticleBurst(element) {
    const rect = element.getBoundingClientRect();
    const particles = [];
    
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            top: ${rect.top + rect.height / 2}px;
            left: ${rect.left + rect.width / 2}px;
            width: 4px;
            height: 4px;
            background: #32a852;
            border-radius: 50%;
            pointer-events: none;
            z-index: 1001;
        `;
        
        document.body.appendChild(particle);
        particles.push(particle);
        
        const angle = (i / 12) * Math.PI * 2;
        const distance = 60 + Math.random() * 40;
        
        gsap.to(particle, {
            duration: 1,
            x: Math.cos(angle) * distance,
            y: Math.sin(angle) * distance,
            opacity: 0,
            scale: 0,
            ease: "power2.out",
            onComplete: () => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }
        });
    }
}

// Scroll Effects
function initializeScrollEffects() {
    // Parallax background effects
    gsap.utils.toArray('.section').forEach(section => {
        gsap.to(section, {
            yPercent: -20,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "bottom bottom",
                end: "top top",
                scrub: true
            }
        });
    });

    // 3D camera movement on scroll
    ScrollTrigger.create({
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: self => {
            scrollProgress = self.progress;
            
            // Update 3D camera positions based on scroll
            Object.values(scenes).forEach(sceneData => {
                if (sceneData.camera) {
                    sceneData.camera.position.z = 25 - (scrollProgress * 5);
                }
            });
        }
    });
}

// Navigation Matrix (FIXED)
function initializeNavigationMatrix() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section, .hero-command-center');

    // Enhanced quantum navigation with PROPER scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            
            // Remove active from all links first
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active to clicked link
            link.classList.add('active');
            
            // Perform quantum navigation
            quantumNavigate(targetId);
        });
    });

    // Active section detection with better threshold
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                const id = entry.target.id;
                activeSection = id;
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                        
                        // Animate active link
                        gsap.to(link, {
                            duration: 0.3,
                            scale: 1.1,
                            ease: "back.out(1.7)"
                        });
                    } else {
                        gsap.to(link, {
                            duration: 0.3,
                            scale: 1,
                            ease: "power2.out"
                        });
                    }
                });
            }
        });
    }, { threshold: [0.3, 0.7] });

    sections.forEach(section => {
        observer.observe(section);
    });
}

// Quantum Navigation Function (FIXED)
function quantumNavigate(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (!targetSection) return;
    
    // Create quantum transition effect
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, rgba(50, 168, 82, 0.2) 0%, rgba(0, 0, 0, 0.8) 100%);
        z-index: 9998;
        pointer-events: none;
        opacity: 0;
    `;
    
    document.body.appendChild(overlay);
    
    gsap.to(overlay, {
        duration: 0.2,
        opacity: 1,
        ease: "power2.inOut",
        onComplete: () => {
            // Calculate offset for fixed navigation
            const navHeight = 80;
            const targetPosition = targetSection.offsetTop - navHeight;
            
            // Smooth scroll to target
            gsap.to(window, {
                duration: 1.2,
                scrollTo: {
                    y: targetPosition,
                    autoKill: false
                },
                ease: "power3.inOut",
                onComplete: () => {
                    gsap.to(overlay, {
                        duration: 0.3,
                        opacity: 0,
                        ease: "power2.inOut",
                        onComplete: () => {
                            if (overlay.parentNode) {
                                overlay.parentNode.removeChild(overlay);
                            }
                        }
                    });
                }
            });
        }
    });
}

// Communication Protocols (Form Handling) - FIXED
function initializeCommunicationProtocols() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        await handleQuantumTransmission(form);
    });
}

// Quantum Message Transmission (FIXED)
async function handleQuantumTransmission(form) {
    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };

    // Validation
    if (!validateTransmissionData(data)) {
        displayQuantumAlert('Transmission failed: Invalid data detected', 'error');
        return;
    }

    const submitBtn = form.querySelector('.transmission-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const originalText = btnText.textContent;
    
    // Transmission sequence animation
    btnText.textContent = 'Initializing Quantum Link...';
    submitBtn.disabled = true;
    
    // Create transmission effect
    createTransmissionEffect(submitBtn);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    btnText.textContent = 'Encrypting Message...';
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    btnText.textContent = 'Transmitting...';
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Success animation
    btnText.textContent = 'Transmission Complete!';
    submitBtn.style.background = '#32a852';
    submitBtn.style.borderColor = '#32a852';
    
    displayQuantumAlert('Quantum message transmitted successfully! Response expected within 24 hours.', 'success');
    
    // Reset form with animation
    gsap.to(form, {
        duration: 0.5,
        scale: 0.95,
        opacity: 0.7,
        ease: "power2.out",
        onComplete: () => {
            form.reset();
            gsap.to(form, {
                duration: 0.5,
                scale: 1,
                opacity: 1,
                ease: "back.out(1.7)"
            });
        }
    });
    
    // Reset button after delay
    setTimeout(() => {
        btnText.textContent = originalText;
        submitBtn.style.background = '';
        submitBtn.style.borderColor = '';
        submitBtn.disabled = false;
    }, 4000);
}

// Validation
function validateTransmissionData(data) {
    if (!data.name || data.name.trim() === '') {
        return false;
    }
    if (!data.email || data.email.trim() === '') {
        return false;
    }
    if (!data.subject || data.subject.trim() === '') {
        return false;
    }
    if (!data.message || data.message.trim() === '') {
        return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(data.email);
}

// Transmission Effect
function createTransmissionEffect(button) {
    const rect = button.getBoundingClientRect();
    const waves = [];
    
    for (let i = 0; i < 3; i++) {
        const wave = document.createElement('div');
        wave.style.cssText = `
            position: fixed;
            top: ${rect.top}px;
            left: ${rect.left}px;
            width: ${rect.width}px;
            height: ${rect.height}px;
            border: 2px solid #2dd4bf;
            border-radius: 8px;
            pointer-events: none;
            z-index: 1000;
            opacity: 0.7;
        `;
        
        document.body.appendChild(wave);
        waves.push(wave);
        
        gsap.to(wave, {
            duration: 1.5,
            scale: 2 + i * 0.5,
            opacity: 0,
            ease: "power2.out",
            delay: i * 0.2,
            onComplete: () => {
                if (wave.parentNode) {
                    wave.parentNode.removeChild(wave);
                }
            }
        });
    }
}

// Quantum Alert System (Enhanced)
function displayQuantumAlert(message, type = 'info') {
    // Remove existing alerts
    document.querySelectorAll('.quantum-alert').forEach(alert => {
        if (alert.parentNode) {
            alert.parentNode.removeChild(alert);
        }
    });
    
    const alert = document.createElement('div');
    alert.className = 'quantum-alert';
    
    let bgColor = 'rgba(59, 130, 246, 0.95)';
    let borderColor = '#3b82f6';
    let icon = '💫';
    
    if (type === 'success') {
        bgColor = 'rgba(50, 168, 82, 0.95)';
        borderColor = '#32a852';
        icon = '✅';
    } else if (type === 'error') {
        bgColor = 'rgba(239, 68, 68, 0.95)';
        borderColor = '#ef4444';
        icon = '❌';
    } else if (type === 'warning') {
        bgColor = 'rgba(255, 193, 7, 0.95)';
        borderColor = '#ffc107';
        icon = '⚠️';
    }
    
    alert.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        padding: 20px 30px;
        background: ${bgColor};
        border: 2px solid ${borderColor};
        border-radius: 12px;
        color: white;
        font-family: 'Exo', sans-serif;
        font-weight: 500;
        z-index: 10001;
        max-width: 400px;
        backdrop-filter: blur(20px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        transform: translateX(500px);
        display: flex;
        align-items: center;
        gap: 12px;
    `;
    
    alert.innerHTML = `${icon} ${message}`;
    document.body.appendChild(alert);
    
    // Animate in
    gsap.to(alert, {
        duration: 0.6,
        x: -500,
        ease: "back.out(1.7)"
    });
    
    // Auto remove
    setTimeout(() => {
        gsap.to(alert, {
            duration: 0.4,
            x: 500,
            opacity: 0,
            ease: "power2.in",
            onComplete: () => {
                if (alert.parentNode) {
                    alert.parentNode.removeChild(alert);
                }
            }
        });
    }, 5000);
}

// Performance Optimization
function initializePerformanceOptimization() {
    // Intersection observer for 3D scenes
    const sceneObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const sceneId = entry.target.id.replace('-3d', '');
            if (scenes[sceneId] && scenes[sceneId].renderer) {
                if (entry.isIntersecting) {
                    scenes[sceneId].renderer.domElement.style.display = 'block';
                } else {
                    scenes[sceneId].renderer.domElement.style.display = 'none';
                }
            }
        });
    }, { threshold: 0.1 });

    // Observe all 3D containers
    Object.keys(scenes).forEach(sceneId => {
        const container = document.getElementById(`${sceneId}-3d`);
        if (container) {
            sceneObserver.observe(container);
        }
    });

    // Throttle resize events
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            handleResize();
        }, 100);
    });
}

// Handle Window Resize
function handleResize() {
    Object.values(scenes).forEach(sceneData => {
        if (sceneData.renderer && sceneData.camera) {
            const container = sceneData.renderer.domElement.parentNode;
            if (container) {
                sceneData.camera.aspect = container.offsetWidth / container.offsetHeight;
                sceneData.camera.updateProjectionMatrix();
                sceneData.renderer.setSize(container.offsetWidth, container.offsetHeight);
            }
        }
    });
}

// Start Quantum Experience
function startQuantumExperience() {
    // Initialize particle effects for brand
    createBrandParticles();
    
    // Start system status animations
    animateSystemStatus();
    
    // Initialize scroll-based effects
    initializeScrollBasedEffects();
    
    // Add custom cursor for desktop
    if (window.innerWidth > 768) {
        initializeQuantumCursor();
    }
    
    // Easter eggs and hidden features
    initializeEasterEggs();
    
    // Show welcome message
    setTimeout(() => {
        displayQuantumAlert('🚀 Welcome to the Quantum Portfolio! AI assistant online.', 'success');
    }, 3000);
}

// Additional helper functions
function createPlanetTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    
    // Create gradient for planet surface
    const gradient = ctx.createRadialGradient(150, 150, 0, 256, 256, 256);
    gradient.addColorStop(0, '#4caf50');
    gradient.addColorStop(0.5, '#2e7d32');
    gradient.addColorStop(1, '#1b5e20');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 512);
    
    // Add some noise/details
    for (let i = 0; i < 1000; i++) {
        ctx.fillStyle = `rgba(${Math.random() * 100 + 100}, ${Math.random() * 150 + 100}, ${Math.random() * 100 + 50}, 0.3)`;
        ctx.fillRect(Math.random() * 512, Math.random() * 512, 2, 2);
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
}

function createBrandParticles() {
    const brand = document.querySelector('.brand-particles');
    if (!brand) return;
    
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 3px;
            height: 3px;
            background: #32a852;
            border-radius: 50%;
            opacity: 0.8;
        `;
        
        brand.appendChild(particle);
        
        gsap.set(particle, {
            x: Math.random() * 80,
            y: Math.random() * 40
        });
        
        gsap.to(particle, {
            duration: 2 + Math.random() * 3,
            x: '+=' + (Math.random() * 40 - 20),
            y: '+=' + (Math.random() * 40 - 20),
            opacity: 0.2,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut"
        });
    }
}

function animateSystemStatus() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        gsap.to(dot, {
            duration: 0.6,
            opacity: 0.3,
            scale: 0.8,
            repeat: -1,
            yoyo: true,
            delay: index * 0.3,
            ease: "power2.inOut"
        });
    });
}

function initializeScrollBasedEffects() {
    // Enhanced HUD panel animations
    gsap.utils.toArray('.hud-panel').forEach((panel, index) => {
        gsap.from(panel, {
            scrollTrigger: {
                trigger: panel,
                start: "top 90%"
            },
            duration: 1.2,
            opacity: 0,
            y: 40,
            scale: 0.9,
            delay: index * 0.1,
            ease: "power3.out"
        });
    });
}

function initializeQuantumCursor() {
    const cursor = document.createElement('div');
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, #32a852 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 10000;
        mix-blend-mode: screen;
        transform: translate(-50%, -50%);
        transition: all 0.1s ease;
    `;
    
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            duration: 0.1,
            x: e.clientX,
            y: e.clientY,
            ease: "none"
        });
    });
    
    // Enhanced cursor interactions
    document.querySelectorAll('a, button, .nav-link, .skill-star, .project-module, .achievement-star, .channel-link, .btn-module, .verify-btn').forEach(el => {
        el.addEventListener('mouseenter', () => {
            gsap.to(cursor, {
                duration: 0.2,
                scale: 2,
                opacity: 0.8,
                ease: "back.out(1.7)"
            });
        });
        
        el.addEventListener('mouseleave', () => {
            gsap.to(cursor, {
                duration: 0.2,
                scale: 1,
                opacity: 1,
                ease: "power2.out"
            });
        });
    });
}

function initializeEasterEggs() {
    // Enhanced Konami code easter egg
    let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', (e) => {
        if (e.code === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateQuantumMode();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    // Secret click sequence
    let clickCount = 0;
    document.querySelector('.nav-brand').addEventListener('click', () => {
        clickCount++;
        if (clickCount === 5) {
            displayQuantumAlert('🎉 Secret discovered! You found the hidden quantum realm!', 'success');
            activateQuantumParticles();
            clickCount = 0;
        }
        
        setTimeout(() => {
            clickCount = 0;
        }, 3000);
    });
}

function activateQuantumMode() {
    displayQuantumAlert('🚀 QUANTUM MODE ACTIVATED! Reality distortion field enabled.', 'success');
    
    // Add crazy effects
    document.body.style.filter = 'hue-rotate(180deg) saturate(2) contrast(1.2)';
    
    // Animate all 3D objects faster
    Object.values(scenes).forEach(sceneData => {
        if (sceneData.objects) {
            // Speed up animations temporarily
        }
    });
    
    setTimeout(() => {
        document.body.style.filter = '';
        displayQuantumAlert('Quantum mode deactivated. Reality restored.', 'info');
    }, 10000);
}

function activateQuantumParticles() {
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: #32a852;
            border-radius: 50%;
            pointer-events: none;
            z-index: 10000;
            top: 50%;
            left: 50%;
        `;
        
        document.body.appendChild(particle);
        
        const angle = (i / 20) * Math.PI * 2;
        const distance = Math.random() * 200 + 100;
        const duration = Math.random() * 2 + 1;
        
        gsap.to(particle, {
            duration: duration,
            x: Math.cos(angle) * distance,
            y: Math.sin(angle) * distance,
            opacity: 0,
            scale: 0,
            ease: "power2.out",
            onComplete: () => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }
        });
    }
}

// Global scroll function for button
function scrollToSection(sectionId) {
    quantumNavigate(sectionId);
}

// Export for global access
window.portfolioQuantumSystem = {
    scrollToSection,
    displayQuantumAlert,
    scenes,
    quantumNavigate
};