// Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas

const countries6 = ['Finland', 'Denmakr', 'Sweden', 'Norway', 'Iceland']
const countriesFirstThreeLetters = countries6.map((country) =>
 country.toUpperCase().slice(0,3)) //el metodo slice obtiene solo la logintud marcada del string

 console.log("Ejemplo 6: Uso de map para convertir todos los nombres de una lista en mayusculas")
 console.log(countriesFirstThreeLetters)