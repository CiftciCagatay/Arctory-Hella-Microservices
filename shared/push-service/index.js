const server = require('./server/server')
const config = require('./config/config')

server.start({
  port: config.serverSettings.port,
  appId: config.oneSignalAppSettings.appId,
  restAPIKey: config.oneSignalAppSettings.restAPIKey
})
  .then(app => {

  })
  .catch(error => {
    console.log(error)
  })