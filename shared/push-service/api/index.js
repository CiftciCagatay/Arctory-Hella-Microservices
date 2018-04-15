const sendNotification = require('../requests/sendNotification')

module.exports = (app, appId, restAPIKey) => {
  // Post notification
  app.post('/notification', (req, res, next) => {
    console.log(req.body)
    const contents = req.body.contents
    
    sendNotification(appId, restAPIKey, contents)
      .then(data => {
        console.log(`Response : ${data}`)
        res.json(JSON.parse(data))
      })
      .catch(error => {
        console.log(`Error : ${error}`)
        res.json({ error })
      })
  })
}