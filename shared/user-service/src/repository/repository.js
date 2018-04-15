const User = require('../model/User')

const repository = db => {
  const getUsers = () => {
    console.log('Finding users...')
    return User.find()
  }

  const getUserById = id => {
    return User.findById(id)
  }

  const createUser = props => {
    console.log('Creating user...')
    console.log(props)
    const user = new User(props)
    return user.save()
  }

  const updateUser = (id, props) => {
    return User.findByIdAndUpdate(id, props)
  }

  const deleteUser = id => {
    return User.findByIdAndRemove(id)
  }

  const disconnect = () => {
    db.disconnect()
  }

  return Object.assign(
    {},
    {
      getUsers,
      getUserById,
      createUser,
      updateUser,
      deleteUser,

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
