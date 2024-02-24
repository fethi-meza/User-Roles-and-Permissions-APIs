const express = require('express')
const app = express()
require('dotenv').config();

app.use(express.static('public'));

const port = process.env.PortServer|| 3000




app.listen(port , ()=>{console.log('you are cooncted this'+ port)})




