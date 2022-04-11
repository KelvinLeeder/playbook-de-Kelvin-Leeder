const llamarclase = require('./prueba1') // Invocas el módulo que contiene la clase

// Creación de un objeto
const objeto1 = new llamarclase('Mensaje de objeto1(script2): ') // Creas un objeto nuevo, esto llama por default el constructor de la clase
// invocación del método
objeto1.variable1('Este es el mensaje de la primera variable(script2)')

// Creación de otro objeto
const objeto2 = new llamarclase('Mensaje de objeto2(script2): ')
objeto2.variable2('Es es el mensaje de la segunda variable(script2)')
