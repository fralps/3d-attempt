// Initialize THREE JS scene, camera and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

// Add geometry sphere mesh
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshPhongMaterial();
const mesh = new THREE.Mesh(geometry, material);

// Initialize light
const light = new THREE.DirectionalLight(0xcccccc, 1);

// Render to the DOM
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Initialize camera and light position
camera.position.z = 4;
light.position.set(5, 3, 5);

// Load textures for Mars planet
material.map = new THREE.TextureLoader().load('textures/diffuse.jpg');
material.bumpMap = new THREE.TextureLoader().load('textures/bump.jpg');     
material.bumpScale = 0.015;

// Add all mesh to the scene
scene.add(mesh);
scene.add(light);

// Make Mars rotating
const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    mesh.rotation.y -= 0.0020;
};

animate();