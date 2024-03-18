function apretarBoton (){
    alert("Has apretado el botón!");
}

const boton = document. getElementById ("botonAlert");

boton.addEventListener('click', apretarBoton);
boton.addEventListener('mouseover', apretarBoton);