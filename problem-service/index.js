const scripts = require('./src/scripts')

const { createConnection } = require('./src/database')
const { createModel } = require('./src/model')
const { createRepository } = require('./src/repository')
const { startServer } = require('./src/server')

const {
  serverSettings: { port },
  mqttSettings: { brokerUrl }
} = require('./src/config')

scripts.getTenants()
  .then(tenants => {
    let repos = {}

    tenants.forEach(async tenant => {
      const connection = createConnection(tenant.databaseUrl)
      const model = createModel(connection, tenant._id)

      const repo = await createRepository(connection, model)

      repos[tenant._id] = repo
    })

    return Promise.resolve(repos)
  })
  .then(repos => startServer({ repos, port, brokerUrl, scripts }))
  .then(app => {
    console.log('Application listening...')
  })
  .catch(console.log)
