// node main.js

const logger = require('./logger')
const mensaje = require('./prueba')

logger.info('This is an informational message')
logger.verbose('This is a verbose message')
mensaje.enviar('Este es un mensaje enviado desde otro archivo')
