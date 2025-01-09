import mongoose from "mongoose";
import { DBNAME } from "../constants.js";

const connectdb = async ()=>{
    try {
        const dbobj = await mongoose.connect(`${process.env.MONGODB_URI}/${DBNAME}`)
        console.log(`database connected with mongo db at ${dbobj.connection.host}`)
        
    } catch (error) {
        console.log("error ",error);
    }
}

export default connectdb;