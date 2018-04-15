const mongoose = require('mongoose')
const { mongoSettings: { MONGO_URL } } = require('../config')

const connectToDatabase = () => {
  return mongoose.connect(MONGO_URL)
}

module.exports = Object.assign({}, { connectToDatabase })