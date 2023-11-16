function procesamientoAPI(input, callback){
    if(input){
        callback("correcto");
    }
    else{
        callback("incorrecto");
    }
}


function imprimirEnPantalla(callback){
    console.log(callback)
}

procesamientoAPI(true, imprimirEnPantalla)
procesamientoAPI(false, imprimirEnPantalla)


