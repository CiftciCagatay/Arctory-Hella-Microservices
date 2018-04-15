const express = require('express')
const bodyParser = require('body-parser')
const { deviceAPI } = require('../api')

const startServer = ({ port, repos }) => {
  return new Promise((resolve, reject) => {
    if (!port) {
      reject(new Error('Server must be started with an available port!'))
    }

    if (!repos) {
      reject(new Error('Server must be started with connected repos!'))
    }

    const app = express()

    app.use(bodyParser.json())

    deviceAPI({ app, repos })

    app.listen(port, resolve(app))
  })
}

module.exports = Object.assign({}, { startServer })
