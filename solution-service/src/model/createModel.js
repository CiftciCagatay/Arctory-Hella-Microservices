const { SolutionSchema } = require('./solutionSchema')

const createModel = (mongoose, prefix) => {
  return mongoose.model(`${prefix}Solution`, SolutionSchema)
}

module.exports = Object.assign({}, { createModel })