const express = require('express')
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')

app.use(cors())


mongoose.connect("mongodb+srv://pretva-clone:pretva@cluster0.oavgc.mongodb.net/pretvaDB>?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology: true

})
mongoose.connection.on('connected',()=>{
    console.log("conneted to mongoDB")
})
mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err)
})


require('./models/user')

app.use(express.json())
app.use(require('./routes/auth'))


if(process.env.NODE_ENV=="production"){
    app.use(express.static('client/build'))
    const path = require('path')
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

app.listen(process.env.PORT || 5000,()=>{
    console.log("server started at port 5000")
})