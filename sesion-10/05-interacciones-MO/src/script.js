import * as THREE from 'three'
import gsap from 'gsap';
/**
 * Base
 */

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const object1 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 8, 8),
    new THREE.MeshBasicMaterial({ color: '#ff6600', wireframe: true })
);
object1.position.x = -0.8;

const object2 = new THREE.Mesh(
    new THREE.BoxGeometry(0.8, 0.8, 0.8),
    new THREE.MeshBasicMaterial({ color: '#00ff66', wireframe: true })
);
object2.position.x = 0.8;

scene.add(object1, object2);

// Array of objects for easier management
const objects = [object1, object2];

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});


/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);
camera.position.z = 3;
scene.add(camera);


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));


/**
 * Raycaster
 */
const raycaster = new THREE.Raycaster()
const pointer = new THREE.Vector2()

// Mouse move handler
window.addEventListener('mousemove', (event) => {
    // Convert mouse position to normalized device coordinates
    pointer.x = (event.clientX / sizes.width) * 2 - 1
    pointer.y = - (event.clientY / sizes.height) * 2 + 1
})

// Mouse click handler
window.addEventListener('click', (event) => {
    // Convert mouse position to normalized device coordinates
    pointer.x = (event.clientX / sizes.width) * 2 - 1
    pointer.y = - (event.clientY / sizes.height) * 2 + 1
    
    // Update raycaster with current mouse position
    raycaster.setFromCamera(pointer, camera)
    const intersects = raycaster.intersectObjects(objects)
    
    if(intersects.length) {
        const clickedObject = intersects[0].object
        // Animate rotation 720° (2 full rotations) on Y axis
        gsap.to(clickedObject.rotation, { 
            y: clickedObject.rotation.y + Math.PI * 4, // 720° = 4π radianes
            duration: 2,
            ease: "power2.out"
        })
    }
})

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    // Update raycaster
    raycaster.setFromCamera(pointer, camera)
    const intersects = raycaster.intersectObjects(objects)

    // Reset all objects to normal scale first
    objects.forEach(obj => {
        gsap.to(obj.scale, { x: 1, y: 1, z: 1, duration: 0.3 })
    })

    if(intersects.length) {
        const hoveredObject = intersects[0].object
        // Scale up only the hovered object
        gsap.to(hoveredObject.scale, { x: 1.5, y: 1.5, z: 1.5, duration: 0.3 })
    }

    // Animate objects
    object1.position.y = Math.sin(elapsedTime * 2) * 0.1;
    object2.position.y = Math.cos(elapsedTime * 2) * 0.1;

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
}

tick();