const repository = (db, Solution) => {
  const getSolutions = () => {
    return Solution.find()
  }

  const createSolution = props => {
    const solution = new Solution({ solutionDate: new Date(), ...props })
    return solution.save()
  }

  const updateSolution = (id, props) => {
    return Solution.findByIdAndUpdate(id, props)
  }

  const deleteSolution = id => {
    return Solution.findByIdAndRemove(id)
  }

  // Reports

  const getAverageResolutionTimeGroupByProblemCode = () => {
    return Solution.aggregate([
      {
        $group: {
          _id: '$problemCode',
          average: { $avg: { $subtract: ['$solutionDate', '$problemDate'] } }
        }
      },
      {
        $sort: { average: -1 }
      }
    ])
  }

  const disconnect = () => {
    return db.disconnect()
  }

  return Object.assign(
    {},
    {
      getSolutions,
      createSolution,
      updateSolution,
      deleteSolution,

      getAverageResolutionTimeGroupByProblemCode,

      disconnect
    }
  )
}

const createRepository = (db, Solution) => {
  return new Promise((resolve, reject) => {
    if (!db) {
      reject(new Error('Repository needs an available database connection!'))
    }

    if (!Solution) {
      reject(new Error('Repository needs a model!'))
    }

    resolve(repository(db, Solution))
  })
}

module.exports = Object.assign({}, { createRepository })
