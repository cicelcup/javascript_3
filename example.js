//Example of video 3


//Funcion normal como Java
function sumar(a, b) {
    return a + b;
}

console.log(sumar(3,5))
console.log("--------------------------")

///Funcion como Arrow
const sumar2 = (a, b) => a + b
console.log(sumar2(3,10))
console.log("--------------------------")

///Funcion que no recibe parametro
const sumar3  = () => {
    console.log("Jorge")
}
sumar3()
console.log("--------------------------")

///declaracion de un array
var testArray = [1,2,3,4,5];

///Agregar los valores de un array en otro array
var testArray2 = [6,7,8,9,10, ...testArray];
console.log(testArray2)
console.log("--------------------------")

///Agregar un array como un elemento de otro array
var testArray3 = [11,12,13,14,15, testArray];
console.log(testArray3)
console.log("--------------------------")

///Agregar una funcion con parametros variables
const sumar4 = (a, b, ...testArray) => a + b + testArray[3]
console.log(sumar4(3, 4, testArray2))
console.log("--------------------------")

///Agregar una función con un parametro por defecto
const sumar5 = (a, b , c = 10) => a + b + c
console.log(sumar5(3, 4))
console.log("--------------------------")

///Reducir un array sumaando los valores
console.log(testArray.reduce((a, b) => a + b))

///Reducir un array multiplicando los valores
console.log(testArray.reduce((a, b) => a * b))


///Defincion de un Map
const mapExample = new Map()
mapExample.set("a", 1)
mapExample.set("b", 2)
mapExample.set("c", 3)
mapExample.set("c", 4)

console.log(mapExample)
console.log(mapExample.has("a"))
console.log(mapExample.has("d"))

mapExample.delete("a")
console.log(mapExample.size)

for (const [key, value] of mapExample) {
     console.log(key + " ============ " + value)
}

///Definicion de un set

const setExample = new Set()
setExample.add(1)
setExample.add(2)
setExample.add(3)
setExample.add(1)
setExample.add(2)

console.log(setExample.size)


for (const value of setExample) {
    console.log(value)
}

setExample.delete(1)

console.log("---------------------")
for (const value of setExample) {
    console.log(value)
}


(function(nombre) {
    console.log("Hola, " + nombre + " desde la IIFE");
})("Juan");

(function() {
    console.log("Hola desde la IIFE");
})();

(() => {
    console.log("Hola desde la IIFE 23");
})();

