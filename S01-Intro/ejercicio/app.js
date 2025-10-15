console.log("Hola, mundo!");

const canvas = document.getElementById("lienzo");
console.log(canvas);

const ctx = canvas.getContext("2d");
console.log(ctx);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Rectángulo verde con bordes azules
ctx.beginPath();
ctx.fillStyle = "#00ff00";
ctx.strokeStyle = "#0000ff";
ctx.lineWidth = 5;
ctx.rect(600, 200, 300, 150); // x, y, width, height
ctx.fill();
ctx.stroke();

// Línea roja 1
ctx.beginPath();
ctx.strokeStyle = "#ff0000";
ctx.lineWidth = 3;
ctx.moveTo(100, 350);
ctx.lineTo(400, 350);
ctx.stroke();

// Línea roja 2
ctx.beginPath();
ctx.strokeStyle = "#ff0000";
ctx.lineWidth = 3;
ctx.moveTo(200, 400);
ctx.lineTo(500, 400);
ctx.stroke();

// Línea roja 3
ctx.beginPath();
ctx.strokeStyle = "#ff0000";
ctx.lineWidth = 3;
ctx.moveTo(300, 450);
ctx.lineTo(600, 450);
ctx.stroke();