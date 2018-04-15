const { ToiletSchema } = require('./toiletSchema')

const createModel = (mongoose, prefix) => {
  return mongoose.model(`${prefix}Toilet`, ToiletSchema)
}

module.exports = Object.assign({}, { createModel })