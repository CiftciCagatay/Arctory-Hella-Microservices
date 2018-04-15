const express = require('express')
const bodyParser = require('body-parser')
const { tenantAPI } = require('../api')

const startServer = ({ port, repo }) => {
  return new Promise((resolve, reject) => {
    if (!port) {
      reject(new Error('Server must be started with an available port!'))
    }

    if (!repo) {
      reject(new Error('Server must be started with a connected repository!'))
    }

    const app = express()

    app.use(bodyParser.json())

    tenantAPI({ app, repo })

    app.listen(port, resolve(app))
  })
}

module.exports = Object.assign({}, { startServer })
