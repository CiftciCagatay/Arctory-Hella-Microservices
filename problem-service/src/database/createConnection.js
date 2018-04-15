const mongoose = require('mongoose')

const createConnection = url => {
  return mongoose.createConnection(url)
}

module.exports = Object.assign({}, { createConnection })