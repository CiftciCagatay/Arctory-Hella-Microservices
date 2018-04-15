module.exports = ({ app, repos }) => {
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
      .getToilets()
      .then(result => res.status(200).json(result))
      .catch(error => res.status(500).send())
  })

  app.post('/', (req, res, next) => {
    const { repo } = res.locals

    repo
      .createToilet(req.body)
      .then(result => res.status(200).json(result))
      .catch(error => res.status(500).send())
  })

  app.put('/:id', (req, res, next) => {
    const { repo } = res.locals

    repo
      .updateToilet(req.params.id, req.body)
      .then(result => res.status(200).json(result))
      .catch(error => res.status(500).send())
  })

  app.delete('/:id', (req, res, next) => {
    const { repo } = res.locals

    repo
      .deleteToilet(req.params.id)
      .then(result => res.status(200).json(result))
      .catch(error => res.status(500).send())
  })
}
