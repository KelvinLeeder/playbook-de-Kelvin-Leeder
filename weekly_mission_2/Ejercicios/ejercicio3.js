
class githob {
    constructor(){
    this.name = "LaunchX"
    this.author =  "carlogilmar"
    this.language = "JavaScript"
    this.numberOfCommits = 100
    this.stars = 199
    this.forks = 299
    this.issues_open = 10
    this.issues_close = 10
}
getTotalIssues(){
    return this.issues_open + this.issues_close
  }
  getGeneralInfo(){
    return `This repository ${this.name} was created by ${this.author}`
  }

}
const repo = new githob ()
console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())


class githob_issue {
    constructor(){
    this.title = '06 Live 3 Semana 2'
    this.repositoryNameAssociated = 'MissionNodeJS'
    this.status = 'Open'
    this.numberOfComments = 52
    this.labels = 'Semana2'
    this.author = 'Carlo Gilmar'
    this.dateCreated = ' 18 April'
    this.lastUpdated = '21 April'

    }
    getTitleAndAuthor(){
        return `The title of issue is ${this.title} and the author is ${this.author}`
    }

    getGeneralInfo(){
        return `The Issue ${this.title} was created on ${this.dateCreated} in the ${this.repositoryNameAssociated} repository`
    }
}

const issue = new githob_issue()
console.log(`"The issue data are:"`)
console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())

class githob_pullrequest {
    constructor(){
        this.branchName = 'Enviando el blog'
        this.dateCreated = '6 April'
        this.status = 'Open'
        this.repositoryNameAssociated = 'launch_x_explorers'
        this.author = 'Kelvin'
    }
        getStatus(){
            return this.status
        }
    
        getTitleAndAutor2(){
            return `The branch name is ${this.branchName} and the author is ${this.author}`
        }
    
    }
const pull_request = new githob_pullrequest()
console.log('The Pull request data are:')
console.log("The status is "+ pull_request.getStatus())
console.log(pull_request.getTitleAndAutor2())