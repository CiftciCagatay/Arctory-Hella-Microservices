const problemServiceSettings = {
  problemServiceUrl: process.env.PROBLEM_SERVICE_URL || ''
}

module.exports = Object.assign({}, { problemServiceSettings })
