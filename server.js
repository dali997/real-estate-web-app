const express =require("express");
const { path } = require('express/lib/application');
const connectDB = require('./config/connect_DB')
const path = require('path')
require('dotenv').config({path:"./config/.env"})

const authRouter = require('./Routes/Auth')

connectDB()
const app = express();

//middleware 
app.use(express.json())

//use routes
app.use('/api/auth',authRouter)
app.use('/api/product', require('./Routes/productRouter'))

// serve static assets if in production 
 if (process.env.NODE_ENV === 'production') {
     app.use(express.static('client/build'));
     app.get ('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client','build','index.html'))
     })
 }

const PORT = process.env.PORT;

app.listen(PORT, (err)=>{
    err? console.log(err)
    :console.log(`server is running in Port ${PORT}`)
})