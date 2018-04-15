const repository = (db, Device) => {
  const getDevices = () => {
    return Device.find()
  }

  const getDeviceById = id => {
    return Device.findById(id)
  }

  const createDevice = props => {
    const device = new Device(props)
    return device.save()
  }

  const updateDevice = (id, props) => {
    return Device.findByIdAndUpdate(id, props)
  }

  const deleteDevice = id => {
    return Device.findByIdAndRemove(id)
  }

  const disconnect = () => {
    return db.disconnect()
  }

  return Object.assign(
    {},
    {
      getDevices,
      getDeviceById,
      createDevice,
      updateDevice,
      deleteDevice,

      disconnect
    }
  )
}

const createRepository = (db, Device) => {
  return new Promise((resolve, reject) => {
    if (!db) {
      reject(new Error('Repository needs an available database connection!'))
    }

    if (!Device) {
      reject(new Error('Repository needs a model!'))
    }

    resolve(repository(db, Device))
  })
}

module.exports = Object.assign({}, { createRepository })
