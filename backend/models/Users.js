const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    company: String,
    website: String,
    contact: String
})

const UserModel = mongoose.model('users', UserSchema)

module.exports = UserModel