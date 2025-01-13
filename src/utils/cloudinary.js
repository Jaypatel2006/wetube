import {v2 as cloudinary} from "cloudinary";
import fs from "fs"


cloudinary.config({ 
    cloud_name: 'daolco0ze', 
    api_key: '923574576552995', 
    api_secret: process.env.apisecret
});

const uploncldn = async(filepath)=>{
    try {
        if(!filepath) return null;
        const response = await cloudinary.uploader.upload(filepath,{
            resource_type:"auto"
        })
        
        return response;
        
    } catch (error) {
        console.log(error);
        fs.unlinkSync(filepath);
    }
}
export {uploncldn}