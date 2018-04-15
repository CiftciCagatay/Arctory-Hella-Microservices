const { getTenants } = require('./src/scripts')

const { createConnection } = require('./src/database')
const { createModel } = require('./src/model')
const { createRepository } = require('./src/repository')
const { startServer } = require('./src/server')

const {
  serverSettings: { port }
} = require('./src/config')

const scripts = require('./src/scripts')

getTenants()
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
  .then(repos => startServer({ repos, port, scripts }))
  .then(app => {
    console.log('Application listening...')
  })
  .catch(console.log)
