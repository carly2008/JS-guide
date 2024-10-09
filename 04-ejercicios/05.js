/**
 * Crear un algoritmo que devuelva el numero menor y mayor de un array
 */
let array = [2, 5, 7, 15, -5, -100, 55]

function getMenorMayor(arr) {
    let n_menor = arr[0]
    let n_mayor = arr[0]

    for (let i of arr) {
        if (i < n_menor) {
            n_menor = i
        }
        if (i > n_mayor) {
            n_mayor = i
        }
    }
    return [n_menor, n_mayor]

}

let numeros = getMenorMayor(array);
console.log(numeros);
