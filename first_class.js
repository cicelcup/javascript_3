function printInScreen(text, text2) {
    console.log(text);
    console.log(text2);
}

function printInScreen2(text, text2) {
    console.log(text + " " + text2);
}

function imprimirEnPantalla(funcionQueVoyAEjecutar) {
    funcionQueVoyAEjecutar("hola","mundo");
}


imprimirEnPantalla(printInScreen)
imprimirEnPantalla(printInScreen2)