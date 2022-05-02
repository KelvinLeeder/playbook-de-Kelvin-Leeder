// Ejemplo 10: Overrinding methods

class Explorer {
    constructor(name, username, mission){
        this.name = name
        this.username = username
        this.mission = mission
    }

    getNameAndUsername(){
        return `Explorer ${this.name}, username: ${this.username}`

    }
}

class Viajero extends Explorer{
    constructor (name, username, mission, cycle){
        super(name, username, mission) //Super nos ayudara a llamar el constructor padre
        this.cycle = cycle //Agregamos este atributo de la clase viajero, es exclusiva de esta clase y no de la clase padre

    }

    getGeneralInfo(){
        let nameAndUsername = this.getNameAndUsername() //Llamamos el metodo de la clase padre
        //nameAndUsername es una variable de esta funcion, no necesita usar this para una referencia
        return `${nameAndUsername}, Ciclo ${this.cycle}`
    }


}

const viajero1 = new Viajero ("Kelvin", "LaunchX", "Node JS", "Abril 2022")
console.log("Ejemplo 10: Overriding methods")
console.log(viajero1)
console.log(viajero1.getNameAndUsername()) //Metodos de la clase padre
console.log(viajero1.getGeneralInfo()) //Metodo de la clase hija