console.log("Hola, mundo!");
console.log(THREE);

//Definir nuestro canvas
const canvas = document.getElementById("lienzo");

//Definir variables del tamaño de la ventana 
var width = window.innerWidth;
var height = window.innerHeight;

//Actualizamos la resolución del canvas
canvas.width = width;
canvas.height = height;

//Código para configurar una escena 
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

const geometry= new THREE.TorusKnotGeometry();
const material= new THREE.MeshBasicMaterial();

const mesh = new THREE.Mesh(geometry, material);

mesh.position.z = -5;
mesh.rotation.x = 45;


//Agregar nuestro objeto a la escena 
scene.add(mesh);



//mover nuestro mesh en la escena


//para renerizar lo que esta viendo nuestra escena
renderer.render(scene, camera);

function animate() {
   requestAnimationFrame(animate);

   mesh.rotation.x += 0.01;
   mesh.rotation.y += 0.01;

   renderer.render(scene, camera);
}
animate();
