const express = require('express');
const cors= require('cors')
const morgan = require('morgan')
const dotenv=require('dotenv')
const colors= require('colors')
const connectDb=require('./config/connectDB')
//config .env file
dotenv.config();

//rest object
const app =express()
//middle wares
app.use(cors());
app.use(morgan('dev'))
app.use(express.json())
connectDb()
//routes
app.use('/api/v1/users', require('./routes/routes'))
//transection Routes
app.use('/api/v1/transections', require('./routes/transectionRoute'))
const PORT = 8080 || process.env.PORT
app.listen(PORT, ()=>{
    console.log(`Server Runining on Port ${PORT}`)
})