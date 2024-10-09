/**
 * Crear un algoritmo que devuelva el numero menor y mayor de un array
 */
let array = [2, 5, 7, 15, -5, -100, 55]

function cuantosPositivos(arr) {
    let positivo = 0
    for(let i of arr){
        if (i > 0){
            positivo++
        }
    }
    return positivo
}   

let resultado = cuantosPositivos(array);
console.log(resultado);
