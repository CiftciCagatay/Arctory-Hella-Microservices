const https = require('https')
const {
  deviceServiceSettings: { deviceServiceUrl }
} = require('../config')

module.exports = (tenantId, deviceId) => {
  return new Promise((resolve, reject) => {
    const options = {
      host: deviceServiceUrl,
      path: `/${deviceId}`,
      headers: {
        'Authorization': tenantId
      }
    }

    let data = {}

    const request = https.get(options, response => {
      response.on('data', chunk => {
        data = JSON.parse(chunk.toString())
        resolve(data)
      })

      response.on('end', () => {
        console.log('Response ended.')
        resolve(data)
      })
    })

    request.on('error', error => {
      console.log(error)
      reject(error)
    })

    request.end()
  })
}
