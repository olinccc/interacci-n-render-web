// 01. Renderizar 1 imagen.

console.log('main.js');
/*Definir en una constante el espacio mínimo que deseamos entre cada imagen.
Crear una variable tipo objeto para guardar la posición de la última imagen creada y poder medir la distancia al mouse.
En el evento “mousemove” donde estamos invocando la función para crear imágenes, vamos a definir la condición para crear la imagen:
Primero calculamos la distancia en X y Y entre la posición de la última imagen y el mouse actualmente.
Si la distancia calculada es mayor a nuestro espacio mínimo, solo entonces creamos la imagen.
Finalmente, actualizamos el registro de la posición de la última imagen ya que creamos una nueva.
*/

const minDistance = 100;
var lastPos = {
    x:0, 
    y:0
};

// 04. Mostrarlas en ciclo.

var imagesList = [
      "./assets/p1.jpg"
    , "./assets/p2.jpg"
    , "./assets/p3.jpg"
    , "./assets/p4.jpg"
    , "./assets/p5.jpg"
];

var index = 0;

/*Crear etiqueta <img> virtual.
Cargar imagen desde una fuente (src).
Definir su estilo / apariencia (CSS).
ancho / alto.
posición (x / y).
otros: esquinas redondeadas, bordes, sombra proyectada, etc.


Agregarla al <Documento>.
Agrupar estas instrucciones en una función.
*/
function createFloatingImage(posX, posY) {
    const img = document.createElement('img');
    img.src = imagesList[index];
    img.style.width = "300px";
    img.style.height = "150px";
    img.style.top = `${posY -75}px`;
    img.style.left = posX - (113.5) + "px";
    img.style.position = "absolute";
    img.style.opacity = 0;
    img.style.zIndex = Math.round(Math.random() * 10);
    document.body.appendChild(img);
    gsap.to(img,{
        duration: 1,
        y: "-60px",
        opacity: 1,
        ease: "power3.out"
    });
    index = index + 1;
    if (index >= imagesList.length) {
        index = 0;
    }

    setTimeout(function(){
        gsap.to(img,{
            duration: 1,
            opacity: 0,
            ease: "power3.out",
            onComplete: function() {
                img.remove();
            }
        });
    }, 1000);   
}

// 02. Renderizar “n” imágenes.

window.addEventListener('mousemove', function(eventData){
    console.log(eventData);
    // Calcular distancia entre el mouse y la última imagen creada evaluar nuestra condición
    //1. Calcular distancia 
    var dx = eventData.clientX - lastPos.x;
    dx = Math.abs(dx);

    var dy = Math.abs(eventData.clientY - lastPos.y);

    if (dx >= minDistance || dy >= minDistance) {
        createFloatingImage(eventData.clientX, eventData.clientY);
        lastPos.x = eventData.clientX;
        lastPos.y = eventData.clientY; 
    }
});




// 03. Posicionarlas según el mouse.



// 05. Desaparecerlas después de “x” tiempo.
// 06. Hacer su animación de salida.
// 07. Hacer su animación de entrada.
// 08. Renderizarlas cada “x” distancia.
// 09. Renderizarlas adelante y atrás de cada letra.
