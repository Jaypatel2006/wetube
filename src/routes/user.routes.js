import { Router } from "express";
import { registeruser } from "../controllers/user.register.js";
import {upload} from "../middleware/multer.js"

const router = Router();
router.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount:1
        },{
            name:"coverimage",
            maxCount:1
        }
    ]),
    registeruser)
export default router