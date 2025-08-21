console.log("Hola, mundo!");

const canvas = document.getElementById("lienzo");
console.log(canvas);

const ctx = canvas.getContext("2d");
console.log(ctx);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.beginPath();
ctx.strokeStyle = "orange";
ctx.lineWidth = 10;
ctx.ellipse(100, 100, 60, 60, 0, 0, Math.PI * 2); //x, y, radiusX, radiusY, rotation, startAngle, endAngle
ctx.stroke();

function dibujarCirculo(x, y) {
  ctx.beginPath();
  ctx.strokeStyle = "orange";
  ctx.lineWidth = 10;
  ctx.ellipse(x, y, 60, 60, 0, 0, Math.PI * 2); //x, y, radiusX, radiusY, rotation, startAngle, endAngle
  ctx.stroke();
}

dibujarCirculo(300, 300);
dibujarCirculo(500, 500);
dibujarCirculo(700, 700);
dibujarCirculo(900, 900);

const circulo = {
  colorLinea: "orange", 
  grosorLinea: 20,
  radio: 100,
  rotacion: 0,
  anguloInicial: 0,
  anguloFinal: Math.PI * 2,
  x: 50,
  y: 400,
  dibujar: function(x,y) {
    ctx.beginPath();
    ctx.strokeStyle = circulo.colorLinea;
    ctx.lineWidth = circulo.grosorLinea;
    ctx.ellipse(x, y, circulo.radio, circulo.radio, circulo.rotacion, circulo.anguloInicial, circulo.anguloFinal); //x, y, radiusX, radiusY, rotation, startAngle, endAngle
    ctx.stroke();
  }
}

circulo.dibujar(500, 500);

window.addEventListener("mousedown", function (eventData) {
    circulo.dibujar(eventData.clientX, eventData.clientY);           
});