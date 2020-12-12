const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const requireLogin = require('../middleware/requireLogin')
const { json } = require('express')

router.post('/register',(req,res)=>{
    const {firstName,lastName,dealer,companyName,country,contactNumber,email,password} = req.body
    if(!firstName || !lastName || !dealer || !companyName || !country || !contactNumber || !email || !password){
        return res.status(422).json({error:"Please add all the fields"})
    }
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        return res.status(422).json({error:"Invalid Email"})
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"User already exists"})
        }
        User.findOne({contactNumber:contactNumber})
        .then((foundUser)=>{
            if(foundUser){
                return res.status(422).json({error:"User already exists"})
            }
            bcrypt.hash(password,12)
            .then(hashedPassword=>{
                const user = new User({
                    firstName,
                    lastName,
                    dealer,
                    companyName,
                    country,
                    contactNumber,
                    email,
                    password:hashedPassword
                })
                user.save()
                .then(user=>{
                    res.json({message:"Saved Successfully"})
                })
                .catch(err=>{
                    console.log(err)
                })
            })
        })
        .catch(err=>{
            console.log(err)
        })
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/login',(req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
        return res.status(422).json({error:"Please add email or password"})
    }
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        return res.status(422).json({error:"Invalid Email"})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
            return res.status(422).json({error:"Invalid email or password"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                const token = jwt.sign({_id:savedUser._id},"cbdcudbcydcvbdfjihd5948473r3gr37f")
                const {_id,firstName,lastName,email} = savedUser
                res.json({token,user:{_id,firstName,lastName,email}})
            }
            else{
                return res.status(422).json({error:"Invalid email or password"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports = router