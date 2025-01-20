const express = require('express');
const cors = require('cors')
 require('dotenv').config();
const app = express();
const bodyParser = require('body-parser')
const {router} = require('./routes/routes');
app.use('/uploads', express.static('uploads'))
// middleware 
app.use(cors()); 
// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.get('/', (req, res) => {
    res.send("Welcome User");
})


app.listen(4000, ()=>{
    console.log("Server is running on 4000 port");
})