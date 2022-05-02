// Ejemplo 4: Métodos en los objetos

class Repository {
    constructor (name, author, languaje, stars){
        this.name = name
        this.author = author
        this.languaje = languaje
        this.stars = stars
    }

    getInfo(){//Es una funcion que ejecutará cuialquier objeto instanciado de esta clase
        return `Repository ${this.name} has ${this.stars} stars`

    }
}

console.log("Ejemplo 4: Metodos en los objetos")
const myRepo = new Repository("Launch X", "Kelvin", "js", 100)
console.log(myRepo.getInfo())

