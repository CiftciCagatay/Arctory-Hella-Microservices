const express = require('express')
const bodyParser = require('body-parser')
const { solutionAPI } = require('../api')

const startServer = ({ port, repos, scripts }) => {
  return new Promise((resolve, reject) => {
    if (!port) {
      reject(new Error('Server must be started with an available port!'))
    }

    if (!repos) {
      reject(new Error('Server must be started with connected repos!'))
    }

    if (!scripts) {
      reject(new ErrorEvent('Server must be started with scripts!'))
    }

    const app = express()

    app.use(bodyParser.json())

    solutionAPI({ app, repos, scripts })

    app.listen(port, resolve(app))
  })
}

module.exports = Object.assign({}, { startServer })
