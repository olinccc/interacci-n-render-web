/* Práctica 02. */
console.log('02. Práctica de errores B.');

// "Debuggeando el rebote"
// 🧩 Hay errores de tipo, sintaxis, referencia y lógica.

const canvas = document.getElementById("lienzo");
console.log(canvas);

const ctx = canvas.getContext("2d");
console.log(ctx);

// Tamaño del canvas
canvas.width = window.innerWidth; // Corrección de asignación
canvas.height = window.innerHeight; // Corrección de typo

// Propiedades de la pelota
let ball = {
    x: 100,
    y: 100,
    radius: 30,
    color: "red",
    speedX: 3,
    speedY: 2
};

// Función para dibujar la pelota
function drawBall() {
    ctx.beginPath(); // Iniciar trazo
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.closePath();
}

// Función para actualizar la posición
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Movimiento de la pelota
    ball.x += ball.speedX;
    ball.y += ball.speedY;

    // Rebote en los bordes
    if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
        ball.speedX *= -1;
    }
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.speedY *= -1;
    }

    drawBall();
    requestAnimationFrame(update);
}

// Ejecutar animación
update();