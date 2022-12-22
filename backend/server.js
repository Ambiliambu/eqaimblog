const express=require('express')
const dotenv=require('dotenv').config()
const port=process.env.PORT || 5000;
const connectDB=require('./config/db')
const app=express()

const blogRouteres=require('./routes/bogRoute')
connectDB()
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.send("Api Running")
})

app.use('/',blogRouteres)

app.listen(port,()=>console.log(`Server started on port ${port}`))