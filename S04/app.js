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
const mesh = new THREE.Mesh(
   new THREE.SphereGeometry(),
   new THREE.MeshBasicMaterial({ color: "#ff6600", wireframe: true })
);

//Agregar nuestro objeto a la escena 
scene.add(mesh);


//mover nuestro mesh en la escena
mesh.position.z = -5;


//para renerizar lo que esta viendo nuestra escena
renderer.render(scene, camera);