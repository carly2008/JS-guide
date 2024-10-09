function crearUsuario(name ,email){
    return user = {
        email,
        name,
        activo:true,
        recuperarClave: function(){
            console.log('Recuperando clave...')
        }
    }
}

let user1 = crearUsuario('carlos', 'carlos@example.com')
let user2 = crearUsuario('laura', 'laura@example.com')

console.log(user1,user2)