const repository = (db, Problem) => {
  const getProblems = toiletId => {
    return Problem.find({ solved: false, toiletId })
  }

  const createProblem = props => {
    const problem = new Problem({ problemDate: new Date(), ...props })
    return problem.save()
  }

  const updateProblem = (id, props) => {
    console.log(props)
    return Problem.findByIdAndUpdate(id, props)
  }

  const deleteProblem = id => {
    return Problem.findByIdAndRemove(id)
  }

  // Reports

  const getCountGroupByProblemCode = () => {
    return Problem.aggregate([
      {
        $group: {
          _id: '$problemCode',
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } }
    ])
  }

  const disconnect = () => {
    return db.disconnect()
  }

  return Object.assign(
    {},
    {
      getProblems,
      createProblem,
      updateProblem,
      deleteProblem,

      getCountGroupByProblemCode,

      disconnect
    }
  )
}

const createRepository = (db, Problem) => {
  return new Promise((resolve, reject) => {
    if (!db) {
      reject(new Error('Repository needs an available database connection!'))
    }

    if (!Problem) {
      reject(new Error('Repository needs a model!'))
    }

    resolve(repository(db, Problem))
  })
}

module.exports = Object.assign({}, { createRepository })
