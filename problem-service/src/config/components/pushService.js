const pushServiceSettings = {
  pushServiceUrl: process.env.PUSH_SERVICE_URL || ''
}

module.exports = Object.assign({}, { pushServiceSettings })
