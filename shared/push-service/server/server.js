const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const notificationAPI = require('../api/index')

const start = (options) => {
  return new Promise((resolve, reject) => {
    if (!options.port) {
      reject(new Error('Server must be started with an available port!'))
    }

    if (!options.appId) {
      reject(new Error('Server must be started with a valid OneSignal App Id'))
    }

    const app = express()

    app.use(bodyParser.json())
    app.use(cors())

    notificationAPI(app, options.appId, options.restAPIKey)

    const server = app.listen(options.port, () => {
      console.log(`App is listening port ${options.port}`)
      resolve(server)
    })
  })
}

module.exports = Object.assign({}, { start })