import dotenv from "dotenv";
// require('dotenv').config({path:'./env'})
import mongoose from "mongoose";
import { DBNAME } from "./constants.js";
import express from "express";
import connectdb from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
    path:'./env'
})



connectdb()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("app is listening on port :",process.env.PORT);
    })
}).catch((err)=>{
    console.log("error occured in connecting db",err);
})




/*
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DBNAME}`);
        app.on("error",(error)=>{
            console.log("error : ",error);
        })
        app.listen(process.env.PORT,()=>{
            console.log("app is listening on port :",process.env.PORT);
        })

    } catch (error) {
        console.log("error : ",error);
    }
})()
*/