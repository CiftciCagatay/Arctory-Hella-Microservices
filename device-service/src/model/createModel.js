const { DeviceSchema } = require('./deviceSchema')

const createModel = (mongoose, prefix) => {
  return mongoose.model(`${prefix}Device`, DeviceSchema)
}

module.exports = Object.assign({}, { createModel })