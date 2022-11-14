// Arreglos en JS
//const arreglo = new Array(100);
const arreglo = [1, 2, 3, 4];

// operador spread
let arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map(function(x){
    return x*2
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);