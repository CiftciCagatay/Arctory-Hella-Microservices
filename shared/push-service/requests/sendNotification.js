const https = require('https')

module.exports = (app_id, restAPIKey, contents) => {
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    "Authorization": `Basic ${restAPIKey}`
  }

  const options = {
    host: "onesignal.com",
    port: 443,
    path: "/api/v1/notifications",
    method: "POST",
    headers: headers
  }

  const message = {
    app_id,
    contents,
    included_segments: ["All"]
  }

  console.log(message)

  return new Promise((resolve, reject) => {
    const notificationRequest = https.request(options, (response) => {
      response.on('data', (data) => {
        console.log('Merhaba')
        resolve(data)
      })
    })

    notificationRequest.on('error', function (error) {
      console.log('Selam')
      reject(error)
    });

    notificationRequest.write(JSON.stringify(message));

    notificationRequest.end();
  })
}