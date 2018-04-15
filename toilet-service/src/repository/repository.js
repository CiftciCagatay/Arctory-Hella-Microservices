const repository = (db, Toilet) => {
  const getToilets = () => {
    return Toilet.find()
  }

  const createToilet = props => {
    const toilet = new Toilet(props)
    return toilet.save()
  }

  const updateToilet = (id, props) => {
    return Toilet.findByIdAndUpdate(id, props)
  }

  const deleteToilet = id => {
    return Toilet.findByIdAndRemove(id)
  }

  const disconnect = () => {
    return db.disconnect()
  }

  return Object.assign(
    {},
    {
      getToilets,
      createToilet,
      updateToilet,
      deleteToilet,

      disconnect
    }
  )
}

const createRepository = (db, Toilet) => {
  return new Promise((resolve, reject) => {
    if (!db) {
      reject(new Error('Repository needs an available database connection!'))
    }

    if (!Toilet) {
      reject(new Error('Repository needs a model!'))
    }

    resolve(repository(db, Toilet))
  })
}

module.exports = Object.assign({}, { createRepository })
