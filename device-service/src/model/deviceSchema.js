const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DeviceSchema = new Schema({
  name: String,
  toiletId: String,
  state: {
    type: Boolean,
    default: true
  }
})

module.exports = Object.assign({}, { DeviceSchema })
