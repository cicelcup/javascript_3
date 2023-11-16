let promise = new Promise((resolve, reject) => {
    resolve("correcto");
    reject("incorrecto");
})

promise.then(
    function(value){
        console.log(value)
    },
    function(error){
        console.log(error)
        console.log(error)
    }
)