// Ejemplo 7: Uso de filter para filtrar una lista de elementos

const countries7 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesContainingLand = countries7.filter((country) => //Esta es la funcion
 country.includes('land') //indicacion para solo filtrar elementos que incluyand 'land'
)

console.log("Ejemplo7: Uso de filter para filtrar una lista de elementos")
console.log(countriesContainingLand)
const countriesEndsByia = countries7.filter((country) => country.endsWith('ia'))
console.log(countriesEndsByia)