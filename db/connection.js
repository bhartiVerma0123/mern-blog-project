const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/Blog-project").then(()=>{
    console.log("Database Connection Successfully");
}).catch(()=>{
    console.log("Databse Error!");
});
module.exports = mongoose;