// Ejemplo 3: Instanciar un objeto con atributos

class Student {

    //El constructor nos permite intanciar un objeto y asignarle  atributos, this nos ayuda a resaltar esto.
    constructor(name, age, subjects){
        this.name = name
        this.age = age
        this.subjects = subjects
    }
}

//Crear un objeto de la clase stundent (esto se le llama instaciacion)
const KelvinStudent = new Student('Kelvin', 26,[" NodeJs", "Python"])
console.log("Ejemplo 3: Instanciar un objeto con atributos")
console.log(KelvinStudent)