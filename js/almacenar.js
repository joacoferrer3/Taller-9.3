// Integrantes : Joaquin Ferrer, Felipe Pacin, Santiago Articardi, Axel Facchin, Sofía Hernández

const botonAgregar = document.getElementById("agregar");
const botonLimpiar = document.getElementById("limpiar");
const lista = document.getElementById("contenedor");
const input = document.getElementById("item");



botonAgregar.addEventListener("click",() => {
    
    if (input.value != "") {    
        if (window.localStorage.getItem("text") == null) {
            valoresActuales = ""
        } else {
            valoresActuales = window.localStorage.getItem("text");
        }
        a_guardar = `<li>${input.value}</li>`
        window.localStorage.setItem("text", valoresActuales + a_guardar)
        lista.innerHTML = window.localStorage.getItem("text");
        input.value = "";
    };
});

lista.innerHTML = localStorage.getItem("text");


botonLimpiar.addEventListener("click", () => {
    localStorage.clear();
    lista.innerText = "";
});