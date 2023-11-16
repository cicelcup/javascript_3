function newPrinter(value){
    console.log(value)
}

function getData(callback){
    console.log("Voy a esperar un segundo")
    setTimeout(() => {
        const sucess = Math.random() > 0.5
        if(sucess){
            callback('Success')
        }
        else{
            callback('Error')
        }
    }, 1000)
}

getData(newPrinter)