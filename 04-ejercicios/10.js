/**
 * crea un array de longitud N, y que sus elementos sean 
 * numeros de 1 hasta N
 */
let longitud = 0
function crearArray(n){
    let array = []
    let i = 0
    if (n <= 0){
        return 'longitud del array muy corta'
    }
    while(i < n){
        array[i]= i+1
        i++
    }
    return array
}
let resultado = crearArray(longitud)
console.log(resultado)