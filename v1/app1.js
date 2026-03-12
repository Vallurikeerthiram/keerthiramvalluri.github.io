// Agent VKR - Advanced Terminal System (Fixed Version)
// State Management
let terminalState = {
    currentTheme: 'green',
    matrixEnabled: true,
    soundEnabled: true,
    commandHistory: [],
    historyIndex: -1,
    isBooting: true,
    currentTime: new Date(),
    commands: {}
};

// Agent Data
const agentData = {
    personalInfo: {
        name: "Valluri Keerthi Ram",
        codename: "VKR",
        title: "BTech CSE Student",
        university: "Amrita School of Engineering Bangalore",
        location: "Bengaluru, Karnataka, India",
        cgpa: 8.49,
        semester: "5th Semester",
        status: "Active - Available for Opportunities"
    },
    
    skills: {
        programming: {
            "Python": 90,
            "Java": 95,
            "JavaScript": 88,
            "PHP": 85,
            "HTML5": 95,
            "CSS": 92
        },
        frameworks: {
            "PyQt": 88,
            "Plotly": 85,
            "Dash": 82
        },
        databases: {
            "MySQL": 85,
            "DBMS": 80
        },
        tools: {
            "Git": 88,
            "GitHub": 90,
            "Figma": 78,
            "AutoCAD": 75,
            "WAMP": 80
        }
    },
    
    projects: [
        {
            id: 1,
            codename: "Operation Probability",
            title: "Probability Based Crypto Trading Tool",
            status: "ACTIVE DEVELOPMENT",
            period: "Jan 2025 - May 2025",
            description: "Advanced cryptocurrency analysis system using probability models for market prediction and automated trading decisions.",
            technologies: ["Python", "Plotly", "Dash", "Binance API", "Figma"],
            github: "https://github.com/Vallurikeerthiram/Probability-Based-Crypto-For-Scalping-and-Compounding",
            features: [
                "Real-time market surveillance",
                "Probability-based prediction algorithms",
                "Automated risk assessment",
                "Compound profit optimization"
            ]
        },
        {
            id: 2,
            codename: "Allocation Matrix",
            title: "Teacher-Course Allocation System",
            status: "DEPLOYED",
            period: "Oct 2024 - Nov 2024",
            description: "Intelligent resource allocation system for educational institutions with automated scheduling and workload optimization.",
            technologies: ["Web Development", "DBMS", "WAMP", "MySQL", "PHP"],
            github: "https://github.com/Vallurikeerthiram/teacher-course-allocation",
            features: [
                "Automated faculty assignment",
                "Workload balancing algorithms",
                "Conflict detection protocols",
                "Real-time scheduling updates"
            ]
        },
        {
            id: 3,
            codename: "Elevator Protocol",
            title: "Weight-Aware Elevator Optimization",
            status: "PUBLISHED RESEARCH",
            period: "Oct 2024 - Nov 2024",
            description: "Advanced building infrastructure optimization system incorporating energy efficiency and safety protocols.",
            technologies: ["Python", "PyQt"],
            github: "https://github.com/Vallurikeerthiram/Weight-Aware-Lift-Management",
            publication: "Published in ICETESS 2025 Conference",
            features: [
                "Real-time weight monitoring",
                "Energy optimization algorithms",
                "Predictive maintenance scheduling",
                "Safety protocol integration"
            ]
        },
        {
            id: 4,
            codename: "Vision Network",
            title: "Eye Tracking and Computer Vision Lab Website",
            status: "LIVE",
            period: "May 2024 - Aug 2024",
            description: "Digital platform showcasing advanced computer vision research with interactive demonstrations.",
            technologies: ["HTML5", "CSS", "JavaScript", "DBMS", "AutoCAD"],
            liveUrl: "http://web-blr.amrita.edu/track/pages/",
            features: [
                "Interactive research showcase",
                "Dynamic project galleries",
                "Academic publication database",
                "Responsive design system"
            ]
        }
    ],
    
    certifications: [
        {
            name: "Introduction to Generative AI",
            issuer: "Google Cloud Skills Boost",
            date: "October 2024",
            verificationUrl: "https://www.cloudskillsboost.google/public_profiles/e4344aa9-c665-4e54-8412-153d0fbf3aac/badges/12538813"
        },
        {
            name: "Project Management Foundations",
            issuer: "Project Management Institute",
            date: "October 2024",
            verificationUrl: "https://www.linkedin.com/learning/certificates/6c22df1ec90364652f3ff5e3aaacbf889196fac08c5d03a9b495b575aa3f54f4"
        },
        {
            name: "Professional Development Certificate",
            issuer: "National Association of State Boards of Accountancy (NASBA)",
            date: "2024",
            verificationUrl: "https://www.linkedin.com/learning/certificates/8c3149fe7969152b2511388390c4370bb560802a4e0a3c1ae334bca1e58dfd33"
        },
        {
            name: "AWS Cloud Technical Essentials",
            issuer: "Amazon Web Services",
            date: "January 2025",
            verificationUrl: "https://www.coursera.org/account/accomplishments/verify/SX36EVGM85BS"
        }
    ],
    
    contact: {
        phone: "+91 8309247221",
        email: ["keerthiramvalluri@gmail.com", "vallurikeerthiram@gmail.com"],
        academic: "bl.en.u4cse23061@bl.students.amrita.edu",
        github: "https://github.com/Vallurikeerthiram",
        linkedin: "https://www.linkedin.com/in/valluri-keerthi-ram-503576216"
    }
};

// Command System
const commands = {
    help: {
        description: "Display available commands",
        execute: () => {
            return `
<div class="output-line info">AVAILABLE COMMANDS:</div>
<div class="output-line response">• <span style="color: #00ff41;">help</span> - Display this help menu</div>
<div class="output-line response">• <span style="color: #00ff41;">about</span> - Show agent personnel file</div>
<div class="output-line response">• <span style="color: #00ff41;">projects</span> - List classified project files</div>
<div class="output-line response">• <span style="color: #00ff41;">skills</span> - Display technical skill matrix</div>
<div class="output-line response">• <span style="color: #00ff41;">certifications</span> - Show security clearances</div>
<div class="output-line response">• <span style="color: #00ff41;">contact</span> - Access communication channels</div>
<div class="output-line response">• <span style="color: #00ff41;">clear</span> - Clear terminal screen</div>
<div class="output-line response">• <span style="color: #00ff41;">matrix</span> - Toggle matrix background effect</div>
<div class="output-line response">• <span style="color: #00ff41;">theme [green|amber|blue]</span> - Change terminal theme</div>
<div class="output-line response">• <span style="color: #00ff41;">hack</span> - Initiate hacking sequence [CLASSIFIED]</div>
<div class="output-line response">• <span style="color: #00ff41;">ghost</span> - Activate stealth mode</div>
<div class="output-line response">• <span style="color: #00ff41;">scan</span> - Network reconnaissance</div>
<div class="output-line response">• <span style="color: #00ff41;">status</span> - Show system status</div>
<div class="output-line info">You can also ask natural language questions about Agent VKR</div>
            `;
        }
    },
    
    about: {
        description: "Show agent personnel file",
        execute: () => {
            const info = agentData.personalInfo;
            return `
<div class="output-line info">ACCESSING PERSONNEL FILE...</div>
<div class="output-line success">[CLASSIFIED] AGENT: ${info.name.toUpperCase()}</div>
<div class="output-line response">================================</div>
<table class="data-table">
    <tr><td>CODENAME</td><td>${info.codename}</td></tr>
    <tr><td>STATUS</td><td>${info.title}</td></tr>
    <tr><td>INSTITUTION</td><td>${info.university}</td></tr>
    <tr><td>LOCATION</td><td>${info.location}</td></tr>
    <tr><td>CLEARANCE LEVEL</td><td>${info.cgpa} CGPA</td></tr>
    <tr><td>CURRENT PHASE</td><td>${info.semester}</td></tr>
    <tr><td>MISSION STATUS</td><td>${info.status}</td></tr>
</table>
<div class="output-line success">SPECIALIZATION: Advanced Technology Solutions</div>
<div class="output-line success">OBJECTIVE: Open to learning & growth opportunities</div>
            `;
        }
    },
    
    projects: {
        description: "List classified project files",
        execute: () => {
            let output = '<div class="output-line info">CLASSIFIED PROJECT FILES FOUND...</div>';
            
            agentData.projects.forEach((project, index) => {
                const statusClass = project.status.includes('ACTIVE') ? 'warning' : 
                                  project.status.includes('DEPLOYED') ? 'success' : 'info';
                
                output += `
<div class="project-card">
    <div class="project-header">
        <div class="project-title">[${index + 1}] ${project.title}</div>
        <div class="project-status">${project.status}</div>
    </div>
    <div class="output-line response"><strong>Codename:</strong> ${project.codename}</div>
    <div class="output-line response"><strong>Period:</strong> ${project.period}</div>
    <div class="project-description">${project.description}</div>
    <div class="output-line response"><strong>Technologies:</strong></div>
    <div class="project-tech">
        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
    </div>
    <div class="output-line response"><strong>Key Features:</strong></div>
    ${project.features.map(feature => `<div class="output-line response">• ${feature}</div>`).join('')}
    ${project.publication ? `<div class="output-line success">📄 ${project.publication}</div>` : ''}
    <div class="output-line response">
        <strong>Access:</strong> 
        ${project.github ? `<a href="${project.github}" target="_blank" class="project-link">GitHub Repository</a>` : ''}
        ${project.liveUrl ? ` | <a href="${project.liveUrl}" target="_blank" class="project-link">Live Demo</a>` : ''}
    </div>
</div>
                `;
            });
            
            return output;
        }
    },
    
    skills: {
        description: "Display technical skill matrix",
        execute: () => {
            let output = '<div class="output-line info">ANALYZING SKILL MATRIX...</div>';
            
            Object.entries(agentData.skills).forEach(([category, skills]) => {
                output += `<div class="output-line success">${category.toUpperCase()}:</div>`;
                Object.entries(skills).forEach(([skill, level]) => {
                    const bars = '█'.repeat(Math.floor(level / 10)) + '░'.repeat(10 - Math.floor(level / 10));
                    output += `
<div class="skill-bar">
    <div class="skill-name">${skill}</div>
    <div class="skill-progress">
        <div class="skill-fill" style="--skill-width: ${level}%; width: ${level}%;"></div>
    </div>
    <div class="skill-percentage">${level}%</div>
</div>
                    `;
                });
                output += '<br>';
            });
            
            return output;
        }
    },
    
    certifications: {
        description: "Show security clearances",
        execute: () => {
            let output = '<div class="output-line info">SECURITY CLEARANCE VERIFIED...</div>';
            
            agentData.certifications.forEach((cert, index) => {
                output += `
<div class="project-card">
    <div class="project-header">
        <div class="project-title">[✓] ${cert.name}</div>
        <div class="project-status">VERIFIED</div>
    </div>
    <div class="output-line response"><strong>Issuer:</strong> ${cert.issuer}</div>
    <div class="output-line response"><strong>Date:</strong> ${cert.date}</div>
    <div class="output-line response">
        <strong>Verification:</strong> 
        <a href="${cert.verificationUrl}" target="_blank" class="project-link">Verify Certificate</a>
    </div>
</div>
                `;
            });
            
            return output;
        }
    },
    
    contact: {
        description: "Access communication channels",
        execute: () => {
            const contact = agentData.contact;
            return `
<div class="output-line info">ESTABLISHING SECURE COMMUNICATION CHANNELS...</div>
<table class="data-table">
    <tr><td>PRIMARY PHONE</td><td>${contact.phone}</td></tr>
    <tr><td>SECURE EMAIL</td><td>${contact.email[0]}</td></tr>
    <tr><td>BACKUP EMAIL</td><td>${contact.email[1]}</td></tr>
    <tr><td>ACADEMIC NETWORK</td><td>${contact.academic}</td></tr>
</table>
<div class="output-line success">PROFESSIONAL NETWORKS:</div>
<div class="output-line response">• <a href="${contact.github}" target="_blank" class="project-link">GitHub Operations</a></div>
<div class="output-line response">• <a href="${contact.linkedin}" target="_blank" class="project-link">LinkedIn Intelligence</a></div>
<div class="output-line info">RESPONSE TIME: 24-48 hours</div>
<div class="output-line info">SECURITY PROTOCOL: End-to-end encrypted communications preferred</div>
            `;
        }
    },
    
    clear: {
        description: "Clear terminal screen",
        execute: () => {
            const output = document.getElementById('terminal-output');
            if (output) {
                output.innerHTML = '';
            }
            return null;
        }
    },
    
    matrix: {
        description: "Toggle matrix background effect",
        execute: () => {
            terminalState.matrixEnabled = !terminalState.matrixEnabled;
            const canvas = document.getElementById('matrix-canvas');
            if (canvas) {
                canvas.style.opacity = terminalState.matrixEnabled ? '0.3' : '0';
            }
            return `<div class="output-line success">Matrix effect ${terminalState.matrixEnabled ? 'ENABLED' : 'DISABLED'}</div>`;
        }
    },
    
    theme: {
        description: "Change terminal theme",
        execute: (args) => {
            const themes = ['green', 'amber', 'blue'];
            const theme = args && args[0] ? args[0].toLowerCase() : '';
            
            if (!theme || !themes.includes(theme)) {
                return `
<div class="output-line error">Invalid theme. Available themes:</div>
<div class="output-line response">• green (default)</div>
<div class="output-line response">• amber</div>
<div class="output-line response">• blue</div>
                `;
            }
            
            // Remove existing theme classes
            document.body.classList.remove('theme-green', 'theme-amber', 'theme-blue');
            document.body.classList.add(`theme-${theme}`);
            terminalState.currentTheme = theme;
            
            return `<div class="output-line success">Theme changed to ${theme.toUpperCase()}</div>`;
        }
    },
    
    hack: {
        description: "Initiate hacking sequence",
        execute: () => {
            activateGlitchEffect();
            return `
<div class="output-line error hack-animation">INITIATING HACKING SEQUENCE...</div>
<div class="output-line error hack-animation">BYPASSING SECURITY PROTOCOLS...</div>
<div class="output-line error hack-animation">ACCESS DENIED... ACCESS DENIED... ACCESS DENIED...</div>
<div class="output-line warning">SECURITY BREACH DETECTED!</div>
<div class="output-line success">Just kidding! This is Agent VKR's portfolio system 😄</div>
<div class="output-line info">All systems secure and operational.</div>
            `;
        }
    },
    
    ghost: {
        description: "Activate stealth mode",
        execute: () => {
            const terminalContainer = document.querySelector('.terminal-container');
            if (terminalContainer) {
                terminalContainer.style.opacity = '0.1';
                setTimeout(() => {
                    terminalContainer.style.opacity = '1';
                }, 2000);
            }
            
            return `
<div class="output-line info">ACTIVATING STEALTH MODE...</div>
<div class="output-line warning">GHOST PROTOCOL INITIATED...</div>
<div class="output-line success">Stealth mode deactivated. Agent VKR remains visible for opportunities! 👻</div>
            `;
        }
    },
    
    scan: {
        description: "Network reconnaissance",
        execute: () => {
            return `
<div class="output-line info">INITIATING NETWORK SCAN...</div>
<div class="output-line response">Scanning for available opportunities...</div>
<div class="output-line success">FOUND: Software Development Internship Opportunities</div>
<div class="output-line success">FOUND: Full-time Developer Positions</div>
<div class="output-line success">FOUND: Collaborative Project Opportunities</div>
<div class="output-line warning">ALERT: VKR is actively seeking new missions!</div>
<div class="output-line info">Contact channels are open and secure.</div>
            `;
        }
    },
    
    status: {
        description: "Show system status",
        execute: () => {
            return `
<div class="output-line info">SYSTEM STATUS REPORT:</div>
<table class="data-table">
    <tr><td>Academic Performance</td><td>${agentData.personalInfo.cgpa} CGPA</td></tr>
    <tr><td>Semester Progress</td><td>5/8 (62.5%)</td></tr>
    <tr><td>Active Projects</td><td>4+ Classified Operations</td></tr>
    <tr><td>Certifications</td><td>4 Verified</td></tr>
    <tr><td>GitHub Repositories</td><td>10+ Active</td></tr>
    <tr><td>Technologies Mastered</td><td>15+ and Growing</td></tr>
    <tr><td>System Status</td><td><span style="color: #00ff41;">OPERATIONAL</span></td></tr>
    <tr><td>Security Status</td><td><span style="color: #00ff41;">SECURE</span></td></tr>
</table>
<div class="output-line success">All systems operating at optimal capacity.</div>
            `;
        }
    }
};

// Natural Language Processing
function processNaturalLanguage(input) {
    const lowerInput = input.toLowerCase();
    
    // Question patterns
    const patterns = [
        {
            keywords: ['what', 'projects', 'worked', 'built', 'developed'],
            response: () => commands.projects.execute()
        },
        {
            keywords: ['tell', 'about', 'who', 'agent'],
            response: () => commands.about.execute()
        },
        {
            keywords: ['skills', 'technologies', 'programming', 'languages'],
            response: () => commands.skills.execute()
        },
        {
            keywords: ['contact', 'reach', 'email', 'phone'],
            response: () => commands.contact.execute()
        },
        {
            keywords: ['certifications', 'certificates', 'achievements'],
            response: () => commands.certifications.execute()
        },
        {
            keywords: ['crypto', 'trading', 'probability'],
            response: () => {
                const cryptoProject = agentData.projects[0];
                return `
<div class="output-line info">CRYPTO TRADING PROJECT DETAILS:</div>
<div class="project-card">
    <div class="project-header">
        <div class="project-title">${cryptoProject.title}</div>
        <div class="project-status">${cryptoProject.status}</div>
    </div>
    <div class="project-description">${cryptoProject.description}</div>
    <div class="output-line response"><strong>Technologies:</strong> ${cryptoProject.technologies.join(', ')}</div>
    <div class="output-line response"><strong>GitHub:</strong> <a href="${cryptoProject.github}" target="_blank" class="project-link">View Repository</a></div>
</div>
                `;
            }
        },
        {
            keywords: ['teacher', 'allocation', 'university'],
            response: () => {
                const allocProject = agentData.projects[1];
                return `
<div class="output-line info">TEACHER ALLOCATION SYSTEM:</div>
<div class="project-card">
    <div class="project-header">
        <div class="project-title">${allocProject.title}</div>
        <div class="project-status">${allocProject.status}</div>
    </div>
    <div class="project-description">${allocProject.description}</div>
    <div class="output-line response"><strong>Status:</strong> Successfully deployed and operational</div>
    <div class="output-line response"><strong>GitHub:</strong> <a href="${allocProject.github}" target="_blank" class="project-link">View Repository</a></div>
</div>
                `;
            }
        }
    ];
    
    // Find matching pattern
    for (const pattern of patterns) {
        if (pattern.keywords.some(keyword => lowerInput.includes(keyword))) {
            return pattern.response();
        }
    }
    
    // Default response for unmatched queries
    return `
<div class="output-line warning">Query processed. No specific match found.</div>
<div class="output-line info">Try asking about:</div>
<div class="output-line response">• "What projects has Keerthi worked on?"</div>
<div class="output-line response">• "Tell me about Agent VKR"</div>
<div class="output-line response">• "What are his skills?"</div>
<div class="output-line response">• "How can I contact him?"</div>
<div class="output-line info">Or use specific commands like 'help', 'about', 'projects', etc.</div>
    `;
}

// Initialize System
document.addEventListener('DOMContentLoaded', function() {
    initializeTerminalSystem();
});

async function initializeTerminalSystem() {
    console.log('Initializing terminal system...');
    
    // Start boot sequence
    await startBootSequence();
    
    // Initialize matrix effect
    initializeMatrixRain();
    
    // Setup terminal
    setupTerminal();
    
    // Start system clock
    startSystemClock();
    
    // Initialize mobile support
    initializeMobileSupport();
    
    // Setup keyboard shortcuts
    setupKeyboardShortcuts();
    
    console.log('Terminal system initialized successfully!');
}

// Boot Sequence
async function startBootSequence() {
    const bootScreen = document.getElementById('boot-screen');
    const progressBar = document.getElementById('boot-progress');
    const bootLines = document.querySelectorAll('.boot-line');
    
    console.log('Starting boot sequence...');
    
    // Animate boot lines
    for (let i = 0; i < bootLines.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (progressBar) {
            progressBar.style.width = `${((i + 1) / bootLines.length) * 100}%`;
        }
    }
    
    // Wait for completion
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Hide boot screen and show terminal
    if (bootScreen) {
        bootScreen.classList.add('hidden');
    }
    
    const terminalContainer = document.getElementById('terminal-container');
    if (terminalContainer) {
        terminalContainer.classList.remove('hidden');
    }
    
    terminalState.isBooting = false;
    
    // Focus on terminal input after a short delay
    setTimeout(() => {
        const terminalInput = document.getElementById('terminal-input');
        if (terminalInput) {
            terminalInput.focus();
        }
    }, 500);
    
    console.log('Boot sequence completed');
}

// Matrix Rain Effect
function initializeMatrixRain() {
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) {
        console.log('Matrix canvas not found');
        return;
    }
    
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Matrix characters
    const matrixChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%^&*()_+-=[]{}|;:,.<>?';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(0);
    
    function drawMatrix() {
        // Semi-transparent black background for fade effect
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Matrix text
        ctx.fillStyle = '#00ff41';
        ctx.font = `${fontSize}px JetBrains Mono, monospace`;
        
        for (let i = 0; i < drops.length; i++) {
            const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
            const x = i * fontSize;
            const y = drops[i] * fontSize;
            
            ctx.fillText(char, x, y);
            
            // Reset drop randomly
            if (y > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            
            drops[i]++;
        }
    }
    
    // Start matrix animation
    setInterval(drawMatrix, 50);
    console.log('Matrix effect initialized');
}

// Terminal Setup
function setupTerminal() {
    console.log('Setting up terminal...');
    
    const terminalInput = document.getElementById('terminal-input');
    const terminalOutput = document.getElementById('terminal-output');
    
    if (!terminalInput) {
        console.error('Terminal input element not found!');
        return;
    }
    
    if (!terminalOutput) {
        console.error('Terminal output element not found!');
        return;
    }
    
    // Add event listeners
    terminalInput.addEventListener('keydown', handleKeydown);
    terminalInput.addEventListener('input', handleInput);
    
    // Click anywhere on terminal to focus input
    const terminalContainer = document.getElementById('terminal-container');
    if (terminalContainer) {
        terminalContainer.addEventListener('click', () => {
            terminalInput.focus();
        });
    }
    
    // Auto-complete suggestions
    setupAutoComplete();
    
    console.log('Terminal setup completed');
}

// Handle Keyboard Input
function handleKeydown(event) {
    const input = event.target;
    const key = event.key;
    
    console.log('Key pressed:', key);
    
    switch (key) {
        case 'Enter':
            event.preventDefault();
            const command = input.value.trim();
            console.log('Processing command:', command);
            processCommand(command);
            input.value = '';
            break;
            
        case 'ArrowUp':
            event.preventDefault();
            navigateHistory(-1);
            break;
            
        case 'ArrowDown':
            event.preventDefault();
            navigateHistory(1);
            break;
            
        case 'Tab':
            event.preventDefault();
            handleAutoComplete();
            break;
            
        case 'Escape':
            hideAutoComplete();
            break;
    }
    
    // Play typing sound
    playTypingSound();
}

// Handle Input Changes
function handleInput(event) {
    const input = event.target.value;
    updateAutoComplete(input);
}

// Process Commands
function processCommand(commandString) {
    console.log('Processing command:', commandString);
    
    if (!commandString) {
        console.log('Empty command, ignoring');
        return;
    }
    
    // Add to history
    terminalState.commandHistory.push(commandString);
    terminalState.historyIndex = terminalState.commandHistory.length;
    
    // Display command
    addOutputLine(`agent@vkr:~$ ${commandString}`, 'command');
    
    // Parse command
    const [command, ...args] = commandString.toLowerCase().split(' ');
    console.log('Command:', command, 'Args:', args);
    
    // Execute command
    let output;
    if (commands[command]) {
        console.log('Executing built-in command:', command);
        try {
            output = commands[command].execute(args);
        } catch (error) {
            console.error('Error executing command:', error);
            output = `<div class="output-line error">Error executing command: ${error.message}</div>`;
        }
    } else {
        console.log('Command not found, trying natural language processing');
        // Try natural language processing
        output = processNaturalLanguage(commandString);
    }
    
    // Display output
    if (output) {
        console.log('Adding output to terminal');
        addOutput(output);
    } else {
        console.log('No output to display');
    }
    
    // Scroll to bottom
    scrollToBottom();
}

// Add Output
function addOutput(html) {
    const outputDiv = document.getElementById('terminal-output');
    if (!outputDiv) {
        console.error('Terminal output element not found!');
        return;
    }
    
    const wrapper = document.createElement('div');
    wrapper.innerHTML = html;
    outputDiv.appendChild(wrapper);
    
    console.log('Output added to terminal');
}

function addOutputLine(text, className = 'response') {
    const outputDiv = document.getElementById('terminal-output');
    if (!outputDiv) {
        console.error('Terminal output element not found!');
        return;
    }
    
    const line = document.createElement('div');
    line.className = `output-line ${className}`;
    line.innerHTML = text;
    outputDiv.appendChild(line);
    
    console.log('Output line added:', className, text.substring(0, 50));
}

// Command History Navigation
function navigateHistory(direction) {
    const input = document.getElementById('terminal-input');
    if (!input) return;
    
    if (direction === -1 && terminalState.historyIndex > 0) {
        terminalState.historyIndex--;
        input.value = terminalState.commandHistory[terminalState.historyIndex];
    } else if (direction === 1 && terminalState.historyIndex < terminalState.commandHistory.length) {
        terminalState.historyIndex++;
        input.value = terminalState.historyIndex === terminalState.commandHistory.length 
            ? '' 
            : terminalState.commandHistory[terminalState.historyIndex];
    }
}

// Auto-complete System
function setupAutoComplete() {
    const suggestions = document.getElementById('command-suggestions');
    const availableCommands = Object.keys(commands);
    
    window.availableCommands = availableCommands;
    window.currentSuggestions = [];
    window.selectedSuggestion = -1;
    
    console.log('Auto-complete setup with commands:', availableCommands);
}

function updateAutoComplete(input) {
    const suggestions = document.getElementById('command-suggestions');
    const availableCommands = window.availableCommands;
    
    if (!input.trim() || !suggestions || !availableCommands) {
        hideAutoComplete();
        return;
    }
    
    const matches = availableCommands.filter(cmd => 
        cmd.toLowerCase().startsWith(input.toLowerCase())
    );
    
    if (matches.length === 0) {
        hideAutoComplete();
        return;
    }
    
    window.currentSuggestions = matches;
    window.selectedSuggestion = -1;
    
    suggestions.innerHTML = matches.map((cmd, index) => `
        <div class="suggestion-item" data-index="${index}">
            <div class="suggestion-command">${cmd}</div>
            <div class="suggestion-description">${commands[cmd].description}</div>
        </div>
    `).join('');
    
    suggestions.classList.add('visible');
    
    // Add click handlers
    suggestions.querySelectorAll('.suggestion-item').forEach(item => {
        item.addEventListener('click', () => {
            const terminalInput = document.getElementById('terminal-input');
            if (terminalInput) {
                terminalInput.value = item.querySelector('.suggestion-command').textContent;
                hideAutoComplete();
                terminalInput.focus();
            }
        });
    });
}

function handleAutoComplete() {
    const input = document.getElementById('terminal-input');
    const suggestions = window.currentSuggestions;
    
    if (suggestions && suggestions.length > 0 && input) {
        input.value = suggestions[0];
        hideAutoComplete();
    }
}

function hideAutoComplete() {
    const suggestions = document.getElementById('command-suggestions');
    if (suggestions) {
        suggestions.classList.remove('visible');
    }
}

// System Clock
function startSystemClock() {
    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { 
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        const dateString = now.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
        
        const timestampElement = document.getElementById('current-time');
        if (timestampElement) {
            timestampElement.textContent = `${dateString} ${timeString}`;
        }
        
        terminalState.currentTime = now;
    }
    
    updateClock();
    setInterval(updateClock, 1000);
    console.log('System clock started');
}

// Mobile Support
function initializeMobileSupport() {
    if (window.innerWidth <= 768) {
        // Show mobile keyboard toggle
        const mobileToggle = document.querySelector('.mobile-toggle');
        if (mobileToggle) {
            mobileToggle.style.display = 'flex';
        }
        
        // Add virtual keyboard handlers
        document.querySelectorAll('.key-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const command = btn.getAttribute('data-key');
                const input = document.getElementById('terminal-input');
                if (input) {
                    input.value = command;
                    input.focus();
                }
                toggleMobileKeyboard();
            });
        });
        
        console.log('Mobile support initialized');
    }
}

function toggleMobileKeyboard() {
    const keyboard = document.getElementById('mobile-keyboard');
    if (keyboard) {
        keyboard.classList.toggle('active');
    }
}

// Keyboard Shortcuts
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (event) => {
        // Ctrl+L to clear terminal
        if (event.ctrlKey && event.key === 'l') {
            event.preventDefault();
            if (commands.clear) {
                commands.clear.execute();
            }
        }
        
        // Ctrl+C to interrupt (not implemented, just prevent default)
        if (event.ctrlKey && event.key === 'c') {
            event.preventDefault();
        }
    });
    
    console.log('Keyboard shortcuts setup');
}

// Sound Effects
function playTypingSound() {
    if (!terminalState.soundEnabled) return;
    
    // Create a simple beep sound
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'square';
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
        // Silently fail if audio context is not available
    }
}

// Special Effects
function activateGlitchEffect() {
    const glitchOverlay = document.getElementById('glitch-overlay');
    if (glitchOverlay) {
        glitchOverlay.classList.add('active');
        
        setTimeout(() => {
            glitchOverlay.classList.remove('active');
        }, 3000);
    }
}

// Utility Functions
function scrollToBottom() {
    const output = document.getElementById('terminal-output');
    if (output) {
        output.scrollTop = output.scrollHeight;
    }
}

// Global functions for mobile interface
window.toggleMobileKeyboard = toggleMobileKeyboard;

// Easter eggs and hidden commands
document.addEventListener('keydown', (event) => {
    // Konami code implementation
    if (!window.konamiSequence) {
        window.konamiSequence = [];
        window.konamiCode = [
            'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
            'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
            'KeyB', 'KeyA'
        ];
    }
    
    window.konamiSequence.push(event.code);
    if (window.konamiSequence.length > window.konamiCode.length) {
        window.konamiSequence.shift();
    }
    
    if (JSON.stringify(window.konamiSequence) === JSON.stringify(window.konamiCode)) {
        addOutput(`
            <div class="output-line success">🎉 KONAMI CODE ACTIVATED!</div>
            <div class="output-line info">Secret Agent Mode: UNLOCKED</div>
            <div class="output-line response">You found the hidden easter egg! Agent VKR approves of your hacking skills.</div>
        `);
        activateGlitchEffect();
        window.konamiSequence = [];
    }
});

// Initialize the system when everything is loaded
console.log('Agent VKR Terminal System loaded successfully.');
console.log('Type "help" to see available commands.');