const { ProblemSchema } = require('./problemSchema')

const createModel = (mongoose, prefix) => {
  return mongoose.model(`${prefix}Problem`, ProblemSchema)
}

module.exports = Object.assign({}, { createModel })