function cambiarTexto() {
    var elemento = document.getElementById("demo");
    elemento.innerHTML = "¡Gracias!!";

     // Mostrar el overlay
     var overlay = document.getElementById("overlay");
     overlay.style.display = "block";
 
     // Cambiar el fondo de forma animada
     var hue = Math.floor(Math.random() * 360);
     document.body.style.transition = "background 1s";
     document.body.style.background = "hsl(" + hue + ", 70%, 80%)";
 
     // Ocultar el overlay después de 1.5 segundos
     setTimeout(function () {
         overlay.style.display = "none";
     }, 1500);
}
