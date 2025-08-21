console.log("Hola, mundo!");

const canvas = document.getElementById("lienzo");
console.log(canvas);

const ctx = canvas.getContext("2d");
console.log(ctx);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.beginPath();
ctx.strokeStyle = "#66ff00";
ctx.lineWidth = 10;
ctx.ellipse(100, 100, 60, 60, 0, 0, Math.PI * 2); //x, y, radiusX, radiusY, rotation, startAngle, endAngle
ctx.stroke();

function dibujarCirculo(x, y) {
  ctx.beginPath();
  ctx.strokeStyle = "#66ff00";
  ctx.lineWidth = 10;
  ctx.ellipse(x, y, 60, 60, 0, 0, Math.PI * 2); //x, y, radiusX, radiusY, rotation, startAngle, endAngle
  ctx.stroke();
}

dibujarCirculo(300, 300);
dibujarCirculo(500, 500);
dibujarCirculo(700, 700);
dibujarCirculo(900, 900);

window.addEventListener("mousemove", function (eventData) {
    dibujarCirculo(eventData.x, eventData.y);           
});