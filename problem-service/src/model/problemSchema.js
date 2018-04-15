const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProblemSchema = new Schema({
  deviceId: String,
  toiletId: String,
  problemCode: String,
  problemDate: Date,
  solved: {
    type: Boolean,
    default: false
  }
})

module.exports = Object.assign({}, { ProblemSchema })
