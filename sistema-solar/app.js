console.log(THREE);
console.log(gsap);

// 2. Configurar canvas.
const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 3. Configurar escena 3D.
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true }); 
renderer.setSize(canvas.width, canvas.height);
const camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 0.1, 1000);

// 3.1 Configurar mesh.
const sun = new THREE.SphereGeometry(3, 128, 128); 

const sunMaterial = new THREE.MeshStandardMaterial({ 
    color: "#fff700", 
    emissive: "#fff700", // Brilla como el Sol
    emissiveIntensity: 1 
});

const sunMesh = new THREE.Mesh(sun, sunMaterial);
scene.add(sunMesh);

sunMesh.position.set(-16, 0, -7);

const merc = new THREE.SphereGeometry(1.5, 128, 128);
const venus = new THREE.SphereGeometry(0.7, 128, 128);
const earth = new THREE.SphereGeometry(1, 128, 128);
const mars = new THREE.SphereGeometry(0.5, 128, 128);
const jup = new THREE.SphereGeometry(0.9, 128, 128);
const sat = new THREE.SphereGeometry(0.7, 128, 128);
const ur = new THREE.SphereGeometry(0.3, 128, 128);

const mercMaterial = new THREE.MeshStandardMaterial({ color: "#e71b1b" });
const venusMaterial = new THREE.MeshStandardMaterial({ color: "#e7c51b" });
const earthMaterial = new THREE.MeshStandardMaterial({ color: "#1b6ee7" });
const marsMaterial = new THREE.MeshStandardMaterial({ color: "#b22222" });
const jupMaterial = new THREE.MeshStandardMaterial({ color: "#e7a51b" });
const satMaterial = new THREE.MeshStandardMaterial({ color: "#e7e21b" });
const urMaterial = new THREE.MeshStandardMaterial({ color: "#1be7e7" });

const mercMesh = new THREE.Mesh(merc, mercMaterial);
const venusMesh = new THREE.Mesh(venus, venusMaterial);
const earthMesh = new THREE.Mesh(earth, earthMaterial);
const marsMesh = new THREE.Mesh(mars, marsMaterial);
const jupMesh = new THREE.Mesh(jup, jupMaterial);
const satMesh = new THREE.Mesh(sat, satMaterial);
const urMesh = new THREE.Mesh(ur, urMaterial);


scene.add(mercMesh);
scene.add(venusMesh);
scene.add(earthMesh);
scene.add(marsMesh);
scene.add(jupMesh);
scene.add(satMesh);
scene.add(urMesh);

mercMesh.position.set(-10, 0, -7);   // Mercurio
venusMesh.position.set(-7, 0, -7);   // Venus
earthMesh.position.set(-4, 0, -7);   // Tierra
marsMesh.position.set(-1, 0, -7);    // Marte
jupMesh.position.set(2, 0, -7);      // Júpiter
satMesh.position.set(5, 0, -7);      // Saturno
urMesh.position.set(8, 0, -7);       // Urano

// 3.2 Crear luces.
const frontLight = new THREE.PointLight("#fff9e0", 50, 50);
frontLight.position.set(7, 7, 7);
scene.add(frontLight);

const rimLight = new THREE.PointLight("#fff9e0", 50, 50);
rimLight.position.set(-7, -7, -7);
scene.add(rimLight);

// Luz ambiental para iluminar toda la escena suavemente
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Luz direccional simulando el Sol
const sunLight = new THREE.DirectionalLight(0xfff9e0, 1.2);
sunLight.position.set(20, 20, 20);
scene.add(sunLight);

//// B) Rotación al scrollear.

// 1. Crear un objeto con la data referente al SCROLL para ocuparla en todos lados.
var scroll = {
   y: 0,
   lerpedY: 0,
   speed: 0.005,
   cof: 0.1
};

// 2. Escuchar el evento scroll y actualizar el valor del scroll.
function updateScrollData(eventData) {
   scroll.y += eventData.deltaX * scroll.speed;
}

window.addEventListener("wheel", updateScrollData);

// 3. Aplicar el valor del scroll a la rotación del mesh. (en el loop de animación)
function updateMeshRotation() {
   earthMesh.rotation.y = scroll.lerpedY;
}

// 5. Vamos a suavizar un poco el valor de rotación para que los cambios de dirección sean menos bruscos.
function lerpScrollY() {
     scroll.lerpedY += (scroll.y - scroll.lerpedY) * scroll.cof;
}

//// C) Movimiento de cámara con mouse (fricción) aka "Gaze Camera".
// 1. Crear un objeto con la data referente al MOUSE para ocuparla en todos lados.
var mouse = {
   x: 0,
   y: 0,
   normalOffset: {
       x: 0,
       y: 0
   },
   lerpNormalOffset: {
       x: 0,
       y: 0
   },

   cof: 0.07,
   gazeRange: {
       x: 70,
       y: 30
   }
}
// 2. Leer posición del mouse y calcular distancia del mouse al centro.
function updateMouseData(eventData) {
   updateMousePosition(eventData);
   calculateNormalOffset();
}
function updateMousePosition(eventData) {
   mouse.x = eventData.clientX;
   mouse.y = eventData.clientY;
}
function calculateNormalOffset() {
   let windowCenter = {
       x: canvas.width / 2,
       y: canvas.height / 2,
   }
   mouse.normalOffset.x = ( (mouse.x - windowCenter.x) / canvas.width ) * 2;
   mouse.normalOffset.y = ( (mouse.y - windowCenter.y) / canvas.height ) * 2;
}
function lerpDistanceToCenter() {
   mouse.lerpNormalOffset.x += (mouse.normalOffset.x - mouse.lerpNormalOffset.x) * mouse.cof;
   mouse.lerpNormalOffset.y += (mouse.normalOffset.y - mouse.lerpNormalOffset.y) * mouse.cof;
}

window.addEventListener("mousemove", updateMouseData);

// 3. Aplicar valor calculado a la posición de la cámara. (en el loop de animación)
function updateCameraPosition() {
   camera.position.x = mouse.lerpNormalOffset.x * mouse.gazeRange.x;
   camera.position.y = -mouse.lerpNormalOffset.y * mouse.gazeRange.y;
}

///////// Interacción al click.
// Al hacer click en el canvas, animamos el scale del mesh.
canvas.addEventListener("click", () => {
   gsap.to(earthMesh.scale, {
       x: earthMesh.scale.x + 0.2,
       y: earthMesh.scale.y + 0.2,
       z: earthMesh.scale.z + 0.2,
       duration: 1,
       ease: "bounce.out" // puedes cambiarlo a ease: "power2.out", etc.
   });
});

// Final. Crear loop de animación para renderizar constantemente la escena.
function animate() {
    requestAnimationFrame(animate);

    lerpScrollY();
    updateMeshRotation();

    lerpDistanceToCenter();
    updateCameraPosition();
    camera.lookAt(earthMesh.position);

    renderer.render(scene, camera);
}

animate();

document.addEventListener('DOMContentLoaded', function() {
    const instrucciones = document.querySelector('.instrucciones');
    let faded = false;

    function fadeInstructions() {
        if (!faded && instrucciones) {
            instrucciones.style.opacity = '0';
            faded = true;
        }
    }

    window.addEventListener('scroll', fadeInstructions, { once: true });
    window.addEventListener('wheel', fadeInstructions, { once: true });
    window.addEventListener('touchmove', fadeInstructions, { once: true });
    window.addEventListener('keydown', fadeInstructions, { once: true });
});

function updateCanvasSize() {
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
}

function updateRenderer() {
   renderer.setSize(canvas.width, canvas.height);

   // actualizar pixel ratio (para pantallas retina, pero limitar a 2 para rendimiento)
   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}

function updateCameraAspect() {
   camera.aspect = canvas.width / canvas.height;
   camera.updateProjectionMatrix();
}

 
window.addEventListener("resize", function() {
   updateCanvasSize();
   updateRenderer();
   updateCameraAspect();
});
