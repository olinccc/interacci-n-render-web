const canvas = document.getElementById('lienzo');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const cantidad = 11;
const radio = 100;
const espacio = -180; 

const centroX = canvas.width / 2;
const totalAltura = cantidad * (radio * 2) + (cantidad - 1) * espacio;
const inicioY = (canvas.height - totalAltura) / 2 + radio;

for (let i = 0; i < cantidad; i++) {
    const y = inicioY + i * (radio * 2 + espacio);
   ctx.beginPath();
   ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.arc(centroX, y, radio, 0, 2 * Math.PI);
    ctx.stroke();
}

ctx.strokeStyle = "black";

window.addEventListener("mousemove", function(eventData){
    console.log('hola x:', eventData.x);
    console.log( 'hola y:', eventData.y);
    console.log("mouse up");

    
    
ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.ellipse(centroX, 240, 120, 120, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(centroX, 260, 120, 120, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(centroX, 280, 120, 120, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(centroX, 300, 120, 120, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(centroX, 320, 120, 120, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(centroX, 340, 120, 120, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(centroX, 360, 120, 120, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(centroX, 380, 120, 120, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(centroX, 400, 120, 120, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(centroX, 420, 120, 120, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(centroX, 440, 120, 120, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(eventData.x, eventData.y, 120, 120, 0, 0, Math.PI * 2);
    ctx.stroke();
});

window.addEventListener("mousedown", function(eventData){

    console.log("mouse down");

    ctx.strokeStyle = "red";
    
//ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.ellipse(centroX, 240, 120, 120, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(centroX, 260, 120, 120, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(centroX, 280, 120, 120, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(centroX, 300, 120, 120, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(centroX, 320, 120, 120, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(centroX, 340, 120, 120, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(centroX, 360, 120, 120, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(centroX, 380, 120, 120, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(centroX, 400, 120, 120, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(centroX, 420, 120, 120, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(centroX, 440, 120, 120, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(eventData.x, eventData.y, 120, 120, 0, 0, Math.PI * 2);
    ctx.stroke();
});
window.addEventListener("mouseup", function(eventData){

    console.log("mouse up");

    ctx.strokeStyle = "black";
    
//ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.ellipse(centroX, 240, 120, 120, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(centroX, 260, 120, 120, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(centroX, 280, 120, 120, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(centroX, 300, 120, 120, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(centroX, 320, 120, 120, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(centroX, 340, 120, 120, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(centroX, 360, 120, 120, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(centroX, 380, 120, 120, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(centroX, 400, 120, 120, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(centroX, 420, 120, 120, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(centroX, 440, 120, 120, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(eventData.x, eventData.y, 120, 120, 0, 0, Math.PI * 2);
    ctx.stroke();
});

const boton = document.getElementById('boton');
console.log(boton);

boton.addEventListener('mousedown', function() {
    console.log("mouse down en el botton");


ctx.fillStyle = 'blue';

ctx.beginPath();

ctx.rect(100, 200, 300, 50, Math.PI * 2);

ctx.fill();

});