const { serverSettings } = require('./components/server')
const { tenantServiceSettings } = require('./components/tenantService')
const { problemServiceSettings } = require('./components/problemService')

module.exports = Object.assign(
  {},
  { serverSettings, tenantServiceSettings, problemServiceSettings }
)
