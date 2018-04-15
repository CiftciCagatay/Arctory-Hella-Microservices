const https = require('https')
const {
  problemCodeServiceSettings: { problemCodeServiceUrl }
} = require('../config')

module.exports = (problemCode) => {
  return new Promise((resolve, reject) => {
    const options = {
      host: problemCodeServiceUrl,
      path: `/${problemCode}`
    }

    let data = {}

    const request = https.get(options, response => {
      response.on('data', chunk => {
        const datas = JSON.parse(chunk.toString())

        if (datas[0]) {
          data = datas[0]
          resolve(data)
        } else {
          reject(new Error('Problem desc not found!'))
        }        
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
