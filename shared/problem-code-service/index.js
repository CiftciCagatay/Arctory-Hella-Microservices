const { startServer } = require('./src/server')
const { serverSettings: { port } } = require('./src/config')
const { createRepository } = require('./src/repository')
const { connectToDatabase } = require('./src/database')

connectToDatabase()
  .then(connection => createRepository(connection))
  .then(repo => startServer({ port, repo }))
  .then(app => {
    console.log(`App is listening port ${port}...`)
  })
  .catch(error => {
    console.log(error)
  })
