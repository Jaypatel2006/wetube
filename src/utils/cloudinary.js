import {v2 as cloudinary} from "cloudinary";
import fs from "fs"


cloudinary.config({ 
    cloud_name: 'daolco0ze', 
    api_key: '923574576552995', 
    api_secret: process.env.api_secret
});

const uploncldn = async(filepath)=>{
    try {
        if(!filepath) return null;
        const response = await cloudinary.uploader.upload(filepath,{
            resource_type:"auto"
        })
        console.log("file upoloaded on cloudinary : ",response.url)
        return response
        
    } catch (error) {
        fs.unlinkSync(filepath);
    }
}