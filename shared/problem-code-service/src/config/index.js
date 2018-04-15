const { serverSettings } = require('./components/server')
const { mongoSettings } = require('./components/mongo')

module.exports = Object.assign({}, { serverSettings, mongoSettings })