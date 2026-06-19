// Ensure Three.js is loaded
if (typeof THREE === 'undefined') {
    console.error('Three.js is not loaded');
}

// Setup Scene, Camera, Renderer
const canvas = document.querySelector('#bg-canvas');
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x050505, 0.001);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 30;

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

// Create Particles for a "Neural Network / AI" Vibe
const particleCount = 700;
const particles = new THREE.BufferGeometry();
const particlePositions = new Float32Array(particleCount * 3);
const particleVelocities = [];

for (let i = 0; i < particleCount; i++) {
    const x = (Math.random() - 0.5) * 100;
    const y = (Math.random() - 0.5) * 100;
    const z = (Math.random() - 0.5) * 50;

    particlePositions[i * 3] = x;
    particlePositions[i * 3 + 1] = y;
    particlePositions[i * 3 + 2] = z;

    particleVelocities.push({
        x: (Math.random() - 0.5) * 0.05,
        y: (Math.random() - 0.5) * 0.05,
        z: (Math.random() - 0.5) * 0.05
    });
}

particles.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

// Particle Material (Neon Purple/White)
const particleMaterial = new THREE.PointsMaterial({
    color: 0x9d4edd,
    size: 0.2,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
});

const particleSystem = new THREE.Points(particles, particleMaterial);
scene.add(particleSystem);

// Create Lines Connecting Particles (Network Effect)
const lineMaterial = new THREE.LineBasicMaterial({
    color: 0x7b2cbf,
    transparent: true,
    opacity: 0.15,
    blending: THREE.AdditiveBlending
});

// We'll update the lines in the animation loop based on distance
let lineGeometry = new THREE.BufferGeometry();
let lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
scene.add(lineMesh);

// Mouse Interaction
let mouseX = 0;
let mouseY = 0;
let targetX = 0;
let targetY = 0;

const windowHalfX = window.innerWidth / 2;
const windowHalfY = window.innerHeight / 2;

document.addEventListener('mousemove', onDocumentMouseMove, false);

function onDocumentMouseMove(event) {
    mouseX = (event.clientX - windowHalfX) * 0.05;
    mouseY = (event.clientY - windowHalfY) * 0.05;
}

// Animation Loop
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);
    
    targetX = mouseX * 0.1;
    targetY = mouseY * 0.1;

    // Smooth camera movement based on mouse
    camera.position.x += (mouseX - camera.position.x) * 0.02;
    camera.position.y += (-mouseY - camera.position.y) * 0.02;
    camera.lookAt(scene.position);

    // Update particles
    const positions = particleSystem.geometry.attributes.position.array;
    
    // Arrays for lines
    const linePositions = [];

    // Simple particle movement & line connection logic
    for (let i = 0; i < particleCount; i++) {
        // Move particles
        positions[i * 3] += particleVelocities[i].x;
        positions[i * 3 + 1] += particleVelocities[i].y;
        positions[i * 3 + 2] += particleVelocities[i].z;

        // Bounce off bounds
        if (Math.abs(positions[i * 3]) > 50) particleVelocities[i].x *= -1;
        if (Math.abs(positions[i * 3 + 1]) > 50) particleVelocities[i].y *= -1;
        if (Math.abs(positions[i * 3 + 2]) > 25) particleVelocities[i].z *= -1;

        // Connect nearby particles (optimization: only check a subset to maintain performance)
        for (let j = i + 1; j < particleCount; j += 4) {
            const dx = positions[i * 3] - positions[j * 3];
            const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
            const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
            const dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
            
            // If close enough, draw a line
            if (dist < 8) {
                linePositions.push(
                    positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
                    positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
                );
            }
        }
    }

    particleSystem.geometry.attributes.position.needsUpdate = true;
    
    // Update lines geometry
    lineMesh.geometry.dispose();
    lineMesh.geometry = new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));

    // Slowly rotate the whole system
    particleSystem.rotation.y += 0.001;
    lineMesh.rotation.y += 0.001;

    renderer.render(scene, camera);
}

// Handle Resize
window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Start Animation
animate();

// Glitch Text Effect on Hover
const glitchText = document.querySelector('.glitch-text');
if(glitchText) {
    glitchText.addEventListener('mouseover', () => {
        glitchText.style.animation = 'glitch-anim 0.2s infinite';
    });
    glitchText.addEventListener('mouseout', () => {
        glitchText.style.animation = 'none';
    });
}
