// Ejemplo 8: Métodos static nos ayudan a escribir métodos en una clase que podemos usar sin necesidad de instanciar algún objeto

class Toolbox {
    static getMostUsefulTools(){
        return ["Command line", "git", "Text Editor"]
    }
}

console.log("Ejemplo 8: Métodos static")
//Puedo llamar al método static directamente con el nombre de la clase
console.log(Toolbox.getMostUsefulTools())

//Si intentamos instanciar un objeto no podremos llamar este método static
//Const toolbox = new Toolbox()
//console.log(toolbox.getMostUseful()) //Is not a function
