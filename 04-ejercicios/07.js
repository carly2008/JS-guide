/**
 * crea un algoritmo que devuelva
 * el precio del producto
 * más impuestos 
*/

function precioCompleto(p,imp){
    return p*imp + p
}

let resultado = precioCompleto(19.90, 0.15)
console.log(resultado)