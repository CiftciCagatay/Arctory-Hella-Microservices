const ProblemCode = require('../model/ProblemCode')

const repository = db => {
  const getProblemCodes = () => {
    console.log('Finding problemCodes...')
    return ProblemCode.find()
  }

  const getProblemCodeByCode = code => {
    return ProblemCode.find({ code })
  }

  const createProblemCode = props => {
    console.log('Creating problemCode...')
    console.log(props)
    const problemCode = new ProblemCode(props)
    return problemCode.save()
  }

  const updateProblemCode = (id, props) => {
    return ProblemCode.findByIdAndUpdate(id, props)
  }

  const deleteProblemCode = id => {
    return ProblemCode.findByIdAndRemove(id)
  }

  const disconnect = () => {
    db.disconnect()
  }

  return Object.assign(
    {},
    {
      getProblemCodes,
      getProblemCodeByCode,
      createProblemCode,
      updateProblemCode,
      deleteProblemCode,

      disconnect
    }
  )
}

const createRepository = db => {
  return new Promise((resolve, reject) => {
    if (!db) {
      reject(new Error('Repository needs an available database connection!'))
    }

    resolve(repository(db))
  })
}

module.exports = Object.assign({}, { createRepository })
