const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProblemCodeSchema = new Schema({
  code: String,
  description: String
})

module.exports = mongoose.model('ProblemCode', ProblemCodeSchema)
