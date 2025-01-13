import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import {User} from "./user.models.js"

const videoschema = new mongoose.Schema({
    videofile:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    duration:{
        type:Number
    },
    views:{
        type:Number,
        default:0
    },
    ispublished:{
        type:Boolean,
        default:true
    },
    creator:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

},{timestamps:true})

videoschema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video",videoschema)