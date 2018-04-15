const mongoSettings = {
  MONGO_URL: process.env.MONGO_URL || ''
}

module.exports = Object.assign({}, { mongoSettings })