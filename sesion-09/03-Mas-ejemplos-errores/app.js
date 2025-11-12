/* 03. Más ejemplos de errores. */
console.log('03. Más ejemplos de errores.');

// --- CONFIGURACIÓN ---
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 300;

// Declara ball como un objeto vacío
let ball = {};

// Modifica ball dentro de la función
function createBall() {
    ball.x = 250;
    ball.y = 50;
    ball.radius = 20;
    ball.color = 'red';
}

createBall(); // Llama a la función para inicializar ball

// --- VARIABLES GLOBALES ---
let gravity = 0.2;
let speed = { x: 2, y: 0 };

function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = ball.color;
    ctx.fill();
}

function updateBall() {
    ball.y += speed.y;
    ball.x += speed.x;
    speed.y += gravity;

    // Rebote en el piso
    if (ball.y + ball.radius > canvas.height) {
        ball.y = canvas.height - ball.radius;
        speed.y *= -0.8;
    }

    // Rebote en los lados
    if (ball.x > canvas.width - ball.radius || ball.x < ball.radius) {
        speed.x *= -1;
    }
}

function animate() {
    ctx.fillStyle = 'rgba(0,0,0,0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    updateBall();
    drawBall();
    requestAnimationFrame(animate);
}

animate();
////Noté que ball no se estaba definido correctamente porque se estaba sobreescribiendo, así que le quité el createBall y luego modifiqué sus propiedades dentro de createBall y luego llame a createBall para inicializar ball antes de usarlo. 