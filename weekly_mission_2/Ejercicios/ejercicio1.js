const repo = {
 name: "LaunchX",
 author: "carlogilmar",
 language: "JavaScript",
 numberOfCommits: 100,
 stars: 199,
 forks: 299,
 issues_open: 10,
 issues_close: 10,
 getTotalIssues: function(){
   return this.issues_open + this.issues_close
 },
 getGeneralInfo: function(){
   return `This repository ${this.name} was created by ${this.author}`
 }
}

console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())


const issue = {
    title: '06 Live 3 Semana 2 ',
    repositoryNameAssociated: 'MissionNodeJS',
    status: 'Open',
    numberOfComments: 52,
    labels: 'Semana2',
    author: 'Carlo Gilmar',
    dateCreated: ' 18 April',
    lastUpdated:  '21 April',

    getTitleAndAuthor: function(){
        return `The title of issue is ${this.title} and the author is ${this.author}`
    },

    getGeneralInfo: function(){
        return `The Issue ${this.title} was created on ${this.dateCreated} in the ${this.repositoryNameAssociated} repository`
    }
}


console.log("The issue data are:")
console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())


const pull_request = {
    branchName: 'Enviando el blog',
    dateCreated: '6 April',
    status: 'Open',
    repositoryNameAssociated: 'launch_x_explorers',
    author: 'Kelvin',

    getStatus: function(){
        return this.status
    },

    getTitleAndAutor2: function(){
        return `The branch name is ${this.branchName} and the author is ${this.author}`
    }

}

console.log('The Pull request data are:')
console.log("The status is "+ pull_request.getStatus())
console.log(pull_request.getTitleAndAutor2())

