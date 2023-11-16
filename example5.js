function newPrinter(value){
    console.log(value)
}

function getData(){
    setTimeout(() => {
        const sucess = Math.random() > 0.5
        if(sucess){
            newPrinter('Success')
        }
        else{
            newPrinter('Error')
        }
    }, 1000)
}

getData()