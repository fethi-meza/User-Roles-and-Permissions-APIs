const express = require('express')
const app = express()
const AuthRoute = require('./routes/authRoute')
require('dotenv').config();

const connectDB = require('./DB/DBConnction')

connectDB()


const port = process.env.PortServer|| 3000



app.use(express.json())

app.use(express.static('public'))
app.use('/api',AuthRoute) 



app.listen(port , ()=>{console.log('you are cooncted this'+ port)})




