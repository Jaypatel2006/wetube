import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import {Video} from "./video.models.js"

const userschema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowecase:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowecase:true
    },
    fullname:{
        type:String,
        required:true
    },
    coverimage:{
        type:String
    },
    watchhistory:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:Video
        }
    ],
    password:{
        type:String,
        required:true
    },
    refreshtoken:{
        type:String
    }


},{timestamps:true})

userschema.pre("save",async function(){
    if(!this.isModified("password")) return;
    this.password = bcrypt.hash(this.password,10)
    return;
})

userschema.methods.ispasscorrect = async function(pass){
    await bcrypt.compare(pass,this.password);
}

userschema.methods.accesstokengenerate = function (){
    return jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username
        },
        process.env.access,
        {
            expiresIn:process.env.accessexp
        }
    )
}

userschema.methods.refreshtokengenerate = function(){
    return jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username
        },
        process.env.refresh,
        {
            expiresIn:process.env.refreshexp
        }
    )
}

export const User = mongoose.model("User",userschema);