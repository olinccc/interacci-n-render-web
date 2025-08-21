const canvas = document.getElementById('lienzo');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var w = 550;
var h = 550;

const ctx = canvas.getContext('2d');

const repeticiones = 3;
const escala = 0.6; 

let wv = w;
let hv = h;

for (let i = 0; i < repeticiones; i++) {
    const xp = (canvas.width - wv) / 2;
    const yp = (canvas.height - hv) / 2;

    ctx.beginPath();
    ctx.fillStyle = '#E3E6D8'; 
    ctx.lineWidth = 10;
    ctx.rect(xp, yp, wv, hv);
    ctx.fill();

    const centroX = xp + wv / 2;
    const centroY = yp + hv / 2;
    const radio = Math.min(wv, hv) / 2 - ctx.lineWidth;

    ctx.beginPath();
    ctx.fillStyle = (i === repeticiones - 1) ? 'red' : 'black'; 
    ctx.lineWidth = 8;
    ctx.arc(centroX, centroY, radio, 0, 2 * Math.PI);
    ctx.fill();

    wv *= escala;
    hv *= escala;
}