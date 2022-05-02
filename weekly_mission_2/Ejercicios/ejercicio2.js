const explorers = [
 {
   name: "Explorer 1",
   exercises_completed: 10,
   rate: 99,
   city: "CDMX",
   stack: [
     "js",
     "c#"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: true,
       exercisesFinished: true
     }
   }
 },
 {
   name: "Explorer 2",
   exercises_completed: 9,
   city: "Veracruz",
   rate: 50,
   stack: [
     "js"
   ],
   missions: {
     onboarding: {
       isFinished: false,
       exercisesFinished: false
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 },
 {
   name: "Explorer 3",
   exercises_completed: 3,
   city: "Sonora",
   rate: 100,
   stack: [
     "elixir"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
   
 }
 
]
console.log("Imprimiendo la propiedad name de cada explorer:  ")
explorers.forEach(element => console.log(element.name))


console.log("Imprimiendo el stack de cada explorer:  ")
explorers.forEach(element => console.log(element.stack))


const newlist = explorers.map(function(data){
  return `${data.stack}, ${data.name}`

})
console.log("Imprimiendo en una nueva lista los stacks de los explorers usando map")
console.log(newlist)

const filterjs = newlist.filter((example) =>
  example.includes('js')
)

console.log("Imprimiendo de la lista de stacks los que tengan 'js'")
console.log(filterjs)


const explorercdmx = explorers.find((data3) =>
data3 = 'CDMX'
)

console.log("Explorer que viven en la CDMX")
console.log(explorercdmx.name)




const listexcercises = explorers.map(function(data){
  return data.exercises_completed
})

console.log(listexcercises)
const suma_reduce = listexcercises.reduce((a, b) =>
  a + b
)

console.log("La suma de los exercises completed es: ")
console.log(suma_reduce)



const listfinished = explorers.map(function(datax){
  return datax.missions.frontend.exercisesFinished
})


const finish = listfinished.some((data4) =>
data4 == true
)

console.log("Imprimiendo si alguno de los explorers es 'TRUE' con la propiedad exercicesfinished")
console.log(finish)



const listisfinished = explorers.map(function(datax){
  return datax.missions.onboarding.isFinished
})


const finished = listisfinished.every((data5) =>
 typeof data5 === true
)

console.log("Imprimiendo si todos los explorers son 'TRUE' con la propiedad is finished")
console.log(finished)