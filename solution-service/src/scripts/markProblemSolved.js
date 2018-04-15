const {
  problemServiceSettings: { problemServiceUrl }
} = require('../config')

const https = require('https')

const markProblemSolved = (tenantId, problemId) => {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({ solved: true })

    const options = {
      method: 'PUT',
      headers: {
        'Authorization': tenantId,
        'Content-Type': 'application/json',
        'Content-Length': body.length
      },
      host: `${problemServiceUrl}`,
      path: `/${problemId}`
    }

    const request = https.request(options, response => {
      response.on('data', chunk => {
        console.log(JSON.parse(chunk))
        resolve()
      })

      response.on('end', () => {
        resolve()
      })

      response.on('error', reject)
    })

    request.on('error', reject)

    request.write(body)

    request.end()
  })
}

module.exports = Object.assign({}, { markProblemSolved })
