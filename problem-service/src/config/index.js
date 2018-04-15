const { serverSettings } = require('./components/server')
const { tenantServiceSettings } = require('./components/tenantService')
const { mqttSettings } = require('./components/mqtt')
const { pushServiceSettings } = require('./components/pushService')
const { deviceServiceSettings } = require('./components/deviceService')
const {
  problemCodeServiceSettings
} = require('./components/problemCodeService')

module.exports = Object.assign(
  {},
  {
    serverSettings,
    tenantServiceSettings,
    mqttSettings,
    pushServiceSettings,
    problemCodeServiceSettings,
    deviceServiceSettings
  }
)
