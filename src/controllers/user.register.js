import {asynchandler} from "../utils/asynchandler.js"
import {apierror} from "../utils/apierror.js"
import {User} from "../models/user.models.js"
import { uploncldn } from "../utils/cloudinary.js"
import { apiresponse } from "../utils/apiresponse.js"

const registeruser = asynchandler(async (req,res)=>{
    const {username,email,password,fullname} = req.body;
    if(username=="" || email=="" || password=="" || fullname==""){
        throw new apierror(400,"field is empty")
    }
    console.log(email);
    const isregistered = await User.findOne({
        $or:[{username},{email}]
    })
    if(isregistered){
        throw new apierror(409,"user already exist")
    }
    const avataru = await uploncldn(req.files.avatar[0].path)
    const coverimageu = await uploncldn(req.files.coverimage[0].path);
    
    const createduser = await User.create({
        username,
        fullname,
        email,
        password,
        avatar:avataru.url,
        coverimage:coverimageu.url

    })
    res.status(201).json(
        new apiresponse(200,createduser,"user created successfully")
    )
})

export {registeruser}