function Usario(nombre){
    this.nombre = nombre
}
console.log(Usario.name)
console.log(Usario.length)

const U = Usario
let user = new U('Carlos')

console.log(user)

function of(Fn, arg) {
    return new Fn(arg)
}

let user1 = of(U,'lauta')
console.log(user1)

function returned() {
    return function() {
        console.log('hola mundo')
    }
}
let saludo = returned()
saludo()