const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  tenantId: String,
  name: String,
  email: String,
  title: String,
  toiletIds: [String]
})

module.exports = mongoose.model('User', UserSchema)
