const {envs} = require('./config/env')
const  {startServer} = require('./server/server')
const main = () => {

  startServer(
    {
      port: envs.PORT,
      public_path: envs.PUBLIC_PATH
    }
  )
}
//Funcion agnositca autoconvocada
//Agnostica porque no tiene nombre
//Autoconvocada porque lo ejecutamos con los parentesiss
(async () => {
  main()
})()

