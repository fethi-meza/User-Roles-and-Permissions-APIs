const express = require('express')
const app = express()
require('dotenv').config();


const authRoute =require('./routes/authRoute')




const port = process.env.PortServer|| 3000



app.use(express.json())

app.use(express.static('public'))

app.use('api',authRoute)


app.listen(port , ()=>{console.log('you are cooncted this'+ port)})




