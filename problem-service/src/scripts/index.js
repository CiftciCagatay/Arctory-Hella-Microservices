const { getTenants } = require('./getTenants')
const getDeviceDetails = require('./getDeviceDetails')
const getProblemDescription = require('./getProblemDescription')
const sendPushNotification = require('./sendPushNotification')

module.exports = Object.assign(
  {},
  { getTenants, getProblemDescription, getDeviceDetails, sendPushNotification }
)
