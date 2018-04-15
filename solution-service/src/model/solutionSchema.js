const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SolutionSchema = new Schema({
  toiletId: String,

  problemId: String,
  problemCode: String,
  problemDate: Date,

  details: String,
  solutionDate: Date
})

module.exports = Object.assign({}, { SolutionSchema })
