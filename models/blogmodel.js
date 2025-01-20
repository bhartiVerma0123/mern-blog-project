const mongoose = require('../db/connection');
const BlogSchema = mongoose.Schema({
    "photo":String,
    "blog_title": String,
    "blog_name":String,
    "description": String,
})
// Register a model
const BlogModel = mongoose.model("blog", BlogSchema);
module.exports = {BlogModel}
