const tenantServiceSettings = {
  tenantServiceUrl: process.env.TENANT_SERVICE_URL || ''
}

module.exports = Object.assign({}, { tenantServiceSettings })
