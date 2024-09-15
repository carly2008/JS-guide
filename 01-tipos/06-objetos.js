// Personaje
let Personaje = {
    nombre:"Goku",
    anime:"Dragon Ball",
    edad:40,
};
console.log(Personaje)
console.log(Personaje.nombre)
console.log(Personaje['anime'])

let llave = 'edad'

Personaje.anime = "Dragon ball Daima"
Personaje[llave] = 14

delete(Personaje.edad)

console.log(Personaje)