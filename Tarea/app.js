console.log("Hola, mundo!");
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const ctx = canvas.getContext('2d');
const radius = 40;
let progress = 0;
const duration = 2000; 
let startTime = null;

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function animateCircle(timestamp) {
  let baseY = canvas.height / 2;
  let amplitude = 100;
  let y = baseY - Math.sin(progress * Math.PI) * amplitude; 
  let endX = canvas.width - radius;

  if (!startTime) startTime = timestamp;
  progress = (timestamp - startTime) / duration;
  if (progress > 1) progress = 1;

  const g = Math.round(lerp(255, 0, progress));
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(lerp(startX, endX, progress), y, radius, 0, Math.PI * 2);
  ctx.fillStyle = `rgb(255,${g},0)`;
  ctx.fill();

  if (progress < 1) {
    requestAnimationFrame(animateCircle);
  }
}

requestAnimationFrame(animateCircle);

canvas.addEventListener('click', () => {
  startTime = null;
  progress = 0;
  requestAnimationFrame(animateCircle);
});