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

function drawBackground() {
  
  ctx.fillStyle = '#87ceeb';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  
  ctx.beginPath();
  ctx.moveTo(0, canvas.height);
  ctx.lineTo(canvas.width * 0.3, canvas.height * 0.5);
  ctx.lineTo(canvas.width * 0.6, canvas.height);
  ctx.closePath();
  ctx.fillStyle = '#556b2f';
  ctx.fill();

  
  ctx.beginPath();
  ctx.moveTo(canvas.width * 0.4, canvas.height);
  ctx.lineTo(canvas.width * 0.7, canvas.height * 0.6);
  ctx.lineTo(canvas.width, canvas.height);
  ctx.closePath();
  ctx.fillStyle = '#8b7765';
  ctx.fill();
}

function animateCircle(timestamp) {
  let baseY = canvas.height / 2;
  let amplitude = 100;
  let y = baseY - Math.sin(progress * Math.PI) * amplitude; 
  let startX = radius;
  let endX = canvas.width - radius;

  if (!startTime) startTime = timestamp;
  progress = (timestamp - startTime) / duration;
  if (progress > 1) progress = 1;

  drawBackground(); 

  const g = Math.round(lerp(255, 0, progress));
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