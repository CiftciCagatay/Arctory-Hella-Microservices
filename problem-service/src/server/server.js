const express = require('express')
const bodyParser = require('body-parser')
const { problemAPI } = require('../api')
const { mqtt } = require('../mqtt')

const startServer = ({ port, repos, brokerUrl, scripts }) => {
  return new Promise((resolve, reject) => {
    if (!port) {
      reject(new Error('Server must be started with an available port!'))
    }

    if (!repos) {
      reject(new Error('Server must be started with connected repos!'))
    }

    if (!brokerUrl) {
      reject(new Error('Server must be started with brokerUrl!'))
    }

    if (!scripts) {
      reject(new Error('Server must be started with scripts!'))
    }

    const app = express()
    const mqttClient = mqtt({ brokerUrl, repos, scripts })

    app.use(bodyParser.json())

    problemAPI({ app, repos, mqttClient })

    app.listen(port, resolve(app))
  })
}

module.exports = Object.assign({}, { startServer })
