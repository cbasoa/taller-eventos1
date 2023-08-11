document.addEventListener("DOMContentLoaded", function () {

document.getElementById("boton").addEventListener("click", function(){
    alert("Hola! Soy el div");
});


document.getElementById("boton").addEventListener("button", (e) => {
    if (this.onclick(myFunction())) {
      e.preventDefault();
    
    }
  });




});




