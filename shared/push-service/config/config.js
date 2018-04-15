const serverSettings = {
  port: process.env.PORT || 5000
}

const oneSignalAppSettings = {
  appId: '24a03b34-3964-4dbf-b50b-cd1f2eef959c',
  restAPIKey: 'ZTlmZWExYzUtMmRjZi00ZjBiLWE0NWItOTQ4YTI1ZTU2OTQ3'
}

module.exports = Object.assign({}, {
  serverSettings,
  oneSignalAppSettings
})