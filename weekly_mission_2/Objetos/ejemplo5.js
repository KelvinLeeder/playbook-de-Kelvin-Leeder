const mypet = {
    name: 'woopa',
    sayHelloToMyPEt: function(yourPet){
        console.log(`${this.name} say Hello to ${yourPet}`)

    }
}
console.log("Ejemplo 5: Objeto con metodo que recibe parametros")
mypet.sayHelloToMyPEt('paco')