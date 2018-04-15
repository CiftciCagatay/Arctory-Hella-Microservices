const { serverSettings } = require('./components/server')
const { tenantServiceSettings } = require('./components/tenantService')

module.exports = Object.assign({}, { serverSettings, tenantServiceSettings })