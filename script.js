// Smooth Scroll Functionality
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// GSAP Scroll Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Section Entrance Animation
gsap.from("#hero h1, #hero p", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power4.out",
});

// Button Animation in Hero Section
gsap.from(".btn", {
    opacity: 0,
    scale: 0.8,
    duration: 1.5,
    delay: 0.5,
    ease: "elastic.out(1, 0.5)",
});

// Section Reveal Animations
gsap.utils.toArray(".section").forEach((section) => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
        },
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out",
    });
});

// Dynamic Button Hover Ripple Effect
document.querySelectorAll(".mechanical-btn").forEach((btn) => {
    btn.addEventListener("mouseenter", (e) => {
        const ripple = document.createElement("span");
        const rect = btn.getBoundingClientRect();
        ripple.classList.add("ripple");
        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;
        btn.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

// Animated Gears Background (Canvas)
const canvas = document.getElementById("gearCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let gears = [];
let mouseX = 0;
let mouseY = 0;

// Gear Object
function Gear(x, y, radius, spokes) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.spokes = spokes;
    this.angle = 0;
    this.speed = Math.random() * 0.02 + 0.01;

    this.draw = function () {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);

        // Outer Circle
        ctx.beginPath();
        ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = "#6eea76";
        ctx.lineWidth = 2;
        ctx.stroke();

        // Spokes
        for (let i = 0; i < this.spokes; i++) {
            const spokeAngle = (Math.PI * 2 * i) / this.spokes;
            ctx.beginPath();
            ctx.moveTo(
                Math.cos(spokeAngle) * (this.radius - 10),
                Math.sin(spokeAngle) * (this.radius - 10)
            );
            ctx.lineTo(
                Math.cos(spokeAngle) * (this.radius + 10),
                Math.sin(spokeAngle) * (this.radius + 10)
            );
            ctx.stroke();
        }

        ctx.restore();
    };

    this.update = function () {
        this.angle += this.speed;
        this.draw();
    };
}

// Create Random Gears
function createGears() {
    gears = [];
    for (let i = 0; i < 15; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 40 + 20;
        const spokes = Math.floor(Math.random() * 8 + 6);
        gears.push(new Gear(x, y, radius, spokes));
    }
}

// Animate the Gears
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    gears.forEach((gear) => gear.update());

    // Rotate gears based on mouse position
    gears.forEach((gear) => {
        gear.angle += (mouseX - gear.x) * 0.0001; // Adjust speed based on mouseX
    });

    requestAnimationFrame(animate);
}

// Adjust Canvas on Resize
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createGears();
});

// Mouse Movement for Interaction
window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});
document.addEventListener("mousemove", (e) => {
    document.querySelectorAll(".parallax-layer").forEach((layer) => {
        const speed = layer.getAttribute("data-speed");
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        layer.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Initialize the Gears Animation
createGears();
animate();
