const { connect } = require('mqtt')

const mqtt = ({ brokerUrl, repos, scripts }) => {
  const {
    getDeviceDetails,
    getProblemDescription,
    sendPushNotification
  } = scripts

  const client = connect(brokerUrl, {
    port: 1883,
    username: 'emircankavas',
    password: '90cae602d5be4f3d95238982966307d4'
  })

  client.on('connect', () => {
    console.log('Client connected.')

    client.subscribe('emircankavas/feeds/hella-problem-created')
  })

  client.on('error', error => {
    console.log(error)
    client.end()
  })

  client.on('message', (topic, payload) => {
    console.log(topic, payload)
    switch (topic) {
      case 'emircankavas/feeds/hella-problem-created':
        try {
          const fixedPayload = JSON.parse(`{${payload.toString()}`)
          const { tenantId } = fixedPayload

          if (!tenantId || !repos[tenantId]) {
            console.log('Couldnt find tenantId or repo for tenant!')
          } else {
            const repo = repos[tenantId]

            console.log('Creating problem...')

            repo
              .createProblem({
                toiletId: '5ad255bde2b2af0014fdcfb0',
                ...fixedPayload
              })
              .then(result =>
                Promise.all([
                  getDeviceDetails(tenantId, result.deviceId),
                  getProblemDescription(result.problemCode)
                ])
              )
              .then(values => {
                console.log('Preparing message...')
                console.log(values)
                const { name } = values[0]
                const { description } = values[1]

                const message = `${name} adlı cihazından ${description} şikayetinden bulunuldu.`

                console.log(message)

                return sendPushNotification(message)
              })
              .then(() => console.log('Push notification sent.'))
              .catch(console.log)
          }
        } catch (error) {
          console.log(error)
        }
        break
      default:
        break
    }
  })

  return client
}

module.exports = Object.assign({}, { mqtt })
