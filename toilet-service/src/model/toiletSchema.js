const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ToiletSchema = new Schema({
  name: String
})

module.exports = Object.assign({}, { ToiletSchema })
