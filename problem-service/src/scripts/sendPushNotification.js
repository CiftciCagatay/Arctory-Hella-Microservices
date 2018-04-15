const https = require('https')
const {
  pushServiceSettings: { pushServiceUrl }
} = require('../config')

module.exports = message => {
  return new Promise((resolve, reject) => {
    const bodyString = JSON.stringify({ contents: { en: message } })

    const options = {
      host: pushServiceUrl,
      path: '/notification',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    console.log(bodyString)

    const request = https.request(options, response => {
      response.on('data', chunk => {
        console.log(chunk.toString())
        resolve()
      })

      response.on('end', () => resolve())
    })

    request.on('error', reject)

    request.write(bodyString)

    request.end()
  })
}
