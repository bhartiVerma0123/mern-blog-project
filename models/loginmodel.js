const mongoose = require('../db/connection');
const LoginSchema = mongoose.Schema({
    "name": String,
    "email": String,
    "password": String
})
// Register a model
const LoginModel = mongoose.model("login", LoginSchema);
module.exports = {LoginModel}
