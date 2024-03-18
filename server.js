const express = require('express')
const app = express()
const AuthRoute = require('./routes/authRoute')

const adminRoutes = require('./routes/adminRout')
require('dotenv').config();

const connectDB = require('./DB/DBConnction')

connectDB()


const port = process.env.PortServer|| 3000



app.use(express.json())

app.use(express.static('public'))
//Auth
app.use('/api',AuthRoute) 


//AdminRoute
app.use('/api/admin',adminRoutes) 



app.listen(port , ()=>{console.log('you are cooncted this'+ port)})




