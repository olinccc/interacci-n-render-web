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
const material= new THREE.MeshNormalMaterial({
   flatShading: true
});

// Material.
const textureLoader = new THREE.TextureLoader();
var matcapMaterial;
var mesh;
var matcapMap = textureLoader.load(
   // Textura URL
   './texturas/textura.png',
   // on Load callback
   function (texture) {
       matcapMaterial = new THREE.MeshMatcapMaterial( { matcap: texture } );
       // Mesh.
       mesh = new THREE.Mesh( geometry, matcapMaterial );
       // 3. Poner objeto en la escena.
       scene.add(mesh);
       mesh.position.z = -5;
       mesh.rotation.x = 45;
       // 4. Activar animación.
       animate();
   },
   // on Progress (no funciona por ahora)
   undefined,
   // on Error callback
   function (error) { console.error("Algo salio mal con la textura,", error); }
);



//mover nuestro mesh en la escena


//para renerizar lo que esta viendo nuestra escena
renderer.render(scene, camera);

function animate() {
   requestAnimationFrame(animate);

   mesh.rotation.x += 0.01;
   mesh.rotation.y += 0.01;

   renderer.render(scene, camera);
}
// animate();

