// Ejemplo 5: Atributos con valores por default

class PullRequest {
    constructor(repo, title, lines_changed){
        this.repo = repo
        this.title = title
        this.lines_changed = lines_changed
        this.status = "OPEN"
        this.dateCreated = new Date() //Esto guardará la fecha actual

    }

    getInfo(){
        return `This PR in the repo: ${this.repo} (Status: ${this.status}) and was created on ${this.dateCreated}`

    }
}

console.log("Ejemplo 5: Atributos con valores por default")
const myPr1 = new PullRequest("Launch X", "Mi primer PR", 100)
console.log(myPr1.getInfo())

//Puedes instanciar n cantidad de objetos de la misma clase
const myPr2 = new PullRequest("Launch X", "Mi segundo PR", 99)
console.log(myPr2.getInfo())