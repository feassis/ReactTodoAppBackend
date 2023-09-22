const mongoose = require('mongoose')
const mongooaw = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/todo')