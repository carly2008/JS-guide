let user = {
    id: 1,
    name: "Gleb Pironko",
    age: 16,
}
for (let prop in user){
    console.log(prop, user[prop])
}