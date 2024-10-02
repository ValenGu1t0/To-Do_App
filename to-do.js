

/* /////////////////////////////////////////////////// VARIABLES //////////////////////////////////////////////////////////// */

const boton = document.getElementById("boton_tareas");      // Boton de agregar

const input = document.getElementById("input_tareas");      // Caja input, de donde saco el texto cada vez

const ul = document.getElementById("caja_lista");           // Para seleccionar donde se inserta el li


/* /////////////////////////////////////////////////// PROGRAMA //////////////////////////////////////////////////////////// */


// Funcion que agrega LIST-ITEM y sus hijos (p y button) a la caja de items

function agregaListItem() {

    const texto = input.value;    // Obtenemos el texto que viene con el elemento input

    const nuevoListItem = document.createElement("li");

    const parrafo = document.createElement("p");

    const botonEliminar = document.createElement("button");


    if (texto.trim() !== "") {          // Aseguramos que no entre un string vacio..

        parrafo.innerText = texto;                  // Asignamos el valor del input a nuestro elemento p
        botonEliminar.innerText = "X";              // Y le agregamos un texto al boton que acabamos de crear

        nuevoListItem.appendChild(parrafo);             // Le anidamos el p
        nuevoListItem.appendChild(botonEliminar);       // Y el boton
        ul.appendChild(nuevoListItem);                  // Y una vez creado el li con p y button anidado, lo anidamos al ul

        input.value = "";                   // Limpiamos input desp de usarlo


        // Si quisieramos eliminar la tarea..
        botonEliminar.addEventListener("click", function terminaTarea() {

            ul.removeChild(nuevoListItem);
        });

    } else {   alert("Ingresa alguna tarea genio!");   }

}


// Se puede agregar un item con un click
boton.addEventListener("click", agregaListItem);


// O si detecta Enter en el input
input.addEventListener("keydown", function bufferEnter(event) {

    if (event.key === "Enter") {

        agregaListItem();
    }
});



// Tiramos alerta por si se escapa un salir sin querer.
window.addEventListener("beforeunload", function alertaSalida(event) {

    event.preventDefault();

    const mensajeAlerta = "Seguro que deseas salir? Perderás todo tu progreso...";

    event.alertaSalida = mensajeAlerta;   // Requerido en ciertos navegadores
    
    return mensajeAlerta; 
});


