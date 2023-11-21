function abrirVentana() {
    console.log("abrir ventana");
}

function cerrarVentana() {
    console.log("cerrar ventana");
}

function consultarApi(){
    console.log("llamar a la api");
    console.log("obtener datos");
    console.log("procesar datos");
}


function clickEnBoton(callback, input) {
    console.log(".")
    console.log("..")
    console.log("...")
    if(input){
        callback();
    }
    else{
        console.log("no se llamo a la funcion");
    }
}

clickEnBoton(consultarApi, true)
clickEnBoton(consultarApi, false)