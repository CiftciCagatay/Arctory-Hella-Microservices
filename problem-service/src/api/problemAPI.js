module.exports = ({ app, mqttClient, repos }) => {
  app.use('/', (req, res, next) => {
    const tenantId = req.headers['authorization']

    if (!tenantId) {
      res.status(401).send()
    } else if (!repos[tenantId]) {
      res.status(401).send()
    } else {
      res.locals.repo = repos[tenantId]
      next()
    }
  })

  app.get('/', (req, res, next) => {
    const { repo } = res.locals

    repo
      .getProblems(req.query.toiletId)
      .then(result => res.status(200).json(result))
      .catch(error => res.status(500).send())
  })

  app.get('/report/countGroupByProblemCode', (req, res, next) => {
    const { repo } = res.locals

    repo
      .getCountGroupByProblemCode()
      .then(result => res.status(200).json(result))
      .catch(error => res.status(500).send())
  })

  app.post('/', (req, res, next) => {
    const { repo } = res.locals

    repo
      .createProblem(req.body)
      .then(result => res.status(200).json(result))
      .catch(error => res.status(500).send())
  })

  app.put('/:id', (req, res, next) => {
    const { repo } = res.locals

    repo
      .updateProblem(req.params.id, req.body)
      .then(result => {
        if (req.body.solved) {
          console.log('Publishing...')
          console.log(result)
          mqttClient.publish('emircankavas/feeds/hella-problem-solved', result.deviceId)
        }

        res.status(200).json(result)
      })
      .catch(error => res.status(500).send())
  })

  app.delete('/:id', (req, res, next) => {
    const { repo } = res.locals

    repo
      .deleteProblem(req.params.id)
      .then(result => res.status(200).json(result))
      .catch(error => res.status(500).send())
  })
}
