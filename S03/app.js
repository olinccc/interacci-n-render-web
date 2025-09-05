console.log("Hola, mundo!");

console.log(gsap);



window.addEventListener("mousedown", function () {
    gsap.to(

      ".rectangulo", 
      {
        x: 500,
        duration: 5,
        ease: "bounce.inOut",
      }
    );
  });