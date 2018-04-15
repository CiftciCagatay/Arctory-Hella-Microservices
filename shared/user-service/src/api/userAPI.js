module.exports = ({ app, repo }) => {
  app.get('/', (req, res, next) => {
    repo
      .getUsers()
      .then(result => res.status(200).json(result))
      .catch(error => res.status(500).send())
  })

  app.get('/:id', (req, res, next) => {
    repo
      .getUserById(req.params.id)
      .then(result => res.status(200).json(result))
      .catch(error => res.status(500).send())
  })

  app.post('/', (req, res, next) => {
    repo
      .createUser(req.body)
      .then(result => res.status(200).json(result))
      .catch(error => res.status(500).send())
  })

  app.put('/:id', (req, res, next) => {
    repo
      .updateUser(req.params.id, req.body)
      .then(result => res.status(200).json(result))
      .catch(error => res.status(500).send())
  })

  app.delete('/:id', (req, res, next) => {
    repo
      .deleteUser(req.params.id)
      .then(result => res.status(200).json(result))
      .catch(error => res.status(500).send())
  })
}
