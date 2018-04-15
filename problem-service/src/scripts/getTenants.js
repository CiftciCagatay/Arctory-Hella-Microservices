const getTenants = () => {
  return new Promise((resolve, reject) => {
    resolve([
      {
        _id: '5ad20dcca7b49509952d9a9f',
        name: 'Arctory',
        databaseUrl:
          'mongodb://root:root@ds217138.mlab.com:17138/arctory-hella-db',
        __v: 0
      }
    ])
  })
}

module.exports = Object.assign({}, { getTenants })