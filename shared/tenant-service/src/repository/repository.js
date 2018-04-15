const Tenant = require('../model/Tenant')

const repository = db => {
  const getTenants = () => {
    console.log('Finding tenants...')
    return Tenant.find()
  }

  const getTenantById = id => {
    return Tenant.findById(id)
  }

  const createTenant = props => {
    console.log('Creating tenant...')
    console.log(props)
    const tenant = new Tenant(props)
    return tenant.save()
  }

  const updateTenant = (id, props) => {
    return Tenant.findByIdAndUpdate(id, props)
  }

  const deleteTenant = id => {
    return Tenant.findByIdAndRemove(id)
  }

  const disconnect = () => {
    db.disconnect()
  }

  return Object.assign(
    {},
    {
      getTenants,
      getTenantById,
      createTenant,
      updateTenant,
      deleteTenant,

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
