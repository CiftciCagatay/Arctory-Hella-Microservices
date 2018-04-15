module.exports = ({ app, repos, scripts }) => {
  app.use('/', (req, res, next) => {
    const tenantId = req.headers['authorization']

    if (!tenantId) {
      res.status(401).send()
    } else if (!repos[tenantId]) {
      res.status(401).send()
    } else {
      res.locals.tenantId = tenantId
      res.locals.repo = repos[tenantId]
      next()
    }
  })
  
  app.get('/', (req, res, next) => {
    const { repo } = res.locals

    repo
      .getSolutions()
      .then(result => res.status(200).json(result))
      .catch(error => res.status(500).send())
  })

  app.get('/reports/averageResolutionTime', (req, res, next) => {
    const { repo } = res.locals

    repo
      .getAverageResolutionTimeGroupByProblemCode()
      .then(result => res.status(200).json(result))
      .catch(error => res.status(500).send())
  })

  app.post('/', (req, res, next) => {
    const { repo, tenantId } = res.locals

    repo
      .createSolution(req.body)
      .then(result => scripts.markProblemSolved(tenantId, req.body.problemId))
      .then(() => res.status(200).json())
      .catch(error => {
        console.log(error)
        res.status(500).send()
      })
  })

  app.put('/:id', (req, res, next) => {
    const { repo } = res.locals

    repo
      .updateSolution(req.params.id, req.body)
      .then(result => res.status(200).json(result))
      .catch(error => res.status(500).send())
  })

  app.delete('/:id', (req, res, next) => {
    const { repo } = res.locals

    repo
      .deleteSolution(req.params.id)
      .then(result => res.status(200).json(result))
      .catch(error => res.status(500).send())
  })
}
