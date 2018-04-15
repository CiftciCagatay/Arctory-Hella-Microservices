const mqttSettings = {
  brokerUrl: process.env.BROKER_URL || ''
}

module.exports = Object.assign({}, { mqttSettings })