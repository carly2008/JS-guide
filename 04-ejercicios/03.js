/**
 * indice a valorar que no sea menor a 0 y 
 * que el elemento exista en el array
 */
function getbyInx(arr,idx){
    if(idx < 0){
        return 'elemento inexistente '
    }else if(arr.length <= idx){
        return 'elemento no exsiste'
    }else{
        return arr[idx]
    }
}

let resultado = getbyInx([1, 2,3,4,5,6,7,8,9], 10)
console.log(resultado)