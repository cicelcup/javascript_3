let promise = new Promise((resolve, reject) => {
    console.log("Voy a esperar un segundo")
    setTimeout(() => {
        const sucess = Math.random() > 0.5
        if(sucess){
            resolve('Success')
        }
        else{
            reject('Error')
        }
    }, 1000)
})

promise.then(
    function (value) {
        console.log(value)
    },
    function (error) {
        console.log(error)
        console.log(error)
    }
)

