const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TenantSchema = new Schema({
  name: String,
  databaseUrl: String
})

module.exports = mongoose.model('Tenant', TenantSchema)
