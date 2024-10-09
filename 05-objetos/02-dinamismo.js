const user = { id:1 }

user.name= 'nicolas'
user.guardar = function () {
    console.log('Guardando')
}

user.guardar()

delete user.name
delete user.guardar
console.log(user)

//const user1 = Object.freeze({id: 1}) --> todo es fijo, no se puede cambiar nada
const user1 = Object.seal({id: 1})//propiedades fijas, valores dinamicos
user1.name = 'Nico'
user1.id = 2
console.log(user1)