function cualEsMayor(a,b){
    if(a>b){
        return a
    }
    else if (a === b) {
        return 'ambos numeros iguales'
    }
    else{
        return b
    }
}

let mayor = cualEsMayor(9,9)
console.log(mayor)