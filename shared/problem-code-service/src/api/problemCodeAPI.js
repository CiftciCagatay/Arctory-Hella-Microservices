module.exports = ({ app, repo }) => {
  app.get('/', (req, res, next) => {
    repo
      .getProblemCodes()
      .then(result => res.status(200).json(result))
      .catch(error => res.status(500).send())
  })

  app.get('/:problemCode', (req, res, next) => {
    repo
      .getProblemCodeByCode(req.params.problemCode)
      .then(result => res.status(200).json(result))
      .catch(error => res.status(500).send())
  })

  app.post('/', (req, res, next) => {
    repo
      .createProblemCode(req.body)
      .then(result => res.status(200).json(result))
      .catch(error => res.status(500).send())
  })

  app.put('/:id', (req, res, next) => {
    repo
      .updateProblemCode(req.params.id, req.body)
      .then(result => res.status(200).json(result))
      .catch(error => res.status(500).send())
  })

  app.delete('/:id', (req, res, next) => {
    repo
      .deleteProblemCode(req.params.id)
      .then(result => res.status(200).json(result))
      .catch(error => res.status(500).send())
  })
}
